import { NavLink } from "react-router-dom";

 const Header = () => {
    return ( 
        <>
        
        <h2>LOGO</h2>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
        
        </>
     );
 }
  
 export default Header;