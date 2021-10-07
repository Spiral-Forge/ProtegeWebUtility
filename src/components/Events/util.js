import firebase from "../Firebase/firebase";
const db = firebase.firestore();

export const getAllEvent = async () => {
  const data = await db.collection("Events").get();

  var myData = data.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });

  return myData;
};

export const getApprovedEvent = async () => {
  const data = await db
    .collection("Events")
    .where("approved", "==", true)
    .get();

  var myData = data.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });
  return myData;
};

export const getUnapprovedEvent = async () => {
  const data = await db
    .collection("Events")
    .where("approved", "==", false)
    .get();

  var myData = data.docs.map((a) => {
    const data = a.data();
    const id = a.id;
    return { id, ...data };
  });

  return myData;
};

export const createEvent = async (event) => {
  const newEvent = { ...event, approved: true };
  delete newEvent.id;
  await db.collection("Events").add(newEvent);
};

export const updateEvent = async (event) => {
  const newEvent = { ...event };
  delete newEvent.id;
  console.log(newEvent);
  await db.collection("Events").doc(event.id).update(newEvent);
};

export const deleteEvent = async (id) => {
  await db.collection("Events").doc(id).delete();
};

export const approveEvent = async (event) => {
  const newEvent = { ...event, approved: true };
  delete newEvent.id;
  console.log(newEvent);
  await db.collection("Events").doc(event.id).update(newEvent);
};
