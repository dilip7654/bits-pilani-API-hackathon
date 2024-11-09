export default function Contact(){
  return(
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Lifeline Devs Login
                </h2>
                
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
                        Login
                    </button>
                </form>
                
                <div className="text-center my-4">
                    <span className="px-2 text-gray-500 text-sm block">Or continue with</span>
                </div>

                <div className="flex justify-center space-x-2">
                    <button className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Google
                    </button>
                </div>
                
                <p className="text-center mt-4 text-sm">
                    New here? <a href="/signup" className="font-semibold text-blue-600 hover:underline">Create an account</a>
                </p>
            </div>
        </div>
    );
};