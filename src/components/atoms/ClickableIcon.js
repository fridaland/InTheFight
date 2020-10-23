import React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";

const Icon = styled.img`
  height: 25px;
`
/*
  USE link prop to navigate inside the site itself,
  USE href prop to navigate outside the site and external links
    if you use href and do need to open the site in new page
    SET blank to false
*/

function IconsPanel({link, img, href, alt, blank = true}) {
  return href? (
    <a a target = {blank ? "blank" : ""} href = {href} >
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
