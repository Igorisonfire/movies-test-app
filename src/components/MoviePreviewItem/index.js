import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";

export const MoviePreviewItem = (props) => {
    const {movie} = props

    return(
        <Link to={`movie/${movie.id}`} className={'movie-preview-item'}>
            <img src={movie.backdrop} alt={movie.title}/>
        </Link>
    )
}