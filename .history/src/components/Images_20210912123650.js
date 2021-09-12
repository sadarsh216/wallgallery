import React from 'react'

export default function Images(props) {
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} />
            ))}
        </>
    )
}