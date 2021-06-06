import './App.css';
import FormUserInput from './components/form/form';
import todxs from './img/todxs.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={todxs} alt="todxs" id="todxs-img" />
        <h1 class="text-light">Credito Para Todxs!</h1>
      </header>
      <main>
        <FormUserInput />
      </main>
    </div>
  );
}

export default App;
