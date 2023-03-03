import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const { user } = useSelector((store) => store.login);
    return (
        <div className="px-10">
            <ul>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Mobile No.: {user.mobile_no}</li>
            </ul>
        </div>
    );
}

export default Profile;
