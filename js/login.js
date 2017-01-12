function setLoginId(cname) {
    localStorage.setItem(cname, "1");
}

function getLoginId(cname) {
    return localStorage.getItem(cname);
}

function checkLogin(name) {
    var user = getLoginId(name);
    // return user != "";
    return user == "1";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var s = document.getElementById("h-error");

    if (username.trim().length == 0 || (password.trim().length == 0)) {
        s.innerHTML = "All fields must be filled properly";
    }
    else {
        if (username.trim() == "admin" && (password.trim() == "group2")) {
            setLoginId("grp2Login");
            var chk = checkLogin("grp2Login")
            var e = getLoginId("grp2Login");
            s.innerHTML = "";
            // alert(chk);
            if (chk) {
                window.location.href = "list.html";
            }
            else {
                s.innerHTML = "Login Failed";
            }
        }
        else {
            s.innerHTML = "Wrong Login Details";
        }

    }
}

function logout() {
    localStorage.setItem("grp2Login", "");
    window.location.href = "index.html";
}