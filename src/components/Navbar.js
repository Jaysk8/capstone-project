const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-dropdown">
                <button id="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    Menu
                </button>
                <div className="nav-dropdown-content">
                    <a href="/">Home</a>

                    <a href="/products" className="skate-product">
                        Skateboard Product
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>

                        <div className="product-dropdown">
                            <a href="/boards">Boards</a>
                            <a href="/wheels">Wheels</a>
                            <a href="/bearings">Bearings</a>
                            <a href="/grip">Griptape</a>
                        </div>
                    </a>

                    <a href="/apparel">Apparel</a>
                    <a href="/footwear">Footwear</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
