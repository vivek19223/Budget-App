import React from 'react'
import {   NavLink } from 'react-router-dom';

const Header = ()=>(
    <header>
        <h1>Expensify</h1>
        <div>
        <NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink><br />
        <NavLink to = "/create" activeClassName="is-active">Create Expense</NavLink><br />
        </div>
    </header>
    );

export default Header;