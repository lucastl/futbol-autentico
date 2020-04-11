import { graphql, useStaticQuery } from 'gatsby';

const useFechas = () => {

    const fechas = useStaticQuery(graphql`
        query Fechas {
            allWordpressWpFechaCalendario {
            nodes {
                name
            }
            }
        }
    `)

    return fechas;
}

export default useFechas;