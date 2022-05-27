import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Users = () => {
    const navigate = useNavigate();
    const { data: users, isLoading } = useQuery('users', () =>
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
    return (
        <div>
            <h1>Here is Shoe all users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                                <td><button className="btn btn-sm">make admin</button></td>
                                <td><button className="btn btn-sm">Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;