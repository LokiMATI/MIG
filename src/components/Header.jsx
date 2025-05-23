import React, {StrictMode} from 'react';
import styled from 'styled-components';
import Icon from '../assets/Icon.png'
import '../styles/Header.css'

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 5%;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #E9BC7F;
`;

const HeaderLogo = styled.img`
    width: 15%;
    height: 15%;
`;

const BusinessCard = styled.div`
    display: flex;
    gap: 20px;
`;

const BusinessName = styled.h1`
    font-size: 15px;
    color: #552218;
    align-content: center;
`;

const BuisinessType = styled.h2`
    font-size: 13px;
    color: #552218;
`;

const Telephone = styled.a`
    color: #552218;
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    
    &:hover{
        color: #552218;
    }
    &:active{
        color: #552218;
    }
    &:visited{
        color: #552218;
    }
    &:focus{
        color: #552218;
    }
`;

const Information = styled.div`
    color: #552218;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`;

const Address = styled.div`
    font-weight: 500;
`;



export default function Header() {
    return (
        <Head className="Header">
            <BusinessCard>
                <HeaderLogo className="header__logo" src={Icon} alt='Logo'/>
                <div>
                    <BusinessName>ООО "МИГ"</BusinessName>
                    <BuisinessType>ЮРИДИЧЕСКОЕ АГЕНТСТВО</BuisinessType>
                </div>
            </BusinessCard>

            <Information>
                <Address>
                    Адрес: Россия, г. Северодвинск<br/>
                    ул. Индустриальная, д. 39, оф. 210<br/>
                    📅ПН-ПТ: 09:00-13:00 14:00-18:00
                </Address>
                <Telephone href='tel:+79115729717' className="phone">+7 (911) 572-97-17</Telephone>
            </Information>
        </Head>
    )
}