import './NavBar.css'
import logo2 from "../../assets/Logo3.png"
const NavBar = () => {
  return (
    <div>
      <div className='nav'>
        <div className='nav-logo'>
            <a href=""><img src={logo2} alt="" className="logo" /></a>
        </div>
        <ul className='nav-menu'>
          <li>Menu</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar