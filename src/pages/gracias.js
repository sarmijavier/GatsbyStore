import { Link } from 'gatsby'
import React from 'react'
import { SEO }from "../components"
import { Button, Purchase } from '../styles/components'

function gracias(){
	return (
		<div>
			<SEO title="Compra Exitosa" />
			<Purchase>
				<h2>Compra Exitosa</h2>
				<p>Espero que disfrutes tu swag, lucelo con orgullo</p>
				<p>Te esperamos de vuelta, Nunca Pares de Aprender</p>
				<span role='img' aria-label='emoji' >❤️</span>
				<Link to='/' >
					<Button>
						Volver al Cátalogo
					</Button>
				</Link>
			</Purchase>
		</div>

	)
}

export default gracias
