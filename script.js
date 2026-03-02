const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const hiMessage = document.querySelector('#welcome') // get the welcome div

if (isMorning) 
  {
  hiMessage.textContent = "Good morning!";
} 

else if (isAfternoon)
   {
  hiMessage.textContent = "Good afternoon!";
} 
else if (isEvening)
  {
  hiMessage.textContent = "Good evening!";
  }

  localStorage.setItem("It's a secret to everybody", "I am poor student during the day,but during the night I am Batman!") ;
  const secret = localStorage.getItem("It's a secret to everybody");
  if (secret) {
    console.log(secret);
  } else {
    console.log("No secret found in localStorage.");
  }


  const input= document.querySelector('#new-todo')
  const button= document.querySelector('#add-btn')
  const todoList= document.querySelector('.todo-list')



// Add a new item to the list
const renderTodos = ()=>{
  const todos =
  JSON.parse(localStorage.getItem("todo-list")) || []

// Clear the li's before we recreate them
todoList.innerHTML = "";

todos.forEach(todo=> {
  const li = document.createElement('li')
  li.textContent = todo.text
  todoList.append(li)
})
}

button.addEventListener("click",()=>{
  const todos = JSON.parse(localStorage.getItem("todo-list")) || []
 
  if (input.value.trim() === "") return

  todos.push({
    text: input.value,
    completed: false
  })

    
localStorage.setItem("todo-list", JSON.stringify(todos))
  input.value = ""
  renderTodos()
})

renderTodos()