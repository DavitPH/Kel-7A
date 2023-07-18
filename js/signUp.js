document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai input dari form
    var username = document.querySelector('input[name="username"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirm-password"]').value;

    // Lakukan validasi formulir di sini
    if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return;
    }

    // Jika validasi berhasil, arahkan pengguna ke halaman login
    redirectToLoginPage();
});

function redirectToLoginPage() {
    window.location.href = 'index.html'
    alert("Sign Up Successfull"); // Ganti "login.html" dengan halaman login yang sebenarnya
}
