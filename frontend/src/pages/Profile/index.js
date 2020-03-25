import React from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import LinkWrapper from '../../wrappers/LinkWrapper';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
	return (
		<div className='profile-container'>
			<header>
				<img src={logoImg} alt='Be The Hero' />
				<span>Bem vinda, APAD</span>

				<LinkWrapper className='button' to='/incidents/new'>
					Cadastrar novo caso
				</LinkWrapper>

				<button>
					<FiPower size={18} color='#e02041' />
				</button>
			</header>

			<h1>Casos cadastrados</h1>

			<ul>
				<li>
					<strong>CASO:</strong>
					<p>Caso teste</p>

					<strong>DESCRIÇÃO:</strong>
					<p>Descrição teste</p>

					<strong>VALOR:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p>Caso teste</p>

					<strong>DESCRIÇÃO:</strong>
					<p>Descrição teste</p>

					<strong>VALOR:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p>Caso teste</p>

					<strong>DESCRIÇÃO:</strong>
					<p>Descrição teste</p>

					<strong>VALOR:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p>Caso teste</p>

					<strong>DESCRIÇÃO:</strong>
					<p>Descrição teste</p>

					<strong>VALOR:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p>Caso teste</p>

					<strong>DESCRIÇÃO:</strong>
					<p>Descrição teste</p>

					<strong>VALOR:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>
			</ul>
		</div>
	);
}
