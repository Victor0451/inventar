import React from 'react'

export const Image = ({
    url,
    alt
}) => {
    console.log(`"${url}"`)
    return (
        <div className="mt-24 w-full md:w-5/12 ml-auto mr-auto px-4 ">
        <img
            className="h-full w-full rounded-lg"
            src={`${url}`}
            alt={alt}
        />
        </div>
    )
}
