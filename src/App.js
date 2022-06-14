
import './App.css';
import navbar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';
import NavBar from './components/navbar';

class App extends Component{
  state = { 
    counters:[
        {id:1 ,value:4},
        {id:2 ,value:0},
        {id:3 ,value:2},
        {id:4 ,value:0},
    ]
 } ;
 handleDelete=(counterId)=>{
     const newCounters = this.state.counters.filter(c=> c.id!==counterId);
     this.setState({counters:newCounters});
 };
 handleReset=()=>{
     const counters=this.state.counters.map(c => {
         c.value=0;
         return c;
     })
     this.setState({counters});
 };
 handleIncrement=counter=>{
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index] ={...counter};
     counters[index].value++;
     this.setState({counters});
 };

  render(){
    return(
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c =>c.value>0).length}/>
        <main className='container'>
          <Counters onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.handleReset} counters={this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
