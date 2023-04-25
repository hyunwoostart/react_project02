import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-wrap'>
      <header className="App-header">리액트를 사용한 TO-DO APP</header>
      <TodoList />
    </div>
  );
}

export default App;
