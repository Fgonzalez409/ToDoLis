// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    console.log(arrayOfTodos[0].userId)
    let ol = document.getElementById("todo-list")

    for (let index = 0; index < arrayOfTodos.length; index++) {
        const element = arrayOfTodos[index];
        let li = document.createElement("LI")
        let newTextNode = document.createTextNode(element.title)
        li.appendChild(newTextNode)
        ol.appendChild(li)
    }

    
}