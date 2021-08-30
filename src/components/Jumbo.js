import { StyledJumbo } from '../styles/components' //estilos
import React from 'react'
import Image from './image'


export default function Jumbo({ description }) {
	return (
		<div>
			<StyledJumbo>
				<div>
					<h2>Consigue el mejor swag exclusivo y especial de platzi</h2>
					<small>{ description }</small>
					<Image name='icon' />
				</div>
			</StyledJumbo>
		</div>
	)
}
