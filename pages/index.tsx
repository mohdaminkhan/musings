import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link';
import { projects } from '../utils/projectsData';
import * as React from 'react';
import styles from '../styles/modules/global.module.scss';
import { useReducer, Fragment } from 'react';
import { Navigation } from '../components/navigation';


interface Post {

  name: string
  date: string
  body: string


}

const posts: Post[] = [{ name: "amin", date: Date.now().toString(), body: "there was a young lady from the kentucit" }, { name: "peter", date: Date.now().toString(), body: "Once upon a time there was a young lad..." }, { name: "karen", date: Date.now().toString(), body: "In a galaxy far, far away" }]


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

interface IndexProps extends React.PropsWithChildren {

  results: Post[]


}
const Home: React.FC<IndexProps> = ({ results: [...myposts] }) => {


  const [savedPosts, dispatch] = useReducer((state, action) => { return [...state, action] }, posts)


  return (
    <div>
      <nav>
        {String.fromCharCode(128064)}
        <Navigation >
          <ul>
            <li>
              <Link href="/about">
                <a> {String.fromCharCode(128513)} About</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>{String.fromCharCode(128047)}Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/links">
                <a>&#127810 Links</a>
              </Link>
            </li>
          </ul>
        </Navigation>
      </nav>
      <Title />
      {myposts.map(post => { return <div key={post.name}>{post.name}<p>{post.body}</p></div> })}
      <div>
      </div>
    </div>
  );
};

export default Home;
