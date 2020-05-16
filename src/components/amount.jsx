import React, { Component } from 'react';

class Amount extends Component {
    state = { 
        totalAmount: 250000
     }

     handleIncrement = () => {
         this.setState({ totalAmount: this.state.totalAmount + 5000 })
     }
     handleDecrement = () => {
        this.setState({ totalAmount: this.state.totalAmount - 5000 })

     }
    render() { 
        return ( 
            <div className='value'>
                <div className='beloppet'>
                    Lanebeloppet
                </div>
                <div className='lane'>
                    <button  onClick={this.handleDecrement}><span>-</span></button>
                    <input type='number' value={this.state.totalAmount}></input>
                    <button  onClick={this.handleIncrement}><span>+</span></button>
                </div>
            </div>
         );
    }
}
 
export default Amount
;