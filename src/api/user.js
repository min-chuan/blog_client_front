import Network from './network';

export const register = (data) => Network.post('/api/v1/user/register', data);
export const login = (data) => Network.post('/api/v1/user/login', data);

export default {
  register,
  login,
};
