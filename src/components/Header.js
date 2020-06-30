import React from 'react'
import {   NavLink } from 'react-router-dom';
import { startLogout, startLogin} from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout })=>(
    <header>
        <h1>Expensify</h1>
        <div>
        <NavLink to="/dashboard" activeClassName="is-active" exact={ true }>Dashboard</NavLink><br />
        <NavLink to = "/create" activeClassName="is-active">Create Expense</NavLink><br />
        <button onClick= { startLogout }>Logout</button>
        </div>
    </header>
    );

const mapDispatchToProps = (dispatch) => ({
    startLogout : ()  => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);