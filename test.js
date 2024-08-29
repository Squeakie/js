function clearCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}
 
function startInactivityTimer() {
    var timeoutID;
    function resetTimer() {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(clearCookies, 1200000); // 20 minutes in milliseconds
    }
 
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
}
 
startInactivityTimer();
