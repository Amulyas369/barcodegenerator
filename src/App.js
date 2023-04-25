
import './App.css';
import Barcodegen from './component/Barcodegen';

function App() {
  return (
    <div className="App">
      <div className='blur first'></div>
      <div className='blur second'></div>
      <div className='nav'>
      <div className='header'>Barcode Generater</div>
      </div>
      <Barcodegen/>
      
    </div>
  );
}

export default App;
