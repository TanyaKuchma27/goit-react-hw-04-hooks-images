import { useState } from 'react';
import {Header, Form, Button, ButtonLabel, Input} from './Searchbar.styled';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
    const [photo, setPhoto] = useState('');
    
    const handlePhotoChange = event => {
        setPhoto(event.currentTarget.value.toLowerCase().trim());           
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (photo.trim() === '') {
            toast.error('Please, enter data');        
            return;
        }    
        onSubmit(photo);
        setPhoto('');
    };

    return (
        <Header>
            <Form onSubmit={handleSubmit}>
                <Button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 20 }}/>
                    <ButtonLabel>Search</ButtonLabel>
                </Button>
                <Input
                    type="text"
                    name="photo"
                    value={photo}
                    onChange={handlePhotoChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Header>
    );    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,   
};

export default Searchbar;

// import React, { Component } from 'react';
// class Searchbar extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func.isRequired,
//     };
    
//     state = {
//         photo: '',
//     };

//     handlePhotoChange = event => {
//         this.setState({ photo: event.currentTarget.value.toLowerCase() });          
//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         if (this.state.photo.trim() === '') {
//             toast.error('Please, enter data');        
//             return;
//         }

//         this.props.onSubmit(this.state.photo);
//         this.setState({ photo: '' });
//     };

//     render() {
//         return (
//             <Header>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Button type="submit">
//                         <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 20 }}/>
//                         <ButtonLabel>Search</ButtonLabel>
//                     </Button>

//                     <Input
//                         type="text"
//                         name="photo"
//                         value={this.state.photo}
//                         onChange={this.handlePhotoChange}
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                     />
//                 </Form>
//             </Header>
//         );
//     }
// }

// export default Searchbar;