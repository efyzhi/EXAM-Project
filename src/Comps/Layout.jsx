import {Link, Outlet} from "react-router-dom"
import '../Styles/Layout.css'

const Layout = () => {
  return (
    <>
     <nav>
        <ul>
          <li> <Link to="/" style={{textDecoration: 'none', color:'#000', fontSize:'30px'}} className="nav-link"> useReducer </Link></li> ||
          <li> <Link style={{textDecoration: 'none', color:'#000', fontSize:'30px' }} className="nav-link" to="/useState">useState</Link></li>
        </ul>
       <Outlet/>
      </nav>
      
    </>
  )
}

export default Layout 