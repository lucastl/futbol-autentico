import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

const CalendarioPartidos = () => {

    const partidos = useStaticQuery(graphql`
        query Calendario {
            allWordpressWpPartido {
            nodes {
                acf {
                fecha
                dia_juego
                local {
                    post_title
                    acf {
                    escudo {
                        localFile {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    }
                }
                goles_local
                visitante {
                    post_title
                    acf {
                    escudo {
                        localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        }
                    }
                    }
                }
                goles_visitante
                yaJugado
                }
            }
            }
        }
    `)

    const { allWordpressWpPartido: { nodes } } = partidos;

    return (
        <>
            <h2>Calendario</h2>
            <section
                className="partidos-wrap"
                css={css`
                    

                    // Si es mayor a 768px
                    @media (min-width: 768px) {

                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: center;
                        align-items: center;

                    }

                `}
            >

                {
                    nodes.map((partido, index) => {

                        return partido.acf.fecha ? (

                            <article
                                key={index}
                                className="partido"
                                css={css`
                                    
                                    margin: 1% auto;
                                    background: rgba(0,0,0,.2);
                                    padding: 1%;
                                    border-radius: 1em;
    
                                    // Si es mayor a 768px
                                    @media (min-width: 768px) {
    
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        align-content: center;
                                        width: 50%;
    
                                    }
    
                                `}
                            >

                                <div
                                    className="club local"
                                    css={css`
                                        
    
                                        // Si es mayor a 768px
                                        @media (min-width: 768px) {
    
                                            width: 33.33%;
                                            text-align: center;
    
                                        }
    
                                    `}
                                >

                                    <h3
                                        css={css`
                                                
                                            font-weight: 100;
                                            margin-bottom: 5%;
    
                                            // Si es mayor a 768px
                                            @media (min-width: 768px) {
    
                                                
    
                                            }
    
                                        `}
                                    >
                                        {partido.acf.local.post_title}
                                    </h3>

                                    <Image
                                        fluid={partido.acf.local.acf.escudo.localFile.childImageSharp.fluid}
                                        css={css`
                                            
    
                                            // Si es mayor a 768px
                                            @media (min-width: 768px) {
    
                                                width: 20%;
                                                margin: 0 auto;
    
                                            }
    
                                        `}
                                    />

                                </div>

                                <div
                                    className="scores"
                                    css={css`
                                        
                                        font-size: 3em;
                                        font-weight: 700;
    
                                        // Si es mayor a 768px
                                        @media (min-width: 768px) {
    
                                            width: 33.33%;
                                            display: flex;
                                            justify-content: space-evenly;
                                            align-items: center;
    
                                        }
    
                                    `}
                                >

                                    <span className="goles-local">
                                        {partido.acf.goles_local}
                                    </span>
                                    <small
                                        css={css`
                                                
                                            font-size: .25em;
    
                                            // Si es mayor a 768px
                                            @media (min-width: 768px) {
    
                                            }
    
                                        `}
                                    >
                                        VS
                                    </small>
                                    <span className="goles-visitante">
                                        {partido.acf.goles_visitante}
                                    </span>

                                </div>

                                <div
                                    className="club visitante"
                                    css={css`
                                        
    
                                        // Si es mayor a 768px
                                        @media (min-width: 768px) {
    
                                            width: 33.33%;
                                            text-align: center;
    
                                        }
    
                                    `}
                                >

                                    <h3
                                        css={css`
                                                
                                            font-weight: 100;
                                            margin-bottom: 5%;
    
                                            // Si es mayor a 768px
                                            @media (min-width: 768px) {
    
                                                
    
                                            }
    
                                        `}
                                    >
                                        {partido.acf.visitante.post_title}
                                    </h3>

                                    <Image
                                        fluid={partido.acf.visitante.acf.escudo.localFile.childImageSharp.fluid}
                                        css={css`
                                            
    
                                            // Si es mayor a 768px
                                            @media (min-width: 768px) {
    
                                                width: 20%;
                                                margin: 0 auto;
    
                                            }
    
                                        `}
                                    />

                                </div>

                            </article>

                        ) : null
                    })
                }

            </section>
        </>
    );
}

export default CalendarioPartidos;