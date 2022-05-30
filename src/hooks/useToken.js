import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    useEffect(() => {
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:4000/user/${email}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => {
                    // console.log(res);
                    return res.json()
                })
                .then(data => {
                    // console.log('inside ustoken', data);
                    const accessToken = data?.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [email])

    return [token];
};

export default useToken;