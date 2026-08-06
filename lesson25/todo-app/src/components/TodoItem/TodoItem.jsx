import { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { done, name } = this.props;
    return (
      <div className="todo-item">
        <label className="todo-content">
          <input type="checkbox" checked={done} />
          <span>{name}</span>
        </label>

        <button className="delete-btn">Delete</button>
      </div>
    );
  }
}

export default TodoItem;
