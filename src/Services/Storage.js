import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: 'dataa-secure',
  encryptionKey: 'hunter1'
})