import * as React from "react";
import '../assets/styles/Modal.css'
import { LogoutProp } from "../Types/Types";
const LogoutModal: React.FC<LogoutProp> = ({ isOpen, onClose, onConfirm }) => {
    return (
        <div className="container">
            <div className={`modal ${isOpen ? "open" : ""}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Logout</h5>
                            <i
                                className='fa fa-times'
                                onClick={onClose}
                                aria-hidden='true'
                            ></i>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to log out?</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-modal btn-secondary" onClick={onClose}>
                                Cancel
                            </button>
                            <button className="btn-modal btn-primary" onClick={onConfirm}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
