//functions
import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = e => {
        setMousePosition({ x: window.innerWidth / 2 - e.clientX, y: window.innerHeight / 2 - e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;