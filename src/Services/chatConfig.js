import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android'
const androidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGVtb3Rlc3R1c2VyMiJ9.bx2wpQsEpCogoYNqzV_mC5VlnsqHoMHTXqDDN0HSPG4'
// chatConfig.js

export const chatApiKey = 'b65qagsw3fpm';
export const chatSecretKey= '9yn6gcu4b2w7sjw9sfpxb6dp8ykjrkcgk4azs52ekgtnnrsvxn5xw3xfgk42as3x'
// chatConfig.js

export const chatUserId = isAndroid ? 'demotestuser2' : 'demotestuser1';
export const chatUserToken = isAndroid ? androidToken : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGVtb3Rlc3R1c2VyMSJ9.mOyC0Ox-nj6rCROttxXtW1_Iv3uy06SqCIgizPuXfDU';
export const chatUserName = isAndroid ? 'Test User 2' : 'Test User 1';

