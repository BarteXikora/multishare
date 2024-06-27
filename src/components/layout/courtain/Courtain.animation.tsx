import StyledCourtain from './Courtain.styles'
import { motion } from 'framer-motion'

const AnimatedCourtain = ({ className, onClick }: { className: string, onClick: () => void }) => {
    const AnimatedComponent = motion(StyledCourtain)

    return <AnimatedComponent
        className={className}
        onClick={onClick}

        initial={{ opacity: 0 }}
        animate={{ opacity: .85 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .1 }}
    />
}

export default AnimatedCourtain