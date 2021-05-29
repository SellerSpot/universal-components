import { RefObject, useCallback, useEffect, useState } from 'react';
import { TEventListenerHandler } from 'typings/common.types';

export interface IUseClickOutSideListenerResponse {
    clickedOutside: boolean;
    resetListener: () => void;
    removeListener: () => void;
}

/**
 * Hook that triggers when the click is made outside of the given ref
 *
 * @param {Element} componentReference - component to be listened reference
 *
 * @returns {boolean} boolean will be true when clicked outside
 */
export const useClickOutsideListener = (
    componentReference: RefObject<Element>,
): IUseClickOutSideListenerResponse => {
    const [clickedOutside, setClickedOutside] = useState(false);
    const [resetCount, setResetCount] = useState(0);

    const handleClickOutside: TEventListenerHandler = useCallback((event) => {
        if (componentReference.current && !componentReference.current.contains(event.target)) {
            setClickedOutside(true);
        }
    }, []);

    useEffect(() => {
        if (!clickedOutside) {
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [componentReference, resetCount]);

    // resets the state for next listen
    const resetListener = () => {
        setClickedOutside(false);
        setResetCount(resetCount + 1);
    };

    const removeListener = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    return { clickedOutside, resetListener, removeListener };
};
