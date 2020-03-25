import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import LinkWrapper from '../../wrappers/LinkWrapper';

export default function Logon() {
	return (
		<div className='logon-container'>
			<section className='form'>
				<img src={logoImg} alt='Be The Hero' />

				<form>
					<h1>Faça seu logon</h1>

					<input placeholder='Sua ID' />
					<button type='submit' className='button'>
						Entrar
					</button>

					<LinkWrapper className='text-link' to='/register'>
						<FiLogIn size={16} color='#E02041' />
						Não tenho cadastro
					</LinkWrapper>
				</form>
			</section>

			<img src={heroesImg} alt='Heroes' />
		</div>
	);
}
