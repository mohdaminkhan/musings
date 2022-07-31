import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link'
import { projects } from '../utils/projectsData';

const Home = () => {


	return (<div className="home">

		Hello World!!

		<Link href="/about"> <a>About</a> </Link>


		</div>
	)
};


export default Home;
