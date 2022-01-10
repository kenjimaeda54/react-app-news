import axios, { AxiosResponse } from 'axios';
import apiMok from '.';
import { Data } from '../utils/types';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Data', () => {
  test('should return list Data', async () => {
    const data: Data[] = [
      {
        author: 'John Doe',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet.',
        image: 'https://via.placeholder.com/150',
        published_at: '2018-09-01T00:00:00.000Z',
      },
    ];
    const mockedResponse: AxiosResponse = {
      data,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    mockedAxios.get.mockResolvedValue(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const response = await apiMok();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});
