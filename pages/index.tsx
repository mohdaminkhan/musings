import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Link from 'next/link'
import { projects } from '../utils/projectsData';
import * as React from 'react'



function TestRef() {


let myRef = React.useRef({name:"amin"})
// how to read environment at runtime
//  npm view <react> version <--- useful from the command line 


console.log("Is Ref sealed", Object.isSealed(myRef))
console.log("Is Ref extendible", Object.isExtensible(myRef))



return <h1>THis is the Ref Component</h1>

}




function Title() {




	return (<div>


		<h1>THOUGHT FROM WITHIN THE FRONTEND TRENCHES</h1>

<TestRef />

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
