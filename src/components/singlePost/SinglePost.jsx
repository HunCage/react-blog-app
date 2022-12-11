import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="./singlePostImg.jpg"
					alt="A Programer"
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					How to introduced me myself into the programing...
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-solid fa-file-pen"></i>
						<i className="singlePostIcon fa-solid fa-trash-can"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						author:
						<b> It's me :)</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illo nemo laborum dignissimos, libero facilis vero,
					explicabo ea voluptatibus assumenda incidunt aperiam
					suscipit? Mollitia aut est accusamus repellat, asperiores
					quo veritatis? Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Assumenda animi aperiam vitae fugiat? Ad
					temporibus magni officiis, libero provident necessitatibus
					voluptatibus corrupti sit, illo error id minima
					reprehenderit at nemo quaerat facere. Impedit alias
					obcaecati ullam, voluptatibus deserunt, eius a velit,
					recusandae cumque quis et veniam in expedita quasi libero
					beatae. Quidem vel est illo vero minus enim quam! Aut
					inventore recusandae enim suscipit rem sint tenetur in
					expedita exercitationem, voluptatum architecto vero
					temporibus, voluptatem eveniet eos dolorem ea nobis
					asperiores nam! Nulla quaerat, voluptatem doloremque
					similique laboriosam repellendus itaque atque totam
					aspernatur quia asperiores, blanditiis tempore dignissimos
					quo rerum odio explicabo ad pariatur qui obcaecati saepe
					non. Autem minima nam ea veritatis amet totam at obcaecati
					dignissimos tempore! Libero dicta eos totam, cumque natus
					voluptate cupiditate. Corrupti eius soluta eligendi amet
					ipsum molestias obcaecati earum? Dicta at eveniet, cum id
					labore porro ex ipsa aut quod eaque, exercitationem
					recusandae?
				</p>
			</div>
		</div>
	);
}
