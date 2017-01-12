function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(name) {
    var user = getCookie(name);
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
            setCookie("grp2Login", "1", 1);
            var chk = checkCookie("grp2Login")
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
    setCookie("grp2Login", "", 1);
    window.location.href = "index.html";
}