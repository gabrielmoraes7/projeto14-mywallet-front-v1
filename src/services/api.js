import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v2/trackit';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function newTransaction(body, token) {
    const config = createConfig(token);
  
    const promise = axios.post(`${BASE_URL}/nova-transacao`, body, config);
  
    return promise;
  }

function logUser(token) {
    const config = createConfig(token);
  
    const promise = axios.get(`${BASE_URL}/usuario-logado`, config);
  
    return promise;
  }

function getTransactions(token) {
    const config = createConfig(token);
  
    const promise = axios.get(`${BASE_URL}/transacoes`, config);
  
    return promise;
  }
const api = {
  login,
  signUp,
  logUser,
  newTransaction,
  getTransactions
}

export default api;