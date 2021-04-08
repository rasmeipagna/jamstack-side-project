    /***  Disparition/Apparition au scroll de banner reseaux/contact  ***/
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("banner").style.top = "0";
            document.getElementById("cbp-hrmenu").style.top = "37px";
        } else {
            document.getElementById("banner").style.top = "-50px";
            document.getElementById("cbp-hrmenu").style.top = "0";
        }
        prevScrollpos = currentScrollPos;
    }