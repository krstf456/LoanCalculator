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
                <div  className='repaymentTime'>
                    Lånebelopp
                </div>
                <div className='lane'>
                    <button className='incDecButton' onClick={this.handleDecrementTotalAmount}><span>-</span></button>
                    {/* <NumberFormat type='number' value={this.state.totalAmount}/> */}
                    <NumberFormat 
                    className='inputs'
                    value={this.state.totalAmount} 
                    thousandSeparator={true} 
                    suffix={' kr'} 
                    id={'loanAmount'}/>
                    <button className='incDecButton' onClick={this.handleIncrementTotalAmount}><span>+</span></button>
                </div>
                <div className='repaymentTime'>
                    Återbetalningstid
                </div>
                <div className='lane'>
                    <button className='incDecButton' onClick={this.handleDecrementTotalYears}><span>-</span></button>
                    {/* <NumberFormat type='number' value={this.state.totalAmount}/> */}
                    <NumberFormat 
                    className='inputs'
                    value={this.state.repaymentYears} 
                    thousandSeparator={false} 
                    suffix={' years'} 
                    id={'loanYears'}/>
                    <button className='incDecButton' onClick={this.handleIncrementTotalYears}><span>+</span></button>
                    
                </div>
                <Button totalAmount={this.state.totalAmount} repaymentYears={this.state.repaymentYears}/>
            </div>
         )
    }}

 
export default Inputs;