/** 
 * useClickOutside custom hook
 * 
 * It calls the 'callMe' callback function on click outside the given ref.
**/

import React, { useEffect } from 'react'

const useClickOutside = (ref: React.RefObject<any> | React.RefObject<any>[], callMe: () => any) => {

    // Preparing the functionality on change of ref or callback:
    useEffect(() => {

        // Handling the click event:
        const handleClickOutside = (event: MouseEvent) => {

            // For refs array:
            if (Array.isArray(ref)) {
                let allOK: boolean = true

                ref.forEach(r => {
                    if (r.current && r.current.contains(event.target)) allOK = false
                })

                if (allOK) callMe()
            }

            // For single ref:
            else if (ref.current && !ref.current.contains(event.target)) {
                callMe()
            }
        }

        // Adding the global mouse down event:
        document.addEventListener('mousedown', handleClickOutside)

        // Clearing the global mouse down event:
        return () => document.removeEventListener('mousedown', handleClickOutside)

    }, [ref, callMe])
}

export default useClickOutside