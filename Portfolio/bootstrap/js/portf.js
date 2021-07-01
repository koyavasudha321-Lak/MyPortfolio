

window.addEventListener("load", function(){
	document.querySelector(".preloader").classList.add("opacity-0");

	setTimeout(() =>{
		document.querySelector(".preloader").style.display="none"

	}, 1000)
})





// portfolio item filter
const filterContainer=document.querySelector('.portfolio-filter'), 
	filterBtns=filterContainer.children,
	totalFilterBtn=filterBtns.length,
	portfolioItems=document.querySelectorAll('.portfolio-item'),//==>21 images

	//portfolioItems=document.querySelector('.portfolio-items').children,
	totalPortfolioItem = portfolioItems.length;
	//console.log(totalPortfolioItem);//==>21 imaages
	//console.log(totalFilterBtn) --> 4


for(let i=0;i<totalFilterBtn;i++){
	//console.log(filterBtns[i])
	filterBtns[i].addEventListener('click', function(){
		filterContainer.querySelector(".active").classList.remove("active");
		this.classList.add("active");
		const filterValue = this.getAttribute("data-filter");
		console.log(filterValue);

		for(let k = 0;k < totalPortfolioItem;k++){
			if(filterValue === portfolioItems[k].getAttribute("data-category")){
				portfolioItems[k].classList.remove("hide");
				portfolioItems[k].classList.add("show");
			}else{
				portfolioItems[k].classList.remove("show");
				portfolioItems[k].classList.add("hide");
			}
			if(filterValue === "all"){
				portfolioItems[k].classList.remove("hide");
				portfolioItems[k].classList.add("show");
			}
		}
	});
}

/* portfolio lightbox */

	const lightbox = document.querySelector('.lightbox'),
	lightboxImg = lightbox.querySelector('.lightbox-img'),
	lightboxClose = lightbox.querySelector('.lightbox-close')
	lightboxTxt = lightbox.querySelector('.caption-text'),
	lightboxcnt = lightbox.querySelector('.caption-counter');

	let itemIndex = 0;

	for(let i = 0;i < totalPortfolioItem;i++){
		portfolioItems[i].addEventListener("click", function(){
			//console.log(i);
			itemIndex = i;
			changeItem();
			toggleLightbox();
		});
	}

	function nextItem(){
		if(itemIndex === totalPortfolioItem - 1)
			itemIndex = 0;
		else
			itemIndex++;
		console.log(itemIndex);
		changeItem();
	}

	function prevItem(){
		if(itemIndex === 0)
			itemIndex = totalPortfolioItem - 1;
		else
			itemIndex--;
		console.log(itemIndex);
		changeItem();

	}
	function toggleLightbox(){
		lightbox.classList.toggle("open");
	}
function changeItem(){
	imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	lightboxImg.src = imgSrc;
	console.log(imgSrc);
	lightboxTxt.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
	lightboxcnt.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

/* close lightbox*/
lightbox.addEventListener("click", function(event){
	//console.log(event.target == lightboxClose)
	if(event.target === lightboxClose || event.target === lightbox)
		toggleLightbox();
})

//Aside
	const nav = document.querySelector(".nav"),
		navList = document.querySelectorAll("li"),
		allSection = document.querySelectorAll(".section"),
		totalNavList = navList.length,
		totalallSection = allSection.length;

	for(let i = 0;i < totalNavList;i++){
		const a = navList[i].querySelector("a");
		//console.log(a);
		//console.log(navList[i]);
		a.addEventListener("click", function(){
			//console.log(this);
			

			//remove back-section class

			for(let i = 0;i < totalallSection;i++){
				allSection[i].classList.remove("back-section");
			}


			for(let j = 0;j < totalNavList ;j++){
				if( navList[j].querySelector("a").classList.contains("active")){
					//add back-section class
					allSection[j].classList.add("back-section");
				}
					
				navList[j].querySelector("a").classList.remove("active");
				

			}
			this.classList.add("active");
			showSelection(this);
		})

	}

	function showSelection(element){
		for(let i = 0;i < totalallSection;i++){
			allSection[i].classList.remove("active");
		}
		const target = element.getAttribute("href").split("#")[1];
		//console.log(target)

		document.querySelector("#"+target).classList.add("active");

	}
		
	//nav-toggler aside one slideing
	const navTogglerBtn = document.querySelector(".nav-toggler"),
		aside = document.querySelector(".aside");

		navTogglerBtn.addEventListener("click", () => {
			asideSectionTogBtn();

	});

	function asideSectionTogBtn(){
		aside.classList.toggle("open");
		navTogglerBtn.classList.toggle("open");
		for(let i = 0;i < totalallSection;i++){
			allSection[i].classList.toggle("open");
		}
	}

