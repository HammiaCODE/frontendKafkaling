import { Routes, Route, Link } from 'react-router-dom';
import View from './View';
import Stock from "./Stock";
import Update from "./Update";
import './Header.css';

function Header() {
    return (
        <>
            <ul className='list-container'>
                <li><Link to="/" className="list">Stock</Link></li>
                <li><Link to="/view" className="list">View orders</Link></li>
                <li><Link to="/update" className="list">Update store</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Stock />} />
                <Route path="/view" element={<View />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </>
    );
}

export default Header;