import React from 'react'
import { useRouter } from "next/router";

const Servicios = () => {

    let Router = useRouter()

    return (
        <section className="pb-20 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">


                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center clickme" onClick={() => { Router.push('/proyectosinversion') }}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">
                            <div className="px-4 py-5 flex-auto ">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Proyectos de Inversion</h6>
                                <p className="mt-2 mb-4 text-blueGray-500 ">
                                    Los proyectos de inversión son iniciativas que buscan generar beneficios  mediante la utilización de recursos financieros
                                    en una actividad publica, privada o  social. En otras palabras, se trata de un proceso mediante el cual se evalúa la viabilidad
                                    de un proyecto con el fin de determinar si es conveniente invertir recursos financieros en él. Para un bien Social o para un
                                    rendimiento económico.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full md:w-4/12 px-4 text-center clickme" onClick={() => { Router.push('/mejoracontinua') }}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                    <i className="fas fa-retweet"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Mejora Continua</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    Es un sistema de gestión y producción que tiene como objetivo alcanzar los más altos estándares de calidad, eficiencia y flexibilidad.
                                    Muchas empresas en todo el mundo han adoptado
                                    Mejora Continua y han alcanzado un alto nivel de excelencia en la fabricación y servicio al cliente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center clickme" onClick={() => { Router.push('/liderazgo') }}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                    <i className="fas fa-users"></i>

                                </div>
                                <h6 className="text-xl font-semibold">Liderazgo (LEAP)</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    El entrenamiento Leadership Engagement Alignment Performance (LEAP) está diseñado para ayudar a las empresas a desarrollar habilidades de liderazgo y
                                    mejorar el rendimiento empresarial mediante la implementación de la metodología LEAP.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center clickme" onClick={() => { Router.push('/logistica') }}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Logistica</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    La mejora integral del proceso logístico de una empresa implica optimizar cada aspecto del proceso, desde la gestión del inventario hasta
                                    la entrega del producto final. Utilizando herramientas y tecnologías adecuadas, junto con la colaboración con proveedores y una capacitación
                                    adecuada del personal, se puede lograr una cadena de suministro más eficiente, rentable y orientada al cliente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center clickme" onClick={() => { Router.push('/supplychain') }} >
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                    <i className="fas fa-link"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Supply Chain</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    Mejorar la cadena de suministro implica buscar formas de optimizar y eficientizar cada uno de estos procesos para reducir costos, aumentar la
                                    velocidad y mejorar la calidad del servicio al cliente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center clickme">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <i className="fas fa-headphones"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Asesoramiento Continuo</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    Siempre estamos en permanente contacto con nuestros clientes, para sastisfacer todas sus dudas y brinda un asesoramiento adecuado.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <i className="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            Trabaja con nosotros, no lo dudes.
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            Para nosotros no sos un cliente, sos un amigo. Escuchamos tus propuestas y te
                            asesoramos para que puedas triunfar con tus proyectos.
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            Tenemos una gran gama de herramientas que se ajustan a tus nesecidades.
                        </p>

                    </div>

                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                            <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block h-95-px -top-94-px"
                                >
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-blueGray-700 fill-current"
                                    ></polygon>
                                </svg>
                                <div className="container px-4 mx-auto">
                                    <div className="flex flex-wrap">

                                        <div className="w-full px-4 md:w-12/12">
                                            <h4 className="text-xl font-bold text-white">
                                                Si estas interesado, contactanos
                                            </h4>
                                        </div>

                                        <div className="w-1/2 px-4 md:w-8/12">
                                            <a href="#contacto" className="mt-4 bg-blueGray-200 text-black active:bg-blueGray-600  font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                Contacto
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios