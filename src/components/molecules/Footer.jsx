import React from 'react';
import helpers from '../../helpers/helpers';
import FooterText from '../atoms/FooterText';

function Footer() {
  return (
    <section className="footer">
      <FooterText>{helpers.getCopyrightText()}</FooterText>
    </section>
  );
}

export default Footer;
