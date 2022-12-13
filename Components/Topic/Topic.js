import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ quizzes }) => {
    const { id, name, logo, total } = quizzes;
    return (
        <div>
            <div className="flex h-screen items-center justify-center px-8">
                <div className="max-w-sm overflow-hidden rounded-xl bg-purple-600 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                    <img src={logo} alt="plant" className="h-auto w-full" />
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold text-white">
                            {name}
                        </h1>
                        <p className="text-medium mb-5 mt-3 text-white">
                            Total Quiz: {total}
                        </p>
                        <Link to={`quiz/${id}`}>
                            <button className="w-full rounded-md bg-teal-500  py-2 text-white font-semibold hover:bg-indigo-500 hover:shadow-md duration-75">
                                Start Quiz
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;
