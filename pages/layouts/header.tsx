import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'


export default function header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">RDWIANTO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" href='/'>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" href='/users'>Users</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" href='/link'>Links</Link>
        </li>

    
        <li className="nav-item">
            <Link className="nav-link active" href='/about'>About</Link>
        </li>
    

      </ul>
    </div>
  </div>
</nav>
<hr />
<br />

    </>
  )
}
