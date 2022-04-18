import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className={match ? 'bg-gray-700 text-white py-2 px-0 rounded-md' : 'py-2 px-0'}>
            <Link style={{ color: match ? "white" : "lightgrey" }} to={to} {...props} >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;