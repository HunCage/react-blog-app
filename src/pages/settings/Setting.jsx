import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">
						Update Your Account
					</span>

					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form action="" className="settingsForm">
					<label>Profil Picture</label>
					<div className="settingsProfilePicture">
						<img src="./profile_picture.jpg" alt="it's me" />
						<label htmlFor="fileInput">
							<i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
						/>
					</div>
					<label>Username</label>
					<input type="text" placeholder="madcage" />

					<label>Email</label>
					<input type="email" placeholder="example@mail.com" />

					<label>Password</label>
					<input type="password" placeholder="*****" />

					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
