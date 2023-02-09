import { useEffect, useState } from "react"
import "./App.css"

const CAT_RANDOM_IMAGE_ENDPOINT = `https://api.thecatapi.com/v1/images/search?api_key=live_iQ6gwaeNezmTLigcPX4aXpmkOqXLWqPA1Bfvt3grnKxXBSymMFma8jg9gQ7elr4x`

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"

export function App() {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_FACT_ENDPOINT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    useEffect(() => {
        if (!fact) return
        fetch(CAT_RANDOM_IMAGE_ENDPOINT)
            .then(res => res.json())
            .then(data => {
                const { url } = data[0]
                setImageUrl(url)
            })
    }, [fact])

    return (
        <main>
            <h1>Aplicación de Gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen extraida aleatoriamente de la API de "thecatapi.com`} />}
        </main>


    )
}