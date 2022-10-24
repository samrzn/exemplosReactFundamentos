import './App.css';
import IdentificationC from './components/exemplo001/identificationClass';
import IdentificationF from './components/exemplo001/identificationFunction';
import Relogio from './components/exemplo002/relogio';
import LoginControl from './components/exemplo003/loginControl';

function App() {
  return (
    <div className="App">
      <IdentificationC />
      <IdentificationF />
      <hr />
      <Relogio />
      <hr />
      <LoginControl logado={true} />
    </div>
  );
}

export default App;

// se a propriedade "logado" for declarado como false, a mensagem será diferente.