import React from 'react'
import Modal from './components/Modal';

export default function Images(props) {
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} onClick={ () => alert('')}/>
            ))}
            <Modal show={true} handleClose={ }>

            </Modal>
        </>
    )
}
