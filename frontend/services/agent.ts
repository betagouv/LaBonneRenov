import axios from 'axios';
import { parse, stringify } from 'qs';
import { AnswersResponse } from '../../types/answersResponse';

const client = axios.create({
  baseURL: '/api/',
  paramsSerializer: {
    encode: (str) => parse(str),
    serialize: (str) => stringify(str),
  },
  withCredentials: true,
});

const agent = {
  Answers: {
    get: (id: string) =>
      client.get<AnswersResponse>(`answers/${id}`).then(({ data }) => data),
    update: (id: string, values: string) =>
      client.put(`answers/${id}`, { values }),
    post: (values: string) =>
      client
        .post<AnswersResponse>('answers', { values })
        .then(({ data }) => data),
  },
};

export default agent;
