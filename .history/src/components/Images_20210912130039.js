import React, { useState } from 'react'
import Modal from './Modal'

const Images = (props) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} onClick={() => alert('')} />
            ))}
            <Modal
                show={showModal} 
                // handleClose={setShowModal(!showModal)}
            >
                <p>askj</p>
            </Modal>
        </>
    )
}
export default Images;
