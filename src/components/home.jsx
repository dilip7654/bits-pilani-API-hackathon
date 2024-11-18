import { useNavigate } from "react-router-dom"
import Navbar from './navbar'

export default function Home(){

    const navigate = useNavigate();
    function handleNext(){
        navigate('/Map')
    }
    return(
        <>
        <div className="">
        <Navbar/>
           <h1>home page</h1>
           <button  onClick={handleNext}>go to map</button>
        </div>
        </>
    )
}