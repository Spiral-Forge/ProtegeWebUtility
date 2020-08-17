import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { FirebaseContext } from './components/Firebase/notused';
import Firebase from "./components/Firebase/firebase";
import AssignmentPage from './components/AssignmentPortal/assignmentPage';
//  const db = firebase.firestore();
//   db.settings({
//     timestampsInSnapshots: true
//   });


//var fb=new Firebase();
// function checkAdd(){
 
//   //console.log(fb.db);
//   fb.db.collection("cars").doc("LA").set({
//     name: "Los Angeles",
//     color:"blue"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
// }

// function checkGet(){
//   fb.db.collection("cars")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log(data); // array of cities objects
// });
// }
  
function App() {
  return (
  //   <FirebaseContext.Consumer>
  //   {firebase => {
  //     return <div>I've access to Firebase and render something.</div>;
  //   }}
  // </FirebaseContext.Consumer>
    <div className="App">
      <AssignmentPage />
      {/* <header className="App-header">
        
      </header> */}
    </div>
  );
  }

export default App;
