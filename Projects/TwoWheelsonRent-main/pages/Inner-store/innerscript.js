const popup = document.querySelector('.popup');
    
function closePopup() {
  popup.style.display="none"
  const hero = document.querySelector('.hero');
  const store = document.querySelector('.store');
  const footer = document.querySelector('.footer');
  const lowerfooter = document.querySelector('.lower-footer');
  hero.style.display="block";
  store.style.display="block";
  footer.style.display="flex";
  lowerfooter.style.display="flex";
}

function showPopup() {  
  popup.style.display="flex";
  const hero = document.querySelector('.hero');
  const store = document.querySelector('.store');
  const footer = document.querySelector('.footer');
  const lowerfooter = document.querySelector('.lower-footer');
  hero.style.display="none";
  store.style.display="none";
  footer.style.display="none";
  lowerfooter.style.display="none";
  // window.onscroll = function () { window.scrollTo(0, 0); };
  
}

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

const userInfo = sessionStorage.getItem("user-info");

if (!userInfo) {
  window.location.href = "/login.html";
  alert("Please login to view cycles");
}


// validations

const registerForm = document.getElementById('storeForm');

// registerForm.addEventListener('submit', (event) => {
  
// });

// Function to validate Aadhar number


(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyDR9EPzxdrzO6TZQUS7QhPxis_VcFTDt3Y",
    authDomain: "payment-db-bfdae.firebaseapp.com",
    databaseURL: "https://payment-db-bfdae-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "payment-db-bfdae",
    storageBucket: "payment-db-bfdae.appspot.com",
    messagingSenderId: "529007641659",
    appId: "1:529007641659:web:ce129c5763fefdc50a481e",
    measurementId: "G-DF9NLM9KRR"
  };
  



  const initializeFirebase = () => {
    import(
      'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
    ).then(({ initializeApp }) => {
      import(
        'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js'
      ).then(({ getDatabase, set, ref }) => {
        import(
          'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'
        ).then(({ getAuth, createUserWithEmailAndPassword, onAuthStateChanged }) => {
          const app = initializeApp(firebaseConfig);
          const db = getDatabase();
          const auth = getAuth(app);

          onAuthStateChanged(auth, (user) => {
            // if (!user && window.location.pathname !== '/signup.html') {
            //   // User is not logged in, redirect to signup.html
            //   window.location.href = '/signup.html';
            // }

            if(true){

            }
          });

          const RegisterUser = evt => {
            evt.preventDefault();
            const AadharInp = document.getElementById('aadhar').value;
            const DateInp = document.getElementById('datetime').value;
            const HoursInp = document.getElementById('hours').value;
            const EmailInp = document.getElementById('email').value;
            var isPaid = false;


  const aadhar = document.getElementById('aadhar').value;
  const isValidAadhar = validateAadhar(aadhar);

// aadhar validation
  if (aadhar.length !== 12) {
    evt.preventDefault();
    alert('Aadhar number should be 12 digits');
    return;
  }

  if (!isValidAadhar) {
    evt.preventDefault();
    alert('Your Aadhar card number is not valid');
    return;
  }

// datetime validation

  const dateTime = new Date(document.getElementById('datetime').value);
    const now = new Date();

    if (dateTime <= now) {
      alert('Please select a future date and time');
      return;
    }

// email validation

  // function validateEmail(email) {
  //   evt.preventDefault();
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // }

  // if (!validateEmail(email)) {
  //     alert('Please enter a valid email address');
  //     return;
  //   }

// hour validation

  if (hours <= 0 || hours > 14) {
      alert('Hours should be between 1 and 14');
      return;
    }

  // Proceed with form submission or payment process

  function paymentProcess(){
    // payment logic
    return true;
  }

  if(paymentProcess){
    isPaid = true;
  }

  // saveFormData();

function validateAadhar(aadharNumber) {
  const d = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

// permutation table
const p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];


  let c = 0;
  let invertedArray = aadharNumber.split('').map(Number).reverse();

  invertedArray.forEach((val, i) => {
    c = d[c][p[(i % 8)][val]];
  });

  return c === 0;
}

function saveFormData() {
  console.log("credentials saved");
};



            createUserWithEmailAndPassword(auth, EmailInp, AadharInp)
              .then(credentials => {
                set(ref(db, `UsersAuthList/${credentials.user.uid}`), {
                  aadhar: AadharInp,
                  date: DateInp,
                  hours: HoursInp,
                  email: EmailInp,
                  isPaid: isPaid
                }).then(() => {
                  // Redirect to login page after successful registration
                  window.location.href = '/index.html';
                  alert("dtabse insertion successful");
                });
              })
              .catch(error => {
                console.error(error.code);  
                console.error(error.message);
                alert(error.message);
              });
          };

          document
            .getElementById('storeForm')
            .addEventListener('submit', RegisterUser);
        });
      });
    });
  };

  initializeFirebase();
})();

