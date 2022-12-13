import React from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Quizzes = ({ quizzesData }) => {
    const correctState = (correctData) => {
        if (correctData === correctAnswer) {
            Swal.fire({
                title: 'এই তুমি পাশ!',
                text: 'নেক্সট!!!',
                imageUrl:
                    'data:image/jpeg;base64,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',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        } else {
            Swal.fire({
                title: 'আমার ভুল হইছে',
                text: 'ক্ষমা করে দিন!!!',
                imageUrl:
                    'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/311598820_124348537074481_1284031615471446631_n.jpg?stp=dst-jpg_p235x165&_nc_cat=111&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=NzFP16u7YGAAX8dLVZy&_nc_oc=AQlYrvonDsWyQWVQuVlBqNa8TnCCced6DOzabBN2jzdfgpX21mn2IOnGMV_-PKS0Bss&_nc_ht=scontent.fdac11-1.fna&oh=00_AT8gFKYMGgKpn7kvhJSebgf_ZquM_YYdJyyCPK6Ivvj4Yg&oe=634B23DC',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        }
    };
    const { correctAnswer, options, question } = quizzesData;

    const notify = () => {
        Swal.fire({
            title: 'এই সহজ-সিম্পল জিনিসটা পাড়লা না!!!',
            text: `Correct Ans Is: ${correctAnswer}`,
            imageUrl:
                'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/311641453_124351040407564_6683951597737098922_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=Jdzff-LwmEIAX8o7vr0&_nc_ht=scontent.fdac11-1.fna&oh=00_AT865T0nVJYq09lX9TCZ-AFYiZD4RpCxkS5qqRvfV75Q9A&oe=634BABBF',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    };
    return (
        <div className="bg-slate-200 w-3/4 mx-auto rounded-xl mb-10">
            <div className="text-center border-orange-500 relative rounded-xl py-5 font-semibold bg-slate-300 my-5">
                <h1 className="w-3/4 mx-auto">Quiz : {question}</h1>
                <div className="absolute top-5 right-5">
                    <button onClick={notify}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                    <ToastContainer />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 w-11/12 mx-auto justify-items-center">
                {options.map((option) => (
                    <Options
                        option={option}
                        correctState={correctState}></Options>
                ))}
            </div>
        </div>
    );
};

export default Quizzes;
