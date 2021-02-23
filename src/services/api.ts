import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    baseURL: 'https://the-one-api.dev/v2/',
    withCredentials: false,
    headers: {
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
    },
    transformResponse: (data) => {
        let parsedData

        try {
            parsedData = JSON.parse(data)
        } catch {
            if (data && data.includes('Maximum request body size')) {
                throw new Error('IMAGE_TOO_LARGE')
            }
            return data
        }

        if (!parsedData || (!parsedData.data && !parsedData.code)) {
            return parsedData
        }
        if (parsedData.code !== 200) {
            if (parsedData.code === 401) {
            }

            throw parsedData.errors
        }

        return parsedData.data
    },
    paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'brackets' }),
})

export default instance
