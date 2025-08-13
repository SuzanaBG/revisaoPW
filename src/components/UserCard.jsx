import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/UserCard.css';

function UserCard({ user }) {
    const navigate = useNavigate();

    return (
        <div className='user-card'>
            <img src={user.avatar} alt={`${user.firstName} avatar`} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
            <small>{user.address}</small>
        </div>
    );
}

export default UserCard;