import React from "react";
import { useNavigation } from "@react-navigation/native";
import { composeAsync as composeMailAsync } from "expo-mail-composer";

import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const message = `Olá APAD, estou entrando em contato, pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00`;

  const navigateBack = () => navigation.goBack();

  const sendEmail = () => {
    composeMailAsync({
      subject: "Herói do caso: Cadelinha atropelada",
      recipients: ["vinilucasreis1999@yahoo.com.br"],
      body: message
    });
  };

  const sendWhatsapp = () => {
    //usando deep-linking do whatsapp
    Linking.openURL(`whatsapp://send?phone=5527998132261&text=${message}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>Cadelinha encontrada</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={[styles.incidentValue, { marginBottom: 0 }]}>
          R$ 120,00
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
