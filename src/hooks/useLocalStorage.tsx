import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            console.error("Error saving to localStorage", error);
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            try {
                const item = localStorage.getItem(key);
                setStoredValue(item ? JSON.parse(item) : initialValue);
            } catch (error) {
                console.error("Error updating state from localStorage", error);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [key, initialValue]);

    const deleteValue = () => {
        try {
            localStorage.removeItem(key);
            setStoredValue(initialValue);
            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            console.error("Error deleting from localStorage", error);
        }
    };

    return [storedValue, setValue, deleteValue] as const;
}

export default useLocalStorage;
