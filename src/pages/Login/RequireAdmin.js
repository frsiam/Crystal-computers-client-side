import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth);
        toast.error('You are a unathorized user !!!')
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    //     return <EmailVerification />
    // }

    return children;
};

export default RequireAdmin;