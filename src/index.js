document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener('submit', (event) => {
    event.preventDefault();
    const task = document.getElementById("new-task-description").value;
    const li = document.createElement('li');
    const taskLi = li.append(task);
    document.getElementById("tasks").append(li);
    document.getElementById("new-task-description").value = "";
  });
});

// document.querySelector('#book-form').addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Create a New Book Object Using Form Values

//       // console.log(e.target["form-title"].value);
//       console.log(e.target.title.value);
//       console.log(e.target.author.value);
//       console.log(e.target.price.value);
//       console.log(e.target.imageUrl.value);
//       console.log(e.target.inventory.value);

//   // Fire Off renderBookCard With New Book Object
// });