import axios, { AxiosResponse } from 'axios';
import mokApi from '.';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ApiData', () => {
  test('Should return ApiData', async () => {
    const data = [
      {
        author: 'Márcio',
        title: 'Título',
        description: 'Descrição',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNy7KHhMThAhVFyIsKHUg2D_EQjRx6BAgBEAU&url=https%3A%2F%2Fwww.google.com%2F&psig=AOvVaw2X_q-_X_X_X_X_X_X_X_X&ust=1589788240876623',
        published_at: '2020-06-01T00:00:00.000Z',
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
    const response = await mokApi();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});
