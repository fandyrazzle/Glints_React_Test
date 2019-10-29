import $ from 'jquery'; 
    
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
export default CheckCheeseCake;
// let numberOfCheeseCake=0;
        // if ((localStorage.getItem("opentable")!="")&& (localStorage.getItem("opentable")!=null)){            
        //     let jsonLocal= JSON.parse(localStorage.getItem("opentable"))
        //     if (jsonLocal.length>0)
        //     {
        //         for (var key in jsonLocal[0])
        //         {
        //             if (jsonLocal[0].hasOwnProperty(key)) {       
        //                 if (jsonLocal[0][key].id=="11")
        //                 {
        //                     numberOfCheeseCake=numberOfCheeseCake+1;
        //                 }
        //             }
        //         }  
        //         if (numberOfCheeseCake>0)
        //         {
        //             return false; 
        //         }
        //         else{return true;}
        //     }            
        // }
        // else{
        //     return true;
        // }