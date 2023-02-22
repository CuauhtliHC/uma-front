import { atom } from 'recoil';
import { loadState } from '../utils/browserStorage.jsx';

export const user = atom({
  key: 'user',
  default: loadState(),
});
