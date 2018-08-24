import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import  Counters from './components/counters';
import './App.css';

class App extends React.Component {
    constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {counters : [
			{id: 1, value : 56},
			{id: 2, value : 22},
			{id: 3, value : 67},
			{id: 4, value : 67},


		]};
	};
	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters});
	}
	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({counters});
	};



	 handleDelete = (counterId) => {
		const counters = this.state.counters.filter(m => m.id !== counterId);
		this.setState({counters});
	}

  render() {
    return (
        <React.Fragment>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className ="container">
        <Counters
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}
        />
        </main>
        </React.Fragment>
    );
  }
}
export  default App;
