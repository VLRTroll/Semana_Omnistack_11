import React from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import LinkWrapper from '../../wrappers/LinkWrapper';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewInicident() {
	return (
		<div className='new-incident-container'>
			<div className='content'>
				<section>
					<img src={logoImg} alt='Be The Hero' />

					<h1>Cadastro novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um herói para resolver
						isso.
					</p>

					<LinkWrapper className='text-link' to='/profile'>
						<FiArrowLeft size={16} color='#E02041' />
						Voltar para home
					</LinkWrapper>
				</section>

				<form>
					<input placeholder='Título do Caso' />
					<textarea placeholder='Descrição' />
					<input placeholder='Valor em Reais' />

					<button type='submit' className='button'>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
