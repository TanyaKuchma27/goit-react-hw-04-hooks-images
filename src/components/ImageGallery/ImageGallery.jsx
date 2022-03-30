import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ result, setModalPhoto, openModal }) => {  
    return (
        <Gallery>        
            {result.map(({ webformatURL, largeImageURL, tags}, index) => (
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
    result: PropTypes.arrayOf(PropTypes.object.isRequired),
    setModalPhoto: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;