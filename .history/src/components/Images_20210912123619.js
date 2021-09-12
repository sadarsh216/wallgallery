import React from 'react'

export default function Images(props) {
    return (
        <>
            {props.images.map((item, key) => (
                <Images key={key} url={item.urls.full} altText={item.alt_description} />
            ))}
        </>
    )
}
