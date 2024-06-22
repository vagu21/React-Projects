const Navbar = ({ setCategory, setCountry }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News-mg</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("technology")}>Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("business")}>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("health")}>Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("sports")}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCategory("favorites")}>Favorites</a>
              </li>
            </ul>
            <div className="d-flex">
              <select className="form-select" onChange={(e) => setCountry(e.target.value)} style={{ width: '150px' }}>
                <option value="us">United States</option>
                <option value="ae">United Arab Emirates</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="ch">Switzerland</option>
                <option value="cn">China</option>
                <option value="co">Colombia</option>
                <option value="cu">Cuba</option>
                <option value="cz">Czech Republic</option>
                <option value="de">Germany</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="gb">United Kingdom</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungary</option>
                <option value="id">Indonesia</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="in">India</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
                <option value="lt">Lithuania</option>
                <option value="lv">Latvia</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="my">Malaysia</option>
                <option value="ng">Nigeria</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>
                <option value="nz">New Zealand</option>
                <option value="ph">Philippines</option>
                <option value="pl">Poland</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="rs">Serbia</option>
                <option value="ru">Russia</option>
                <option value="sa">Saudi Arabia</option>
                <option value="se">Sweden</option>
                <option value="sg">Singapore</option>
                <option value="si">Slovenia</option>
                <option value="sk">Slovakia</option>
                <option value="th">Thailand</option>
                <option value="tr">Turkey</option>
                <option value="tw">Taiwan</option>
                <option value="ua">Ukraine</option>
                <option value="us">United States</option>
                <option value="ve">Venezuela</option>
                <option value="za">South Africa</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
