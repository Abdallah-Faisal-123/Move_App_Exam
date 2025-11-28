let rowData = document.getElementById("rowData");
let searchContainer = document.getElementById("searchContainer");
let submitBtn;


async function searchByName(term) {
    closeSideNav()
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${term}`)
    response = await response.json()

    response.results ? displayMovies(response.results) : displayMovies([])
    $(".inner-loading-screen").fadeOut(300)

}


$(document).ready(() => {
    nowPlaying().then(() => {
        $(".loading-screen").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})

function openSideNav() {
    $(".side-nav-menu").animate({
        left: 0
    }, 500)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 6; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

function closeSideNav() {
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
    $(".side-nav-menu").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
}

closeSideNav()
$(".side-nav-menu i.open-close-icon").click(() => {
    if ($(".side-nav-menu").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})




function displayMovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona
}

//=============================trening Movies=================================


async function getTrendingMovies() {
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    );
    response = await response.json();

    displayMovies(response.results);

    $(".inner-loading-screen").fadeOut(300)
}

function displayMovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona;
}

//===============================Now Playing===============================

async function nowPlaying() {
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    );
    response = await response.json();

    displayMovies(response.results);

    $(".inner-loading-screen").fadeOut(300)
}

function displaynowMovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona;
}

//==============================Popular movies============================

async function Popular() {
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    );
    response = await response.json();

    displayMovies(response.results);

    $(".inner-loading-screen").fadeOut(300)
}

function displayPopularmovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona;
}

//===============================top Rated=================================

async function topRated() {
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    );
    response = await response.json();

    displayMovies(response.results);

    $(".inner-loading-screen").fadeOut(300)
}

function displayTopratedmovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona;
}
//===============================Trending ================================
async function Trending() {
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    );
    response = await response.json();

    displayMovies(response.results);

    $(".inner-loading-screen").fadeOut(300)
}

function displayTrendingmovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona;
}

//===============================upcoming=================================
async function Upcoming() {
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    );
    response = await response.json();

    displayMovies(response.results);

    $(".inner-loading-screen").fadeOut(300)
}

function displayUpcomingmovies(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-12 col-md-6 col-lg-4 g-5">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].title || arr[i].name}</h3>
                    <p>${arr[i].overview}</p>
                    <p class="rating rounded-5 p-2  ">${arr[i].vote_average.toFixed(1)}</p>
                    <span class="stars"></span>
                    <p class="relase">Release: ${arr[i].release_date || arr[i].first_air_date}</p>
                </div>
            </div>
        </div>`;

    }

    rowData.innerHTML = cartoona;
}
//===============================contact form==============================

function showContacts() {
    rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;


//========================validation====================================

function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}

