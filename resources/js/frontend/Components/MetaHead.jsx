import { InertiaHead } from '@inertiajs/inertia-react';
import React from 'react';

function MetaHead({ title, name, description }) {
    return (
        <InertiaHead>
            <title>{title}</title>
            <meta name={name} content={description} />
        </InertiaHead>
    )
}

export default MetaHead