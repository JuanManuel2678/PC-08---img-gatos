import { useEffect, useState } from "react";


export const useImage = ({ fact }) => {
    const [catImage, setCatImage] = useState();

    async function imgCat() {
        if (!fact) return
    
        const threeWord = fact.split(" ").slice(0, 3).join(" "); // otra opcion es .split(' ', 3)
        // fact.split(' ', 3).join(' ')
        const rs = await fetch(`https://cataas.com/cat/says/${threeWord}?size=70&color=white`);
        const rsJson = rs
    
        setCatImage(rsJson.url)
        console.log(rsJson.url)
      }

      useEffect(() => {
        imgCat();
      }, [fact]);
    
  return { catImage }
}


