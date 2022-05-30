import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Users = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:4000/user', {
            method: 'get',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
    )

    if (isLoading) {
        return <Loading />
    }
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:4000/user/admin/${user}`, {
            method: 'put',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin !!!')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make admin Successfully !!!')
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user.email)} className="btn btn-sm">make admin</button> : <button className='btn btn-sm btn-success'>Admin</button>}</td>
                                <td>{user.role !== 'admin' && <button className="btn btn-sm">Remove User</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;