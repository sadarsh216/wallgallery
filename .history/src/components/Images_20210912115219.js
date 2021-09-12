import React from 'react'

export default function Images(props) {
    return (
        <>
            <img
                src="https://images.unsplash.com/photo-1571217668979-f46db8864f75?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt={props.altText} />
        </>
    )
}
