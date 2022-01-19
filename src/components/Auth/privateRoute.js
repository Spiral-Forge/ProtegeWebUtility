import React,{useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import Login from "./login";

function PrivateRoute(props) {
    const [checking, doneCheck] = useState(true)
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const { currentuser } = useAuth();
    const { component: Component, ...rest } = props;
    

    useEffect(() => {
        console.log("hello",currentuser)
        doneCheck(true);
        if(currentuser){
            console.log("authenticated");
            userHasAuthenticated(true)
        }else{
            userHasAuthenticated(false)
        }

        doneCheck(false);
    }, [currentuser]);

    const render = props => {
        
        if (checking) {
            return (<h1>checking</h1>)
        }else if(isAuthenticated){
            return <Component {...props} />
        } else {
            return <Login {...props} />
        }

        // return <Component {...props} />;
    };

    return <Route {...rest} render={render} />;
}

export default PrivateRoute;