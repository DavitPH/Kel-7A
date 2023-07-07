// Mengambil referensi elemen-elemen yang dibutuhkan
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('.login-button');

// Menambahkan event listener pada tombol login
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Validasi email dan password
<<<<<<< HEAD
    if (emailInput.value === 'admin') {
=======
    if (emailInput.value === '') {
>>>>>>> 98e37b2dcc3e472ea94b1d35b7f4d568cfbf6786
        showError(emailInput, 'Email can\'t be blank');
    } else {
        hideError(emailInput);
    }

<<<<<<< HEAD
    if (passwordInput.value === 'admin') {
=======
    if (passwordInput.value === '') {
>>>>>>> 98e37b2dcc3e472ea94b1d35b7f4d568cfbf6786
        showError(passwordInput, 'Password can\'t be blank');
    } else {
        hideError(passwordInput);
    }

    // Jika tidak ada error, dapat melakukan proses login
    if (!emailInput.classList.contains('error') && !passwordInput.classList.contains('error')) {
        // Di sini Anda dapat menambahkan logika untuk melakukan proses login, seperti mengirim data ke server, dll.
        // Contoh sederhana:
        alert('Login successful');
        // Mengarahkan ke halaman home.html
        window.location.href = 'home.html';
    }
});

// Menampilkan pesan error pada input
function showError(input, errorMessage) {
    const errorIcon = input.nextElementSibling;
    const errorText = input.parentElement.nextElementSibling;

    input.classList.add('error');
    errorIcon.style.visibility = 'visible';
    errorText.textContent = errorMessage;
}

// Menghilangkan pesan error pada input
function hideError(input) {
    const errorIcon = input.nextElementSibling;
    const errorText = input.parentElement.nextElementSibling;

    input.classList.remove('error');
    errorIcon.style.visibility = 'hidden';
<<<<<<< HEAD
    errorText.textContent = '';
}
=======
    errorText.textContent = '';
}
>>>>>>> 98e37b2dcc3e472ea94b1d35b7f4d568cfbf6786
