import React from 'react'
import classes from './Layout.module.css'

import InputBuilder from '../Containers/InputBuilder/InputBuilder'

const layout = (props)=>{
    return(
        <div className={classes.Layout}>
            <div className={classes.Background}></div>
            <div className = {classes.InputBuilder}>
                    <InputBuilder></InputBuilder>
            </div>
        </div>
       
            
        

    )
}

export default layout; 