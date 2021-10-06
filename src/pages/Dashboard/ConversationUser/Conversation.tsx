import React from "react";
import { Link } from "react-router-dom";

const Conversation = () => {
  return (
    <>
      <div
        className="chat-conversation p-3 p-lg-4"
        id="chat-conversation"
        data-simplebar
      >
        <ul
          className="list-unstyled chat-conversation-list"
          id="chat-conversation-list"
        >
          <li className="chat-list">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-7.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <p className="mb-0 ctext-content">Good morning 😊</p>
                  </div>
                  <div className="dropdown align-self-start message-box-drop">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="collapse"
                        data-bs-target=".replyCollapse"
                      >
                        Reply <i className="bx bx-share ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target=".forwardModal"
                      >
                        Forward{" "}
                        <i className="bx bx-share-alt ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Copy <i className="bx bx-copy text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Bookmark{" "}
                        <i className="bx bx-bookmarks text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Mark as Unread{" "}
                        <i className="bx bx-message-error text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                        to="#"
                      >
                        Delete <i className="bx bx-trash text-muted ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="conversation-name">
                  Jean Berwick{" "}
                  <small className="text-muted mb-0 ms-2">10:07am</small>
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list right">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-1.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <p className="mb-0">
                      Good morning, How are you? What about our next meeting?
                    </p>
                  </div>

                  <div className="dropdown align-self-start message-box-drop">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="collapse"
                        data-bs-target=".replyCollapse"
                      >
                        Reply <i className="bx bx-share ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target=".forwardModal"
                      >
                        Forward{" "}
                        <i className="bx bx-share-alt ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between copy-btn"
                        to="#"
                      >
                        Copy <i className="bx bx-copy text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Bookmark{" "}
                        <i className="bx bx-bookmarks text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Mark as Unread{" "}
                        <i className="bx bx-message-error text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                        to="#"
                      >
                        Delete <i className="bx bx-trash text-muted ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="conversation-name">
                  <span className="text-success me-1">
                    <i className="bx bx-check-double"></i>
                  </span>
                  <small className="text-muted mb-0 me-2">10:12am</small> You
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-7.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <p className="mb-0">
                      Yeah everything is fine. Our next meeting tomorrow at
                      10.00 AM
                    </p>
                  </div>
                  <div className="dropdown align-self-start message-box-drop">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="collapse"
                        data-bs-target=".replyCollapse"
                      >
                        Reply <i className="bx bx-share ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target=".forwardModal"
                      >
                        Forward{" "}
                        <i className="bx bx-share-alt ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between copy-btn"
                        to="#"
                      >
                        Copy <i className="bx bx-copy text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Bookmark{" "}
                        <i className="bx bx-bookmarks text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Mark as Unread{" "}
                        <i className="bx bx-message-error text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                        to="#"
                      >
                        Delete <i className="bx bx-trash text-muted ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="conversation-name">
                  Jean Berwick{" "}
                  <small className="text-muted mb-0 ms-2">10:13am</small>
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-7.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <p className="mb-0">
                      Hey, I'm going to meet a friend of mine at the department
                      store. I have to buy some presents for my parents 🎁.
                    </p>
                  </div>
                  <div className="dropdown align-self-start message-box-drop">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="collapse"
                        data-bs-target=".replyCollapse"
                      >
                        Reply <i className="bx bx-share ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target=".forwardModal"
                      >
                        Forward{" "}
                        <i className="bx bx-share-alt ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between copy-btn"
                        to="#"
                      >
                        Copy <i className="bx bx-copy text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Bookmark{" "}
                        <i className="bx bx-bookmarks text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Mark as Unread{" "}
                        <i className="bx bx-message-error text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                        to="#"
                      >
                        Delete <i className="bx bx-trash text-muted ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="conversation-name">
                  Jean Berwick{" "}
                  <small className="text-muted mb-0 ms-2">10:13am</small>
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list right">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-1.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <p className="item-name mb-0">Wow that's great</p>
                  </div>
                  <div className="dropdown align-self-start message-box-drop">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="collapse"
                        data-bs-target=".replyCollapse"
                      >
                        Reply <i className="bx bx-share ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target=".forwardModal"
                      >
                        Forward{" "}
                        <i className="bx bx-share-alt ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Copy <i className="bx bx-copy text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Bookmark{" "}
                        <i className="bx bx-bookmarks text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Mark as Unread{" "}
                        <i className="bx bx-message-error text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                        to="#"
                      >
                        Delete <i className="bx bx-trash text-muted ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="conversation-name">
                  <span className="text-success me-1">
                    <i className="bx bx-check-double"></i>
                  </span>
                  <small className="text-muted mb-0 me-2">10:14am</small> You
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list">
            <div className="chat-day-title">
              <span className="title">Today</span>
            </div>
          </li>

          <li className="chat-list">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-7.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="message-img mb-0">
                    <div className="message-img-list">
                      <div>
                        <Link
                          className="popup-img d-inline-block"
                          to="assets/images/small/img-1.jpg"
                        >
                          <img
                            src="assets/images/small/img-1.jpg"
                            alt=""
                            className="rounded border"
                          />
                        </Link>
                      </div>
                      <div className="message-img-link">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item dropdown">
                            <Link
                              className="dropdown-toggle"
                              to="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-horizontal-rounded"></i>
                            </Link>
                            <div className="dropdown-menu">
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                              >
                                Download{" "}
                                <i className="bx bx-download ms-2 text-muted"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                                data-bs-toggle="collapse"
                                data-bs-target=".replyCollapse"
                              >
                                Reply{" "}
                                <i className="bx bx-share ms-2 text-muted"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target=".forwardModal"
                              >
                                Forward{" "}
                                <i className="bx bx-share-alt ms-2 text-muted"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                              >
                                Bookmark{" "}
                                <i className="bx bx-bookmarks text-muted ms-2"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                                to="#"
                              >
                                Delete{" "}
                                <i className="bx bx-trash ms-2 text-muted"></i>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="message-img-list">
                      <div>
                        <Link
                          className="popup-img d-inline-block"
                          to="assets/images/small/img-2.jpg"
                        >
                          <img
                            src="assets/images/small/img-2.jpg"
                            alt=""
                            className="rounded border"
                          />
                        </Link>
                      </div>
                      <div className="message-img-link">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item dropdown">
                            <Link
                              className="dropdown-toggle"
                              to="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-horizontal-rounded"></i>
                            </Link>
                            <div className="dropdown-menu">
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                              >
                                Download{" "}
                                <i className="bx bx-download ms-2 text-muted"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                                data-bs-toggle="collapse"
                                data-bs-target=".replyCollapse"
                              >
                                Reply{" "}
                                <i className="bx bx-share ms-2 text-muted"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target=".forwardModal"
                              >
                                Forward{" "}
                                <i className="bx bx-share-alt ms-2 text-muted"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                to="#"
                              >
                                Bookmark{" "}
                                <i className="bx bx-bookmarks text-muted ms-2"></i>
                              </Link>
                              <Link
                                className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                                to="#"
                              >
                                Delete{" "}
                                <i className="bx bx-trash ms-2 text-muted"></i>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="conversation-name">
                  Jean Berwick{" "}
                  <small className="text-muted mb-0 ms-2">10:15am</small>
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list right">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-1.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <div className="p-3 border-primary border rounded-3">
                      <div className="d-flex align-items-center attached-file">
                        <div className="flex-shrink-0 avatar-sm me-3 ms-0 attached-file-avatar">
                          <div className="avatar-title bg-soft-primary text-primary rounded-circle font-size-20">
                            <i className="ri-attachment-2"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="text-start">
                            <h5 className="font-size-14 mb-1">
                              design-phase-1-approved.pdf
                            </h5>
                            <p className="text-muted text-truncate font-size-13 mb-0">
                              12.5 MB
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ms-4">
                          <div className="d-flex gap-2 font-size-20 d-flex align-items-start">
                            <div>
                              <Link to="#" className="text-muted">
                                <i className="bx bxs-download"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown align-self-start message-box-drop">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="collapse"
                        data-bs-target=".replyCollapse"
                      >
                        Reply <i className="bx bx-share ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target=".forwardModal"
                      >
                        Forward{" "}
                        <i className="bx bx-share-alt ms-2 text-muted"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Copy <i className="bx bx-copy text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Bookmark{" "}
                        <i className="bx bx-bookmarks text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        to="#"
                      >
                        Mark as Unread{" "}
                        <i className="bx bx-message-error text-muted ms-2"></i>
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                        to="#"
                      >
                        Delete <i className="bx bx-trash text-muted ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="conversation-name">
                  <span className="text-success me-1">
                    <i className="bx bx-check-double"></i>
                  </span>
                  <small className="text-muted mb-0 me-2">10:16am</small> You
                </div>
              </div>
            </div>
          </li>

          <li className="chat-list">
            <div className="conversation-list">
              <div className="chat-avatar">
                <img src="assets/images/users/avatar-7.jpg" alt="" />
              </div>

              <div className="user-chat-content">
                <div className="ctext-wrap">
                  <div className="ctext-wrap-content">
                    <p className="mb-0">
                      typing
                      <span className="animate-typing">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="conversation-name">Jean Berwick</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Conversation;
