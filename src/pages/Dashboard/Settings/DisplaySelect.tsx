import React from 'react';

// constants
import { DisplayTypes, DisplayOpt, DISPLAY_TYPES } from "../../../constants/index";

interface DisplaySelectProps {
    value: string;
    onChange: any;
    label: string;
}
const DisplaySelect = ({ value, onChange, label }: DisplaySelectProps) => {
    return (
        <div className="d-flex align-items-center">
            <div className="flex-grow-1 overflow-hidden">
                <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>
            </div>
            <div className="flex-shrink-0 ms-2">
                <select value={value} className="form-select form-select-sm">
                    {
                        (DisplayTypes || []).map((option: DisplayOpt, key: number) =>
                            <option value={option.value}>{option.label}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default DisplaySelect;