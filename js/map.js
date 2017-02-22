var link = document.querySelector(".map");
    var popup = document.querySelector(".modal-content-map");
	var close = document.querySelector(".modal-content-close");
	var overlay = document.querySelector(".modal-overlay");
	
	link.addEventListener("click", function(event) {
	  event.preventDefault();
	  popup.classList.add("modal-content-show");
	  overlay.classList.add("modal-overlay-show");
	});
	
	close.addEventListener("click", function(event) {
	  event.preventDefault();
	  popup.classList.remove("modal-content-show");
	  overlay.classList.remove("modal-overlay-show");
	});
	
	 window.addEventListener("keydown", function(event) {
	    if (event.keyCode === 27) {
		  if (popup.classList.contains("modal-content-show")) {
		    popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		  }
		}
	  });
	