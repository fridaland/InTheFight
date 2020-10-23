import React from 'react'
import styled from 'styled-components'

import ClickableIcon from "../atoms/ClickableIcon"

import ring from "../../images/logos/ring-blue.png"

const FooterTextStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    *{
        margin: 0;
    }
    p{
        width: 30%;
    }
`

const TitleRow = styled.div`
    display: flex;
    margin-bottom: 10px;
    h2{
        text-transform: uppercase;
        margin-right: 20px;
    }
`

function FooterText() {
    return (
        <FooterTextStyle>
            <TitleRow>
                <h2>
                    IN THE FIGHT
                </h2>
                <ClickableIcon img={ring} alt="ring" link="/" />
            </TitleRow>
            <p>
                Amem minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
        </FooterTextStyle>
    )
}

export default FooterText
