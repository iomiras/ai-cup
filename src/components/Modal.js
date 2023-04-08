import React from 'react';
import './Modal.css'

const Modal = ({ showModal, closeModal, title, children }) => {
    return (
        <>
            {showModal && <div className="modal-backdrop fade show"></div>}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5">{title}</h5>
                            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{children}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
