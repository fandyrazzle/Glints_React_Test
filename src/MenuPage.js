import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import $ from 'jquery'; 
import MenuMain from './MenuMain';
import MenuDesserts from './MenuDesserts';
import MenuStarters from './MenuStarters';
import {CountTotal as CountTotalLocal, CheckCheeseCake as CheckCheeseCakeLocal,
     CheckSnobbyPierreReq as CheckSnobbyPierreReqLocal}  from './MyLib';


class MenuPage extends React.Component {
    componentDidMount(){
        CountTotalLocal();
        $( 'input[name^="mainCheck"]' ).each(function() {
            $(this).on('change', function(event)
            {
                if($(this).is(':checked')){
                    let ID=$(this).attr('id').replace(/mainCheck/, '');
                    let subtotal=0;
                    subtotal = parseFloat( $( '#spanTotal' ).html());
                    let price = parseFloat($('#mainPrice'+ID).html());
                    subtotal=subtotal+price ;
                    $( '#spanTotal' ).html(subtotal);
                }
                else{
                    let ID=$(this).attr('id').replace(/mainCheck/, '');
                    let subtotal=0;
                    subtotal = parseFloat( $( '#spanTotal' ).html());
                    let price = parseFloat($('#mainPrice'+ID).html());
                    subtotal=subtotal-price ;
                    $( '#spanTotal' ).html(subtotal);
                }        
            });
                  
        });
        $( 'input[name^="starterCheck"]' ).each(function() {
            $(this).on('change', function(event)
            {
                if($(this).is(':checked')){
                    let ID=$(this).attr('id').replace(/starterCheck/, '');
                    let subtotal=0;
                    subtotal = parseFloat( $( '#spanTotal' ).html());
                    let price = parseFloat($('#starterPrice'+ID).html());
                    subtotal=subtotal+price ;
                    $( '#spanTotal' ).html(subtotal);
                }
                else{
                    let ID=$(this).attr('id').replace(/starterCheck/, '');
                    let subtotal=0;
                    subtotal = parseFloat( $( '#spanTotal' ).html());
                    let price = parseFloat($('#starterPrice'+ID).html());
                    subtotal=subtotal-price ;
                    $( '#spanTotal' ).html(subtotal);
                }                 
            });
                  
        });
        $( 'input[name^="dessertCheck"]' ).each(function() {
            $(this).on('change', function(event)
            {
                if($(this).is(':checked')){
                    let ID=$(this).attr('id').replace(/dessertCheck/, '');
                    let subtotal=0;
                    subtotal = parseFloat( $( '#spanTotal' ).html());
                    let price = parseFloat($('#dessertPrice'+ID).html());
                    subtotal=subtotal+price ;
                    $( '#spanTotal' ).html(subtotal);
                }
                else{
                    let ID=$(this).attr('id').replace(/dessertCheck/, '');
                    let subtotal=0;
                    subtotal = parseFloat( $( '#spanTotal' ).html());
                    let price = parseFloat($('#dessertPrice'+ID).html());
                    subtotal=subtotal-price ;
                    $( '#spanTotal' ).html(subtotal);
                }                 
            });
                  
        });
        $( "#orderNext" ).on('click', function(event) {             
            
            let OKMaincourse=false;
            $('input[name^="mainCheck"]').each(function() {
                if($(this).is(':checked')){
                    OKMaincourse=true;
                }                
            });
            if (!OKMaincourse)
            {
                alert("You must select at least one main course.");
            }
            //#########################################################
            let OKOnly1course =true;
            let OKMainAtt=false;
            let count1=0;
            $('input[name^="mainCheck"]').each(function() {                
                if($(this).is(':checked')==true){
                    count1=count1+1;
                }                                
            });
            if (count1>1){
                OKOnly1course=false;
            }
            let count2=0;
            $('input[name^="starterCheck"]').each(function() {
                if($(this).is(':checked')){
                    count2=count2+1;
                    OKMainAtt=true;
                }
                               
            });
            if (count2>1){
                OKOnly1course=false;
            } 
            let count3=0;
            $('input[name^="dessertCheck"]').each(function() {
                // alert("dessert");
                if($(this).is(':checked')){
                    count3=count3+1;
                    OKMainAtt=true;
                }                              
            });
            if (count3>1){
                OKOnly1course=false;
            }   
            if ((count2<1)&&count3<1)        
            {
                alert("You Must at least select 1 non Main course");
            }
            if (OKOnly1course==false){
                alert ("You can't order more than one in the same course.")
            }
            //#########################################################  
            let tempJson=[];
            let OKCheeseCake=true;
           
            if ((CheckCheeseCakeLocal()!=true)&&($('#dessertCheck11').is(':checked')==true ))
            {
                OKCheeseCake=false;
                alert ("cheese cake is out of stock");
            }
            let OKPierre=false;
            if (CheckSnobbyPierreReqLocal()==true)
            {
                OKPierre=true
            }
            if (OKMaincourse==true&&OKOnly1course==true&&OKMainAtt==true&&OKCheeseCake==true&&OKPierre==true){
                if (OKMainAtt==false){
                    alert ("You must at least select 2 different main course.")
                } 
                else{
                    $('input[name^="mainCheck"]').each(function() {                
                        if($(this).is(':checked')==true){
                            let ID=$(this).attr('id').replace(/mainCheck/, '');
                            let temp2Json={id:ID, qty : 1, price : $('#mainPrice'+ID).html()};
                            tempJson[tempJson.length]=temp2Json ;
                        }                         
                    });
                    $('input[name^="starterCheck"]').each(function() {                
                        if($(this).is(':checked')==true){
                            let ID=$(this).attr('id').replace(/starterCheck/, '');
                            let temp2Json={id:ID, qty : 1, price : $('#starterPrice'+ID).html()};
                            tempJson[tempJson.length]=temp2Json ;
                        }                         
                    });
                    $('input[name^="dessertCheck"]').each(function() {                
                        if($(this).is(':checked')==true){
                            let ID=$(this).attr('id').replace(/dessertCheck/, '');
                            let temp2Json={id:ID, qty:1, price:$('#dessertPrice'+ID).html()};
                            tempJson[tempJson.length]=temp2Json ;
                        }                         
                    });
                    if ((localStorage.getItem("opentable")!="")&&(localStorage.getItem("opentable")!=null)){
                        let jsonLocal= JSON.parse(localStorage.getItem("opentable"));
                        jsonLocal[parseInt($("#numberPerson").html())-1 ]=tempJson;
                        localStorage.setItem("opentable", JSON.stringify(jsonLocal));
                    }
                    else {
                        let saveJSON=[];
                        saveJSON[parseInt($("#numberPerson").html())-1 ]=tempJson;
                        localStorage.setItem("opentable", JSON.stringify(saveJSON));
                    }
                    
                }
                
            }
            else
            {
                event.preventDefault();
            }
        });
    }
    render() {        
        const spanStyle = {
            fontsize: "900"
          }
        //alert(localStorage.getItem("opentable")) ;

        
        return (            
            <div>
                <h1>Menu Test</h1>
                <span style={{fontSize: "25px"}}>Customer :</span>
                <Switch>
                    <Route  exact path="/"  >
                    <span style={{fontSize: "25px"}} id="numberPerson">1</span>
                    </Route>
                    <Route  exact path="/2">
                        <span style={{fontSize: "25px"}} id="numberPerson">2</span>
                    </Route>     
                </Switch>
                <MenuMain />
                <MenuStarters />
                <MenuDesserts />
                <span style={{fontSize: "25px", color:"red"}}>Total :</span>
                <span style={{fontSize: "25px", color:"red"}} id="spanTotal"></span>
                   
            </div>
        )

    }
}

export default MenuPage;
