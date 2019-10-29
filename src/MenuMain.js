import React from 'react';
import $ from 'jquery'; 
import MenuData from '../menu-data';

const arrList = MenuData.mains;

class MenuMain extends React.Component {    
    constructor(){
        super()
        this.state = {
            chkbox: false
        };
    }
    render() {
        $( 'input[name^="mainCheck"]' ).each(function() {
            $(this).prop('checked', false);                 
        });
		return (
            <div>
                <h3>Main Menu</h3>
                <table border="1" padding="3" width="300">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>     
                    <tbody>
                        {
                            arrList.map(
                                (rowMenu, i) => (
                                    <tr key={i}>
                                        <td>{rowMenu.name}</td>
                                        <td><span id={"mainPrice"+rowMenu.id}>{rowMenu.price}</span></td>
                                        <td><input type="checkbox" name={"mainCheck"+rowMenu.id} id={"mainCheck"+rowMenu.id} value={rowMenu.id} /></td>
                                    </tr>
                                    )
                                )
                        }
                    </tbody>            
                    
                </table>
            </div>            
        );
    }
}

export default MenuMain;