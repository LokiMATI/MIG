import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/RequestModal.jsx'
import Office from '../assets/Office.webp'

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (data) => {
        console.log('Форма отправлена:', data);
    };

    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>Мы защищаем вас с 2014 года!</HeroTitle>
                <HeroButton onClick={() => setIsModalOpen(true)}>Оставить заявку</HeroButton>
            </HeroContent>

            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                />
            )}
        </HeroContainer>
    );
};

// Стилизованные компоненты
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://avatars.mds.yandex.net/get-altay/11419181/2a000001945fc854592e9848ecd0d44ba49c/XXL_height') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroButton = styled.button`
  background: #E9BC7F;
  color: #552218;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d4a96a;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
