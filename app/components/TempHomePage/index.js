import React from 'react';
import { Link } from 'react-router';

export default function() {
  return (
    <div>
      <ul>
        <li><Link to="/workeffort">Work Effort</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}
