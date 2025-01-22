import React, { useState } from 'react'
import Name from './Name'
import Personal_info from './Personal_info'

const Userpro = () => {
    const [curr_state, setState] = useState(false)
    function changeTab(){
        setState(curr_state)
    }
  return (
   
    <div className='container mx-auto p-4'>
    <h1 className="text-6xl font-bold text-center text-gray-800 mt-6">The user profile</h1>
    <div className='w-full max-w-8xl mx-auto'>
    <div className="name"><Name/></div>
    <Personal_info/>
    </div>
   
</div>

  )
}

export default Userpro
