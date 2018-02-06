import React from 'react';

class Hello extends React.Component{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        return(
            <div className="Hello">
            <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}

export default Hello;