import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

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
                    {/* <NumberFormat type='number' value={this.state.totalAmount}/> */}
                    <NumberFormat value={this.state.totalAmount} thousandSeparator={true} suffix={' kr'}/>
                    <button  onClick={this.handleIncrement}><span>+</span></button>
                </div>
            </div>
         );
    }
}
 
export default Amount
;