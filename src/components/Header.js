import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <img
            alt="logo"
            src="/assets/images/logo-moviefan.png"
            width="500"
            className="d-inline-block align-top"
        />
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header