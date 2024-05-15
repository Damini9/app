import React from 'react';

const Login = ({ onLogin }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-8 max-w-sm mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
            <form onSubmit={onLogin} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block font-semibold mb-2">Username</label>
                    <input type="text" id="username" className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <div>
                    <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                    <input type="password" id="password" className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
