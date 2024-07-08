/**
 * The circle progress bar
 * 
 * It shows a circle filled in a get from props percentage. It also has a "waiting" variant
 * to inform that process has not been started yet.
**/

import StyledCircleProgress from './CircleProgress.styles'

export type CircleProgressType = { $isWaiting: boolean, $percent: number }

export default StyledCircleProgress