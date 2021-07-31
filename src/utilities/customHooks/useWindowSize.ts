import { useState, useEffect } from 'react';
import { IDimension } from '../../typings/common.types';

export const useWindowSize = (): IDimension => {
    const [windowSize, setWindowSize] = useState<IDimension>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
};
