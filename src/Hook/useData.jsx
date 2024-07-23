import { useEffect, useState } from "react";


export const useData = () => {

    const [fact, setFact] = useState();
    const [catImage, setCatImage] = useState();
    
    async function textCat() {
      const rs = await fetch("https://catfact.ninja/fact");
      const rsJson = await rs.json();
  
      // const {fact } = rsJson
      // const threeWord = fact.split(" ").slice(0, 3).join(" "); // otra opcion es .split(' ', 3)
      // console.log(threeWord)
  
      setFact(rsJson.fact);
      console.log(rsJson.fact)
      
    }
    
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
      textCat();
    }, []);
  
    useEffect(() => {
      imgCat();
    }, [fact]);
  


  return { catImage, fact, textCat }
}


