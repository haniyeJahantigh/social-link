import './App.css';
import Header from "../src/component/Header/Index"
import Main from "../src/component/Main/Index"

function App() {
  return (
    <div className="App">
      <div className='header'>
         <Header/>
      </div>
      <div className='main-body'>
        <Main/>
      </div>
      
    </div>
  );
}

export default App;
