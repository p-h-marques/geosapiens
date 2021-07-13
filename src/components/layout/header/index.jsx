import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeaderStyles } from './styles'

import ImgColetum from '../../../assets/images/coletum-logo.svg'

const Header = () => {
    const routes = [
        {
            name: 'Preencher formulário',
            url: '/insert',
        },
        {
            name: 'Visualizar respostas',
            url: '/read',
        },
    ]

    const actualRoute = useLocation()

    return (
        <HeaderStyles>
            <div className="logo">
                <img src={ImgColetum} alt="Coletum" />
            </div>
            <nav>
                {routes.map((route, key) => (
                    actualRoute.pathname === route.url
                        ? <span className="active" key={key} data-test={`nav_link_${key}`}>
                            {route.name}
                        </span>
                        : <Link to={route.url} key={key} data-test={`nav_link_${key}`}>
                            {route.name}
                        </Link>
                ))}
            </nav>
        </HeaderStyles>
    )
}

export default Header
