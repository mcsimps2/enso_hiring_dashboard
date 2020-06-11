import { mockData } from './dataset';
import { mimicAsyncFetch } from './util';

export const getClinicList = (skip, limit) => {
    return mimicAsyncFetch(mockData.clinics.slice(skip, skip + limit));
};
