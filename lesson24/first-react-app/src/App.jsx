import Form from "./Form";
import "./App.css";

function App() {
  const index = 3;

  return (
    <div class="container">
      <h1>TODO</h1>

      <Form />

      <h2>TODOS</h2>

      <hr />

      <div className="todo-item">
        <label>
          <input type="checkbox" checked />
          Привіт
        </label>

        <button type="button">Видалити</button>
      </div>
    </div>
  );
}

export default App;
