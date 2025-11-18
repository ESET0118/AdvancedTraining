import './App.css';

function App() {

  const [count,setCount] = useState(0);
  function increment(){
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }

  return (
    <div>
      <p data-testId='count'>{count}</p>
      <button data-testId='increment' onClick={increment}>Increment</button>
      <button data-testId='decrement' onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
