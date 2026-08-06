Topic: Class components, States, Props та Component Life Cicle

1.  Class Components — Introduction (20 min)

- What are class components? — Syntax vs functional components
- Why they still matter (legacy codebases, some libraries, deeper
  understanding of React internals)
- Creating a class component:
  - Extending React.Component
  - The required render() method
  - The constructor() and calling super(props)
- Live coding: Convert <Form /> from functional to class  
   component

         ```jsx

  function Form {
  return <form>...</form>;
  }

````

      ```jsx

  class Form extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
  return <form>...</form>;
  }
  }

````

─────────────────────────────────────────────────────────────────

2.  State (30 min)

- What is state? — Mutable data that belongs to the component,
  triggers re-render on change
- this.state — initial state in constructor
- this.setState() — how to update state (merge behaviour, async
  nature)
- ⚠️ Never mutate this.state directly!
- Arrow functions vs .bind(this) for event handlers in class
  components
- Live coding: Add state to the TODO app:
  - Move todos list into this.state.todos = []
  - Store new input value in this.state.newTodo = ''
  - Handle form submit → add todo via setState
  - Handle checkbox change → toggle completed

─────────────────────────────────────────────────────────────────

3.  Props (20 min)

- What are props? — READ-ONLY data passed from parent to child
- Passing props: <TodoItem item={todo} onDelete={...} />
- Receiving props in class components via this.props
- Prop validation with static propTypes (brief mention, modern
  alternative is TypeScript)
- Difference between state (owned by component) and props (passed
  from parent)
- Live coding: Extract a <TodoItem /> class component that
  receives todo data + callbacks as props

─────────────────────────────────────────────────────────────────

4.  Component Lifecycle (25 min)

- Lifecycle diagram — Mount → Update → Unmount
- Mounting: constructor() → render() → `componentDidMount

```

Update : componentDidUpdate() -> render()
Unmout: componentWillUnmount()
```
