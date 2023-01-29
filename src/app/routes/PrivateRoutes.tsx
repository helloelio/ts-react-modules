import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

type PrivateRoutesProps = {
    auth: boolean;
}

export const PrivateRoutes = ({auth}: PrivateRoutesProps) => {
    return auth ? <Outlet /> : <Navigate to="/auth"/>
}