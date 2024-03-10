import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({cartDetails}) {
  // let { cartDetails } = props
  // let cartDetails = props.cartDetails
  
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Cell-World</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link active" to="products">Products</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Brands</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Used Mobile</a></li>
                  <li><a className="dropdown-item" href="#">New Mobile</a></li>
                  <li><a className="dropdown-item" href="#">Accessories</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">Cart({cartDetails.length})</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="nav-item">

              <ul>
                <Link className="btn btn-warning " to="/signup">Sign Up</Link>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div >
  )
}
