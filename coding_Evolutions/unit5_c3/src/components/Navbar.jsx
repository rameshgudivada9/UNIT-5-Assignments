import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='navbar' style={{
			display:"flex",
			justifyContent:"space-between",
			border:"1px solid red",
			padding:"10px",
			fontSize:"25px",
			margin:"10px"
	
		
		}}>
			<Link className='nav-home' to='/'>
				Home
			</Link>
			<Link className='nav-list' to='/employees'>
				Employee List
			</Link>
			<Link className='nav-admin' to='/admin'>
				Admin
			</Link>
			{/* Show Either logout or login based on auth context. DO NOT show both */}
			<Link className='nav-logout' to='/logout'>
				Logout
			</Link>

			<Link className='nav-login' to='/login'>
				Login
			</Link>
		</div>
	);
};
