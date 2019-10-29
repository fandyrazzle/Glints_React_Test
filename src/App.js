import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import MenuPage from './MenuPage';
import FinishPage from './FinishPage';




class App extends React.Component {
    constructor(){
        super()
    }
    
    componentDidMount() {  
    } 
    render() {
        return (                 
            <div>
                <BrowserRouter>
                    <div>
                    <Switch>
                        <Route  exact path="/"  >
                            <MenuPage/>
                            <NavLink to="/2" id="orderNext">Order for Next Person</NavLink>
                            {localStorage.setItem("opentable", "") }
                        </Route>
                        <Route  exact path="/2">
                            <MenuPage/>
                            <NavLink to="/finish" id="orderNext">finis order</NavLink>
                        </Route>    
                        <Route  exact path="/finish">
                            <FinishPage/>
                        </Route>  
                    </Switch>
                    </div>
                    
                </BrowserRouter>      
                          
            </div>           
        )
    }
}

 render(<App />, document.getElementById('root'));
