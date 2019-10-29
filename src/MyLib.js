import $ from 'jquery';  

function CountTotal()
{
    var jsonLocal=null;
    let subtotal=0
    if ((localStorage.getItem("opentable")!="")&& (localStorage.getItem("opentable")!=null)){
        jsonLocal= JSON.parse(localStorage.getItem("opentable"))
        for(var i = 0; i < jsonLocal.length; i++) {
            for(var z = 0; z < (jsonLocal[i]).length; z++) {
                let ID=jsonLocal[i][z].id;
                let price=jsonLocal[i][z].price;
                let qty=jsonLocal[i][z].qty;           
                subtotal=subtotal+(parseFloat(price)*parseFloat(qty));
                $( '#spanTotal' ).html(subtotal);
            }
        }     
            
    }    
    else
    {
        $( '#spanTotal' ).html(subtotal);
    }
    
}
function CheckCheeseCake()
    {
        let numberOfCheeseCake=0;
        if ((localStorage.getItem("opentable")!="")&& (localStorage.getItem("opentable")!=null)){            
            let jsonLocal= JSON.parse(localStorage.getItem("opentable"))
            if (jsonLocal.length>0)
            {
                for (var key in jsonLocal[0])
                {
                    if (jsonLocal[0].hasOwnProperty(key)) {       
                        if (jsonLocal[0][key].id=="11")
                        {
                            numberOfCheeseCake=numberOfCheeseCake+1;
                        }
                    }
                }  
                if (numberOfCheeseCake>0)
                {
                    return false; 
                }
                else{return true;}
            }            
        }
        else{
            return true;
        }
        
        return false;
    } 
function CheckSnobbyPierreReq(){
    if (( $( '#starterCheck4' ).is(':checked'))&&( $( '#mainCheck7' ).is(':checked'))){
        alert ("Pierre doesn't allow you to order Salmon Fillet & Prawn Cocktail in the same meal.");
        return false
    }
    else
    {
        return true;
    }
}
export  {CountTotal, CheckCheeseCake, CheckSnobbyPierreReq};


//TRASH#####################################################
// for (var key in jsonLocal) {
//     if (jsonLocal.hasOwnProperty(key)) {
//     let ID=jsonLocal[key].id;
//     let price=jsonLocal[key].price;
//     let qty=jsonLocal[key].qty;           
//     subtotal=subtotal+(parseFloat(price)*parseFloat(qty));
//     $( '#spanTotal' ).html(subtotal);
//     }
// }