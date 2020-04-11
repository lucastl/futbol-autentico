import React, { useState } from 'react'

import Image from 'gatsby-image';

import usePartidos from '../consultas/consultaPartidos';
import useFechas from '../consultas/consultaFechas';

const CalendarioPartidos = () => {

    const [currentFecha, setCurrentFecha] = useState(1)

    const partidos = usePartidos();
    const fechas = useFechas();

    const { allWordpressWpPartido: { nodes } } = partidos;

    return (
        <>
            <h3 className="title-fechas">Fechas</h3>
            <nav className="nav-fechas">
                <ul>
                    {
                        fechas.allWordpressWpFecha.nodes.map((fecha, i) => (

                            <li
                                key={i}
                                className={ currentFecha == fecha.name ? 'fecha-active' : null}
                                onClick={
                                    () => setCurrentFecha(fecha.name)
                                }
                            >
                                {fecha.name}
                            </li>

                        ))
                    }
                </ul>
            </nav>
            <section
                className="partidos-wrap"
            >

                {
                    nodes.map((partido, index) => {

                        return partido.acf.fecha == currentFecha ? (

                            <>

                                <article
                                    key={index}
                                    className="partido"
                                >

                                    <div className="club local">

                                        <h3>{partido.acf.local.post_title}</h3>

                                        <Image
                                            fluid={partido.acf.local.acf.escudo.localFile.childImageSharp.fluid}
                                        />

                                    </div>

                                    <div className="scores">

                                        <span className="goles-local">
                                            {partido.acf.goles_local}
                                        </span>
                                        <small>
                                            VS
                                    </small>
                                        <span className="goles-visitante">
                                            {partido.acf.goles_visitante}
                                        </span>

                                    </div>

                                    <div className="club visitante">

                                        <h3> {partido.acf.visitante.post_title} </h3>

                                        <Image
                                            fluid={partido.acf.visitante.acf.escudo.localFile.childImageSharp.fluid}
                                        />

                                    </div>

                                </article>

                                <hr />

                            </>

                        ) : null
                    })
                }

            </section>
        </>
    );
}

export default CalendarioPartidos;