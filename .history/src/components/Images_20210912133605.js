import React, { useState } from 'react'
import Modal from './Modal'

const Images = (props) => {
    const [expand, setExpand] = useState({
        show: false,
        url: "",
        alt:""
    })
    const handleClose = () => {
        setExpand({show:false})
    }
    return (
        <>
            {props.images.map((item, key) => (
                <img key={key} src={item.urls.full} alt={item.alt_description} onClick={() => setExpand({ show: true, url: item.urls.full, alt: item.alt_description})} />
            ))}
            <Modal  show={expand.show}  handleClose={handleClose}>
                <div>
                    <img src={expand.url} alt={expand.alt}/>
                </div>
            </Modal>
        </>
    )
}
export default Images;