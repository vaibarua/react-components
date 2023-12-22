import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Dashboard() {
    return(
       <>
        <section id="sidebar">
		<a href="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">IBS</span>
		</a>
		<ul className="side-menu top">
			<li className="active">
				<a href="#">
					<i className='bx bxs-dashboard' ></i>
					<span className="text">Dashboard</span>
				</a>
			</li>
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
		{/* <!-- NAVBAR -->

		<!-- MAIN --> */}
		<main>
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				{/* <!-- <a href="#" className="btn-download">
					<i className='bx bxs-cloud-download' ></i>
					<span className="text">Download PDF</span>
				</a> --> */}
			</div>

			<ul className="box-info">
				<li>
					<i className='bx bxs-calendar-check' ></i>
					<span className="text">
						<h3>₹1020</h3>
						<p>Last Transaction</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-group' ></i>
					<span className="text">
						<h3>28</h3>
						<p>Transactions Today</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-dollar-circle' ></i>
					<span className="text">
						<h3>₹2543</h3>
						<p>Balance</p>
					</span>
				</li>
			</ul>


			<div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Recent Transactions</h3>
						{/* <!-- <i className='bx bx-search' ></i> --> */}
						<form >
							<div className="form-input">
								<input type="search" placeholder="Search Transactions..."/>
								<button type="submit" className="search-tscns"><i className='bx bx-search' ></i></button>
							</div>
						</form>
						<i className='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Amount</th>
								<th>Bank</th>
								<th>Type</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>-₹4000.0</td>
								<td style={{width: "280px"}}>
									{/* <!-- <img src="img/sbi-logo.png"> --> */}
									<p>State Bank of India</p>
								</td>
								<td>Withdrawal</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>₹5000.0</td>
								<td>
									{/* <!-- <img src="img/axis-logo.png" > --> */}
									<p>Axis Bank</p>
								</td>
								<td>Deposit</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>-₹4000.0</td>
								<td>
									{/* <!-- <img src="img/idbi-logo.png"> --> */}
									<p>IDBI Bank</p>
								</td>
								<td>Withdrawal</td>
								<td>01-10-2021</td>
								<td><span className="status process">Process</span></td>
							</tr>
							<tr>
								<td>₹4000.0</td>
								<td>
									{/* <!-- <img src="img/hdfc-logo.png"> --> */}
									<p>HDFC Bank</p>
								</td>
								<td>Deposit</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>₹4000.0</td>
								<td>
									{/* <!-- <img src="img/icici-logo.png"> --> */}
									<p>ICICI Bank</p>
								</td>
								<td>Deposit</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* <!-- <div className="todo">
					<div className="head">
						<h3>Todos</h3>
						<i className='bx bx-plus' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<ul className="todo-list">
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div> --> */}
			</div>
		</main>
		{/* <!-- MAIN --> */}
	</section>
	{/* <!-- CONTENT --> */}
       </>
    );
}