import { Buttom } from "./Components/Buttom";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { useData } from "./Hook/useData";

function App() {
 
  const {catImage, fact, textCat } = useData()

  return (
    <>
      <Header />
      <Main catImage={catImage} fact={fact} textCat={textCat}/>
      <Buttom textCat={textCat}/>
    </>
  );
} 

export default App;
