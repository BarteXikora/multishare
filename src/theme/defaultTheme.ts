/** 
 * This file contains all styles variables like colors, margins, fonts. etc...
**/

const colors = {
    black: '#172943',
    white: 'white',

    gray6: '#3E4D62',
    gray5: '#657182',
    gray4: '#8B94A1',
    gray3: '#C7CBD2',
    gray2: '#EAECEF',

    primary6: '#3880F8',
    primary5: '#5894F9',
    primary4: '#7AAAFB',
    primary3: '#9BBFFC',
    primary2: '#BDD5FD',

    correct6: '#0FA8B2',
    correct5: '#35B7BF',
    correct4: '#5FC6CC',
    correct3: '#86D4D9',
    correct2: '#AFE2E6',

    warning6: '#E8BD25',
    warning5: '#EBC746',
    warning4: '#EFD36C',
    warning3: '#F3DE90',
    warning2: '#F7E9B6',

    wrong6: '#DD4B77',
    wrong5: '#E3698E',
    wrong4: '#E987A5',
    wrong3: '#EEA5BB',
    wrong2: '#F4C4D2'
}

const fontSizes = {
    title: '28px',
    subtitle: '18px',
    default: '14px'
}

const margins = {
    extraBig: '36px',
    big: '24px',
    medium: '12px',
    small: '6px'
}

const sectionMargins = {
    sectionBig: `${margins.big} ${margins.extraBig}`,
    sectionMedium: `${margins.medium} ${margins.medium}`,
    sectionSmall: `${margins.small} ${margins.medium}`
}

const borderRadiuses = {
    big: '12px',
    small: '6px'
}

const screenBreakpoints = {
    desktop: '1760px',
    tablet: '1200px',
    mobile: '880px',
    smallerMobile: '600px'
}

const defaultTheme = {
    colors,
    fontSizes,
    margins: { ...margins, ...sectionMargins },
    borderRadiuses,
    screenBreakpoints,
    transition: 'all .2s ease-in-out'
}

export default defaultTheme