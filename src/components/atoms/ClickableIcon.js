import React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";

const Icon = styled.img`
  height: 25px;
`
/*
  USE link prop to navigate inside the site itself,
  USE href prop to navigate outside the site and external links
*/

function IconsPanel({link, img, href, alt}) {
  return href? (
    <a target = "blank" href = {href} >
      <Icon src={img} alt={alt} />
    </a>
  )
  :
  (
    <Link to={link} >
      <Icon src={img} alt={alt} />
    </Link>
  )
}

export default IconsPanel
