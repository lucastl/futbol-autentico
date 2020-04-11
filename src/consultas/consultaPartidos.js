import { graphql, useStaticQuery } from 'gatsby';

const usePartidos = () => {

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

    return partidos;
}

export default usePartidos;
