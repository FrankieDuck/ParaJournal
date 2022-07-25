import React from 'react'

const scrollUp = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}


const BookImage = () => {
    return (
        <button className='side-buttons'>
        <img src="/images/spellbook.png" alt="Current Investigation" style={{ maxWidth: "75px"}} onClick={() => scrollUp()} />
        </button>
    )
}

export default BookImage
