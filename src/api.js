import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID OHmApX4nGKQRtoXLJTdGkndRfV6e0DkoTvqUmmtZyD0",
    },
    params: {
      query: term,
    },
  });
  
  return response.data.results;
};

export default searchImages;
