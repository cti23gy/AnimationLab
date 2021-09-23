

function textFocus(id) {
	let SectionHover = document.getElementById(id);
	TweenMax.to(SectionHover, 0.4, {backgroundColor: "#997799"})
}
function textLeave(id) {
	let SectionHover = document.getElementById(id);
	TweenMax.to(SectionHover, 0.4, {backgroundColor: "#990099"})
}
function textExit(id) {
	let SectionClick = document.getElementById(id);
	TweenLite.to(SectionClick, 
		{ duration: 1, x: 100, alpha: 0}
	);
}


let Title = document.getElementsByClassName("title");
let Header = document.getElementsByClassName("header");
//TweenMax.to(Title, { duration: 2, x: "100", y: 100 });
TweenLite.from(Title, 
	{ duration: 0.6, x: -100, alpha: 0, delay: 0.1 }
);
TweenLite.from(Header, 
	{ duration: 0.6, x: -100, alpha: 0, delay: 0.1 }
);


let sectionItems = document.getElementsByClassName("sectionitem");

for (let i = 0; i < sectionItems.length; i++) {
	TweenLite.from(sectionItems[i], 
		{ duration: 0.6, x: -100, alpha: 0, delay: i*0.1 }
	);
}

