const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dice til the end</h1>
            <div className="links">
                <a href="/"> Ready ?</a>
                {/* dynamique value */}
                <a href="/create" style ={{
                    color : "white",
                    backgroundColor : '#f1356d',
                    borderRadius: '8px'
                }}> New game</a>
            </div>
        </nav>
     );
}
 
export default Navbar ;