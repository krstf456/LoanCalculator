import React, { Component } from 'react';
import '../index.css';
import NumberFormat from 'react-number-format';

class Repayment extends Component {
    
        
        state = { 
            repaymentYears: 14
        }

    

    handleIncrement = () => {
       

            this.setState({ repaymentYears: this.state.repaymentYears + 1 })
        
    }
    handleDecrement = () => {
        this.setState({ repaymentYears: this.state.repaymentYears - 1 })
    }
    
    render() { 
        return (  
            <div className="repayment">
                <div>
                    Aterbetalning
                </div>
                <div>
                    <button onClick={this.handleDecrement}><span>-</span></button>
                    

                    {/* <input type="number" value={this.state.repaymentYears} id='years'/> */}
                    <NumberFormat value={this.state.repaymentYears} suffix={' years'} id="loanYears"/>

                    <button onClick={this.handleIncrement}><span>+</span></button>
                </div>
            </div>
        );
    }
    
}
 
export default Repayment;