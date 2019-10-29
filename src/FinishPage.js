import React from 'react';
import $ from 'jquery'; 

  


class FinishPage extends React.Component {    
    constructor(){
        super()
    }
    componentDidMount()
    {
        var jsonLocal=null;
        if ((localStorage.getItem("opentable")!="")&& (localStorage.getItem("opentable")!=null)){
            jsonLocal= JSON.parse(localStorage.getItem("opentable"))               
        } 
        $( '#JSONSPAN' ).html(JSON.stringify(jsonLocal) );
    }
    
    render() {
		return (
            <div>
                <h1>Order Finish</h1>
                <span id="JSONSPAN"></span>
            </div>            
        );
    }
}

export default FinishPage;