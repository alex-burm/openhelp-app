const modal = document.querySelector('.modal');

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
    if (!e.target.closest('.btn__dropdown, .form__control--sm, .form__control--m, .dropdown--filter')) {
        closeDropdown();
    }

    if (e.target.closest('.modal__close, .modal__overlay')) {
        modal.classList.remove('modal--visible');
    }
});

const closeDropdown = () => {
    document.querySelectorAll('.dropdown').forEach(function (dropdown) { 
        dropdown.classList.remove('show');
        dropdown.firstElementChild.classList.remove('active');
    });
}

//Global search
const headerSearch = document.querySelector('.header__form .form__control');
const search = document.querySelector('.search');
const overlay = document.querySelector('.overlay');
const layout = document.querySelector('.layout');

headerSearch?.addEventListener('focus', () => {
    addOrRemoveSearch('add');
})

headerSearch?.addEventListener('blur', () => {
    addOrRemoveSearch('remove');
})

const addOrRemoveSearch = (method) => {
    search.classList[method]('show');
    overlay.classList[method]('show');
    layout.classList[method]('no__scroll');
}

//Login
document.querySelector('#password + .btn__primary')?.addEventListener('click', function() {
    const input = document.querySelector('#password');
    
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        this.classList.add('show');
    } else {
        input.setAttribute('type', 'password');
        this.classList.remove('show');
    }
});