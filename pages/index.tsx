import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link';
import { projects } from '../utils/projectsData';
import * as React from 'react';
import styles from '../styles/modules/global.module.scss';
import { useReducer } from 'react';


interface Post {

  name: string
  date: string
  body: string


}

const posts: Post[] = [{ name: "amin", date: Date.now().toString(), body: "there was a young lady from the kentucit" }, { name: "amin", date: Date.now().toString(), body: "Once upon a time there was a young lad..." }, { name: "amin", date: Date.now().toString(), body: "In a galaxy far, far away" }]


export function getStaticProps() {

  return {
    props: { results: posts }
  }


}



function Title() {
  return (
    <div>
      <h2>Musings of a Dev</h2>
      <h1 className={styles.testclass}>MISSIVES FROM THE FRONTEND TRENCHES</h1>
    </div>
  );
}

const Home: React.FC<{ results: Post[] }> = ({ results: [...posts] }) => {


  const [savedPosts, dispatch] = useReducer((state, action) => { return [...state, action] }, posts)


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

      {posts.map(post => { return <div>{post.name}<p>{post.body}</p></div> })}
    </div>
  );
};

export default Home;
