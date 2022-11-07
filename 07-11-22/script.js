fetch("https://jsonplaceholder.typicode.com/users")
  .then((users) => users.json())
  .then((data) =>
    data.map((key) =>
      console.log(key.name, key.address.street, key.address.city)
    )
  )
  .catch((e) => console.log("error:" + e))
  .finally((f) => console.log("----fine users----"));

setTimeout(function () {
  console.log("Prova timeout");
}, 4000);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((todos) => todos.json())
  .then((data) => data.map((key) => console.log(key.id, key.title)))
  .catch((e) => console.log("error:" + e))
  .finally((f) => console.log("finito"));
