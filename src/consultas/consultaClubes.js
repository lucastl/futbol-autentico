import { graphql, useStaticQuery } from 'gatsby';

const useClubes = () => {

    const clubes = useStaticQuery(graphql`
        query Clubes {
            allWordpressWpClub {
            nodes {
                title
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
            }
        }
    `)

    return clubes;
}

export default useClubes;