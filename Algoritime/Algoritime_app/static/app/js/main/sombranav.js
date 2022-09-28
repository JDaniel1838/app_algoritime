$navbar = document.getElementById("navbar");

document.addEventListener("scroll", (e) => {
    if (e.path[1].scrollY != 0) {
        if ($navbar.classList.length === 0) {
            $navbar.classList.add("sombra");
        }

    } else {
        $navbar.classList.remove("sombra");
    }
});

