import React from 'react';

const ForwardModal = () => {
    return (
        <div className="modal fade forwardModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Share this Message</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4">
                        <div>
                            <div className="replymessage-block mb-2">
                                <h5 className="conversation-name">Jean Berwick</h5>
                                <p className="mb-0">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                            </div>
                            <textarea className="form-control" placeholder="Type your message..." rows={2}></textarea>
                        </div>
                        <hr className="my-4" />
                        <div className="input-group mb-3">
                            <input type="text" className="form-control bg-light border-0 pe-0" placeholder="Search here.." aria-label="Example text with button addon" aria-describedby="forwardSearchbtn-addon" />
                            <button className="btn btn-light" type="button" id="forwardSearchbtn-addon"><i className='bx bx-search align-middle'></i></button>
                        </div>

                        <div className="d-flex align-items-center px-1">
                            <div className="flex-grow-1">
                                <h4 className="mb-0 font-size-11 text-muted text-uppercase">Contacts</h4>
                            </div>
                            <div className="flex-shrink-0">
                                <button type="button" className="btn btn-sm btn-primary">Share All</button>
                            </div>
                        </div>
                        <div data-simplebar style={{ maxHeight: '150px' }} className="mx-n4 px-1">
                            <div>
                                <div className="contact-list-title">
                                    A
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Allison Etter</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* end contact list A */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    C
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Craig Smiley</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* end contact list C */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    D
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Daniel Clay</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Doris Brown</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* end contact list D */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    I
                                </div>

                                <ul className="list-unstyled contact-list">

                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Iris Wells</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* end contact list I */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    J
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Juan Flakes</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">John Hall</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Joy Southern</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* end contact list J */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    M
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Mary Farmer</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Mark Messer</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Michael Hinton</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* end contact list M */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    O
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* end contact list O */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    P
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Paul Haynes</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* end contact list P */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    R
                                </div>

                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* end contact list R */}

                            <div className="mt-3">
                                <div className="contact-list-title">
                                    S
                                </div>

                                <ul className="list-unstyled contact-list mb-0">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Sara Muller</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Simon Velez</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 m-0">Steve Walker</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <button type="button" className="btn btn-sm btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* end contact list S */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForwardModal;