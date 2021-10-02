function topLinkClicked(obj) {
    let otherNavs = document.getElementsByClassName("nav-link");
    for (let i = 0; i < otherNavs.length; i++) {
        otherNavs[i].classList.remove('active');
    }
    obj.classList.add('active');
}