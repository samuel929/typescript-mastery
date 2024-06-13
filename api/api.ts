import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});



/**
 * GET https://reqres.in/api/users
POST https://reqres.in/api/users
PUT https://reqres.in/api/users/1
DELETE https://reqres.in/api/users/1
 */
