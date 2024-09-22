import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit  = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Example error handling, add your own logic here
    if (email === '' || password === '') {
      setError('Email and Password are required');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the form
    setEmail('');
    setPassword('');
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='flex h-screen cursor-pointer'>
      <div className='flex-1 flex items-center justify-center bg-gray-933'>
        <h1 className='text-2xl font-bold text-white'>Welcome to<br />
          <a className='text-5xl font-bold text-white'>Shoppingmal</a>
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center text-black ml-1">Sign In</h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <h4 className='text-gray-400 text-center mb-4 text-sm'>Enter your email&password to get started and explore your options </h4>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border rounded-md text-black"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'} 
              id="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border rounded-md text-black pr-10" 
              required
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                color: 'black',
                fontSize: '14px',
                position: 'absolute',
                right: '10px',
                top: '65%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
            >
              {showPassword ?  <FaEyeSlash /> :  <FaEye />}
            </span>
          </div>
          <button type="submit" className="w-full bg-blue-500 mb-4 text-white p-2 rounded-md hover:bg-blue-600">Sign In</button><br />
          <label className='text-gray-500 text-center mb-4 text-sm'>You haven't an account? </label>
          <label  className='text-blue-500 text-center mb-4 cursor-pointer'>Sign Up</label>
        </form>
      </div>
    </div>
  );
};

export default Signin;
