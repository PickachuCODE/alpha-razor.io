class RazorDom{
    isInViewport(targetId) {
        var myElement = document.getElementById(targetId);
        var bounding = myElement.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            return true
        } else {
            return false
        }
    }
}

export {RazorDom}