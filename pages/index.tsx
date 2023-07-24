import * as React from 'react';
import { useReducer, Fragment } from 'react';
import { Title } from '../components/title'
import { BlogPost } from '../components/main.article';
import { entries } from './mock/entries'

const posts: Post[] = [{ name: "amin", date: Date.now().toString(), body: "there was a young lady from the kentucit" }, { name: "peter", date: Date.now().toString(), body: "Once upon a time there was a young lad..." }, { name: "karen", date: Date.now().toString(), body: "In a galaxy far, far away" }]


export function getStaticProps() {

  return {
    props: { results: posts }
  }


}





interface IndexProps extends React.PropsWithChildren {

  results: Post[]


}
const Home: React.FC<IndexProps> = ({ results: [...myposts] }) => {


  const [savedPosts, dispatch] = useReducer((state, action) => { return [...state, action] }, posts)


  return (
    <div>
      <Title />
      {myposts.map(post => { return <div key={post.name}>{post.name}<p>{post.body}</p></div> })}
      <div>
        <BlogPost body={entries?.featured.body} heading={entries?.featured.heading} dateAuthored={entries?.featured.date} />
      </div>
    </div>
  );
};

export default Home;
