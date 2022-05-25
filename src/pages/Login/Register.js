import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token] = useToken(user || gUser);
    let signInError;

    if (user || gUser) {
        console.dir(user || gUser)
        // navigate('/appointment')
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (loading || gLoading || updating) {
        return <Loading />
    }

    const onSubmit = async data => {
        const { email, password, name } = data;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/')
    };
    return (
        <div className='flex justify-center h-[calc(100vh-70px)] items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">Sign Up</h2>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        {/* name field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* email field  */}
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
                        <input className='btn btn-info w-full max-w-xm' type="submit" value='Register' />
                    </form>

                    <div className='text-sm'>
                        <p>Already Have an Account? <span onClick={() => navigate('/login')} className='text-secondary font-semibold cursor-pointer'>Please Login</span></p>
                    </div>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Register;