// React query
import { useQuery} from "react-query";

// Utils
import { request } from "../../utils/axiosconfig";


const getLoc =() =>{
    return request({url:"/allLocalData"})
}

export const useLocData = (onSuccess, onError) => {
    return useQuery("all-loc-items", getLoc, {
      onSuccess,
      onError,
      refetchOnMount:false
    });
  };