import { useState, useEffect } from "react"
const CAT_RANDOM_IMAGE_ENDPOINT = `https://api.thecatapi.com/v1/images/search?api_key=live_iQ6gwaeNezmTLigcPX4aXpmkOqXLWqPA1Bfvt3grnKxXBSymMFma8jg9gQ7elr4x`

export const useCatImage = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        fetch(CAT_RANDOM_IMAGE_ENDPOINT)
            .then(res => res.json())
            .then(data => {
                const { url } = data[0]
                setImageUrl(url)
            })
    }, [fact]);

    return { imageUrl };
};