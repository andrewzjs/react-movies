import { Link } from 'react-router-dom';

export default function NavBar({user}) {
    return (
        <nav>
            <Link to="orders">Movies List</Link>
            &nbsp; | &nbsp; 
            <Link to="orders">Actors List</Link>
            &nbsp; | &nbsp; 
            { user ? 
            <p>Welcome, {user.name}!</p>
            :
            <p>Welcome!</p> }
        </nav>
    )
}