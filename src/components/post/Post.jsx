import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img src="./postImg.jpg" alt="Post" className="postImg" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Learn</span>
					<span className="postCat">Tech</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet...</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
				assumenda, ullam voluptas minima odit minus ipsa at corrupti
				quos harum? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Autem culpa consequatur ratione facilis earum architecto,
				dolores non. Minus at ab mollitia optio. Iste dolore suscipit
				omnis, consequatur harum sit velit quod quaerat ad quasi
				quibusdam explicabo animi! Laboriosam! Lorem, ipsum dolor sit
				amet consectetur adipisicing elit. Sed iusto commodi nobis,
				natus consequuntur iure perferendis doloribus est repellendus
				aut id sapiente accusamus omnis officia eos itaque facilis ex,
				voluptatem, similique excepturi quaerat soluta ullam neque? Iure
				voluptates voluptatem molestias ipsum vitae cumque aliquid
				optio. dolores non. Minus at ab mollitia optio. Iste dolore
				suscipit omnis, consequatur harum sit velit quod quaerat ad
				quasi quibusdam explicabo animi! Laboriosam! Lorem, ipsum dolor
				sit amet consectetur adipisicing elit. Sed iusto commodi nobis,
				natus consequuntur iure perferendis doloribus est repellendus
				aut id sapiente accusamus omnis officia eos itaque facilis ex,
				voluptatem, similique excepturi quaerat soluta ullam neque? Iure
				voluptates voluptatem molestias ipsum vitae cumque aliquid
				optio.
			</p>
		</div>
	);
}
