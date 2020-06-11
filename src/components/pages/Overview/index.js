import React, { useState } from 'react';
import { NavigationTemplate } from 'components/templates';
import ClinicOverview from 'components/pages/Overview/ClinicOverview';
import UserOverview from 'components/pages/Overview/UserOverview';
import PatientOverview from 'components/pages/Overview/PatientOverview';

const tabs = [
    {
        label: 'Clinics',
        value: 'clinic',
        component: ClinicOverview
    },
    {
        label: 'Users',
        value: 'user',
        component: UserOverview
    },
    {
        label: 'Patients',
        value: 'patient',
        component: PatientOverview
    }
];

const Overview = () => {
    const [ currentTab, setCurrentTab ] = useState(tabs[0].value);

    const renderCurrentTab = () => {
        const DisplayComponent = tabs.find((tab) => tab.value === currentTab).component;
        return <DisplayComponent/>;
    };

    return (
        <NavigationTemplate
            tabs={tabs}
            value={currentTab}
            onChange={(e, value) => setCurrentTab(value)}
        >
            {renderCurrentTab()}
        </NavigationTemplate>
    );
};

export default Overview;
