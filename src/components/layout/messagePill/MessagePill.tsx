/** 
 * Message pill
 * 
 * It displays the message sent from the server. It shows itself whenever the new message
 * is recived and hides after 5 seconds.
**/

import { useState, useEffect, useRef } from 'react'
import { useSelector } from '../../../store/store'

import AnimatedMessagePill from './MessagePill.animation'

import { AnimatePresence } from 'framer-motion'

const MessagePill = () => {
    const messages = useSelector(state => state.user.status === 'READY' && state.user.messages)

    const [visibleMessage, setVisibleMessage] = useState<string | null>(null)
    const timeout = useRef<NodeJS.Timeout | null>(null)

    // Setting the local message state to show a message and to hide after 5 seconds:
    useEffect(() => {
        if (!messages) return

        const lastMessage = messages[messages.length - 1]
        if (lastMessage !== visibleMessage) setVisibleMessage(lastMessage)

        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => setVisibleMessage(null), 5000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    // Rendering the component:
    return <AnimatePresence>
        {
            visibleMessage && <AnimatedMessagePill>{visibleMessage}</AnimatedMessagePill>
        }
    </AnimatePresence>
}

export default MessagePill