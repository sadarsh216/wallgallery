import React, { useState } from 'react'
import Modal from './Modal'

const Images = (props) => {
    const [showModal, setShowModal] = useState({
        show: false,
        url:""
    })
    const handleClose = () => {
        setShowModal({show:false})
    }
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} onClick={() => setShowModal({show:true,url:item.urls.full})} />
            ))}
            <Modal  show={showModal.show}  handleClose={handleClose}
            >
                <p>askj</p>
            </Modal>
        </>
    )
}
export default Images;
