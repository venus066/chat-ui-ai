import React from 'react';

const StartButtons = () => {
    return (
        <div className="chat-input-links me-md-2">
            <div className="links-list-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="More">
                <button type="button" className="btn btn-link text-decoration-none btn-lg waves-effect" data-bs-toggle="collapse" data-bs-target="#chatinputmorecollapse" aria-expanded="false" aria-controls="chatinputmorecollapse">
                    <i className="bx bx-dots-horizontal-rounded align-middle"></i>
                </button>
            </div>
            <div className="links-list-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Emoji">
                <button type="button" className="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn" id="emoji-btn">
                    <i className="bx bx-smile align-middle"></i>
                </button>
            </div>
        </div>
    );
};
const InputSection = () => {
    return (
        <div className="position-relative">
            <div className="chat-input-feedback">
                Please Enter a Message
            </div>
            <input type="text" className="form-control form-control-lg chat-input" id="chat-input" placeholder="Type your message..." />
        </div>
    );
};

const EndButtons = () => {
    return (
        <div className="chat-input-links ms-2 gap-md-1">
            <div className="links-list-item d-none d-sm-block" data-bs-container=".chat-input-links" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-html="true" data-bs-placement="top" data-bs-content="<div className='loader-line'><div className='line'></div><div className='line'></div><div className='line'></div><div className='line'></div><div className='line'></div></div>">
                <button type="button" className="btn btn-link text-decoration-none btn-lg waves-effect">
                    <i className="bx bx-microphone align-middle"></i>
                </button>
            </div>
            <div className="links-list-item">
                <button type="submit" className="btn btn-primary btn-lg chat-send waves-effect waves-light" data-bs-toggle="collapse" data-bs-target=".chat-input-collapse.show" >
                    <i className="bx bxs-send align-middle"></i>
                </button>
            </div>
        </div>
    );
};

const MoreMenu = () => {
    return (
        <div className="chat-input-collapse collapse" id="chatinputmorecollapse">
            <div className="card mb-0">
                <div className="card-body py-3">
                    {/* Swiper */}
                    <div className="swiper chatinput-links">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="text-center px-2 position-relative">
                                    <div>
                                        <input id="attachedfile-input" type="file" className="d-none" />
                                        <label htmlFor="attachedfile-input" className="avatar-sm mx-auto stretched-link">
                                            <span className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                                <i className="bx bx-paperclip"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className="font-size-11 text-uppercase mt-3 mb-0 text-body text-truncate">Attached</h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="text-center px-2">
                                    <div className="avatar-sm mx-auto">
                                        <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bxs-camera"></i>
                                        </div>
                                    </div>
                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" className="text-body stretched-link">Camera</a></h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="text-center px-2">
                                    <div className="avatar-sm mx-auto">
                                        <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-images"></i>
                                        </div>
                                    </div>

                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" className="text-body stretched-link">Gallery</a></h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="text-center px-2">
                                    <div className="avatar-sm mx-auto">
                                        <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-headphone"></i>
                                        </div>
                                    </div>

                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" className="text-body stretched-link">Audio</a></h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="text-center px-2">
                                    <div className="avatar-sm mx-auto">
                                        <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-current-location"></i>
                                        </div>
                                    </div>

                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" className="text-body stretched-link">Location</a></h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="text-center px-2">
                                    <div className="avatar-sm mx-auto">
                                        <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bxs-user-circle"></i>
                                        </div>
                                    </div>
                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" className="text-body stretched-link" data-bs-toggle="modal" data-bs-target=".contactModal">Contacts</a></h5>
                                </div>
                            </div>

                            <div className="swiper-slide d-block d-sm-none">
                                <div className="text-center px-2">
                                    <div className="avatar-sm mx-auto">
                                        <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-microphone"></i>
                                        </div>
                                    </div>
                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" className="text-body stretched-link">Audio</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Reply = () => {
    return (
        <div className="chat-input-collapse replyCollapse collapse">
            <div className="card mb-0">
                <div className="card-body py-3">
                    <div className="replymessage-block mb-0 d-flex align-items-start">
                        <div className="flex-grow-1">
                            <h5 className="conversation-name">Jean Berwick</h5>
                            <p className="mb-0">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                        </div>
                        <div className="flex-shrink-0">
                            <button type="button" className="btn btn-sm btn-link mt-n2 me-n3 font-size-18" data-bs-toggle="collapse" data-bs-target=".replyCollapse.show">
                                <i className="bx bx-x align-middle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChatInputSection = () => {
    return (
        <div className="chat-input-section p-3 p-lg-4">
            <form id="chatinput-form">
                <div className="row g-0 align-items-center">

                    <div className="col-auto">
                        <StartButtons />
                    </div>
                    <div className="col">
                        <InputSection />
                    </div>
                    <div className="col-auto">
                        <EndButtons />
                    </div>
                </div>
            </form>

            <MoreMenu />
            <Reply />
        </div>
    );
};

export default ChatInputSection;