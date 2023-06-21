import React from 'react'
import { useRouter } from "next/router";

const Nosotros = () => {

    let Router = useRouter()

    return (
        <section className="pb-20 mb-24 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap items-center mt-32">
                    <div className="mt-20 w-full md:w-5/6 px-4 mr-auto ml-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full ">
                            <i className="fas fa-user-friends text-xl"></i>
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            ¿Quienes Somos?
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            Somos una empresa cuya mision es brindar servicios de consultoría especializada en ideacion de proyectos, inversiones y mejora continua, ayudando a nuestros clientes a alcanzar sus
                            objetivos empresariales de manera eficiente y rentable. Nos comprometemos a ofrecer soluciones personalizadas y orientadas a resultados,
                            basadas en un profundo conocimiento de las mejores prácticas de gestión y enfoques innovadores. Trabajamos en estrecha colaboración con nuestros
                            clientes para impulsar su crecimiento, optimizar sus procesos y potenciar su ventaja competitiva.
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            Nuestra visión es convertirnos en la consultora reconocida a nivel local y nacional en el ámbito de negocios, ideacion, proyectos, inversiones y mejora continua. Aspiramos a ser el
                            socio estratégico preferido por las empresas he instituciones que buscan alcanzar el éxito y la excelencia en sus operaciones y proyectos. Nos esforzamos por ser reconocidos por nuestra experiencia,
                            nuestra capacidad para brindar soluciones innovadoras y nuestro compromiso inquebrantable con la satisfacción del cliente. Buscamos establecer relaciones de largo plazo basadas en la confianza mutua y el éxito compartido.
                        </p>

                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            El alcance de nuestra empresa consultora de proyectos, inversiones y mejora continua e ideas de negocios abarca los siguientes servicios y áreas de especialización:
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Nosotros