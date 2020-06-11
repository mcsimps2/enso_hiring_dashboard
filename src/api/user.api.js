import { mockData } from './dataset';
import { mimicAsyncFetch } from './util';

export const getUserList = (skip, limit) => {
    return mimicAsyncFetch(mockData.users.slice(skip, skip + limit));
};
