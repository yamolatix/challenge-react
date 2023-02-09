import { useEffect, useState } from "react"
import "./App.css"
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"

export function App() {

    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })

    useEffect(() => {
        getRandomFact().then(firstFact => setFact(firstFact))
    }, [])

    const handleNewFact = async () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    return (
        <main>
            <h1>Aplicación de Gatitos</h1>
            <button onClick={handleNewFact}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen extraida aleatoriamente de la API de "thecatapi.com`} />}
        </main>
    )
}