import axios from 'axios';

// http://api.mediastack.com/v1/news?access_key=6cc8bd891a348cf7d893b28047fbdefa&categories=general
export default axios.create({
  baseURL: `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY}&`,
});
