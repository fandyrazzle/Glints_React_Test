import React from 'react';
import MenuData from '../menu-data';
import $ from 'jquery'; 

const arrList = MenuData.starters;

class MenuStarters extends React.Component {    
    render() {
        $( 'input[name^="starterCheck"]' ).each(function() {
            $(this).prop('checked', false);                 
        });
		return (
            <div>
                <h3>Starters Menu</h3>
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
                                    <td><span id={"starterPrice"+rowMenu.id}>{rowMenu.price}</span></td>
                                    <td><input type="checkbox" name={"starterCheck"+rowMenu.id} id={"starterCheck"+rowMenu.id} value={rowMenu.id} /></td>
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

export default MenuStarters;