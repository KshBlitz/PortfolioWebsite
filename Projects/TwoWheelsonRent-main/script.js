function showSideBar() {
    const mobileBar = document.querySelector('.mobile-sidebar');
    // allContent.style.display = 'none';
    mobileBar.style.display="flex"
}

function closeSideBar() {
    const mobileBar = document.querySelector('.mobile-sidebar');
    // allContent.style.display = 'block';
    mobileBar.style.display="none"
}


// redirect to login page if not logged in

const userInfo = sessionStorage.getItem("user-info");
const userName = localStorage.getItem("username");
// || !userName
// if (!userInfo) {
//     window.location.href = "./login.html";
// }

function postSignedOut(){
    var popup1 = document.querySelector('.loggedIn1');
    var popup2 = document.querySelector('.loggedIn2');
    const specialGreet = document.getElementById("specialGreet");
    const logout = document.getElementById("logout");
    logout.style.display="none";
    popup1.style.display = 'flex';
    popup2.style.display = 'flex';
    specialGreet.style.display = 'none';
}

function signOut() {
    // sessionStorage.removeItem('user-creds');
    // sessionStorage.removeItem('user-info');
    sessionStorage.clear();
    localStorage.clear();
    // closePopup();
    postSignedOut();
    console.log("session removed");
  }

  function checkIfloggedIn(){
    window.location.href = "login.html";
  }


//   window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// window.addEventListener('keydown', function (e) {
//     if (e.ctrlKey && (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 83 || e.keyCode == 123)) {
//         e.preventDefault();
//         return false;
//     }
// });


// script to scroll

function scrollToAbout(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - 100, // Adjust the scroll position to add extra margin
            behavior: 'smooth'
        });
    }
}
function scrollToStore(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - 150, // Adjust the scroll position to add extra margin
            behavior: 'smooth'
        });
    }
}
function scrollToContact(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - 78, // Adjust the scroll position to add extra margin
            behavior: 'smooth'
        });
    }
}