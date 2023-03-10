import './App.css';
import IdentificationC from './components/exemplo001/identificationClass';
import IdentificationF from './components/exemplo001/identificationFunction';
import Relogio from './components/exemplo002/relogio';
import LoginControl from './components/exemplo003/loginControl';
import MapNumbersList from './components/exemplo004/mapNumbersList';
import NumbersList from './components/exemplo004/numbersList';

function App() {
  const telefones = ['931-0090', '232-2469', '666-7071', '111-2019'];
  return (
    <div className="App">
      <IdentificationC />
      <IdentificationF />
      <hr />
      <Relogio />
      <hr />
      <LoginControl logado={true} />
      <hr />
      <NumbersList lista={telefones} />
      <MapNumbersList lista={telefones} />
    </div>
  );
}

export default App;

// se a propriedade "logado" for declarado como false, a mensagem será diferente.
