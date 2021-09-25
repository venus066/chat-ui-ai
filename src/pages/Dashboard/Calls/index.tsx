import React, { useEffect, useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import LeftbarTitle from "../../../components/LeftbarTitle";

// actions
import { getCalls } from "../../../redux/actions";


interface IndexProps { }
const Index = (props: IndexProps) => {
  const dispatch = useDispatch();

  const { calls } = useSelector(
    (state: any) => ({
      calls: state.Calls.calls,
    })
  );

  // get user calls
  useEffect(() => {
    dispatch(getCalls());
  }, [dispatch]);

  const [callsList, setCallsList] = useState([]);

  useEffect(() => {
    setCallsList(calls);
  }, [calls]);
  console.log("callsList ", callsList);

  return (
    <div>
      <LeftbarTitle title="Calls" />
      {/* end p-4 */}

      {/* Start contact lists */}
      <AppSimpleBar className="chat-message-list chat-call-list">
        <ul className="list-unstyled chat-list">
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <img src="assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Patrick Hendricks</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-left-down-fill text-success align-bottom"></i> 14 Aug, 2021, 09:28AM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">02:34</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <img src="assets/images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Steven Jury</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-right-up-fill text-danger align-bottom"></i> 13 Aug, 2021, 06:45PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">01:02</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".audiocallModal"><i className="bx bxs-phone-call align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 avatar-xs me-2">
                <span className="avatar-title rounded-circle bg-danger text-white">
                  RL
                </span>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Robert Ledonne</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-left-down-fill text-success align-bottom"></i> 13 Aug, 2021, 04:30PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">01:40</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <img src="assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Brian Cote</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-left-down-fill text-success align-bottom"></i> 13 Aug, 2021, 04:30PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">00:40</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <img src="assets/images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Nicholas Staten</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-right-up-fill text-danger align-bottom"></i> 13 Aug, 2021, 03:10PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">05:20</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".audiocallModal"><i className="bx bxs-phone-call align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 avatar-xs me-2">
                <span className="avatar-title rounded-circle bg-primary text-white">
                  JP
                </span>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">James Pinard</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-right-up-fill text-danger align-bottom"></i> 13 Aug, 2021, 01:05PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">10:12</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <img src="assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Jessica Lewis</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-left-down-fill text-success align-bottom"></i> 13 Aug, 2021, 11:34AM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">06:05</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <div className="avatar-group">
                  <div className="avatar-group-item">
                    <div className="avatar-xs">
                      <img src="assets/images/users/avatar-9.jpg" alt="" className="img-fluid rounded-circle" />
                    </div>
                  </div>{/* end avatar group item */}
                  <div className="avatar-group-item">
                    <div className="avatar-xs">
                      <div className="avatar-title rounded-circle bg-light text-primary">
                        2+
                      </div>
                    </div>
                  </div>{/* end avatar group item */}
                </div>{/* end avatar-group */}
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">John Foss</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-right-up-fill text-danger align-bottom"></i> 12 Aug, 2021, 07:35PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">03:20</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".audiocallModal"><i className="bx bxs-phone-call align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <div className="avatar-group">
                  <div className="avatar-group-item">
                    <div className="avatar-xs">
                      <span className="avatar-title rounded-circle bg-primary text-white">
                        JP
                      </span>
                    </div>
                  </div>{/* end avatar group item */}
                  <div className="avatar-group-item">
                    <div className="avatar-xs">
                      <div className="avatar-title rounded-circle bg-light text-primary">
                        4+
                      </div>
                    </div>
                  </div>{/* end avatar group item */}
                </div>{/* end avatar-group */}
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">James Pinard</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-right-up-fill text-danger align-bottom"></i> 12 Aug, 2021, 04:04PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">00:00</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <div className="avatar-group">
                  <div className="avatar-group-item">
                    <div className="avatar-xs">
                      <img src="assets/images/users/avatar-5.jpg" alt="" className="img-fluid rounded-circle" />
                    </div>
                  </div>{/* end avatar group item */}
                  <div className="avatar-group-item">
                    <div className="avatar-xs">
                      <div className="avatar-title rounded-circle bg-light text-primary">
                        4+
                      </div>
                    </div>
                  </div>{/* end avatar group item */}
                </div>{/* end avatar-group */}
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Steven Jury</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-right-up-fill text-danger align-bottom"></i> 12 Aug, 2021, 02:45PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">04:50</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".audiocallModal"><i className="bx bxs-phone-call align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 avatar-xs me-2">
                <span className="avatar-title rounded-circle bg-danger text-white">
                  RL
                </span>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Robert Ledonne</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-left-down-fill text-success align-bottom"></i> 11 Aug, 2021, 04:30PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">02:30</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="chat-user-img flex-shrink-0 me-2">
                <img src="assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-truncate mb-0">Brian Cote</p>
                <div className="text-muted font-size-12 text-truncate"><i className="ri-arrow-left-down-fill text-success align-bottom"></i> 11 Aug, 2021, 04:30PM</div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <h5 className="mb-0 font-size-12 text-muted">01:55</h5>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link p-0 font-size-20 stretched-link" data-bs-toggle="modal" data-bs-target=".videocallModal"><i className="bx bx-video align-middle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </AppSimpleBar>
      {/* end contact lists */}
    </div>
  );
};

export default Index;
