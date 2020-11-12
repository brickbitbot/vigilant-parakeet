import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

// This part's kind of a mess, but here you go...
export default function Modal({ data, onSubmit, onClose, close }) {

    useEffect(() => {
        if(close) {
            document.getElementById("modal-form").reset();
        }
    }, []);

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-wrapper">
                    <div className="modal-icon" onClick={onClose}>
                        <svg className="close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </div>                
                    <form id="modal-form" onSubmit={onSubmit}>
                        {
                            data.map((element, index) => (
                                <div className="form-group" key={index}>
                                    <label htmlFor={element.field}>{element.field.replace('_', ' ').toUpperCase()}</label>
                                    {
                                        element.type === 'dropdown' ? <select className="form-control" id={element.field} required>
                                            {
                                                element.data.map((value, pos) => 
                                                    <option key={pos} value={value}>{value}</option>
                                                )                                            
                                            } 
                                        </select> : <input className="form-control" type={element.type} id={element.field} required />
                                    }                                    
                                </div>
                            ))
                        }
                        <div className="form-group">
                            <button className="form-control btn" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
               
            </div>
            
        </div>
        
    );
}

Modal.propTypes = {
    data: PropTypes.array,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    close: PropTypes.bool
}