import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * IOS como Emulador: localhost
 * IOS com físico: IP da máquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.2.2 (android studio)
 * Android com emulador: 10.0.3.2 (genymotion)
 * Android com físico: IP da máquina
 */
