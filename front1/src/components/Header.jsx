import Stock from "./Stock";
import Update from "./Update";
import './Header.css'

function Header(){
    return(
        <div>
            <ul>
                <li><p>Home</p></li>
                <li><p>Stock</p></li>
                <li><p>View orders</p></li>
                <li><p>Update store</p></li>
            </ul>

        </div>
    )
}

export default Header;