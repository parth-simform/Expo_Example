import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android'
const androidToken = ''
// chatConfig.js

export const chatApiKey = '';
export const chatSecretKey= ''
// chatConfig.js

export const chatUserId = isAndroid ? 'demotestuser2' : 'demotestuser1';
export const chatUserToken = isAndroid ? androidToken : '';
export const chatUserName = isAndroid ? 'demotestuser2' : 'demotestuser1';

