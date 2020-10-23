import React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";

const Icon = styled.img`
  height: 25px;
`

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
