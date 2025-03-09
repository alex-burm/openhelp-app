document.querySelectorAll('.btn__dropdown').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();        

        if (this.parentElement.classList.contains('show')) {
            this.parentElement.classList.remove('show');
            this.classList.remove('active');

        } else {
            closeDropdown();
            this.parentElement.classList.add('show');
            this.classList.add('active')
        }
    });
});

window.addEventListener('click', function (e) {
    if (!e.target.closest('.btn__dropdown')) {
        closeDropdown();
    }
});

const closeDropdown = () => {
    document.querySelectorAll('.dropdown').forEach(function (dropdown) { 
        dropdown.classList.remove('show');
        dropdown.firstElementChild.classList.remove('active');
    });
}