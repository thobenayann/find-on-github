// == Import npm
import React from 'react';

// == Import du style
import './footer.scss';

const Header = () => (
    <footer className="footer">
        <p className="footer__item">© 2021 - Développé par Yann Thobena</p>
        <p className="footer__item">Si mon travail vous plait ! Vous pouvez me retrouver sur <a href='https://thobena-yann-developpeur-web.netlify.app/' rel='noreferrer' target='_blank'>mon site</a></p>
    </footer>
);

export default Header;