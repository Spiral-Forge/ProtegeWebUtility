import firebase from "../Firebase/firebase";
const db = firebase.firestore();

const advSearch = async (name) => {
  let list = await db
    .collection("users")
    .where("name", ">=", name)
    .where("name", "<=", name + "\uf8ff")
    .get();
  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};

export const searchByName = async (name) => {
  const uppercase = name.charAt(0).toUpperCase() + name.slice(1);
  const lowercase = name.charAt(0).toLowerCase() + name.slice(1);
  const up = await advSearch(uppercase);
  const low = await advSearch(lowercase);
  const mydata = up.concat(low);
  return mydata;
};


export const searchByEmail = async (email) => {
  let list = await db.collection("users").where("email", "==", email).get();
  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};

export const searchByPhone = async (phone) => {
  let list = await db.collection("users").where("phoneNo", "==", phone).get();
  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};

export const searchByNameAndEmail = async (name, email) => {
  let list = await db
    .collection("users")
    .where("name", "==", name)
    .where("email", "==", email)
    .get();
  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};

export const searchByNameAndPhone = async (name, phone) => {
  let list = await db
    .collection("users")
    .where("name", "==", name)
    .where("phoneNo", "==", phone)
    .get();
  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};

export const searchByEmailAndPhone = async (email, phone) => {
  let list = await db
    .collection("users")
    .where("email", "==", email)
    .where("phoneNo", "==", phone)
    .get();
  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};

export const searchByNameAndEmailAndPhone = async (name, email, phone) => {
  let list = await db
    .collection("users")
    .where("name", "==", name)
    .where("email", "==", email)
    .where("phoneNo", "==", phone)
    .get();

  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};
