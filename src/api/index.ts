import axios from 'axios';
import { APiData } from '../utils/types';

export default async (): Promise<APiData[]> => {
  try {
    const url = 'http://api.mediastack.com/v1/news?access_key=6cc8bd891a348cf7d893b28047fbdefa&languages=pt,-de';
    const resp = await axios.get(url);
    if (resp.status !== 200) {
      throw new Error('Something went wrong');
    }
    const data: APiData[] = await resp.data;
    return data;
  } catch (err) {
    throw err;
  }
};
