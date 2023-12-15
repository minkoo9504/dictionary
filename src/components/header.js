import {Link} from "react-router-dom"

const Header = () => {
    return ( 
        <div className="header">
            <h1><Link to="/">Header</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/write">write</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;
<div>
    <h1>header</h1>
</div>