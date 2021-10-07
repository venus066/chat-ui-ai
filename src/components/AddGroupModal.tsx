import React from 'react';
import AppSimpleBar from "./AppSimpleBar";

interface AddGroupModalProps {

}
const AddGroupModal = ({ }: AddGroupModalProps) => {
    return (
        <div className="modal fade" id="addgroup-exampleModal" tabIndex={-1} role="dialog" aria-labelledby="addgroup-exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title font-size-16" id="addgroup-exampleModalLabel">Create New Group</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body p-4">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="addgroupname-input" className="form-label">Group Name</label>
                                <input type="text" className="form-control" id="addgroupname-input" placeholder="Enter Group Name" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Group Members</label>
                                <div className="mb-3">
                                    <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#groupmembercollapse" aria-expanded="false" aria-controls="groupmembercollapse">
                                        Select Members
                                    </button>
                                </div>

                                <div className="collapse" id="groupmembercollapse">
                                    <div className="card border">
                                        <div className="card-header">
                                            <h5 className="font-size-15 mb-0">Contacts</h5>
                                        </div>
                                        <div className="card-body p-2">
                                            <AppSimpleBar style={{ maxHeight: '150px' }}>
                                                <div>
                                                    <div className="contact-list-title">
                                                        A
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck1" />
                                                                <label className="form-check-label" htmlFor="memberCheck1">Albert Rodarte</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck2" />
                                                                <label className="form-check-label" htmlFor="memberCheck2">Allison Etter</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        C
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck3" />
                                                                <label className="form-check-label" htmlFor="memberCheck3">Craig Smiley</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        D
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck4" />
                                                                <label className="form-check-label" htmlFor="memberCheck4">Daniel Clay</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        I
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck5" />
                                                                <label className="form-check-label" htmlFor="memberCheck5">Iris Wells</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        J
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck6" />
                                                                <label className="form-check-label" htmlFor="memberCheck6">Juan Flakes</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck7" />
                                                                <label className="form-check-label" htmlFor="memberCheck7">John Hall</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck8" />
                                                                <label className="form-check-label" htmlFor="memberCheck8">Joy Southern</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        M
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck9" />
                                                                <label className="form-check-label" htmlFor="memberCheck9">Michael Hinton</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck10" />
                                                                <label className="form-check-label" htmlFor="memberCheck10">Mary Farmer</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        P
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck11" />
                                                                <label className="form-check-label" htmlFor="memberCheck11">Phillis Griffin</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        R
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck12" />
                                                                <label className="form-check-label" htmlFor="memberCheck12">Rocky Jackson</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="contact-list-title">
                                                        S
                                                    </div>

                                                    <ul className="list-unstyled contact-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="memberCheck13" />
                                                                <label className="form-check-label" htmlFor="memberCheck13">Simon Velez</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </AppSimpleBar>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="addgroupdescription-input" className="form-label">Description</label>
                                <textarea className="form-control" id="addgroupdescription-input" rows={3} placeholder="Enter Description"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Create Groups</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGroupModal;