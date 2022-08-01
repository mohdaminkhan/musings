import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link'
import { projects } from '../utils/projectsData';


function Title() {




	return (<div>


	  <h1>THOUGHT FROM WITHIN THE FRONTEND TRENCHES</h1>	



	</div>)


}





const Home = () => {


	return (<div className="home">

		Hello World!!
		<Title />
		<Link href="/about"><a>About</a></Link>


	</div>
	)
};


export default Home;
