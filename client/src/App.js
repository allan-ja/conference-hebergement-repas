import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDataSheet from 'react-datasheet';

const ReactDataGrid = require('react-data-grid');

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

      this.state = {
        grid: [
          [{value:  1}, {value:  3}],
          [{value:  2}, {value:  4}]
        ]
      }
  }


  createRows = () => {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }

    this._rows = rows;
  };

  rowGetter = (i) => {
    return this._rows[i];
  };

  // componentDidMount() {
  //   this.callApi()
  //   .then(res => this.setState({response: res.express}))
  //   .catch(err => console.log(err));
  // }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);
    return body;
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ReactDataSheet
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row])
          changes.forEach(({cell, row, col, value}) => {
            grid[row][col] = {...grid[row][col], value}
          })
          this.setState({grid})
        }}
      />
      </div>
    );
  }
}

export default App;
