import React, { Component } from 'react';


class MonthlyCost extends Component {
    state = { 
        interest: 5.77
     }

    calculateMonthlyCost(amount, repaymentYears, interest) {
        var months = repaymentYears * 12;
    
        return Math.round(amount * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1))));
    }
    render() { 
        return ( 
        <div class="monthly-cost">
            <div class="monthly-cost-label">
                {/* <!-- monthlyCostLabel --> */}
                Månadskostnad
            </div>
            <div class="monthly-cost-value">
                {/* <!-- monthlyCost + monthlyCostSuffix --> */}
                {this.calculateMonthlyCost}
        </div>
    </div> );
    }
}
 
export default MonthlyCost;