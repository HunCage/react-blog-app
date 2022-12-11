import "./write.css";

export default function Write() {
	return (
		<div className="write">
        <img src="./write.jpg" alt="A piece of code" className="writeImg" />
			<form action="" className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput" title="Image Upload" className="uploadIcon">
						<i className="writeIcon fa-solid fa-file-import"></i>
					</label>
					<input type="file" name="" id="fileInput" hidden="true" />
					<input className="writeInput" autoFocus="true" type="text" placeholder="Title" id="" />
				</div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
			</form>
		</div>
	);
}
