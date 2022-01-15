export const notify = async (to, title, body) => {
  const fetchOptions = {
    to: to,
    collapse_key: "type_a",
    notification: {
      title,
      body,
    },
  };

  const res = await fetch(`https://fcm.googleapis.com/fcm/send`, {
    method: "POST",
    headers: {
      authorization:
        "key=AAAAz0nsHi0:APA91bFU8rlcKoABNVSa9dTaimq5GK4INd2AefoKryRvK7FuH3LvaYpKBOPxmq8_tSHJkPJrnIHSbuh4x_ngf0-xbMESaUdfD1ELU8DQaBVzOkCsgcetKJqI-edwz8kAljqpyXK7gyJH",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fetchOptions),
  });
  const data = await res.json();
  if (res.ok) {
    console.log(data);
  } else {
    console.log("Error");
  }
};
