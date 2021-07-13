import React from 'react'
import { FooterStyles } from './styles'

import ImgGit from '../../../assets/images/gitlogo.svg'

const Footer = () => {
    return (
        <FooterStyles data-test="footer">
            <a href="https://github.com/p-h-marques" target="_blank" rel="noreferrer">
                <img src={ImgGit} alt="GitHub" />
                <span>Pedro Henrique</span>
            </a>
        </FooterStyles>
    )
}

export default Footer
