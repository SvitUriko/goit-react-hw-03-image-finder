import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';

import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

    render() {
      const {
        image: { largeImageURL, webformatURL, name },
      } = this.props;

    return (
      <>
        <img
          className={css.image}
          src={webformatURL}
          alt={name}
          onClick={this.toggleModal}
        />
       <ModalWindow isOpen={this.state.isModalOpen} isClose={this.toggleModal}>
          <img  className={css.imageModal} src={largeImageURL} alt={name} />
        </ModalWindow>
      </>
         
    );
    }
  };

 