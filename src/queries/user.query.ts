import {useQuery} from "@tanstack/react-query";
import {getUserProfile} from "../apis";


const useProfile = () => {
    return useQuery(
        {
            queryKey: ['user-profile'],
            queryFn: getUserProfile
        }
    )
}


export default useProfile