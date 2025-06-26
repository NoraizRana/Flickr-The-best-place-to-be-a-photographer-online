
const darkToggle = document.querySelector('.nav3 img[alt="Dark Mode"]');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.nav2 ul li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#eb175e';
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = 'rgb(215, 203, 203)';
  });
});
const headerText = "THE BEST PLACE TO BE A PHOTOGRAPHER ONLINE.";
const headerPara = document.querySelector(".sess p");

let i = 0;
function typeWriter() {
  if (i < headerText.length) {
    headerPara.textContent += headerText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

headerPara.textContent = "";
typeWriter();


const joinBtn = document.querySelector('.sess button');
joinBtn.addEventListener('click', () => {
  joinBtn.textContent = "Thanks for Joining!";
  joinBtn.style.backgroundColor = '#00cc66';
  setTimeout(() => {
    joinBtn.textContent = "JOIN FOR FREE";
    joinBtn.style.backgroundColor = 'rgb(235, 23, 94)';
  }, 3000);
});

const emailBox = document.querySelector('.email-box');
emailBox.addEventListener('click', () => {
  const userEmail = prompt("Enter your email to subscribe:");
  if (userEmail && userEmail.includes("@")) {
    alert("Subscribed successfully!");
    emailBox.textContent = "Subscribed!";
    emailBox.style.backgroundColor = "#00cc66";
    emailBox.style.color = "#fff";
  } else if (userEmail) {
    alert("Please enter a valid email address.");
  }
});


// const toggleBtn = document.getElementById('themeToggle');
// const body = document.body;

// toggleBtn.addEventListener('click', () => {
//   body.classList.toggle('light-mode');

//   if (body.classList.contains('light-mode')) {
//     localStorage.setItem('theme', 'light');
//   } else {
//     localStorage.setItem('theme', 'dark');
//   }
// });

// window.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'light') {
//     body.classList.add('light-mode');
//   }
// });


