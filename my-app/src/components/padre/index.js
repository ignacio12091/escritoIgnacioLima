import React, { Component } from 'react';
import './styles.css';

class Padre extends Component {
    cantHijos(){
        let hijos = [];
        for (let i = 0; i < this.props.hijos; i++) {
            if(this.props.children.props.oculto === true) {
                hijos.push(this.props.children);
            } else {
                hijos.push(this.props.children);
            }
        }
        return hijos;
    }

    render() {
        return (
        <div className='padre'>
            {this.cantHijos()}
        </div>
        );
    }
}

export default Padre;