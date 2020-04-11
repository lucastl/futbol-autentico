import React from 'react';
import Layout from '../components/layout';

import TablaPosiciones from '../components/tablaPosiciones';

const TablaPosicionesPage = () => {
    return ( 
        <Layout>
            <h1 className="title-tabla-pos-page">Tabla posiciones</h1>
            <TablaPosiciones />
        </Layout>
     );
}
 
export default TablaPosicionesPage;