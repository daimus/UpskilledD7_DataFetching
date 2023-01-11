import {getTodo} from "../api/todo";
import {useQuery} from "react-query";

export const useQueryTodo = () => {
    const { isLoading, error, data } = useQuery("todo", getTodo)

    return { isLoading, error, data }
}