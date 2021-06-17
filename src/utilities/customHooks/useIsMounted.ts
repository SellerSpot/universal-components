import { RefObject, useEffect, useRef } from 'react';

export const useIsMounted = (): RefObject<boolean> => {
    const isMountedRef = useRef(null);
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    });
    return isMountedRef.current;
};
