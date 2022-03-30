function fetchPhoto(photo, page=1) {

    const key = '25186289-71226d48b5f529fb481c1afd8';
    const url = 'https://pixabay.com/api/';
    const https = `${url}?q=${photo}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    
    return fetch(https).then(response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(new Error(`There are no ${photo}`));
    });
} 

const api = {
  fetchPhoto,
};

export default api;