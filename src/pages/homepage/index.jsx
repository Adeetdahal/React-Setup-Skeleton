import React from 'react';
import { useSelector } from 'react-redux';

export default function index() {
    const { isAuthenticated } = useSelector((store) => store.login);

    return (
        <div>
            <div className=""> This is a homepage </div>
            {isAuthenticated && (
                <div className="">only display when Authenticated</div>
            )}
        </div>
    );
}
