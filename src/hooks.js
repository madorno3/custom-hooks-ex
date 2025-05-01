import { useState, useEffect } from "react";


export const useFlip = () => {
    const[state, setState] = useState(true);
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

export const useAxios = (url, options = {}) => {
    const [response, setResponse] = useState(null);
    const [error, setError ] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };
        fetchData();
        
    }, [url, options]);
    return {response, error, isLoading}; 
};



