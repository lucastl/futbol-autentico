import { graphql, useStaticQuery } from 'gatsby';

const usePartidos = () => {

    const partidos = useStaticQuery(graphql`
        query Partidos {
            allWordpressWpPartido {
            nodes {
                acf {
                    local {
                        post_title
                    }
                    goles_local
                    visitante {
                        post_title
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
