import { useState, useEffect } from 'react'

import getDataWithUnit from '../../../functions/getDataWithUnit/getDataWithUnit'

import StyledUsedSpace from './UsedSpace.styles'
import Button from '../../ui/button/Button'

const __usedSpaceData = {
    currentValue: 9126805504, // 8.5 GB in B
    wholeSpace: 26843545600 // 25 GB in B
}

const UsedSpace = () => {
    const [usedSpaceData, setUsedSpaceData] = useState({
        currentValue: '',
        wholeSpace: '',
        percentage: 0
    })

    useEffect(() => {
        setUsedSpaceData({
            currentValue: getDataWithUnit(__usedSpaceData.currentValue),
            wholeSpace: getDataWithUnit(__usedSpaceData.wholeSpace),
            percentage: Math.ceil(__usedSpaceData.currentValue / __usedSpaceData.wholeSpace * 100)
        })

    }, [])

    return <StyledUsedSpace>
        <Button $variant='tertiary' $size='big'>
            <h2>Aktualne wykorzystanie dysku:</h2>

            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: usedSpaceData.percentage + '%' }}
                ></div>
            </div>

            <span>{usedSpaceData.currentValue} z {usedSpaceData.wholeSpace}</span>
        </Button>
    </StyledUsedSpace>
}

export default UsedSpace