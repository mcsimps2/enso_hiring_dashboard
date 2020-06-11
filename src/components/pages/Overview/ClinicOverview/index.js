import React, { useEffect, useState } from 'react';
import EntityOverview from '../EntityOverview';
import { getClinicList } from 'api/clinic.api';
import ClinicCard from './ClinicCard';

const ClinicOverview = () => {
    const [ clinics, setClinics] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getClinicsEffect = async () => {
        setLoading(true);
        setClinics(await getClinicList(0, 10));
        setLoading(false);
    };

    useEffect(() => {
        getClinicsEffect();
    }, []);

    return (
        <EntityOverview
            entities={clinics}
            loading={loading}
            renderEntity={(clinic) => <ClinicCard clinic={clinic}/>}
        />
    );
};

export default ClinicOverview;


