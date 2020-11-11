import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Icon = styled.img`
  height: 25px;
`;
/*
  USE link prop to navigate inside the site itself,
  USE href prop to navigate outside the site and external links
    if you use href and do need to open the site in new page
    SET blank to false
*/

function ClickableIcon({ link, img, href, alt, blank }) {
  return href ? (
    <a target={blank ? 'blank' : ''} href={href}>
      <Icon src={img} alt={alt} />
    </a>
  ) : (
    <Link to={link}>
      <Icon src={img} alt={alt} />
    </Link>
  );
}

ClickableIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  blank: PropTypes.bool,
  href: PropTypes.string,
  img: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

ClickableIcon.defaultProps = {
  blank: true,
  href: '',
};
export default ClickableIcon;
