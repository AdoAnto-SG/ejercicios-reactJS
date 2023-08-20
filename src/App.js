import logo from './logo.svg';
import './App.css';
import ContadorSimple from './Componentes/Ejercicio1/contador';
import TaskList from './Componentes/Ejercicio2/ListaDeTareas';
import FormularioDeRegistro from './Componentes/Ejercicio3/Formulario';

function App() {
  return (
    <div className="App">
      {/* Ejercicio 1 */}
      <ContadorSimple/>
      <br/>
      <hr/>
      <br/>
      {/* Ejercicio 2 */}
      <TaskList/>
      <br/>
      <hr/>
      <br/>
      {/* Ejercicio 3 */}
      <FormularioDeRegistro/>
      <br/>
    </div>
  );
}

export default App;
