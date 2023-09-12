import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="nav-container columns">
            <h3 className="column is-2 nav-title"><b>CapKing</b></h3>
            <div className="column ">
                <button className="button is-link is-light is-small btn">Gorras</button>
                <button className="button is-link is-light is-small btn">Gorros</button>
                <button className="button is-link is-light is-small btn">Sombreros</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;