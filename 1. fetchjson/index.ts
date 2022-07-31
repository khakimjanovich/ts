import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// in order not to make any typos we use Interface in TS
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(r => {
    // and we can implement that Interface here as in example
    const todo = r.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed
    logTodo(id, title, completed)


});

//also we use ts to avoid  type annotation errors
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        Is it finished: ${completed}
    `)
}