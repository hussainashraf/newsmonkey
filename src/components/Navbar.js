
import { Link } from "react-router-dom";


const Navbar =()=> {
        return (
            <div >
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/GENERAL">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        {/* <li className="nav-item">
         
        </li> */}
        <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
        {/* <li className="nav-item"><Link to="/home" className="nav-link">general</Link></li> */}
        <li className="nav-item"><Link to="/health" className="nav-link">Health</Link></li>
        <li className="nav-item"><Link to="/science" className="nav-link">Science</Link></li>
        <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
        <li className="nav-item"><Link to="/business" className="nav-link">Business</Link></li>
        
      
        
      </ul>
      
    </div>
  </div>
</nav>
            </div>
        )
   
}

export default Navbar
