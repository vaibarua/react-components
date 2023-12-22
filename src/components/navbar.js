import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return(
       <>
        <section id="sidebar">
		<a href="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">IBS</span>
		</a>
		<ul className="side-menu top">
            <Link to="/dashboard">
			<li className="active">
                
				<a href="#">
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</a>
			</li>
            </Link>
			<li>
            <a href="#">
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">Withdraw</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className='bx bx-money'></i>
					<span className="text">Deposit</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className='bx bxs-wallet-alt'></i>
					<span className="text">Manage FD</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className='bx bxl-mastercard'></i>
					<span className="text">Credit Cards</span>
				</a>
			</li>
		</ul>
		<ul className="side-menu">
			<li>
				<a href="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" className="logout">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>



	<section id="content">
		{/* <!-- NAVBAR --> */}
		<nav>
			<i className='bx bx-menu' ></i>
			{/* <!-- <a href="#" className="nav-link">Categories</a> --> */}
			<form action="#">
				<div className="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
				</div>
			</form>
			{/* <!-- <input type="checkbox" id="switch-mode" hidden>
			<label for="switch-mode" className="switch-mode"></label> --> */}
			<a href="#" className="notification">
				<i className='bx bxs-bell' ></i>
				<span className="num">8</span>
			</a>
			<a href="#" className="profile">
				{/* <img src="img/cute-avatar.jpg"> */}
			</a>
		</nav>
        <Outlet/>
        </section>
		{/* <!-- NAVBAR -->

		
	
	{/* <!-- CONTENT --> */}
       </>
    );
}