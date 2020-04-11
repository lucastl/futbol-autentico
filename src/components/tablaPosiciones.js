import React from 'react';
import Image from 'gatsby-image';

// Consultas a wordpress
import useClubes from '../consultas/consultaClubes';
import usePartidos from '../consultas/consultaPartidos';

const TablaPosiciones = () => {

    const clubes = useClubes();
    const partidos = usePartidos();

    // Obtengo todos los clubes
    let clubesWp = clubes.allWordpressWpClub.nodes;
    let clubesFinal = [];

    // Obtengo todos los partidos
    let partidosWp = partidos.allWordpressWpPartido.nodes;

    // Formateo datos para tabla
    for (const i in clubesWp) {

        clubesFinal.push({
            nombre: clubesWp[i].title,
            escudo: clubesWp[i].acf.escudo.localFile.childImageSharp.fluid,
            partidos: {
                ganados: 0,
                perdidos: 0,
                empatados: 0,
                goles_marcados: 0,
                goles_recibidos: 0,
                total: 0
            },
            puntos: 0
        });

    }

    // recorro clubes para calcular partidos, y puntajes
    for (const index in clubesFinal) {

        // recorro partidos de cada club
        for (const i in partidosWp) {

            if (partidosWp[i].acf.yaJugado) {

                // Verifico si es local            
                if (partidosWp[i].acf.local.post_title === clubesFinal[index].nombre) {

                    if (partidosWp[i].acf.goles_local > partidosWp[i].acf.goles_visitante) {

                        clubesFinal[index].partidos.goles_marcados = partidosWp[i].acf.goles_local;
                        clubesFinal[index].partidos.goles_recibidos = partidosWp[i].acf.goles_visitante;
                        clubesFinal[index].partidos.total = clubesFinal[index].partidos.total + 1;
                        clubesFinal[index].partidos.ganados = clubesFinal[index].partidos.ganados + 1;
                        clubesFinal[index].puntos = clubesFinal[index].puntos + 3

                    }

                    if (partidosWp[i].acf.goles_local < partidosWp[i].acf.goles_visitante) {

                        clubesFinal[index].partidos.goles_marcados = partidosWp[i].acf.goles_local;
                        clubesFinal[index].partidos.goles_recibidos = partidosWp[i].acf.goles_visitante;
                        clubesFinal[index].partidos.total = clubesFinal[index].partidos.total + 1;
                        clubesFinal[index].partidos.perdidos = clubesFinal[index].partidos.perdidos + 1;
                        clubesFinal[index].puntos = clubesFinal[index].puntos;

                    }

                    if (partidosWp[i].acf.goles_local === partidosWp[i].acf.goles_visitante) {

                        clubesFinal[index].partidos.goles_marcados = partidosWp[i].acf.goles_local;
                        clubesFinal[index].partidos.goles_recibidos = partidosWp[i].acf.goles_visitante;
                        clubesFinal[index].partidos.total = clubesFinal[index].partidos.total + 1;
                        clubesFinal[index].partidos.empatados = clubesFinal[index].partidos.empatados + 1;
                        clubesFinal[index].puntos = clubesFinal[index].puntos + 1;

                    }

                }

                // Verifico si es visitante            
                if (partidosWp[i].acf.visitante.post_title === clubesFinal[index].nombre) {

                    if (partidosWp[i].acf.goles_visitante > partidosWp[i].acf.goles_local) {

                        clubesFinal[index].partidos.goles_marcados = partidosWp[i].acf.goles_visitante;
                        clubesFinal[index].partidos.goles_recibidos = partidosWp[i].acf.goles_local;
                        clubesFinal[index].partidos.total = clubesFinal[index].partidos.total + 1;
                        clubesFinal[index].partidos.ganados = clubesFinal[index].partidos.ganados + 1;
                        clubesFinal[index].puntos = clubesFinal[index].puntos + 3

                    }

                    if (partidosWp[i].acf.goles_visitante < partidosWp[i].acf.goles_local) {

                        clubesFinal[index].partidos.goles_marcados = partidosWp[i].acf.goles_visitante;
                        clubesFinal[index].partidos.goles_recibidos = partidosWp[i].acf.goles_local;
                        clubesFinal[index].partidos.total = clubesFinal[index].partidos.total + 1;
                        clubesFinal[index].partidos.perdidos = clubesFinal[index].partidos.perdidos + 1;
                        clubesFinal[index].puntos = clubesFinal[index].puntos;

                    }

                    if (partidosWp[i].acf.goles_visitante === partidosWp[i].acf.goles_local) {

                        clubesFinal[index].partidos.goles_marcados = partidosWp[i].acf.goles_visitante;
                        clubesFinal[index].partidos.goles_recibidos = partidosWp[i].acf.goles_local;
                        clubesFinal[index].partidos.total = clubesFinal[index].partidos.total + 1;
                        clubesFinal[index].partidos.empatados = clubesFinal[index].partidos.empatados + 1;
                        clubesFinal[index].puntos = clubesFinal[index].puntos + 1;

                    }

                }

            }

        }

    }

    // Ordeno por puntos.
    clubesFinal.sort((a, b) => b.puntos - a.puntos);

    return (
        <>
            <section
                className="tabla-pos-wrap"
            >
                <table>

                    <thead>

                        <tr>
                            <th>Club</th>
                            <th>PJ</th>
                            <th>PG</th>
                            <th>PE</th>
                            <th>PP</th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>Pts</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            clubesFinal.map((club, i) => {

                                return (
                                    <>
                                    <tr
                                        key={i}
                                        style={ i < 8 ? 
                                            {
                                                borderBottom: '1vw solid rgba(207, 172, 54, 1)'
                                            }
                                            : null }
                                    >
                                        <td>
                                            <span>
                                                {club.nombre}
                                            </span>
                                            <Image
                                                fluid={club.escudo}
                                            />
                                        </td>
                                        <td>{club.partidos.total}</td>
                                        <td>{club.partidos.ganados}</td>
                                        <td>{club.partidos.empatados}</td>
                                        <td>{club.partidos.perdidos}</td>
                                        <td>{club.partidos.goles_marcados}</td>
                                        <td>{club.partidos.goles_recibidos}</td>
                                        <td>{club.puntos}</td>
                                    </tr>
                                    <span className="separator"/>
                                    </>
                                )

                            })
                        }

                    </tbody>

                </table>
            </section>
        </>
    );
}

export default TablaPosiciones;