/**
 * getIsTouchScreen function
 * 
 * Determines whether the current device has a touch screen.
**/

const getIsTouchScreen = (): boolean => 'ontouchstart' in window || navigator.maxTouchPoints > 0

export default getIsTouchScreen