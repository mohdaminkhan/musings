import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link';
import { projects } from '../utils/projectsData';
import * as React from 'react';
import styles from '../styles/modules/global.module.scss';

function Title() {
  return (
    <div>
      <h2>Musings of a Dev</h2>
      <h1 className={styles.testclass}>MISSIVES FROM THE FRONTEND TRENCHES</h1>
    </div>
  );
}

const Home = () => {
  return (
    <div className="home">
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/links">
              <a>Links</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Title />
    </div>
  );
};

export default Home;
