import axios from 'axios';

const api = axios.create({
  // URL do Expo, para funcionar nos dispositivos moveis e nao apenas nos emuladores
  baseURL: 'http://192.168.8.10:3333',
});

export default api;