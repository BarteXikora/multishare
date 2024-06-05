import styled from 'styled-components'

const StyledDateRangeInput = styled.div`
    label {
        position: relative;
        display: flex;
        height: 22px;
        align-items: center;
        cursor: pointer;

        p {
            margin: 0;
            font-size: ${(props) => props.theme.fontSizes.default};
            /* font-weight: bold; */
            padding-left: 28px;
        }

        input {
            display: none;
        }

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 22px;
            height: 22px;
            background-color: ${(props) => props.theme.colors.gray3};
            border-radius: ${(props) => props.theme.borderRadiuses.small};
            transition: ${(props) => props.theme.transition};
        }

        &::after {
            position: absolute;
            top: 4px;
            left: 7.5px;
            content: '';
            width: 3px;
            height: 8px;
            transform: rotateZ(45deg);
            border: 4px solid ${(props) => props.theme.colors.white};
            border-left: none;
            border-top: none;
            display: none;
        }

        &:hover::before {
            background-color: ${(props) => props.theme.colors.gray4};
        }

        &:has(input:checked) {
            &::before {
                background-color: ${(props) => props.theme.colors.primary6};
            }

            &::after {
                display: block;
            }

            &:hover::before {
                background-color: ${(props) => props.theme.colors.primary4};
            }
        }
    }

    input {
        margin-top: ${(props) => props.theme.margins.medium};
        border: none !important;
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        padding: ${(props) => props.theme.margins.sectionMedium};
        background-color: ${(props) => props.theme.colors.gray2};
        width: 100%;
        box-sizing: border-box;
        color: ${(props) => props.theme.colors.black};
        font-size: ${(props) => props.theme.fontSizes.default};
        cursor: pointer;
        transition: ${(props) => props.theme.transition};

        &:focus {
            outline: 0;
            box-shadow: 0;
            background-color: ${(props) => props.theme.colors.primary2} !important;
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.primary2};
        }

        &.empty {
            background-color: ${(props) => props.theme.colors.warning2};

            &:hover {
                background-color: ${(props) => props.theme.colors.warning3};
            }
        }
    }
`

export default StyledDateRangeInput