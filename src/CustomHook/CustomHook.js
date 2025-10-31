import axios from "axios"
import { useEffect, useState } from "react"

const AllApps = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        axios('../AppsData.json')
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])
    return { products, loading, error }
}
export default AllApps