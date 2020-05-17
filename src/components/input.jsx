import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Button from './button'

class Inputs extends Component {
    state = { 
        repaymentYears: 14,
        totalAmount: 250000,
        calculateResult: "",
        
     }

    calculateMonthlyCost = () => {
        const interest = 5.77
        var months = this.state.repaymentYears * 12;
        console.log(this.state.totalAmount, this.state.repaymentYears, interest)
        const manadsbelopp = Math.round(this.state.totalAmount * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1))))
        this.setState({ calculateResult: manadsbelopp + 'kr' })
        return manadsbelopp
        
    }

    handleIncrementTotalYears = () => {
        

        this.setState({ repaymentYears: this.state.repaymentYears + 1 })
    
    }
    handleDecrementTotalYears = () => {
      

            this.setState({ repaymentYears: this.state.repaymentYears - 1 })
        
    }
    handleIncrementTotalAmount = () => {
        
         this.setState({ totalAmount: this.state.totalAmount + 5000 })
     }
     
     
     
     handleDecrementTotalAmount = () => {
        
             this.setState({ totalAmount: this.state.totalAmount - 5000 })
 
         
     }
    render() { 
        return (  
            <div className='value'>
                <div   className='rowTitles'>
                    Månadskostnad
                </div>
                <div className='monthlyCost'>
                    {this.state.calculateResult}
                </div>
                <div  className='rowTitles'>
                    Lånebelopp
                </div>
                <div className='lane'>
                    <button 
                    className='incDecButton' 
                    onClick={this.handleDecrementTotalAmount}
                    disabled={(this.state.totalAmount < 5001)?true:false }
                    ><span>-</span></button>
                    <NumberFormat 
                    className='inputs'
                    value={this.state.totalAmount} 
                    thousandSeparator={true} 
                    suffix={' kr'} 
                    id={'loanAmount'}/>
                    <button 
                    className='incDecButton' 
                    onClick={this.handleIncrementTotalAmount}
                    disabled={(this.state.totalAmount < 600000)?false:true }
                    ><span>+</span></button>
                </div>
                <div className='rowTitles'>
                    Återbetalningstid
                </div>
                <div>
                    <button 
                    className='incDecButton' 
                    onClick={this.handleDecrementTotalYears}
                    disabled={(this.state.repaymentYears < 2)?true:false }
                    ><span>-</span></button>
                    {/* <NumberFormat type='number' value={this.state.totalAmount}/> */}
                    <NumberFormat 
                    
                    className='inputs'
                    value={this.state.repaymentYears} 
                    thousandSeparator={false} 
                    suffix={' år'} 
                    id={'loanYears'}/>
                    <button 
                    className='incDecButton' 
                    onClick={this.handleIncrementTotalYears}
                    disabled={(this.state.repaymentYears < 15)?false: true}

                    ><span className='indicator'>+</span></button>
                    
                </div>
                <div>
                    <button className="ansok" onClick={this.calculateMonthlyCost}>Calculate</button>

                </div>
                {/* <Button totalAmount={this.state.totalAmount} repaymentYears={this.state.repaymentYears}/> */}
            </div>
         )
    }}

 
export default Inputs;