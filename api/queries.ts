import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "./api"

const fetchUser = async () => {
    const data = await baseUrl('users');
    return data.data
}

export const useGetUser = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUser
    })
}