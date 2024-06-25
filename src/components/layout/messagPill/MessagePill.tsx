import { useState, useEffect, useRef } from 'react'
import { useSelector } from '../../../store/store'

import StyledMessagePill from './MssagePill.styles'

const MessagePill = () => {
    const messages = useSelector(state => state.user.status === 'READY' && state.user.messages)

    const [visibleMessage, setVisibleMessage] = useState<string | null>(null)
    const timeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (!messages) return

        const lastMessage = messages[messages.length - 1]
        if (lastMessage !== visibleMessage) setVisibleMessage(lastMessage)

        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => setVisibleMessage(null), 5000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    if (!visibleMessage) return null

    return <StyledMessagePill>{visibleMessage}</StyledMessagePill>
}

export default MessagePill