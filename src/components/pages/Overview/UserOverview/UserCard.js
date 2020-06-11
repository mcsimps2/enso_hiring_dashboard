import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const UserCard = ({ user, ...other }) => (
    <Card {...other}>
        <CardContent>
            <Typography variant='h5'>
                {`${user.lastName}, ${user.firstName}`}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                {user.email}
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
                {user.role}
            </Typography>
        </CardContent>
    </Card>
);

export default UserCard;
