import React from 'react';
import { InertiaHead } from '@inertiajs/inertia-react';


function MetaHead({ title, name, description }) {
    return (
        <InertiaHead>
            <title>{title}</title>
            <meta name={name} content={description} />
        </InertiaHead>
    )
}

export default MetaHead