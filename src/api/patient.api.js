import { mockData } from './dataset';
import { mimicAsyncFetch } from './util';
import moment from 'moment';

// For simplicity, you may assume we already know the count beforehand
// In production, the total count is actually returned along with the API request
export const PATIENT_COUNT = mockData.patients.length;

export const getPatientList = (skip, limit) => {
    return mimicAsyncFetch(
        mockData.patients
            .slice(skip, skip + limit)
            .map((pat) => Object.assign({}, pat, {
                studyDate: moment(pat.studyDate)
            }))
    );
};
