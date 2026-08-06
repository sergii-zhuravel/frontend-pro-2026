import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const newTodo = {
      id: 4,
      name: event.target.name.value,
      done: false,
    };

    this.setState({
      todos: this.state.todos.concat(newTodo),
    });
  }
  render() {
    return (
      <div className="container">
        <h1>TODO</h1>

        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter new todo..." name="name" />
          <button type="submit">Add</button>
        </form>

        <h2>TODOS</h2>

        <div className="todo-list">
          {this.state.todos.map((todo) => {
            return <TodoItem key={todo.id} done={todo.done} name={todo.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
