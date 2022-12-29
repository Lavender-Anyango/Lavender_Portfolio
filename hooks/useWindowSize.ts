import { useState, useEffect } from 'react';

const useWindowSize = () => {
    let Window;
    if (typeof window !== 'undefined') Window = window;
    const [width, setWidth] = useState(Window?.innerWidth || 0);

    useEffect(() => {
        const setInnerWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', setInnerWidth);
        return () => window.removeEventListener('resize', setInnerWidth);
    });

    return width;
};
export default useWindowSize;
