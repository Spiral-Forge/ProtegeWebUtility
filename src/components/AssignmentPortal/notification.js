export const notify = async (to, title, body) => {
  console.log(process.env.SERVER_KEY);
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
      `key=${process.env.SERVER_KEY}`,
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
