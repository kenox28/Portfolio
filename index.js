// document
// 	.querySelector("#changetheme")
// 	.addEventListener("click", function (event) {
// 		event.preventDefault(); // Prevents the default action (useful if inside a link)
// 		console.log("hello"); // Logs "hello" to the console for debugging

// 		let theme = document.querySelector("#imgtheme");
// 		let root = document.querySelector(":root");
// 		let currentColor = getComputedStyle(root).getPropertyValue("--main-color");
// 		console.log(currentColor); // Outputs the value, e.g. "#3498db"

// 		if (theme.src.includes("night2.png") ) {
// 			// Check if the current theme is "night.png"
// 			theme.src = "sun2.png";
// 			document.querySelector("body").style.backgroundColor = "black";
// 			root.style.setProperty("--main-clor", "white");
// 		} else {
// 			theme.src = "night2.png";
// 			document.querySelector("body").style.backgroundColor = "white";
// 			root.style.setProperty("--main-clor", "black");
// 		}
// 	});
let changetheme = document.querySelector("#imgtheme");
let backimg = document.querySelector("#background-video");

changetheme.onclick = function () {
	document.body.classList.toggle("lightmode");
	if (document.body.classList.contains("lightmode")) {
		changetheme.src = "night2.png";
		backimg.src = "morning.mp4";
	} else {
		changetheme.src = "sun2.png";
		backimg.src = "nightbackvid.mp4";
	}
};
function sendemail(event) {
	event.preventDefault(); // Prevent form submission

	console.log("runningsendemail");
	let parms = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};

	emailjs.send("service_s4qwr1u", "template_kox4d4f", parms).then(
		function (response) {
			swal(
				"Good job!",
				" succesfuly send an email thankyou for visiting mg portfolio",
				"success"
			);
			console.log("SUCCESS!", response.status, response.text);
		},
		function (error) {
			swal("Good job!", "failed to send an email try again", "error");
			console.log("FAILED...", error);
		}
	);
}
