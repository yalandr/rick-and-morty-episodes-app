import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className="pagination-list">
                {
                    prev ? (
                    <li className="pagination-list-item">
                        <button className="pagination-link" onClick={handlePrevious}>Previous</button>
                    </li>
                    ) : null
                }
                {
                    next ? (
                        <li className="pagination-list-item">
                            <button className="pagination-link" onClick={handleNext}>Next</button>
                        </li>
                    ) : null
                }
                
            </ul>
        </nav>
    )
}

export default Pagination

