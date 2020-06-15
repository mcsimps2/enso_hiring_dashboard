import { mockData } from './dataset';
import { mimicAsyncFetch } from './util';

// For simplicity, you may assume we already know the count beforehand
// In production, the total count is actually returned along with the API request
export const USER_COUNT = mockData.users.length;

export const getUserList = (skip, limit) => {
    return mimicAsyncFetch(mockData.users.slice(skip, skip + limit));
};
