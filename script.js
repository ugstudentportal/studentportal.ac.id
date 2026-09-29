    /*
    ==================================================
    UG STUDENTSITE - LOGIN SCRIPT
    ==================================================

    Fungsi:
    1. Toggle tampil/sembunyi password.
    2. Tombol Enter menjalankan submit login.
    3. Tombol "Masuk" dan Enter menggunakan proses yang sama.
    4. Setelah form valid, pengguna diarahkan ke dashboard.html.

    Catatan:
    - File dashboard.html harus berada di folder yang sama dengan login.html.
    - Ini adalah login sisi front-end. Jika nanti memakai backend/API,
    bagian performLogin() dapat diganti dengan proses autentikasi server.
    ==================================================
    */

    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("loginForm");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");



        /* =========================================
        SUBMIT LOGIN
        Berfungsi saat:
        - klik tombol Masuk
        - tekan Enter dari username/password
        ========================================= */
        if (loginForm) {
            loginForm.addEventListener("submit", function (event) {
                event.preventDefault();
                performLogin();
            });
        }

function performLogin(){


const username =
document.getElementById("username").value.trim();


const password =
document.getElementById("password").value.trim();



const akun = [

{
username:"fatikaindahh",
password:"Satu2345"
},

{
username:"fatikaindahh",
password:"Satu2345"
}

];



const berhasil = akun.some(
(user)=>
user.username === username &&
user.password === password
);



if(berhasil){


localStorage.setItem(
"ugStudentLoggedIn",
"true"
);


localStorage.setItem(
"ugStudentUsername",
username
);


window.location.href="dashboard.html";


}else{


alert("Username atau password salah");


}


}

        /*
        * Kompatibilitas:
        * Jika masih ada bagian project lama yang memanggil login(),
        * fungsi global ini tetap tersedia.
        */
        window.login = performLogin;
    });

    // Interaksi tombol Keluar
    // Mengarahkan pengguna kembali ke halaman beranda (index.html)
    function logoutUser() {
        window.location.href = "index.html";
    }

    /*
    ==================================================
    UG STUDENTSITE - LOGIN SCRIPT
    ==================================================

    Fungsi:
    1. Toggle tampil/sembunyi password.
    2. Tombol Enter menjalankan submit login.
    3. Tombol "Masuk" dan Enter menggunakan proses yang sama.
    4. Setelah form valid, pengguna diarahkan ke dashboard.html.

    Catatan:
    - File dashboard.html harus berada di folder yang sama dengan login.html.
    - Ini adalah login sisi front-end. Jika nanti memakai backend/API,
    bagian performLogin() dapat diganti dengan proses autentikasi server.
    ==================================================
    */

    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("loginForm");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const togglePassword = document.getElementById("togglePassword");

        /* =========================================
        TOGGLE PASSWORD
        ========================================= */
        if (togglePassword && passwordInput) {
            togglePassword.addEventListener("click", function (event) {
                event.preventDefault();

                const passwordSedangTersembunyi =
                    passwordInput.type === "password";

                if (passwordSedangTersembunyi) {
                    passwordInput.type = "text";

                    togglePassword.classList.remove("eye-show");
                    togglePassword.classList.add("eye-hide");

                    togglePassword.setAttribute(
                        "aria-label",
                        "Sembunyikan password"
                    );

                    togglePassword.setAttribute(
                        "title",
                        "Sembunyikan password"
                    );

                    togglePassword.setAttribute(
                        "aria-pressed",
                        "true"
                    );
                } else {
                    passwordInput.type = "password";

                    togglePassword.classList.remove("eye-hide");
                    togglePassword.classList.add("eye-show");

                    togglePassword.setAttribute(
                        "aria-label",
                        "Tampilkan password"
                    );

                    togglePassword.setAttribute(
                        "title",
                        "Tampilkan password"
                    );

                    togglePassword.setAttribute(
                        "aria-pressed",
                        "false"
                    );
                }

                /* Kembalikan fokus ke password agar nyaman digunakan */
                passwordInput.focus();

                /* Letakkan cursor di akhir isi password */
                const panjangPassword = passwordInput.value.length;

                try {
                    passwordInput.setSelectionRange(
                        panjangPassword,
                        panjangPassword
                    );
                } catch (error) {
                    /* Browser tertentu dapat mengabaikan setSelectionRange */
                }
            });
        }

        /* =========================================
        SUBMIT LOGIN
        Berfungsi saat:
        - klik tombol Masuk
        - tekan Enter dari username/password
        ========================================= */
        if (loginForm) {
            loginForm.addEventListener("submit", function (event) {
                event.preventDefault();
                performLogin();
            });
        }

       

        /*
        * Kompatibilitas:
        * Jika masih ada bagian project lama yang memanggil login(),
        * fungsi global ini tetap tersedia.
        */
        window.login = performLogin;
    });

    // Interaksi tombol Keluar
    // Mengarahkan pengguna kembali ke halaman beranda (index.html)
    function logoutUser() {
        window.location.href = "index.html";
    }

    // script profil
    // Tidak ada animasi pada halaman profil
    document.addEventListener("DOMContentLoaded",()=>{
        document.querySelectorAll(".profile-card,.save-btn").forEach(el=>{
            el.style.animation="none";
        });
    });

    // Tambahan JavaScript Kartu Mahasiswa
    // Tidak ada perubahan fungsi lama

    document.addEventListener("DOMContentLoaded", function(){
        const kartu = document.querySelector('a[href="kartu-mahasiswa.html"]');
        if(kartu){
            kartu.addEventListener("click", function(){
                window.location.href="kartu-mahasiswa.html";
            });
        }
    });

    /* =====================================================
    KARTU MAHASISWA SCRIPT
    ===================================================== */


    /*
    DOWNLOAD PDF KTM
    */

    function downloadPDF(){

        alert(
            "Kartu Mahasiswa berhasil diproses untuk Download PDF"
        );


        /*
        Nantinya dapat dikembangkan menggunakan:
        jsPDF / html2canvas
        untuk generate PDF asli
        */

    }




    /*
    DOWNLOAD PNG KTM
    */

    function downloadPNG(){


        alert(
            "Kartu Mahasiswa berhasil diproses untuk Download PNG"
        );


        /*
        Nantinya dapat dikembangkan menggunakan:
        html2canvas
        untuk export kartu menjadi gambar
        */

    }





    /*
    LOGOUT GLOBAL
    */

    function logoutUser(){

        sessionStorage.clear();

        window.location.href="index.html";

    }





    /*
    BUTTON AKSI CEPAT
    */


    document.addEventListener(
    "DOMContentLoaded",
    function(){



    const tombolUpdate =
    document.querySelectorAll(
    ".info-card button"
    );



    if(tombolUpdate.length){


    tombolUpdate.forEach(
    (btn,index)=>{


    btn.addEventListener(
    "click",
    function(){


    if(index===0){


    alert(
    "Menu Perbarui Data Mahasiswa"
    );


    }



    if(index===1){


    alert(
    "Silakan scan QR untuk verifikasi kartu mahasiswa"
    );


    }


    }


    );


    });


    }



    });

    /* =====================================================
    KARTU MAHASISWA SCRIPT
    UG STUDENTSITE

    Fungsi:
    1. Upload foto mahasiswa
    2. Preview foto pada KTM
    3. Mengganti inisial FP
    4. Tombol download KTM
    ===================================================== */



    // Menunggu seluruh halaman selesai dimuat

    document.addEventListener(
    "DOMContentLoaded",
    function(){





    /* =====================================================
    FITUR UPLOAD FOTO MAHASISWA

    Input:
    <input id="uploadFoto">

    Output:
    Foto tampil di kotak KTM
    ===================================================== */



    // Mengambil elemen input upload

    const uploadFoto = 
    document.getElementById("uploadFoto");



    // Mengambil elemen gambar preview

    const fotoMahasiswa =
    document.getElementById("fotoMahasiswa");



    // Mengambil teks inisial FP

    const inisial =
    document.getElementById("inisial");






    // Mengecek apakah input upload tersedia

    if(uploadFoto){



        uploadFoto.addEventListener(
        "change",
        function(event){



            /*
            Mengambil file yang dipilih user
            */

            const file =
            event.target.files[0];




            // Jika tidak ada file dipilih

            if(!file){

                return;

            }





            /*
            Validasi file

            Hanya menerima:
            JPG
            PNG
            JPEG
            WEBP
            */


            if(!file.type.startsWith("image/")){


                alert(
                "Silakan pilih file gambar"
                );


                uploadFoto.value="";


                return;


            }







            /*
            Membuat pembaca file

            FileReader digunakan agar
            gambar dapat tampil sebelum upload server
            */


            const reader =
            new FileReader();






            /*
            Setelah gambar berhasil dibaca
            */


            reader.onload =
            function(e){



                // memasukkan sumber gambar

                fotoMahasiswa.src =
                e.target.result;




                /*
                Menampilkan foto
                */

                fotoMahasiswa.style.display =
                "block";




                /*
                Menyembunyikan FP
                */

                inisial.style.display =
                "none";



            };







            /*
            Membaca file sebagai URL gambar
            */


            reader.readAsDataURL(file);




        });


    }













    /* =====================================================
    TOMBOL DOWNLOAD PDF

    Saat ini masih simulasi

    Nantinya dapat dikembangkan:
    html2canvas
    jsPDF
    ===================================================== */


    const tombolPDF =
    document.querySelector(
    ".button-kartu button:first-child"
    );



    if(tombolPDF){



    tombolPDF.addEventListener(
    "click",
    function(){


    alert(
    "Download PDF KTM sedang diproses"
    );



    });


    }










    /* =====================================================
    TOMBOL DOWNLOAD PNG

    ===================================================== */


    const tombolPNG =
    document.querySelector(
    ".button-kartu .outline"
    );


    if(tombolPNG){
    tombolPNG.addEventListener(
    "click",
    function(){
    alert(
    "Download PNG KTM sedang diproses"
    );
    });
    }
    });




