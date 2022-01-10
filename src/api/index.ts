import axios from 'axios';
import { APiData } from '../utils/types';

export default async () => {
  try {
    const url = 'http://api.mediastack.com/v1/news?access_key=6cc8bd891a348cf7d893b28047fbdefa&languages=pt,-de';
    const response = await axios.get(url);
    const data: APiData = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
