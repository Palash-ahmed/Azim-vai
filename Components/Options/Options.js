import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctState }) => {
    return (
        <div className="border-2 w-full mb-4 text-center border-teal-600 hover:bg-slate-100 bg-white rounded-xl shadow-2xl">
            <div className="form-control">
                <label
                    onClick={() => correctState(option)}
                    className="label cursor-pointer">
                    <span className="label-text text-center py-3 px-4">
                        {option}
                    </span>
                    <input
                        type="radio"
                        name="radio-6"
                        className="radio checked:bg-teal-500"
                    />
                </label>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Options;
