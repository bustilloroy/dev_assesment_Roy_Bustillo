import { useEffect, useState } from "react";

/**
 * 
 * @param value 
 * @param delay 
 * @returns 
 */

export const useDebounce = <T>(value: T, delay: number = 600) => {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const debounceHandler = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(debounceHandler)
    }, [delay, value])

    return debounced;
}