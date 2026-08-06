import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { count, buttonName, onClick } = this.props;
    return (
      <button type="button" className="counter" onClick={onClick}>
        Count is {count} {buttonName}
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
      name: "Viktor",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <section id="center">
          <div className="hero">
            <img
              src={heroImg}
              className="base"
              width="170"
              height="179"
              alt=""
            />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <CounterButton
            count={this.state.count}
            buttonName={this.state.name}
            onClick={this.handleClick}
            // buttonName
          />
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </>
    );
  }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (

//   )
// }

export default App;
