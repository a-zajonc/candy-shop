import React from 'react';
import { Link } from 'react-router-dom';

export function BackButton() {
    return <Link to="/sklep" className='pt-1 ps-3'>
        <button type="button" className="btn btn-light fs-6">Powrót</button>
    </Link>
}