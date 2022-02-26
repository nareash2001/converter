
import './App.css';

function App() {
  function cm()
  {
 var feat=document.getElementById('feet').value;
 var centi=feat*30.48
 console.log(centi);
 document.getElementById('output').value=centi;
  }
  function m()
  {
 var feat=document.getElementById('feet').value;
 var centi=feat*0.3048
 console.log(centi);
 document.getElementById('output').value=centi;

  }
  function km()
  {
 var feat=document.getElementById('feet').value;
 var centi=feat*0.0003048
 console.log(centi);
 document.getElementById('output').value=centi;

  }
  return (
    <div className="App">
      <center>
    <h1 className='header'>Feet Conversion</h1>
    <input type="number" placeholder='Enter value' id='feet'/>
    <button className='Centimeter' >Foot</button><br/>
    <button onClick={cm}> Centimeter </button>
    <button onClick={m}>Meter</button>
    <button onClick={km}>Kilometer</button>
    <br/>
    <input id='output'/>
    </center>
    </div>

  );
}

export default App;
