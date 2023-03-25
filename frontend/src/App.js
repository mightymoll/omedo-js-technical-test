import logo from './assets/logo-omedo-white.png'
import Rechercher from './components/Rechercher';
import ResultsList from './components/ResultsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-content">
        <Rechercher />
        <ResultsList />
      </section>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
