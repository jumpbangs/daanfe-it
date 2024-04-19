const Navbar = () => {
  return (
    <div className="navbar bg-[#fbbf24] text-xl text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Daanfe IT</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
