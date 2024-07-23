import { Buttom } from "./Components/Buttom";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { useData } from "./Hook/useData";
import { useImage } from "./Hook/useImage";

function App() {
  
  const { fact, textCat } = useData()
  const { catImage } = useImage({ fact })

  return (
    <>
      <Header />
      <Main catImage={catImage} fact={fact} textCat={textCat}/>
      <Buttom textCat={textCat}/>
    </>
  );
} 

export default App;
