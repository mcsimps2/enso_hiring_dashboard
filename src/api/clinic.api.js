import { mockData } from './dataset';
import { mimicAsyncFetch } from './util';

// For simplicity, you may assume we already know the count beforehand
// In production, the total count is actually returned along with the API request
export const CLINIC_COUNT = mockData.clinics.length;

export const getClinicList = (skip, limit) => {
    return mimicAsyncFetch(mockData.clinics.slice(skip, skip + limit));
};
