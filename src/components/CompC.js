import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'


const CompC = () => {
    const {dispatchprovided} = useContext(AppContext)
    return (
        <div>
            <button onClick={()=> dispatchprovided('add_1')}>Add + 1</button>
        </div>
    )
}

export default CompC
