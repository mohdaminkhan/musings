import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link'
import { projects } from '../utils/projectsData';
import * as React from 'react'








function Title() {




	return (<div>


		<h2>Musings of a Dev</h2>
		<h1>MISSIVES FROM THE FRONTEND TRENCHES</h1>

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
