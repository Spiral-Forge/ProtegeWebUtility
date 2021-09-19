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
    setError("");
    db.collection("Users")
      .where("email", "==", email)
      .where("post", "==", "Admin")
      .get()
      .then(async (querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
          const data = a.data();
          return { data };
        });
        if (!!mydata.length) {
          try {
            let res = await auth.signInWithEmailAndPassword(email, password);
          } catch (e) {
            setError(e.message);
          }
        } else {
          setError("You are not authorized");
        }
      });
  }

  // test@gmail.com

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

// {
//     "a": 3,
//     "i": {
//         "code": "auth/wrong-password",
//         "message": "The password is invalid or the user does not have a password."
//     },
//     "c": null,
//     "b": null,
//     "f": null,
//     "h": false,
//     "g": true
// }
