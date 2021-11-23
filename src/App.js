import './App.css';
import { Component } from 'react';
import Toc from './components/Toc.js';
import Subject from './components/Subject';
import Content from './components/Content.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      subject: { title: 'WEB', sub: 'world wide web' },
      welcome: { title: 'welcome', desc: 'hello react' },
      content: [
        { id: 1, title: 'HTML', desc: 'HTML is 1' },
        { id: 2, title: 'Css', desc: 'Css is 2' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is 3' },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject state={this.state} />
        <Toc data={this.state.content} />
        <Content></Content>
      </div>
    )
  }
}

export default App;
