import React, { useState} from 'react'
import Modal from './components/Modal';

export default function Images(props) {
    const [showModal, setShowModal] = useSta(false)
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} onClick={ () => alert('')}/>
            ))}
            <Modal show={showModal} handleClose={setShowModal(!showModal) }>

            </Modal>
        </>
    )
}
