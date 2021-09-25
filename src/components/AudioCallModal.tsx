import React from "react";

const AudioCallModal = () => {
  return (
    <div className="modal fade audiocallModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">
          <div className="modal-body p-0">
            <div className="text-center p-4 pb-0">
              <div className="avatar-xl mx-auto mb-4">
                <img
                  src="assets/images/users/avatar-7.jpg"
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>

              <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="avatar-md h-auto">
                  <button
                    type="button"
                    className="btn btn-light avatar-sm rounded-circle"
                  >
                    <span className="avatar-title bg-transparent text-muted font-size-20">
                      <i className="bx bx-microphone-off"></i>
                    </span>
                  </button>
                  <h5 className="font-size-11 text-uppercase text-muted mt-2">
                    Mute
                  </h5>
                </div>
                <div className="avatar-md h-auto">
                  <button
                    type="button"
                    className="btn btn-light avatar-sm rounded-circle"
                  >
                    <span className="avatar-title bg-transparent text-muted font-size-20">
                      <i className="bx bx-volume-full"></i>
                    </span>
                  </button>
                  <h5 className="font-size-11 text-uppercase text-muted mt-2">
                    Speaker
                  </h5>
                </div>
                <div className="avatar-md h-auto">
                  <button
                    type="button"
                    className="btn btn-light avatar-sm rounded-circle"
                  >
                    <span className="avatar-title bg-transparent text-muted font-size-20">
                      <i className="bx bx-user-plus"></i>
                    </span>
                  </button>
                  <h5 className="font-size-11 text-uppercase text-muted mt-2">
                    Add New
                  </h5>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-danger avatar-md call-close-btn rounded-circle"
                  data-bs-dismiss="modal"
                >
                  <span className="avatar-title bg-transparent font-size-24">
                    <i className="mdi mdi-phone-hangup"></i>
                  </span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-soft-primary mt-n4">
              <div className="mt-4 text-center">
                <h5 className="font-size-18 mb-0 text-truncate">
                  Jean Berwick
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCallModal;
