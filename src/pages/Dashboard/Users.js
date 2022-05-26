import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () =>
        fetch('http://localhost:4000/user')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>Here is Shoe all users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;