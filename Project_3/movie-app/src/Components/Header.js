
// сделал для эксперемента, не подлючал
import react from "react";

const Header = () => {
    return (
        <>
                    <div className="header">
                <nav class="header_nav_holder">
                    <ul>
                        <li><a class="header_nav_link" href="#">Popular</a></li>
                        <li><a class="header_nav_link" href="#">Theatre</a></li>
                        <li><a class="header_nav_link" href="#">Kids</a></li>
                        <li><a class="header_nav_link" href="#">Drama</a></li>
                        <li><a class="header_nav_link" href="#">Comedie</a></li>

                    </ul>

                </nav>
                <form>
                    <div className="search_holder">
                        <input type="text" placeholder="Enter Movie Name" className="inputText">
                        </input>
                        <button class="search_button"><i class="fa-solid fa-magnifying-glass"></i></button>
                        

                    </div>

                </form>

            </div>
        
        </>


    )
}

export default Header;