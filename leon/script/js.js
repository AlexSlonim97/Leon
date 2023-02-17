window.onload = function () {

    let popup1 = document.getElementById('popup-1');
    let popup2 = document.getElementById('popup-2');
    let btn = document.getElementById('btn');


    btn.onclick = function () {
        popup1.style.display = "block";
    }

    popup1.onclick = function () {
        popup1.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === popup1) {
            popup1.style.display = "none";
        }
    }

    //popup 2----------------------------------------------

    // btn.onclick = function () {
    //     popup2.style.display = "block";
    // }
    //
    // popup2.onclick = function () {
    //     popup2.style.display = "none";
    // }
    //
    // window.onclick = function (event) {
    //     if (event.target === popup2) {
    //         popup2.style.display = "none";
    //     }
    // }

}