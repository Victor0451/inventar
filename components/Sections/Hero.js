import React from 'react'

const Hero = () => {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
                className="absolute top-0 bottom-0 w-full h-full bg-center "
                style={{
                    backgroundImage:
                        "url('img/investar.png')",
                }}
            >
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-75 "
                ></span>
            </div>

            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            {/* <h1 className="text-white font-semibold text-5xl">
                                Invest - AR
                            </h1> */}
                            {/* <p className="mt-4 text-lg text-blueGray-200">
                                This is a simple example of a Landing Page you can build
                                using Notus NextJS. It features multiple CSS components
                                based on the Tailwind CSS design system.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero