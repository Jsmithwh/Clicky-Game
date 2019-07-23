import React from 'react';
import logo from './logo.svg';
import './App.css';
import images from './images.json';
import Card from './components/Card/Card';


class App extends React.Component {

  state = {
    appName : "Jordan's App",
    imgArr : images
  }

  handleClick(event){
    console.log("Hello");
    console.log(this.state.imgArr);
  }

  cardClick(id){
    var newArr = this.state.imgArr;
    // Code to shuffle cards

    this.setState({imgArr:newArr});

  }

  render(){
    return (
      <div className="App">
        <ul>

          {this.state.imgArr.map((element) => (
              <Card
                key={element.id}
                id={element.id}
                src={element.image}
                cardClick={this.cardClick.bind(this)}
              />
          ))}

        </ul>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={(e) => this.handleClick(e)}>
            Edit <code>{this.state.appName}</code> and save to reload.
          </p>

          <button className="clicker" onClick={(e) => this.handleClick(e)}>Click Me!</button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
