import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Button from './button'

class Inputs extends Component {
    state = { 
        repaymentYears: 14,
        totalAmount: 250000,
        
     }

    handleIncrementTotalYears = () => {
    

        this.setState({ repaymentYears: this.state.repaymentYears + 1 })
    
    }
    handleDecrementTotalYears = () => {
      

            this.setState({ repaymentYears: this.state.repaymentYears - 1 })
        
    }
    handleIncrementTotalAmount = () => {
        
         this.setState({ totalAmount: this.state.totalAmount + 25000 })
     }
     
     
     
     handleDecrementTotalAmount = () => {
        
             this.setState({ totalAmount: this.state.totalAmount - 25000 })
 
         
     }
    render() { 
        return (  
            <div className='value'>
                <div className='beloppet'>
                    Belopp
                </div>
                <div className='lane'>
                    <button  onClick={this.handleDecrementTotalAmount}><span>-</span></button>
                    {/* <NumberFormat type='number' value={this.state.totalAmount}/> */}
                    <NumberFormat 
                    
                    value={this.state.totalAmount} 
                    thousandSeparator={true} 
                    suffix={' kr'} 
                    id={'loanAmount'}/>
                    <button  onClick={this.handleIncrementTotalAmount}><span>+</span></button>
                </div>
                <div className='beloppet'>
                    Years
                </div>
                <div className='lane'>
                    <button  onClick={this.handleDecrementTotalYears}><span>-</span></button>
                    {/* <NumberFormat type='number' value={this.state.totalAmount}/> */}
                    <NumberFormat 
                    
                    value={this.state.repaymentYears} 
                    thousandSeparator={false} 
                    suffix={' years'} 
                    id={'loanYears'}/>
                    <button  onClick={this.handleIncrementTotalYears}><span>+</span></button>
                    
                </div>
                <Button totalAmount={this.state.totalAmount} repaymentYears={this.state.repaymentYears}/>
            </div>
         )
    }}

 
export default Inputs;