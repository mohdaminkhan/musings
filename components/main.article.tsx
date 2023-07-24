
interface BlogPostEntry {

	heading: string,
	dateAuthored: string,
	body: string,

}


export function BlogPost({ body, heading, dateAuthored }: BlogPostEntry) {


	return (
		<article>
			<header><h2>{heading}</h2></header>
			<aside>{dateAuthored}</aside>
			<p>
				{body}
			</p>
		</article>
	)


}