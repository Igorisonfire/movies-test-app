import * as React from 'react'
import './index.scss'
import {MoviePreviewItem} from "../MoviePreviewItem";
import { debounce } from 'lodash'

export default class GenreRow extends React.Component {

    state = {
        page: 0,
        nextTransform: '',
        rowWidth: 0,
        rowChildrenSumWidth: 0
    }

    rowElement = React.createRef()

    nextClick = () => {
        this.setState({
            page: this.state.page + 1,
        }, () => this.setTransform())
    }

    prevClick = () => {
        this.setState({
            page: this.state.page - 1,
        }, () => this.setTransform())
    }

    setTransform = () => {
        this.setState({
            nextTransform: `translateX(-${this.state.rowWidth * this.state.page}px)`
        })
    }

    setElementsSizes = () => {
        if (this.rowElement && this.rowElement.current) {
            const childrenLength = this.rowElement.current.children.length
            const childrenWidth = this.rowElement.current.children[0].offsetWidth

            this.setState({
                rowWidth: this.rowElement.current.offsetWidth,
                rowChildrenSumWidth: childrenLength * childrenWidth
            }, () => this.setTransform())
        }
    }

    componentDidMount() {
        this.setElementsSizes()
        window.addEventListener('resize', debounce(this.setElementsSizes, 500));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setElementsSizes)
    }

    render() {
        const {genre, movies} = this.props
        const {page, nextTransform, rowWidth, rowChildrenSumWidth} = this.state

        return(
            <div className={'genre-row'}>
                <h2>{genre}</h2>
                <div className={'row-wrapper'}>
                    <div className={'arrows'}>
                        {page > 0 &&
                            <div onClick={this.prevClick} className={'arrow prev'}>
                                <img src='https://www.flaticon.com/svg/static/icons/svg/271/271220.svg' alt='prev'/>
                            </div>
                        }
                        {rowWidth * (page + 1) < rowChildrenSumWidth &&
                            <div onClick={this.nextClick} className={'arrow next'}>
                                <img src='https://www.flaticon.com/svg/static/icons/svg/271/271228.svg' alt='next'/>
                            </div>
                        }
                    </div>
                    <div ref={this.rowElement} className={'row'} style={{transform: nextTransform}}>
                        {movies.map((item, index) => (
                                <MoviePreviewItem key={index} movie={item}/>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}