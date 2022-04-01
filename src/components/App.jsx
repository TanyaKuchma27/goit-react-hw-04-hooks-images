// import { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photoAPI from '../services/photoApi';
import {Container} from './App.styled';

// function App() {
//   const [photo, setPhoto] = useState('');
//   const [result, setResult] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [modalPhoto, setModalPhoto] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [end, setEnd] = useState(false);
 
  // async componentDidUpdate(prevProps, prevState) {
  //   const {photo} = this.state;
  //   const prevPhoto = prevState.photo;    

  //   if (photo !== prevPhoto) {
  //     this.setState({ isLoading: true, page: 1 });
  //     try {
  //       const result = await photoAPI.fetchPhoto(photo);
  //       const photos = result.hits;
  //       const totalHits = result.totalHits;
  //       const maxPage = Math.ceil(totalHits / 12);        

  //       if (totalHits === 0) {
  //         toast.error('Sorry, there are no images matching your search query. Please try again.');
  //         this.setState({isLoading: false });
  //         return;
  //       };
                
  //       if (maxPage === 1) {
  //         this.setState({ result: photos, isLoading: false, end: true });
  //         toast("We're sorry, but you've reached the end of search results.");
  //         return
  //       }

  //       this.setState({ result: photos, isLoading: false, end: false });
  //     } catch(error) {
  //         console.log(error);
  //       }     
  //   }
  // }

  // const handleFormSubmit = photo => {
  //   setPhoto(photo);
  // };

  // handleLoadMore = async() => {
  //   this.setState({
  //     isLoading: true,
  //     page: this.state.page + 1
  //   })

  //   try {
  //     const result = await photoAPI.fetchPhoto(this.state.photo, this.state.page + 1);
  //     const photos = result.hits;
  //     const totalHits = result.totalHits;
  //     const maxPage = Math.ceil(totalHits / 12);

  //     if (maxPage === this.state.page) {
  //       this.setState({ result: [...this.state.result, ...photos], isLoading: false, end: true });
  //       toast("We're sorry, but you've reached the end of search results.");
  //       return;          
  //     }

  //     this.setState({ result: [...this.state.result, ...photos], isLoading: false });
  //   } catch (error) {
  //     console.log(error);
  //     }
  // };

//   const updateModalPhoto = modalPhoto => {
//     setModalPhoto(modalPhoto);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <Container>
//       <Searchbar onSubmit={handleFormSubmit} />
//       <ImageGallery
//         result={result}
//         setModalPhoto={updateModalPhoto}
//         openModal={toggleModal}
//       />
//       {result.length > 0 && !isLoading && !end && <Button onClick={handleLoadMore}/>}
//       {isLoading && <Loader />}
//       {showModal && <Modal photo={photo} modalPhoto={modalPhoto} onClose={toggleModal}/>}
//       <ToastContainer autoClose={3000} />
//     </Container>
//   );
// };

// export default App;

import React, { Component } from 'react';
class App extends Component {
  state = {
    photo: '',
    result: [],
    isLoading: false,
    page: 1,
    modalPhoto: '',
    showModal: false,
    end: false
  };

  async componentDidUpdate(prevProps, prevState) {
    const {photo} = this.state;
    const prevPhoto = prevState.photo;    

    if (photo !== prevPhoto) {
      this.setState({ isLoading: true, page: 1 });
      try {
        const result = await photoAPI.fetchPhoto(photo);
        const photos = result.hits;
        const totalHits = result.totalHits;
        const maxPage = Math.ceil(totalHits / 12);        

        if (totalHits === 0) {
          toast.error('Sorry, there are no images matching your search query. Please try again.');
          this.setState({isLoading: false });
          return;
        };
                
        if (maxPage === 1) {
          this.setState({ result: photos, isLoading: false, end: true });
          toast("We're sorry, but you've reached the end of search results.");
          return
        }

        this.setState({ result: photos, isLoading: false, end: false });
      } catch(error) {
          console.log(error);
        }     
    }
  }

  handleFormSubmit = photo => {
    this.setState({ photo });
  };

  handleLoadMore = async() => {
    this.setState({
      isLoading: true,
      page: this.state.page + 1
    })

    try {
      const result = await photoAPI.fetchPhoto(this.state.photo, this.state.page + 1);
      const photos = result.hits;
      const totalHits = result.totalHits;
      const maxPage = Math.ceil(totalHits / 12);

      if (maxPage === this.state.page) {
        this.setState({ result: [...this.state.result, ...photos], isLoading: false, end: true });
        toast("We're sorry, but you've reached the end of search results.");
        return;          
      }

      this.setState({ result: [...this.state.result, ...photos], isLoading: false });
    } catch (error) {
      console.log(error);
      }
  };

  setModalPhoto = modalPhoto => {
    this.setState({ modalPhoto });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

   render() {
     const { photo, result, isLoading, showModal, modalPhoto, end } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />        
        <ImageGallery
          result={result}
          setModalPhoto={this.setModalPhoto}
          openModal={this.toggleModal}
        />
        {result.length > 0 && !isLoading && !end && <Button onClick={this.handleLoadMore}/>}
        {isLoading && <Loader />}
        {showModal && <Modal photo={photo} modalPhoto={modalPhoto} onClose={this.toggleModal}/>}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
};

export default App;