import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export const useCatFact = () => {

    const [fact, setFact] = useState();

    const refreshFact = () => {
        getRandomFact().then(firstFact => setFact(firstFact))
    };

    useEffect(refreshFact, []);

    return { fact, refreshFact };
};