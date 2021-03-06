import React from 'react'
import Downloader from 'js-file-downloader'

const Result = ({ format, bitrate, url }) => {
	return (
		<div className="red-box">
			<div className="red-box__text">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height={24}
					viewBox="0 0 24 24"
					width={24}
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
				</svg>
				{bitrate} kbps
			</div>
			<button className="button" onClick={(e) => (window.location.href = url)}>
				<svg
					className="button__icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="black"
					width="18px"
					height="18px"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
				</svg>
				<span className="button__text">{format}</span>
			</button>
		</div>
	)
}

export default Result
