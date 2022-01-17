import React,{useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

function PrivateRoute(props) {
    const [checking, doneCheck] = useState(true)
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const { currentuser } = useAuth();
    const { component: Component, ...rest } = props;
    

    useEffect(() => {
        console.log("hello",currentuser)
        if(currentuser){
            userHasAuthenticated(true)
        }else{
            userHasAuthenticated(false)
        }
    }, [currentuser]);

    const render = props => {
        
        if (checking) {
            return (<h1>hello</h1>)
        }else if(isAuthenticated){

        }

        // return <Component {...props} />;
    };

    return <Route {...rest} render={render} />;
}

export default PrivateRoute;