import logo from './logo.svg';
import './App.css';
import Resultados from './components/Resultados';
import React, {useState} from 'react'
import Sobre from './components/Sobre'
import Lista from './components/Lista'

function App() {
  //imc = peso / (altura * altura)
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [imcCategory, setImcCategory] = useState('')

  function calcImc(){

  const pesoNum = parseFloat(peso.replace(',', '.'));
  const alturaNum = parseFloat(altura.replace(',', '.'));


 

    const imcValue = pesoNum / (alturaNum * alturaNum)
if(imcValue < 18.49){
  setImcCategory("abaixo do normal")
} else if(imcValue > 19 && imcValue < 25){
  setImcCategory("faixa saudavel")
} else if(imcValue > 25 && imcValue < 30){
  setImcCategory("acima do peso")
} else if (imcValue >= 30 && imcValue < 35) {
  setImcCategory('obesidade grau I');
} else if (imcValue >= 35 && imcValue < 40) {
  setImcCategory('obesidade grau II');
} else {
  setImcCategory('obesidade grau III');
}
    setImc(imcValue.toFixed(2))
  }


  return (
  
    <div className="App">
     <h1>Indice de Massa Corporal</h1>
     <div className="container">
      <label>Altura</label>
      <input type="text" placeholder="ex:.1.70" value={altura} onChange={(e) => setAltura(e.target.value)}/>
      <label>Peso</label>
      <input type="text" placeholder="ex:.69,2" value={peso} onChange={(e) => setPeso(e.target.value)}/>
      <button onClick={calcImc}>CALCULAR IMC</button>

 
 </div>
 <Resultados imc={imc} imcCategory={imcCategory} />
 <Sobre />
 <Lista />
 </div>
 );
}

export default App;
