const userDetailsForm = document.getElementById('userDetailsForm');
const userDetailsContainer = document.getElementById('userDetails');
const genderContentContainer = document.getElementById('genderContent');
const maleContentContainer = document.getElementById('maleContent');
const femaleContentContainer = document.getElementById('femaleContent');
const maleSongsContainer = document.getElementById('maleSongs');
const femaleSongsContainer = document.getElementById('femaleSongs');

userDetailsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const otherPhone = document.getElementById('otherPhone').value;
  const gender = document.getElementById('gender').value;
  const password = document.getElementById('password').value;

  if (password === 'heartbrokenofnaitik') {
    // Save user details
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('otherPhone', otherPhone);
    localStorage.setItem('gender', gender);

    // Display user details
    userDetailsContainer.style.display = 'block';
    document.getElementById('userName').textContent = name;
    document.getElementById('userPhone').textContent = phone;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userOtherPhone').textContent = otherPhone;
    document.getElementById('userGender').textContent = gender;

    // Display gender-specific content
    genderContentContainer.style.display = 'block';
    if (gender === 'male') {
      maleContentContainer.style.display = 'block';
      displaySongs(maleSongsContainer);
    } else {
      femaleContentContainer.style.display = 'block';
      displaySongs(femaleSongsContainer);
    }
  } else {
    alert('Incorrect password. Please try again.');
  }
});

function displaySongs(songsContainer) {
  const songs = getSongs();
  songs.forEach((song) => {
    const li = document.createElement('li');
    li.textContent = song;
    songsContainer.appendChild(li);
  });
}

function getSongs() {
  return [
    'Tera Yaar Hoon Main',
    'Atrangi Yaari',
    'Veere Veere Di Wedding',
    'Yara Teri Yari'
  ];
}