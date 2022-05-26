import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import loginbg from '../../assets/images/login.png'

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (error || gError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }

    if (loading || gLoading) {
        return <Loading />
    }


    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    };

    return (
        <div style={{ backgroundImage: `url(${loginbg})` }} className='flex justify-center h-[calc(100vh-70px)] items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/,
                                        message: 'Please enter valid email'
                                    }
                                })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* for password */}
                        <div className="form-control w-full max-w-xm">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xm"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be 6 character !!'
                                    },
                                    // pattern: {
                                    //     value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){8,}$/,
                                    //     message: 'Please enter valid password, a number, a lowercase, a uppercase, and a special character.'
                                    // }
                                })} />
                            <label className="label">
                                {/* password required error */}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {/* minlength error */}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {/* pattern mismatch error */}
                                {/* {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.password.message}</span>} */}
                                {signInError}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xm' type="submit" value='Login' />
                    </form>

                    <div className='text-sm'>
                        <p>Not a member ? <span onClick={() => navigate('/register')} className='text-secondary font-semibold cursor-pointer text-lg'>Create new account</span></p>
                    </div>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">Continue with google</button>

                </div>
            </div>
        </div >
    );
};

export default Login;