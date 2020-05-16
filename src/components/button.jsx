import React, { Component } from 'react';




class Button extends Component {
    
    
    state = { 
        
        calculateResult: ''
     }
    calculateMonthlyCost = () => {
        const interest = 5.77
        var months = this.props.repaymentYears * 12;
        console.log(this.props.totalAmount, this.props.repaymentYears, interest)
        const manadsbelopp = Math.round(this.props.totalAmount * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1))))
        this.setState({ calculateResult: manadsbelopp })
        return manadsbelopp
        
    }
    render() { 
        return ( 
            <div>
                {this.state.calculateResult}
                <button className="ansok" onClick={this.calculateMonthlyCost}>Calculate</button>
            </div> );
    }
}
 
export default Button;