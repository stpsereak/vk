import React, { useState } from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

function Header() {
  const [open, setOpen] = useState(true);

  return (
    <header className={s.header}>
      {open && (
        <div className={s.navalny}>
          <span>
             Автор старался 
          </span>
          <span>
             Поддержите его, виджет ниже!
          </span>
          <button onClick={() => setOpen(false)}>X</button>
        </div>
      )}
      <div className={s.inner}>
        <div className={s.logo}>
          <NavLink to="/">
            <img className={s.logo__image} src={logo} alt="logo" />
          </NavLink>
          <div className={s.logo__text}>
            <NavLink to="/">
              <h1 className={s.logo__title}>VK-BOMBER</h1>
            </NavLink>
            <h2 className={s.logo__subtitle}>Лучший бомбер для вк</h2>
          </div>
        </div>

        <IconButton href="" target="_blank" aria-label="github">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
