import DIlersMap from '@/components/DIlersMap';
import DilersList from '@/components/DilersList';
import React from 'react';

const index = () => {
    return (
        <div className='dilersPage'>
            <DIlersMap />
            <DilersList />
        </div>
    );
};

export default index;