import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button } from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header mb-4">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>New York Times Article Scrubber</h2>
          <h5>Search for and annotate articles of interest</h5>
        </div>
        <div className="container">
          <div className="card mb-4">
            <div className="card-header">Search</div>
            <form>
              <label for="Topic">Topic</label>
              <Input id="Topic" name="Topic" />

              <label for="StartYear">Start Year</label>
              <Input id="StartYear" name="StartYear" />

              <label for="EndYear">End Year</label>
              <Input id="EndYear" name="EndYear" />
              
              <Button>Search</Button>
            </form>
          </div>

          <div className="card mb-4">
            <div className="card-header">Results</div>

          </div>

          <div className="card mb-4">
            <div className="card-header">Saved Articles</div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
