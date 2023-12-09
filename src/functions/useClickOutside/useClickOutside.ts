import { useEffect } from 'react'

const useClickOutside = (ref: React.RefObject<any>, callMe: () => any) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callMe()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)

    }, [ref, callMe])
}

export default useClickOutside