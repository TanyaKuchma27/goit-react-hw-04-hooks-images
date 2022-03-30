import PropTypes from 'prop-types';
import {Item, Image} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({web, large, tags, setModalPhoto, openModal}) => {
  return (
    <Item>
      <Image
        src={web}
        alt={tags}
        onClick={() => {
          setModalPhoto(large)
          openModal()
        }}
      />
    </Item>);
};

ImageGalleryItem.propTypes = {
  web: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setModalPhoto: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,  
};

export default ImageGalleryItem;