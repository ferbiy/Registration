export default function isValid(obj) {
  let result = true;
  valid(obj);

  function valid(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === "object") {
        valid(obj[prop]);
      } else {
        if (prop === "email") {
          let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          result = mailformat.test(obj[prop]);
        }

        if (obj[prop] === "" || obj[prop] === 0) {
          result = false;
        }
      }
    }
  }

  if (!result) alert("Something wrong. Please, check fields.");

  return result;
}
