import React, { useEffect, useState } from 'react';
import EntityOverview from '../EntityOverview';
import { getUserList } from 'api/user.api';
import UserCard from 'components/pages/Overview/UserOverview/UserCard';

const UserOverview = () => {
    const [ users, setUsers] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getUsersEffect = async () => {
        setLoading(true);
        setUsers(await getUserList(0, 10));
        setLoading(false);
    };

    useEffect(() => {
        getUsersEffect();
    }, []);

    return (
        <EntityOverview
            entities={users}
            loading={loading}
            renderEntity={(user) => <UserCard user={user}/>}
        />
    );
};

export default UserOverview;

