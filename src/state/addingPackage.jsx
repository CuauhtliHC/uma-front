import { atom } from 'recoil';

export const listPackage = atom({
  key: 'listPackage',
  default: { total: 0, list: [] },
});
