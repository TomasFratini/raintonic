const Navbar = () => {


    return (
  
      <div className="navbar bg-base-200 ">
          <div className="flex-1">
              <a href="/" className="btn btn-ghost normal-case text-xl">RainTonic</a>
          </div>
          <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
              <li><a href="favorites">Contactos Favoritos</a></li>
              </ul>
          </div>
      </div>
    )
  }
  export default Navbar