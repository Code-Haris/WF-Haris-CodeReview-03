/* --------------- COUNTER --------------- */

function generateEvents (){
	var btn = document.getElementsByClassName("btn");

	for(var i = 0; i < films.length; i++){
		btn[i].addEventListener("click",function(){counting(this.getAttribute("id"))
		}, false);
	}
}

function counting(i) {
	var counter = document.getElementsByClassName("counter");
	var count = films[i].filmLikes;
	count ++;
	films[i].filmLikes = count;
	counter[i].innerHTML = count;
};

/* --------------- MOVIE TILES --------------- */

function create(films){
	for (var i = 0; i < films.length; i++){
		var box = document.getElementsByTagName("content")[0];
		box.innerHTML += `<article><img src="${films[i].filmImage}"><div class="info"><div class="description"><h3>${films[i].filmTitle}</h3><p>${films[i].filmYear}</p><p>${films[i].filmDescription}</p></div><div class="likes"><button class="btn" id="${i}"">Like <i class="fa fa-thumbs-up"></i></button><span class="counter">${films[i].filmLikes}</span></div></div></article>`;
	}

	generateEvents ();
}
create(films);

/* --------------- SORT AND CHANGE ORDER --------------- */

var box = document.getElementsByTagName("content")[0];

function sortingByLikes(){
	var newFilms = films.sort(function compareNumbers(a, b){
    	var likesA = (a.filmLikes);
    	var likesB = (b.filmLikes);
    	return likesB - likesA;
	});
	box.innerHTML = "";
	create(newFilms);
}

function sortingByYear(){
	var newFilms = films.sort(function(a, b){
    	var dateA = new Date(a.filmYear);
    	var dateB = new Date(b.filmYear);
    	return dateB - dateA;
	});
	box.innerHTML = "";
	create(newFilms);
}

function sortingByAlphabet(){
	var newFilms = films.sort(function(a,b){
		var nameA = a.filmTitle.toLowerCase(); // ignore upper and lowercase
  		var nameB = b.filmTitle.toLowerCase();

  		if (nameA < nameB) {
    		return -1;
 		}
 		if (nameA > nameB) {
   			 return 1;
  		}
  		return 0; // names equal
	});
	box.innerHTML = "";
	create(newFilms);
}

var sortIt = document.getElementById("sort");
sortIt.addEventListener("click", sorting, false);

function sorting(){
	var sortIt = document.getElementById("sort").value;

	if (sortIt == "popularity"){
		return sortingByLikes();
	}

	else if (sortIt == "year"){
		return sortingByYear();
	}

	else if (sortIt == "alphabet"){
		return sortingByAlphabet();
	}
}
