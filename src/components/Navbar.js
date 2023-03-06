import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'
import Navdrawer from './Navdrawer';

const NavStyle = styled.div`
    // background-color: #f4cce4;
    // background-color: #d8f4dc;
    background-color: black;
    padding: 0;
    width: 100%;
    // justify-content: center;
    color: white;
    // font-family: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    // 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    // 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
    font-family: var(--font-mono);

    li {
        list-style-type: none;
        height: 100%;
    }

    ul {
      display: flex;
      flex-direction: row;
    }

    .navbar {

    }
    .navbar-items {
        height: 100%;
        // width: max-contents;
        // width: 40px;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 10px;
        font-size: 30px;
    }
`

function Navbar() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/thesis">
            Honors Thesis
          </Link>
        </li>
      </ul>
    </NavStyle>
  );
}

export default Navbar;