import React from 'react';
import { css } from '@emotion/core';

import Nav from './nav';

const Header = () => {

    return (
        <header
            css={css`
                background-color: rgba(0,120,0,.8);

                // Si es mayor a 768px
                @media (min-width: 768px) {

                }

            `}
        >
            <h1>Fútbol Auténtico</h1>

            <Nav />

        </header>
    )

}

export default Header;