import React, { useEffect } from 'react'

const useClickOutside = (ref: React.RefObject<any> | React.RefObject<any>[], callMe: () => any) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (Array.isArray(ref)) {
                let allOK: boolean = true

                ref.forEach(r => {
                    if (r.current && r.current.contains(event.target)) allOK = false
                })

                if (allOK) callMe()

            } else if (ref.current && !ref.current.contains(event.target)) {
                callMe()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)

    }, [ref, callMe])
}

export default useClickOutside