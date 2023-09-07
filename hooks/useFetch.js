import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = ({ endpoint, query }) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key':
				'5e80187871mshb41f35edcbea206p11b926jsn0c12269968e6',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	}

	const fetchData = async () => {
		setIsLoading(true)
		try {
			const response = await axios.request(options)
			setData(response.data.data)
		} catch (e) {
			setError(error)
			console.log({ e })
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData
	}

	return { data, isLoading, error, refetch }
}

export default useFetch
