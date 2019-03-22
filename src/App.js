import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/first/'>First</Link>
              </li>
              <li>
                <Link to='/second/'>Second</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path='/first' render={()=>(<h1>First</h1>)} />
            <Route path='/second' render={()=>(<h1>Second</h1>)} />
            <Route path='/' render={()=>(<h1>Home</h1>)} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
