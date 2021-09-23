import React from 'react';

const AddContactModal = () => {
    return (
        <div className="modal fade" id="AddContactModal-exampleModal" tabIndex={-1} role="dialog" aria-labelledby="AddContactModal-exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-size-16" id="AddContactModal-exampleModalLabel">Add Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body p-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="AddContactModalemail-input" className="form-label">Email</label>
                                <input type="email" className="form-control" id="AddContactModalemail-input" placeholder="Enter Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="AddContactModalname-input" className="form-label">Name</label>
                                <input type="text" className="form-control" id="AddContactModalname-input" placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="AddContactModal-invitemessage-input" className="form-label">Invatation Message</label>
                                <textarea className="form-control" id="AddContactModal-invitemessage-input" rows={3} placeholder="Enter Message"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Invite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContactModal;