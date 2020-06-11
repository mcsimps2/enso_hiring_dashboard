import { mockData } from './dataset';
import { mimicAsyncFetch } from './util';
import moment from 'moment';

export const getPatientList = (skip, limit) => {
    return mimicAsyncFetch(
        mockData.patients
            .slice(skip, skip + limit)
            .map((pat) => Object.assign({}, pat, {
                studyDate: moment(pat.studyDate)
            }))
    );
};
