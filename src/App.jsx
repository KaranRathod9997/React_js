
import './App.css'
import Counter from './Counter';
import Props from './Props';
import Spreading from './Spreading';


function App() {
  
   const Student = {
    name:"karan",
    age:20,
    city:"ahmedabad",
  }

  const arr = [1,"karan",2,"laxman"]

  return (
    <>
    {/* <Spreading/> */}
    <Props arrray={arr} studentdata={Student} />
    {/* <Counter /> */}
    </>
  )
}

export default App;