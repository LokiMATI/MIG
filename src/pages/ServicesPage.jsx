import React from 'react';
import styled from 'styled-components';
import { FaBalanceScale, FaFileAlt, FaGavel, FaHandshake, FaBuilding, FaHome, FaWheelchair } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 3rem 5%;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #552218;
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: #E9BC7F;
    margin: 0.5rem auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCategory = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  color: #552218;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  line-height: 1.4;
`;

const ServiceIcon = styled.span`
  color: #E9BC7F;
  flex-shrink: 0;
  margin-top: 0.2rem;
`;

const SpecialNote = styled.div`
  background: #fff8e1;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  border-left: 4px solid #E9BC7F;
`;

const ServicesBlock = () => {
    return (
        <ServicesSection>
            <SectionTitle>Наши услуги</SectionTitle>
            <ServicesGrid>
                <ServiceCategory>
                    <CategoryTitle>
                        <FaBalanceScale /> Юридические услуги
                    </CategoryTitle>
                    <ServiceList>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Юридические консультации
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Подготовка исковых заявлений, жалоб, претензий, проектов договоров и иных документов
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Представление интересов в судах общей юрисдикции и Арбитражном суде
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Исполнение решений суда
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Юридическое сопровождение деятельности организаций
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Выезд к Вам на дом или офис в удобное для Вас время
                        </ServiceItem>
                    </ServiceList>
                    <SpecialNote>
                        <FaWheelchair style={{ color: '#E9BC7F', fontSize: '1.2rem' }} />
                        <span>Для лиц с ограниченными возможностями данная услуга предоставляется бесплатно</span>
                    </SpecialNote>
                </ServiceCategory>

                <ServiceCategory>
                    <CategoryTitle>
                        <FaFileAlt /> Дополнительные услуги
                    </CategoryTitle>
                    <ServiceList>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Проверка договоров и документов
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Правовой аудит бизнеса
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Регистрация юридических лиц и ИП
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceIcon>▶</ServiceIcon>
                            Сопровождение сделок с недвижимостью
                        </ServiceItem>
                    </ServiceList>
                </ServiceCategory>
            </ServicesGrid>
        </ServicesSection>
    );
};

export default ServicesBlock;