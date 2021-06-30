document.querySelector(".toggle-switch").addEventListener("click",() => {
	document.querySelector(".style-switcher").classList.toggle("open");

})

//theme
const theme = document.querySelectorAll(".themes"),
totaltheme = theme.length;

for(let i = 0;i < totaltheme;i++) {
	theme[i].addEventListener("change", function(){
		if(this.value === "dark"){
			document.body.className="dark";
		}else{
			document.body.className="";
		}
	})
}