import * as React from 'react'
import './index.scss'

export const StarsBar = (props) => {

    const {percent} = props

    return(
        <div className={'stars-bar-component'}>
            <BarBody type={'gray'}/>
            <BarBody type={'yellow'} percent={percent}/>
        </div>

    )
}

const BarBody = (props) => {
    const {type, percent} = props

    return(
        <div className={`stars-bar ${type}`} style={{width: `${percent}%`}}>
            <div className={'star'}>
                <div className={'clipboard'}/>
            </div>
            <div className={'star'}>
                <div className={'clipboard'}/>
            </div>
            <div className={'star'}>
                <div className={'clipboard'}/>
            </div>
            <div className={'star'}>
                <div className={'clipboard'}/>
            </div>
            <div className={'star'}>
                <div className={'clipboard'}/>
            </div>
        </div>
    )
}