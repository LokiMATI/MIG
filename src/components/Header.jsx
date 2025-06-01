import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/Icon.webp';

const theme = {
    colors: {
        primary: '#E9BC7F',
        secondary: '#552218',
    },
    fonts: {
        main: 'Arial, sans-serif',
    },
    sizes: {
        desktop: {
            logo: '80px',
            businessName: '1.25rem',
            businessType: '1rem',
            telephone: '1.5rem',
        },
        mobile: {
            logo: '60px',
            businessName: '1rem',
            businessType: '0.875rem',
            telephone: '1.25rem',
        }
    }
};

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    margin: 0;
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.primary};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
`;

const Logo = styled.img`
    width: ${theme.sizes.desktop.logo};
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        width: ${theme.sizes.mobile.logo};
    }
`;

const BusinessInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const BusinessName = styled.h1`
    font-size: ${theme.sizes.desktop.businessName};
    color: ${theme.colors.secondary};
    margin: 0;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: ${theme.sizes.mobile.businessName};
    }
`;

const BusinessType = styled.h2`
    font-size: ${theme.sizes.desktop.businessType};
    color: ${theme.colors.secondary};
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: ${theme.sizes.mobile.businessType};
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
`;

const AddressBlock = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.4;
`;

const WorkingHours = styled.span`
    display: inline-block;
    margin-top: 0.5rem;
`;

const PhoneLink = styled.a`
    color: ${theme.colors.secondary};
    text-decoration: none;
    font-size: ${theme.sizes.desktop.telephone};
    font-weight: 700;
    transition: color 0.2s ease;
    white-space: nowrap;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: ${theme.sizes.mobile.telephone};
    }
`;

const BusinessCard = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <BusinessCard>
                <Logo src={Icon} alt="Логотип ООО 'МИГ'" />
                <BusinessInfo>
                    <BusinessName>ООО "МИГ"</BusinessName>
                    <BusinessType>Юридическое агентство</BusinessType>
                </BusinessInfo>
            </BusinessCard>

            <ContactWrapper>
                <AddressBlock>
                    <div>Россия, г. Северодвинск</div>
                    <div>ул. Индустриальная, д. 39, оф. 210</div>
                    <WorkingHours>📅 ПН-ПТ: 09:00-13:00, 14:00-18:00</WorkingHours>
                </AddressBlock>
                <PhoneLink href="tel:+79115729717">+7 (911) 572-97-17</PhoneLink>
            </ContactWrapper>
        </HeaderContainer>
    );
}