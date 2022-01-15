import firebase from "../Firebase/firebase";
const db = firebase.firestore();

export const searchByName = async (name) => {
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
  let list = await db.collection("users").where("contact", "==", phone).get();
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
    .where("contact", "==", phone)
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
    .where("contact", "==", phone)
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
    .where("contact", "==", phone)
    .get();

  var mydata = list.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return mydata;
};
