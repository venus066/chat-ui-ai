import React from 'react';

// interface
import { PrivacyTypes } from "../../../data/settings";

interface PrivacyProps {
    privacy: PrivacyTypes;
}
const Privacy = ({ privacy }: PrivacyProps) => {
    return (
        <div className="accordion-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 px-0 pt-0">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-13 mb-0 text-truncate">Profile photo</h5>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <select className="form-select form-select-sm">
                                <option value="Everyone" selected>Everyone</option>
                                <option value="Selected">Selected</option>
                                <option value="Nobody">Nobody</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="list-group-item py-3 px-0">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-13 mb-0 text-truncate">Last seen</h5>

                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <div className="form-check form-switch">
                                <input type="checkbox" className="form-check-input" id="privacy-lastseenSwitch" checked />
                                <label className="form-check-label" htmlFor="privacy-lastseenSwitch"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item py-3 px-0">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-13 mb-0 text-truncate">Status</h5>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <select className="form-select form-select-sm">
                                <option value="Everyone" selected>Everyone</option>
                                <option value="Selected">Selected</option>
                                <option value="Nobody">Nobody</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="list-group-item py-3 px-0">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-13 mb-0 text-truncate">Read receipts</h5>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <div className="form-check form-switch">
                                <input type="checkbox" className="form-check-input" id="privacy-readreceiptSwitch" checked />
                                <label className="form-check-label" htmlFor="privacy-readreceiptSwitch"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item py-3 px-0 pb-0">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>

                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <select className="form-select form-select-sm">
                                <option value="Everyone" selected>Everyone</option>
                                <option value="Selected">Selected</option>
                                <option value="Nobody">Nobody</option>
                            </select>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Privacy;