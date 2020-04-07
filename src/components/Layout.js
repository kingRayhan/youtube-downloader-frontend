import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="content-area">
				<div className="row">
					<div className="card">{children}</div>
				</div>
			</main>
		</>
	)
}

export default Layout
