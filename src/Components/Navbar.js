import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand">
                <div className="container-fluid mx-4">
                    <div className="collapse navbar-collapse">
                        <a className="navbar-brand fw-bolder" style={{ fontFamily: "Playfair Display"}}>MealApp</a>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}