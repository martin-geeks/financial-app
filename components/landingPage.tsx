import Image from "next/image";

import financialsImage from '@/media/financials.jpg'


export default function LandingPage() {

    return (
        <>
            <div
                className={`
                
                `}
            >
                <div>
                    <h1 className={'text-center text-xl'}>
                        <span

                        className='text-4xl font-extrabold text-yellow-500'
                        >
                            Fa
                        </span>
                        App
                    </h1>

                </div>

                <p
                    className='
                        font-light
                        text-center

                    '
                >

                    A financial app that focuses on tracking income and expenses. It also offers creditors and debtors calculations and visual presentations of the data. Your data can be exported to spreadsheets.
                </p>
            </div>
        </>
    )
}