import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ClinicCard = ({ clinic, ...other }) => (
    <Card {...other}>
        <CardContent>
            <Typography variant='h5'>
                {clinic.name}
            </Typography>
        </CardContent>
    </Card>
);

export default ClinicCard;

