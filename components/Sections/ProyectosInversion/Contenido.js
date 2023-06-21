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
                            src="img/pinvcon.jpg"
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">

                            <h3 className="text-3xl font-semibold">¿Por que Proyectos de Inversion?</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Los proyectos de inversión son iniciativas que buscan generar beneficios  mediante la utilización de recursos financieros en una actividad publica,
                                privada o  social. En otras palabras, se trata de un proceso mediante el cual se evalúa la viabilidad de un proyecto con el fin de determinar si es
                                conveniente invertir recursos financieros en él. Para un bien Social o para un rendimiento económico.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Para realizar un proyecto de esta envergadura, nos enfocamos en las siguientes areas:
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
                                    Inversiones:
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
                                                Capex-Opex - Cash Flow
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
                                                Punto de Equilibrio
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
                                                Alternativas
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
                                                Soluciones
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
                                                Opciones (FCI, ON, Acciones, otras)
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
                                                Planes de Negocios
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
                                    Rentabilidad:
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
                                                Punto de Equilibrio
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
                                                VAN TIN TOR
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
                                                Resultados
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
                                                Financiamiento
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
                                                Analisis de Sensibilidad
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
                                    Costos:
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
                                                Costos - Dashboard
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
                                                Capital de Trabajo
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
                                                Deployment
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
                                                Gestión por costos
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
                                                Amortización
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
                                    Localizacion:
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
                                                Mercados Exportación
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
                                                Disponibilidad de recursos
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
                                                Costos y disponibilidad de Zonas
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
                                                Estructura impositiva & Legal
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
                                                Impacto Ambiental
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
                                                Medios de Transporte
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
                                                Energías
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
                                    Project Management:
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
                                                Alcance del proyecto
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
                                                Gestión de los costos
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
                                                Gestión del Tiempo & Recursos
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
                                                Gestión de Proveedores
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
                                                Gestión de la calidad del proyecto.
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
                                                Gestión de la Ejecución.
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <Image
                        url={"ejemplos/proyectos/1.webp"}
                        alt="Proyectos de Inversion"
                    />

                    <Image
                        url={"ejemplos/proyectos/2.jpg"}
                        alt="Proyectos de Inversion"
                    />

                    <Image
                        url={"ejemplos/proyectos/3.avif"}
                        alt="Proyectos de Inversion"
                    />

                    <Image
                        url={"ejemplos/proyectos/4.png"}
                        alt="Proyectos de Inversion"
                    />



                </div>
            </div>

        </section>
    )
}

export default Contenido