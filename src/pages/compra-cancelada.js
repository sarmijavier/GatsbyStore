import { Link } from 'gatsby'
import React from 'react'
import { SEO }from "../components"
import { Button, Purchase } from '../styles/components'


const CanceledPurchase = () => {
	return (
		<div>
			<SEO title="Compra Exitosa" />
			<Purchase>
				<h2>Compra Cancelada :(</h2>
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

export default CanceledPurchase
