import React from 'react';
import BuduRouter from './router/BuduRouter';

export default function Wrapper(): JSX.Element {
    return <div className="budu-wrapper">
        <BuduRouter />
    </div>;
}
