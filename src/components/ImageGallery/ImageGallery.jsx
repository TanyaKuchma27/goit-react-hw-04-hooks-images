import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ gallery, setModalPhoto, openModal }) => {  
    return (
        <Gallery>        
            {gallery.map(({ webformatURL, largeImageURL, tags}, index) => (
                <ImageGalleryItem 
                    key={index}
                    web={webformatURL}
                    large={largeImageURL}
                    tags={tags}
                    setModalPhoto={setModalPhoto}
                    openModal={openModal}
                />    
            ))}
        </Gallery>);
};

ImageGallery.propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.object.isRequired),
    setModalPhoto: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;