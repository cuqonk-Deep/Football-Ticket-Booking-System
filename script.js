function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}
function handleBooking(event) {
    event.preventDefault(); 
    const match = document.getElementById("match").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const totalPrice = quantity * 50000; 
    if (!match || !name || !email || isNaN(quantity)) {
        alert("Mohon lengkapi semua data pemesanan.");
        return;
    }
    const confirmation = confirm(`Anda akan memesan ${quantity} tiket untuk pertandingan ${match}. Total: Rp ${totalPrice.toLocaleString()}\nKlik OK untuk melanjutkan ke pembayaran.`);

    if (confirmation) {
        proceedToPayment(totalPrice);
    }
    
//EMAIL
}
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
function openEmail3() {
    window.location.href = "mailto:cuqonkbadict06@gmail.com";
}
function openEmail1() {
    window.location.href = "mailto:syaaabdilah@gmail.com";
}
function openEmail2() {
    window.location.href = "mailto:arafpratama14@gmail.com";
}

//WA
function openWhatsapp1() {
    window.location.href = "https://api.whatsapp.com/send?phone=6281223062748&text=Apakah%20tiket%20masih%20tersedia?";
}
function openWhatsapp2() {
    window.location.href = "https://api.whatsapp.com/send?phone=6285697835731&text=Apakah%20tiket%20masih%20tersedia?";
}
function openWhatsapp3() {
    window.location.href = "https://api.whatsapp.com/send?phone=6283184857676&text=Apakah%20tiket%20masih%20tersedia?";
}
function openGooglemaps() {
    window.location.href = "https://maps.app.goo.gl/x6jEgov7sdDuQqQ69";
}

//DANA
function proceedToPayment(totalPrice) {
    alert(`Melanjutkan ke pembayaran melalui DANA untuk total Rp ${totalPrice.toLocaleString()}.`);
    window.location.href = "https://link.dana.id/m/checkout"; 
}

// Array untuk menyimpan data pemesanan
let bookings = [];

// Simpan data pemesanan saat pengguna memesan tiket
function handleBooking(event) {
    event.preventDefault();

    const match = document.getElementById("match").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const totalPrice = quantity * 50000;

    if (!match || !name || !email || isNaN(quantity)) {
        alert("Mohon lengkapi semua data sebelum memesan!");
        return;
    }

    const booking = { name, email, match, quantity, totalPrice };
    bookings.push(booking); // Tambahkan ke array bookings

    alert(`Pesanan berhasil: ${name}, ${quantity} tiket untuk pertandingan ${match}.`);
    document.getElementById("booking-form").reset();
}

// Tampilkan data pemesanan di halaman admin
function showBookings() {
    const tbody = document.getElementById("booking-list").querySelector("tbody");
    tbody.innerHTML = ""; // Bersihkan isi tabel

    bookings.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.email}</td>
            <td>${booking.match}</td>
            <td>${booking.quantity}</td>
            <td>Rp ${booking.totalPrice.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });
}

// Tampilkan halaman admin setelah login
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";

    if (sectionId === "admin-panel") {
        showBookings(); // Tampilkan data pemesanan
    }
}

const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"
};

function handleAdminLogin(event) {
    event.preventDefault();
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        alert("Login berhasil! Mengalihkan ke halaman admin...");
        showSection('admin-panel'); // Alihkan ke halaman admin
    } else {
        alert("Username atau password salah!");
    }
}
