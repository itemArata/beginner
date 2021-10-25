import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'
// 孫のCコンポネント

const C = () => {
    const value = useContext(AppContext)
    return (
        <div>
            <h3>CCC</h3>
            {value}
        </div>
    )
}

export default C
