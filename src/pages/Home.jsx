import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home({ username }) {
    const [count, setCount] = useState(0);
    const [heading, setHeading] = useState('');
    const [foot, setFoot] = useState('');

    const showHeaderStatus = (headingValue) => {
        setHeading(headingValue)
    };
    const showFooterStatus = (footerValue) => {
        setFoot(footerValue)
    };

    return (
        <>
        <div>
            <Header
                countValue={count}
                StatustoParentFromHeader={showHeaderStatus} />
            <p>{heading}</p>
            <p>{username}</p>
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>

                <div className="flex space-x-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-green-600 text-white px-5 py-2 rounded-lg"
                    >
                        Increment
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-600 text-white px-5 py-2 rounded-lg"
                    >
                        Decrement
                    </button>
                </div>
            </div>

            <Footer
                StatustoParentFromFooter={showFooterStatus}
            />
        </div>
        <p>{foot}</p>
    </>
    )
}
