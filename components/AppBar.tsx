'client';

import React from "react";
import {BiMenu} from "react-icons/bi";


export default function AppBar() {

    return (
        <React.Fragment>
            <header
            className='
            border-b
            flex
            justify-around
            py-2

            '
            >
                <div
                    className='
                    w-[70%]
                    py-5
                    '
                >
                    <h1
                        className='
                        text-center
                        font-semibold
                        '
                    >
                        Financial App
                    </h1>
                </div>
                <div className={'flex justify-between hidden '}>
                    <div>
                        <button
                            className='
                            bg-black
                            text-white
                            p-2
                            rounded-md
                            hover:opacity-80

                            '
                        >
                            Sign In
                        </button>
                    </div>
                    <button
                        className='
                        text-2xl

                        text-
                        p-2
                        rounded-md
                        hover:opacity-80
                        hover:bg-gray-400
                        '
                    >
                        <BiMenu />
                    </button>
                </div>
            </header>
        </React.Fragment>
    )
}