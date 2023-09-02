import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <h4>Page not found...</h4>
            <Link to='/' >Return to HomePage</Link>
        </div>
     );
}
 
export default NotFound;