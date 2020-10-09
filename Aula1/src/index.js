import React from 'react';
import { render } from 'react-dom';
import Button from './componets/Button/index';

class App extends React.Component {
  state = {
    contador: 0,
    name: ''
  }

  adicionar = () => {
    this.setState({
      contador: this.state.contador+1,
    });
  }

  changeText = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  componentWillMount() {
    console.log('Will');
  }

  componentDidMount() {
    console.log('Did');
  }

  render() {
    console.log('Render');
    return (      
      <div>
        <h1>
          Hello React!!
        </h1>
        <hr />
        <Button title="Button1">
          Button1
        </Button>
        <hr />
        <Button title="Button2">
          Button2
        </Button>
        <hr />
        <Button title="Button3">
          Button3
        </Button>
        <hr />
        Contador: {this.state.contador}
        <Button press={this.adicionar}>
          Button4
        </Button>
        <hr />
        Nome: {this.state.name}
        <br />
        <input onChange={this.changeText} maxLength="10" />
        <hr />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));