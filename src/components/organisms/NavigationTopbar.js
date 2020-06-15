import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';

const NavigationTabs = ({ tabs, className, ...other }) => (
    <AppBar className={className} position={'sticky'}>
        <Tabs centered {...other}>
            {tabs.map((tab) => <Tab label={tab.label} value={tab.value} key={`${tab.value}-tab`}/>)}
        </Tabs>
    </AppBar>
);

export default NavigationTabs;
