import React, { Component } from 'react';

class Counter extends Component {
    // state={
    //     value: this.props.counter.value
    //     // tags:['tag1','tag2','tag3']
    // };(commenting for implementing controlled component which doesn't require local state)
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }
    styles={
        fontSize:10,
        fontWeight:'bold'

    }
    // handleIncrement=()=>{
    //     this.setState({value : this.state.value+1});
    // }
    
    render() { 
        console.log('props',this.props);
        return (
        <div>
            <h4>Counter #{this.props.counter.id}</h4>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* <ul>
                {this.state.tags.map(tag=><li key={tag}> {tag}</li>)}
            </ul> */}
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{value}=this.props.counter;
        return value===0? 'Zero': value;
    }
}
 
export default Counter;