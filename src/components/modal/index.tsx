import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { GrFilter } from 'react-icons/gr';
import Modal from 'react-modal';

interface CustomModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  subtitle: string;
  photo: string;
}

export default function CustomModal({
  title,
  subtitle,
  photo,
  ...rest
}: CustomModalProps) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Modal.setAppElement('body');
  });

  const handleModal = () => setOpenModal((old) => !old);
  return (
    <>
      <button {...rest} type="button" onClick={handleModal}>
        <GrFilter />
        <span>Categorias</span>
      </button>
      <Modal ariaHideApp={openModal} isOpen={openModal}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <img src={photo} alt="img" data-testid="photoArticle" />
      </Modal>
    </>
  );
}
