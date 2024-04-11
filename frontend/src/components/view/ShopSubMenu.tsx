// ShopSubMenu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopSubMenu: React.FC = () => {
    return (
        <ul className="submenu">
            <li className="submenu__item">
                <NavLink to="/shop"style={{textDecoration: 'none'}} className="submenu__link">Products</NavLink>
            </li>
            <hr />
            <li className="submenu__item">
                <NavLink to="/categories" style={{textDecoration: 'none'}} className="submenu__link">Categories</NavLink>
            </li>
            {/* Thêm các mục khác vào đây nếu cần */}
        </ul>
    );
};

export default ShopSubMenu;
