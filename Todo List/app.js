// "new" - Add a Todo
// "list" - List all Todos
// "remove" - Remove specific Todo
// "quit" - Quit App

let input = prompt("Enter the input")
const taskList = ['Join Microsoft', 'Also Google']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("***********")
        for (i = 0; i < taskList.length; i++) {
            console.log(`${i}: ${taskList[i]}`)
        }
        console.log("***********")
    } else if (input === 'new') {
        const newTask = prompt("Enter the todo task")
        taskList.push(newTask)
        console.log(`${newTask} was added to list`)
    } else if (input === 'remove') {
        let index = parseInt(prompt("Enter the index of task to remove"))
        if (!Number.isNaN(index)) {
            let deleted = taskList.splice(index, 1)
            console.log(`${deleted} was removed`)
        } else {
            console.log("Unknown Index")
        }
    }
    input = prompt("Enter the input")
}

console.log("Okay, You Quit!")