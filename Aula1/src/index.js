import React from 'react';
import { render } from 'react-dom';
import Button from './componets/Button/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello React!!
        </h1>
        <Button title="Button1">
          Button1
        </Button>
        <Button title="Button2">
          Button2
        </Button>
        <Button title={1}>
          Button3
        </Button>
        <Button>
          Button4
        </Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));