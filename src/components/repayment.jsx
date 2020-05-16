import React, { Component } from 'react';

class Repayment extends Component {
    
        
        state = { 
            timeLine: 14
        }

    

    handleIncrement = () => {
        this.setState({ timeLine: this.state.timeLine + 1 })
    }
    handleDecrement = () => {
        this.setState({ timeLine: this.state.timeLine - 1 })
    }
    
    render() { 
        return (  
            <div className="repayment">
                <div>
                    Aterbetalning
                </div>
                <div>
                    <button onClick={this.handleDecrement}><span>-</span></button>
                    <input type="number" value={this.state.timeLine}/>
                    <button onClick={this.handleIncrement}><span>+</span></button>
                </div>
            </div>
        );
    }
    
}
 
export default Repayment;