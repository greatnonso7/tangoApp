import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    axios.get('https://anapioficeandfire.com/api/houses').then((res) => {
      this.setState({ houses: res.data });
    });
  }

  render() {
    const { houses } = this.state;
    console.log(houses);
    return (
      <div className="App">
        <h1>Hello world!</h1>
        {houses.map((house) => (
          <h3 key={house.name}>{house.name}</h3>
        ))}
      </div>
    );
  }
}

export default App;
