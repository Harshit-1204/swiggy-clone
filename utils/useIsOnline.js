import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isOffline, isOnline } from "./userSlice";

const useIsOnline = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{

        const handleOnline = ()=>{
            dispatch(isOnline(true));
        }

        const handleOffline = ()=>{
            dispatch(isOffline(false));
        }

        window.addEventListener("online" , handleOnline);
        window.addEventListener("offline" , handleOffline);

        return (
            ()=>{
                window.removeEventListener("online",handleOnline);
                window.removeEventListener("offline",handleOffline);
            }
        )

    },[])
}

export default useIsOnline;