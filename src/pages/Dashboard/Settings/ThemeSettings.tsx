import React, { useState } from 'react';

// interface
import { ThemeTypes } from "../../../data/settings";

interface ThemeColorTypes {
    id: string,
    color: string,
}

interface FormCheckProps {
    color: ThemeColorTypes;
    selected: ThemeColorTypes;
    onChange: (color: ThemeColorTypes) => void;
}
const FormCheck = ({ color, selected, onChange }: FormCheckProps) => {
    return (
        <div className="form-check">
            <input className="form-check-input theme-color" type="radio" name="bgcolor-radio" id={color.id} />
            <label className="form-check-label avatar-xs" htmlFor={color.id}>
                <span className={"avatar-title bg-blue rounded-circle theme-btn " + color.color}></span>
            </label>
        </div>
    );
};

interface ThemeSettingsProps {
    theme: ThemeTypes;
}
const ThemeSettings = ({ theme }: ThemeSettingsProps) => {

    const themeColors: ThemeColorTypes[] = [
        {
            id: "bgcolor-radio1",
            color: 'bg-blue',
        },
        {
            id: "bgcolor-radio2",
            color: 'bg-info',
        },
        {
            id: "bgcolor-radio3",
            color: 'bg-purple',
        },
        {
            id: "bgcolor-radio4",
            color: 'bg-pink',
        },
        {
            id: "bgcolor-radio5",
            color: 'bg-danger',
        },
        {
            id: "bgcolor-radio6",
            color: 'bg-secondary',
        }
    ];
    const [selected, setSelected] = useState<ThemeColorTypes>(themeColors[0]);
    const onChangeThemeColor = (color: ThemeColorTypes) => {
        setSelected(color);
    };
    return (
        <div className="accordion-body">
            <div>
                <h5 className="mb-3 font-size-11 text-muted text-uppercase">Choose Theme Color :</h5>
                <div className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-color-list">
                    {
                        (themeColors || []).map((color: ThemeColorTypes, key: number) =>
                            <FormCheck
                                color={color}
                                key={key}
                                selected={selected}
                                onChange={onChangeThemeColor}
                            />
                        )
                    }
                </div>
            </div>

            <div className="mt-4 pt-2">
                <h5 className="mb-3 font-size-11 text-muted text-uppercase">Choose Theme Image :</h5>
                <div className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-btn-list-img">
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio1" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio1">
                            <span className="avatar-title bg-pattern-1 rounded-circle theme-btn bgimg-radio1"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio2" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio2">
                            <span className="avatar-title bg-pattern-2 rounded-circle theme-btn bgimg-radio2"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio3" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio3">
                            <span className="avatar-title bg-pattern-3 rounded-circle theme-btn bgimg-radio3"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio4" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio4">
                            <span className="avatar-title bg-pattern-4 rounded-circle theme-btn bgimg-radio4"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio5" checked />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio5">
                            <span className="avatar-title bg-pattern-5 rounded-circle theme-btn bgimg-radio5"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio6" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio6">
                            <span className="avatar-title bg-pattern-6 rounded-circle theme-btn bgimg-radio6"></span>
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio7" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio7">
                            <span className="avatar-title bg-pattern-7 rounded-circle theme-btn bgimg-radio7"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio8" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio8">
                            <span className="avatar-title bg-pattern-8 rounded-circle theme-btn bgimg-radio8"></span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio9" />
                        <label className="form-check-label avatar-xs" htmlFor="bgimg-radio9">
                            <span className="avatar-title bg-pattern-9 rounded-circle theme-btn bgimg-radio9"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;