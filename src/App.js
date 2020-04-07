import React, { useState } from 'react'
import Layout from './components/Layout'
import './sass/style.scss'
import FetchArea from './components/FetchArea'
import ResultArea from './components/ResultArea'
import Axios from 'axios'
import swal from 'sweetalert'

const App = () => {
	let [loading, setLoading] = useState(null)
	let [result, setResult] = useState({})

	const fetchVideo = async (urlOrId) => {
		setLoading(true)
		try {
			let { data } = await Axios.get(
				'https://youtube-to-mp3-downloader.herokuapp.com//?video=' + urlOrId
			)

			if (data !== null) {
				setLoading(false)
				setResult(data)
			}
		} catch (error) {
			swal('Hold on!', error.response.data.message, 'error')
			setLoading(null)
		}
	}

	return (
		<Layout>
			<FetchArea fetchVideo={fetchVideo} />
			<ResultArea result={result} loading={loading} />
		</Layout>
	)
}

export default App
