import axios from "axios";

export const getTodo = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const todos = response.data.splice(0,20)
        return todos
    } catch (error) {
        console.error("todo api error >>", error);
        throw new Error(error.message)
    }
}