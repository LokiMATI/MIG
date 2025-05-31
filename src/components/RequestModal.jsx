import React, { useState } from 'react';
import styled from "styled-components";

export default function Modal({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Введите ФИО';
        if (!formData.phone.trim()) newErrors.phone = 'Введите телефон';
        if (!formData.message.trim()) newErrors.message = 'Введите текст заявки';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData);
        onClose();
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ModalTitle>Оставить заявку</ModalTitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>ФИО:</Label>
                        <Input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            $hasError={!!errors.fullName}
                        />
                        {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
                    </FormGroup>

                    <FormGroup>
                        <Label>Телефон:</Label>
                        <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            $hasError={!!errors.phone}
                        />
                        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                    </FormGroup>

                    <FormGroup>
                        <Label>Текст заявки:</Label>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            $hasError={!!errors.message}
                        />
                        {errors.message && <ErrorText>{errors.message}</ErrorText>}
                    </FormGroup>

                    <SubmitButton type="submit">Отправить</SubmitButton>
                </Form>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  position: relative;
  color: #333;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  color: #552218;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #552218;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.$hasError ? 'red' : '#ddd'};
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #E9BC7F;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid ${props => props.$hasError ? 'red' : '#ddd'};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #E9BC7F;
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const SubmitButton = styled.button`
  background: #E9BC7F;
  color: #552218;
  border: none;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: #d4a96a;
  }
`;