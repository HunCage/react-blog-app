import "./sidebar.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">About Me</span>
				<img className="sidebarImg" src="./sidebarImage.jpg" alt="Sidebar Header" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Facere pariatur quaerat sequi ea et? Possimus dicta error
					nisi vel, reprehenderit id. Consequuntur numquam fugiat
					possimus laudantium minus, error sapiente dolorem?
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Categories</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Learning</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Cars</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Hobbies</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Follow me</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-github"></i>
					<i class="sidebarIcon fa-brands fa-free-code-camp"></i>
					<i class="sidebarIcon fa-brands fa-stack-overflow"></i>
					<i class="sidebarIcon fa-brands fa-linkedin"></i>
				</div>
			</div>
		</div>
	);
}
