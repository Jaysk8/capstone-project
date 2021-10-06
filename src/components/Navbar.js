const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-dropdown">
                <button id="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    Menu
                </button>
                <div className="nav-dropdown-content">
                    <a href="/">Home</a>
                    <a href="/products">Skateboard Product</a>
                    <a href="/apparel">Apparel</a>
                    <a href="/footwear">Footwear</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
