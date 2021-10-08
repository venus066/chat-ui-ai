import React from 'react';

interface BasicDetailsProps {
    chatUserDetails: any;
}
const BasicDetails = ({ chatUserDetails }: BasicDetailsProps) => {
    return (
        <>
            <div className="text-muted pt-4">
                <h5 className="font-size-11 text-uppercase">Status :</h5>
                <p className="mb-4">
                    If several languages coalesce, the grammar of the resulting.
                </p>
            </div>
            <div className="pb-2">
                <h5 className="font-size-11 text-uppercase mb-2">Info :</h5>
                <div>
                    <div className="d-flex align-items-end">
                        <div className="flex-grow-1">
                            <p className="text-muted font-size-14 mb-1">Name</p>
                        </div>
                        <div className="flex-shrink-0">
                            <button type="button" className="btn btn-sm btn-soft-primary">
                                Edit
                            </button>
                        </div>
                    </div>
                    <h5 className="font-size-14">Jean Berwick</h5>
                </div>

                <div className="mt-4">
                    <p className="text-muted font-size-14 mb-1">Email</p>
                    <h5 className="font-size-14">adc@123.com</h5>
                </div>

                <div className="mt-4">
                    <p className="text-muted font-size-14 mb-1">Location</p>
                    <h5 className="font-size-14 mb-0">California, USA</h5>
                </div>
            </div>
        </>
    );
};

export default BasicDetails;