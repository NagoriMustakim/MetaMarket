import React from 'react'

export const Partner = ({ image }) => {
    return (
        <div className={`rounded overflow-hidden mt-16 w-1/2 ml-12 max-w-xs transition duration-300 ease-in-out hover:scale-110`}>
            <img className="w-2/3 ml-12 mt-2" src={image} alt="Forest"/>
        </div>
    )
}
