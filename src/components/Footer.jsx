import React from 'react';

const Footer = () => (
  <footer className="p-4 text-center bg-green-100">
    © {new Date().getFullYear()}, Built with love by
    <a
      className="pl-1 text-green-700 hover:text-green-500"
      href="https://www.gatsbyjs.org"
    >
      Miguel Asencio
    </a>
  </footer>
);

export default Footer;
