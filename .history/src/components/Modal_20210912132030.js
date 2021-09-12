import React from 'react';
import '../App.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <center>

                <button className="btn btn-primary center"  type="button" onClick={() =>handleClose()}>
                    Close
                </button>
                </center>
            </section>
        </div>
    );
};
export default Modal