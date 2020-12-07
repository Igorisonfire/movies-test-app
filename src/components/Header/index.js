import * as React from 'react'
import './index.scss'
import SearchInput from "../SearchInput";
import {Link} from "react-router-dom";

export const Header = (props) => {

    return(
        <header className={'app-header'}>
            <div className={'container'}>
                <Link to={'/'} className={'logo'}>
                    <span>WOOKIE <br/> MOVIES</span>
                </Link>
                <SearchInput/>
            </div>
        </header>
    )
}