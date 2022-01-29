
const navBar = document.querySelector(".nav-links");
const skillButton = document.querySelector(".skills");
const hobbyButton = document.querySelector(".hobbies");





navBar.addEventListener("click",
    function (e) {
        const activeNav = document.querySelector(".active");
        activeNav.classList.remove("active");
        e.target.classList.add("active");




    }
);



skillButton.addEventListener("click", function () {
    const activeNav = document.querySelector(".active");
    activeNav.classList.remove("active");


    navBar.querySelector(".skill").classList.add("active");
});

hobbyButton.addEventListener("click", function () {
    const activeNav = document.querySelector(".active");
    activeNav.classList.remove("active");


    navBar.querySelector(".hobby").classList.add("active");

});


