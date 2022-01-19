import React, { useContext, useEffect, useState } from "react";
import firebase, { auth } from "../components/Firebase/firebase";

const AuthContext = React.createContext();

const db = firebase.firestore();
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentuser, setCurrentuser] = useState();
  const [error, setError] = useState("");

  function login(email, password) {
    console.log("hello??")
    setError("");
    db.collection("users")
    .where("email", "==", email)
    .get()
    .then(async (querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
        const data = a.data();
        return data;
        });
        console.log(mydata)
        if(mydata.length == 0){
            setError("You are not present in the database");
        }
        if(mydata.length == 1){
            try {
                let isAuthorized = mydata[0].post == 'Admin' ? true : false
                if(isAuthorized){
                    let res = await auth.signInWithEmailAndPassword(email, password);
                    console.log("res", res)
                }else{
                    setError("You are not authorized");
                }
            } catch (e) {
                setError(e.message);
            }
        }
    });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentuser,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}