import logo from './logo.svg';
import './App.css';
//import Assign from './Assign';
/*
let a=parseInt(prompt("Enter a:"))
let b=parseInt(prompt("Enter b:"))
function Add(){
  return a+b
}
*/

function App() {
  /*using const
  const name={
    fname:"Nehal",
    age:"13"
  }*/
  return (
    /*
      <h1>{Add()}</h1> //use internal js file
      {Assign(a,b)} //with parameters and conditional use ext js file
    */

    //image in jsx:image in public folder
    //<img src="sea_view.jpg"></img>

    /*//using const
    <div>
    <h1>{name.fname}</h1>
    <h1>{name.age}</h1>
    </div>
    */
    /*//styling
    <div style={{border:'10px solid black'}}>hi</div>
    */
    
   <Nested/>
  );
  /*A component that is created and render inside another component is called as nested component.

  function Nested(){
    return(
      <h1>hello</h1>
    );
  }
  */
}

export default App;
