import React from "react";

const ContactModal = () => {
  return (
    <div className="modal fade contactModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contacts</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control bg-light border-0 pe-0"
                placeholder="Search here.."
                aria-label="Example text with button addon"
                aria-describedby="contactSearchbtn-addon"
              />
              <button
                className="btn btn-light"
                type="button"
                id="contactSearchbtn-addon"
              >
                <i className="bx bx-search align-middle"></i>
              </button>
            </div>

            <div className="d-flex align-items-center px-1">
              <div className="flex-grow-1">
                <h4 className=" font-size-11 text-muted text-uppercase">
                  Contacts
                </h4>
              </div>
            </div>
            <div
              className="contact-modal-list mx-n4 px-1"
              data-simplebar
              style={{ maxHeight: "200px" }}
            >
              <div>
                <div className="contact-list-title">A</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Allison Etter</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list A */}

              <div className="mt-3">
                <div className="contact-list-title">C</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Craig Smiley</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list C */}

              <div className="mt-3">
                <div className="contact-list-title">D</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Daniel Clay</h5>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Doris Brown</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list D */}

              <div className="mt-3">
                <div className="contact-list-title">I</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Iris Wells</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list I */}

              <div className="mt-3">
                <div className="contact-list-title">J</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Juan Flakes</h5>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">John Hall</h5>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Joy Southern</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list J */}

              <div className="mt-3">
                <div className="contact-list-title">M</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Mary Farmer</h5>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Mark Messer</h5>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Michael Hinton</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list M */}

              <div className="mt-3">
                <div className="contact-list-title">O</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list O */}

              <div className="mt-3">
                <div className="contact-list-title">P</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Paul Haynes</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list P */}

              <div className="mt-3">
                <div className="contact-list-title">R</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list R */}

              <div className="mt-3">
                <div className="contact-list-title">S</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Sara Muller</h5>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Simon Velez</h5>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5 className="font-size-14 m-0">Steve Walker</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end contact list S */}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-link"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-send align-middle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
