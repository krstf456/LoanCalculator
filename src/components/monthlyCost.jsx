import React, { Component } from 'react';
import Input from './input'
import Button from './button'



class MonthlyCost extends Component {
    state = { 
       
     }

   
    render() { 
        return ( 
        <div>
            <div>
                {/* <!-- monthlyCostLabel --> */}
                Månadskostnad
            </div>
            <div>
                {/* <!-- monthlyCost + monthlyCostSuffix --> */}
                {/* {this.calculateMonthlyCost} */}
        </div>
        
        
        
    </div> );
    }
}
 
export default MonthlyCost;