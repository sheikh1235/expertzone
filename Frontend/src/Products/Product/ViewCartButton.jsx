
import React, { Component } from 'react';
import "./ViewCartButton.css";

class ViewCartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        }
    }
    render() { 
        return ( 
        <div class="container">
            <button class="ViewCart" type="submit"><a class="fa fa-eye mar"></a>View Cart</button>   
        </div>
         );
    }
}
 
export default ViewCartButton;