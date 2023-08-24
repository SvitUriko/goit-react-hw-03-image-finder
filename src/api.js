import axios from "axios";

const API_KEY = "37973740-9cb8c004be1b351f23a87f7b5";
const API_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
    const params = {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,  
      };
      const response = await axios.get(API_URL, {params});
      
      return response.data;
  };

