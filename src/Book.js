import { useParams } from "react-router-dom"
import axios from 'axios';

export function Book() {
    const { id } = useParams()


    const apiCall = async () => {
        const brands = await axios.get('http://localhost:8082/brands', {})
    }

    return (
        <h1></h1>
    )
}