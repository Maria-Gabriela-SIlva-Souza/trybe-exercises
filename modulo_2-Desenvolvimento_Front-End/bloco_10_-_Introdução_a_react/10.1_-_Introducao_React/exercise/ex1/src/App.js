import './App.css';

// insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// agora, chame a função dentro do seu componente App

// crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App 

function App() {
  const feira = ['Banana', 'Maça', 'Uva', 'Abacate']
  return (
    <div className="App">
      {feira.map((feira)=>(Task(feira)))}
    </div>
  );
}

export default App;
