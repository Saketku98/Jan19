var reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia sed dignissimos aliquid at atque necessitatibus officiis debitis vero! Incidunt fugiat perspiciatis laborum voluptate recusandae. Aliquam quas similique ipsa cum?",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Est quia sed dignissimos aliquid at atque necessitatibus officiis debitis vero! Incidunt fugiat perspiciatis laborum voluptate recusandae. Aliquam quas similique ipsa cum?",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Est quia sed dignissimos aliquid at atque necessitatibus officiis debitis vero! Incidunt fugiat perspiciatis laborum voluptate recusandae. Aliquam quas similique ipsa cum?",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia sed dignissimos aliquid at atque necessitatibus officiis debitis vero! Aliquam quas similique ipsa cum?",
    },
  ];
  
  var imgElement = document.getElementById("person-img");
  var author = document.getElementById("author");
  var job = document.getElementById("job");
  var info = document.getElementById("info");
  var prevBtn = document.querySelector(".left");
  var nextBtn = document.querySelector(".right");
  var randomBtn = document.querySelector(".random-btn");
  
  var currentIndex = 2;
  updateUserDetails();
  
  prevBtn.addEventListener("click", prevClick);
  nextBtn.addEventListener("click", nextClick);
  randomBtn.addEventListener("click", randomaize);
  
  function prevClick() {
    if (currentIndex === 0) {
      currentIndex = reviews.length - 1;
    } else {
      currentIndex--;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function nextClick() {
    if (currentIndex === reviews.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
  }