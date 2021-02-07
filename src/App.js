import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="container">
      <div className="col-auto">
        <h1>Todos</h1>
      </div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
