import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const PatientCard = ({ patient, ...other }) => (
    <Card {...other}>
        <CardContent>
            <Typography variant='h5'>
                {`${patient.lastName}, ${patient.firstName}`}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                {patient.studyDate.format('MMMM Do YYYY')}
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Study Type: {patient.studyType}
            </Typography>
        </CardContent>
    </Card>
);

export default PatientCard;
