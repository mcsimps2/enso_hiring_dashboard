import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const ProgressWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const EntityOverview = ({ entities, renderEntity, loading }) => {
    if (loading) {
        return (
            <ProgressWrapper>
                <CircularProgress/>
            </ProgressWrapper>
        );
    } else if (entities.length) {
        // We use a Fragment to assign a key instead of asking the renderEntity function to do so
        return entities.map((entity, i) =>
            <Fragment key={`entity-${i}`}>
                {renderEntity(entity)}
            </Fragment>
        );
    } else {
        return (
            <div>
                No results found
            </div>
        )
    }
};

export default EntityOverview;
