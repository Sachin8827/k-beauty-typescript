import { useState, useEffect } from "react";
import { Debounce } from "../Types/Types";

const useDebounce = ({ value, delay }: Debounce) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(timeoutID);
    }, [value, delay]);
    return debouncedValue;
}


export default useDebounce;