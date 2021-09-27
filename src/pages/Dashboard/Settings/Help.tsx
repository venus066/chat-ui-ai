import React from 'react';

// interface
import { BasicDetailsTypes } from "../../../data/settings";

interface HelpProps {

}
const Help = ({ }: HelpProps) => {
    return (
        <div className="accordion-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 px-0 pt-0">
                    <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">FAQs</a></h5>
                </li>
                <li className="list-group-item py-3 px-0">
                    <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">Contact</a></h5>
                </li>
                <li className="list-group-item py-3 px-0 pb-0">
                    <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">Terms & Privacy policy</a></h5>
                </li>
            </ul>
        </div>
    );
};

export default Help;