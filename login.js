function validate(){

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user == "farida" && pass == "143"){

        // window.location.href('home.html');
        // sessionStorage.setItem('user', user);
        // console.log(sessionStorage.getItem('user'));
        // return false;
        
        window.location = "home.html"; // Redirecting to other page.
        sessionStorage.setItem('user', user);
        console.log(sessionStorage.getItem('user'));
        return false;

    }else{

        alert("username/password salah!!");
        return false;
        
    }
}