
import React from 'react';

function Resultados({ imc, imcCategory }) {
  const categories = [
    { range: 'Abaixo de 18,49', label: 'Abaixo do Normal', category: 'abaixo do normal' },
    { range: 'Entre 18,5 e 24,99', label: 'Faixa saudável', category: 'faixa saudavel' },
    { range: 'Entre 25 e 29,99', label: 'Acima do Peso', category: 'acima do peso' },
    { range: 'Entre 30 e 34,99', label: 'Faixa de obesidade grau I', category: 'obesidade grau I' },
    { range: 'Entre 35 e 39,99', label: 'Faixa de obesidade grau II', category: 'obesidade grau II' },
    { range: 'Acima de 40', label: 'Faixa de obesidade grau III', category: 'obesidade grau III' },
  ];

  return (
    <div className="resultados">
      <h2>Resultado do IMC</h2>
      <div className="container2">
        <div>
          <span>IMC</span>
          {categories.map((item, index) => (
            <p key={index} style={{ backgroundColor: imcCategory === item.category ? 'lightblue' : 'transparent' }}>
              {item.range}
            </p>
          ))}
        </div>
        <div>
          <span>Classificação</span>
          {categories.map((item, index) => (
            <p key={index} style={{ backgroundColor: imcCategory === item.category ? 'lightblue' : 'transparent' }}>
              {item.label}
            </p>
          ))}
        </div>
      </div>
      {imc && <span className="imc">Seu IMC: {imc}</span>}
    </div>
  );
}

export default Resultados;
