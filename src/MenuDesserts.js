import React from 'react';
import MenuData from '../menu-data';
import $ from 'jquery'; 


const arrList = MenuData.desserts;

class MenuDesserts extends React.Component {    
    componentDidMount(){
        // $( '#dessertCheck11' ).on('click', function(event){
        //     CheckCheeseCake();      
        // });
    }
    render() {
        
        $( 'input[name^="dessertCheck"]' ).each(function() {
            $(this).prop('checked', false);                 
        });
		return (
            <div>
                <h3>Desserts Menu</h3>
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
                                    <td><span id={"dessertPrice"+rowMenu.id}>{rowMenu.price}</span></td>
                                    <td><input type="checkbox" name={"dessertCheck"+rowMenu.id} id={"dessertCheck"+rowMenu.id} value={rowMenu.id} /></td>
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

export default MenuDesserts;