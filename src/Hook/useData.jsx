import { useEffect, useState } from "react";


export const useData = () => {
    const [fact, setFact] = useState();
   
    async function textCat() {
      const rs = await fetch("https://catfact.ninja/fact");
      const rsJson = await rs.json();
  
      // const {fact } = rsJson
      // const threeWord = fact.split(" ").slice(0, 3).join(" "); // otra opcion es .split(' ', 3)
      // console.log(threeWord)
  
      setFact(rsJson.fact);
      console.log(rsJson.fact)
      
    }
    
    useEffect(() => {
      textCat();
    }, []);
  
  return { fact, textCat }
}


