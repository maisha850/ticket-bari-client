import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const SignIn = () => {
  const { signIn, signInWithGoogle } = useAuth()
  const instance = useAxiosSecure()
  const{register , handleSubmit , formState:{errors}}=useForm()
  const location = useLocation()
  const navigate = useNavigate()
 
  const handleLogIn=async(data)=>{
    const{email , password}=data
try{
await signIn(email , password)
toast.success('Log In Successfully!')
navigate( location.state || '/')
}
catch(err){
console.log(err)
toast.error(err?.message)
}
  }
    const handleGoogleSignIn = async () => {
      try {
        //User Registration using google
       const res= await signInWithGoogle()
         const userInfo = {
      email : res.user.email,
        displayName : res.user.displayName,
         photoURL : res.user.photoURL
  }
        await instance.post('/users' , userInfo)
         toast.success('Log In Successfully!')
       navigate( location.state || '/')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }
 
    return (
         <div className='flex justify-center items-center py-15 '>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-title'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
       onSubmit={handleSubmit(handleLogIn)}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
              {...register('email' , {required: true})}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 input border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
              {
                errors?.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
              }
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
               <input
              {...register('password', {required:true , minLength:6 ,pattern:/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
} )}
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 input py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
              />
               {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p> }
          {errors.password?.type === 'minLength'&& <p className='text-red-500'>Password must contain 6 characters</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500'>"Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number."</p>}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='btn-primary w-full rounded-md py-3'
            >
              Log In
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-primary text-gray-400 cursor-pointer'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
  onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
           
            to='/register'
            className='hover:underline hover:text-primary text-gray-600'
          >
           Register
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default SignIn;