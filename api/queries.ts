import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "./api.ts"
import { Pagination } from "../src/types";

const fetchUser = async (): Promise<Pagination> => {
    const data = await baseUrl('users');
    return data.data
}

export const useGetUser = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUser
    })
}