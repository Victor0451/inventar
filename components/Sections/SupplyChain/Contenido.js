import React from 'react'
import { Image } from '../Image'


const Contenido = () => {
    return (
        <section className="relative py-20">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src="img/suchacont.jpg"
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">

                            <h3 className="text-3xl font-semibold">Supply Chain</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Mejorar la cadena de suministro implica buscar formas de optimizar y eficientizar cada uno de estos procesos para reducir costos, aumentar la velocidad
                                y mejorar la calidad del servicio al cliente.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                A continuacion, tenemos los procesos que se deben mejorar para mantener una cadena de suministros eficiente:
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20">
                <div className="items-center flex flex-wrap">

                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                        <div className="md:pr-12 ">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                                <i className="fas fa-sign-in-alt"></i>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                <u>
                                    Planeamiento:
                                </u>
                            </p>
                            <ul className="list-none mt-3">
                                <li className="py-2">

                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Sistemas ERP
                                            </h4>
                                        </div>

                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                MRP I & MRPII
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Forecast
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Planeamiento – Demand Planning
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Cuellos de Botella
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Análisis de Flujo
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                        <div className="md:pr-12 ">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                                <i className="fas fa-sign-in-alt"></i>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                <u>
                                    Inventario:
                                </u>
                            </p>
                            <ul className="list-none mt-3">
                                <li className="py-2">

                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Tipos de inventario
                                            </h4>
                                        </div>

                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Costos de Inventario
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Perdidas
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Almacenamiento
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Ciclo
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                                <i className="fas fa-sign-out-alt"></i>
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                <u>
                                    Reabastecimiento:
                                </u>
                            </p>
                            <ul className="list-none mt-3">
                                <li className="py-2">

                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Ciclico
                                            </h4>
                                        </div>

                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Temporada
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Tipo de Rotacion
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Costos
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Planificacion
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Proveedores
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="items-center flex flex-wrap mt-12">

                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
                        <div className="md:pr-12 ">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                                <i className="fas fa-sign-in-alt"></i>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                <u>
                                    Cadena de Valor:
                                </u>
                            </p>
                            <ul className="list-none mt-3">
                                <li className="py-2">

                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                KPI
                                            </h4>
                                        </div>

                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Gestion
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Management
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Flujo de Proceso
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Perdidas
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <i class="fas fa-hand-point-right"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Sistemas
                                            </h4>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <Image
                        url={"ejemplos/supply/1.png"}
                        alt="Supply "
                    />

                    <Image
                        url={"ejemplos/supply/2.png"}
                        alt="Supply "
                    />

                    <Image
                        url={"ejemplos/supply/3.jpg"}
                        alt="Supply "
                    />


                </div>
            </div>

        </section>
    )
}

export default Contenido