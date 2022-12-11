import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & NodeJs</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img src="./headerImage.jpg" alt="Header" className="headerImg" />
		</div>
	);
}
