import React, { useEffect, useState } from 'react';
import EntityOverview from '../EntityOverview';
import { getPatientList } from 'api/patient.api';
import PatientCard from './PatientCard';

const PatientOverview = () => {
    const [ pats, setPats] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getPatientsEffect = async () => {
        setLoading(true);
        setPats(await getPatientList(0, 10));
        setLoading(false);
    };

    useEffect(() => {
        getPatientsEffect();
    }, []);

    return (
        <EntityOverview
            entities={pats}
            loading={loading}
            renderEntity={(pat) => <PatientCard patient={pat}/>}
        />
    );
};

export default PatientOverview;
