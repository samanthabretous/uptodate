import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import style from './SidebarStyles';

const Sidebar = () => (
  <div style={style.sidebar}>
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

export default Radium(Sidebar);
