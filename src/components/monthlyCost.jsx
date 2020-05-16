import React, { Component } from 'react';
import '../index.css';

class MonthlyCost extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="monthly-cost">
            <div class="monthly-cost-label">
                {/* <!-- monthlyCostLabel --> */}
                Månadskostnad
            </div>
            <div class="monthly-cost-value">
                {/* <!-- monthlyCost + monthlyCostSuffix --> */}
                2 173 kr
        </div>
    </div> );
    }
}
 
export default MonthlyCost;