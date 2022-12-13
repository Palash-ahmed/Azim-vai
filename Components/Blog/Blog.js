import React from 'react';

const Blog = () => {
    return (
        <div className="h-[95%] pb-7 w-4/5 mx-auto">
            <h1 className="text-center font-bold text-2xl text-purple-500 my-3">
                Frequency ask question
            </h1>
            <div class="mt-5 flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                <label class="grow px-4 py-3 font-medium" for="collapse">
                    What is the purpose of React Router?
                </label>
                <input
                    class="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox"
                    name="collapse"
                    id="collapse"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
                <div class="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                    React Router is a standard library for routing in React. It
                    enables the navigation among views of various components in
                    a React Application, allows changing the browser URL, and
                    keeps the UI in sync with the URL.
                </div>
            </div>

            <div class="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                <label class="grow px-4 py-3 font-medium" for="collapse2">
                    How does context api work?
                </label>
                <input
                    class="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox"
                    name="collapse2"
                    id="collapse2"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
                <div class="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                    The React Context API is a way for a React app to
                    effectively produce global variables that can be passed
                    around. This is the alternative to "prop drilling" or moving
                    props from grandparent to child to parent, and so on.
                    Context is also touted as an easier, lighter approach to
                    state management using Redux.
                </div>
            </div>
            <div class="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                <label class="grow px-4 py-3 font-medium" for="collapse3">
                    What is useHref()?
                </label>
                <input
                    class="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox"
                    name="collapse3"
                    id="collapse3"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
                <div class="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                    The useHref hook returns a URL that may be used to link to
                    the given to location, even outside of React Router. Tip:
                    You may be interested in taking a look at the source for the
                    Link component in react-router-dom to see how it uses
                    useHref internally to determine its own href value.
                </div>
            </div>
        </div>
    );
};

export default Blog;
