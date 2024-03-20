// SKills

const cores = [
	"#ff6600",
	"#00d9ff",
	"#ffd000",
	"#0400ff",
	"#ff0015",
	"#7700ff",
	"#cc0088"
];
const iconsHard = document.querySelectorAll(".iconHard");

iconsHard.forEach((iconHard, index) => {
	iconHard.style.backgroundColor = cores[index];
});

// Icons animations mouseenter/over

// EBFlexSwitch

function EBSwitchClass(btnClicked, btnChange, colClicked, colChange) {
	btnChange.classList.remove("EBActive");
	btnChange.classList.add("EBOff");
	btnClicked.classList.remove("EBOff");
	btnClicked.classList.add("EBActive");
	colChange.classList.remove("EBColActive");
	colChange.classList.add("EBColOff");
	colClicked.classList.remove("EBColOff");
	colClicked.classList.add("EBColActive");
}

const EBAcademicBtn = document.querySelector(".EBAcademic");
const EBCertifiesBtn = document.querySelector(".EBCertifies");
const EBAcademicCol = document.querySelector(".EBAcademicCol");
const EBCertifiesCol = document.querySelector(".EBCertifiesCol");

EBAcademicBtn.addEventListener("click", () => {
	EBSwitchClass(EBAcademicBtn, EBCertifiesBtn, EBAcademicCol, EBCertifiesCol);
});

EBCertifiesBtn.addEventListener("click", () => {
	EBSwitchClass(EBCertifiesBtn, EBAcademicBtn, EBCertifiesCol, EBAcademicCol);
});

function emailCopy() {
	email = "diogooikejapan@gmail.com";
	var emailFormat = document.createElement("input");
	emailFormat.value = email;
	document.body.appendChild(emailFormat);
	emailFormat.select();
	document.execCommand("copy");
	document.body.removeChild(emailFormat);
	alert("🟢 Email copiado para a área de transferência: " + email);
}