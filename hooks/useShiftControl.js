import { useContext } from "react";
import ShiftContext from "../context/shiftControlProvider";


const useShiftControl = () => {
    return useContext(ShiftContext)
}

export default useShiftControl

