import { Link } from 'react-router-dom';
import './style/Home.css'
function Home() {
   return (
       <div className="Home">
           <h1>HELLO</h1>
           <Link to="/skins"><u>you are probably here for these</u></Link>
       </div>
   )
}

export default Home;