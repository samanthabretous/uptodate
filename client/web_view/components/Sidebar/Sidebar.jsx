import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => (
  <div>
    <Link>
      <h4>Dashboard</h4>
      <div>Icon</div>
    </Link>
    <Link>
      <h4>Classes</h4>
      <div>Icon</div>
    </Link>
    <Link>
      <h4>Lessons</h4>
      <div>Icon</div>
    </Link>
    <Link>
      <h4>Assignments</h4>
      <div>Icon</div>
    </Link>
    <Link>
      <h4>Instructors</h4>
      <div>Icon</div>
    </Link>
    <Link>
      <h4>Students</h4>
      <div>Icon</div>
    </Link>
  </div>
);

export default Sidebar;
