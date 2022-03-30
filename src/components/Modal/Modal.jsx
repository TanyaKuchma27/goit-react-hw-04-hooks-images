import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {Backdrop, ModalContainer} from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    photo: PropTypes.string.isRequired,
    modalPhoto: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalPhoto, photo } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src={modalPhoto} alt={photo} />          
        </ModalContainer>
      </Backdrop>,
      modalRoot,
    );
  }
}