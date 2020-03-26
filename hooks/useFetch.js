import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError('')
            try {
                const r = await fetch(url)
                const data = await r.json()

                if (data.error)
                    setError(data.error.message)
                else
                    setData(data)
            } catch (error) {
                setError('Bad request')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])
    
    return [
        data,
        loading,
        error
    ]
}

export default useFetch