import React from 'react';
import "./App.css"
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from "./hooks/useCatImage"

export function App() {

    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    const handleNewFact = async () => {
        refreshFact()
    };

    return (
        <main>
            <h1>Aplicación de Gatitos</h1>
            <button onClick={handleNewFact}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen extraida aleatoriamente de la API de "thecatapi.com`} />}
        </main>
    );
};