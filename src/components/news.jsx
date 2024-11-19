export default function News(){
    return(
        <>
        <div class="flex items-center justify-center min-h-screen bg-blue-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up</h1>
        
        <form class="space-y-6">

            <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    required 
                    class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            
            <div>
                <label for="password" class="block text-gray-700 font-medium mb-2">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    required 
                    class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

        
            <div>
                <label for="dob" class="block text-gray-700 font-medium mb-2">Date of Birth:</label>
                <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    required 
                    class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="text-center my-4">
                    <span className="px-2 text-gray-500 text-sm block">Or continue with</span>
                </div>

                <div className="flex justify-center space-x-2">
                    <button className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Google
                    </button>
                </div>
            
            
            <button type="submit" class="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
                Sign Up
            </button>
            <p className="text-center mt-4 text-sm">
              Already have an account? <a href="/login" className="font-semibold text-blue-600 hover:underline">Log In</a>  
            </p>
        </form>
    </div>
</div>

        </>
    )
}