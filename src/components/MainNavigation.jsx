import classes from './MainNavigation.module.css';
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/auth-login/"
              className={({ isActive })=>
                isActive ? classes.active : undefined
              }
            >
                Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/auth-login/login"
              className={({ isActive })=>
                isActive ? classes.active : undefined
              }
              end
            >
                Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
