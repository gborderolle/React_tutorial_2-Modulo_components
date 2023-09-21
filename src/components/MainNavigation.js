import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <>
            <li>
              <NavLink
                to='/'
                className='hover-effect'
                activeClassName={classes.active}
              >
                Landing
              </NavLink>
            </li>
          </>
        </ul>
      </nav>
    </header>
  );
}
