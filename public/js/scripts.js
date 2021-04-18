// Scripts

const menu =  document.querySelector(".menu");  
const hamburgerIcon = document.querySelector(".hamburger");
const searchIcon = document.querySelector(".search");
const search = document.querySelector(".searchBar");

const closeMenu = document.querySelector(".closeMenu");
const closeSearch = document.querySelector(".closeSearch");
const iconCenterDark = document.querySelector(".dark")
const iconCenterGreen = document.querySelector(".green")

hamburgerIcon.addEventListener("click", toggleOpenMenu);

closeMenu.addEventListener("click", toggleOpenMenu);

closeSearch.addEventListener("click", toggleOpenSearch);
searchIcon.addEventListener("click", toggleOpenSearch);

function toggleOpenMenu() {
    if (menu.classList.contains("showMenu"))  {
      menu.classList.remove("showMenu");
      closeMenu.style.display = "none";
      hamburgerIcon.style.display = "block";
      iconCenterDark.classList.remove("clicked");

    } else if (search.classList.contains("showSearch"))
    {

      search.classList.remove("showSearch");
      closeSearch.style.display = "none";
      searchIcon.style.display = "block";
      iconCenterGreen.classList.remove("clickedSearch");

    }
      
      else {
      menu.classList.add("showMenu");
      iconCenterDark.classList.add("clicked");

      closeMenu.style.display = "block";
      hamburgerIcon.style.display = "none";
    }
  }

  function toggleOpenSearch() {
    if (search.classList.contains("showSearch")) {
      search.classList.remove("showSearch");
      closeSearch.style.display = "none";
      searchIcon.style.display = "block";
      iconCenterGreen.classList.remove("clickedSearch");

    } else if(menu.classList.contains("showMenu"))  {
      menu.classList.remove("showMenu");
      closeMenu.style.display = "none";
      hamburgerIcon.style.display = "block";
      iconCenterDark.classList.remove("clicked");

    }
      
      else {
      search.classList.add("showSearch");
      iconCenterGreen.classList.add("clickedSearch");

      closeSearch.style.display = "block";
      searchIcon.style.display = "none";
    }
  }


  const scrollButton = document.querySelector(".scrollTop");



const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
 window.scrollTo(0, c - c / 10);
  }
};
scrollButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}