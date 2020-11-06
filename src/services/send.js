export default function send(data, uri, method) {
  fetch(uri, {
    method: method,
    headers: {
      "Content-Type": "application/json", // header for data
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log("Request has been sent"))
    .catch((error) => console.error(error));
}
