import React from 'react'
import about from '../ts/about'

const MadeIn = ():JSX.Element => {
    const madeIn = about[2]
    return (
        <div className="madein-notice">
            {madeIn}
        </div>
    )
}
export default MadeIn