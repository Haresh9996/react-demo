import React from 'react'

const ButtonComp = ({ background, color, content }) => {

    return (
        <>
            <button style={{ backgroundColor: background, color: color, padding: '.5rem', border: 'none' }}>{content}</button>
        </>
    )
}

export default ButtonComp