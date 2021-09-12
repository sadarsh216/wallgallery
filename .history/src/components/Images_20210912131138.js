import React, { useState } from 'react'
import Modal from './Modal'

const Images = (props) => {
    const [showModal, setShowModal] = useState({
        show: false,
        url: "",
        alt:""
    })
    const handleClose = () => {
        setShowModal({show:false})
    }
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} onClick={() => setShowModal({ show: true, url: item.urls.full, alt: item.alt_description})} />
            ))}
            <Modal  show={showModal.show}  handleClose={handleClose}>
                <div>
                    <img src={showModal.url} alt={showModal.alt}/>
                </div>
            </Modal>
        </>
    )
}
export default Images;
