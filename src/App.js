import React from 'react';
import 'styles/materialDashboard.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import ensoTheme from './styles/materialTheme';
import { Overview } from 'components/pages';

const materialTheme = createMuiTheme(ensoTheme);

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    // Define a custom insertion for injecting the JSS styles in the DOM
    insertionPoint: document.getElementById('jss-insertion-point')
});

const App = () => {
    return (
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={materialTheme}>
                <div className="App">
                    <Overview/>
                </div>
            </MuiThemeProvider>
        </JssProvider>
    );
};

export default App;
