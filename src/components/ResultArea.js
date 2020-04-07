import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import Result from './Result'

function parseTime(seconds) {
	let min = parseInt(seconds / 60)
		.toString()
		.padStart(2, '0')
	let sec = (seconds % 60).toString().padStart(2, '0')

	return `${min}:${sec}`
}

const ResultArea = ({ loading, result }) => {
	return (
		<div className="download-result">
			{loading === true && (
				<div className="text-center loader">
					<SyncLoader color="#c00" />
				</div>
			)}

			{loading === false && (
				<>
					<h3 className="download-result__track-name">{result.info?.title}</h3>
					<p className="download-result__duration">
						Duration: {parseTime(result.info?.lengthSeconds)}
					</p>
					<p className="download-result__duration">
						Views: {result.info?.viewCount}
					</p>
					<p className="download-result__duration">
						Creator:{' '}
						<a
							href={`https://www.youtube.com/channel/${result.info?.channelId}`}
							target="_blank"
						>
							{result.info?.author}
						</a>
					</p>
					<div className="download-buttons">
						<div className="download-button">
							{result.audios &&
								result.audios.map((audio, key) => (
									<Result {...audio} key={key} />
								))}
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ResultArea
