const dropdownListener = e => {
    e.preventDefault();

    const el = e.currentTarget;

    if (el.parentElement.classList.contains('show')) {
        el.parentElement.classList.remove('show');
        el.classList.remove('active');

    } else {
        closeDropdown();
        el.parentElement.classList.add('show');
        el.classList.add('active')
    }
}
const handleDropdown = element => {
    element.querySelectorAll('.btn__dropdown').forEach(button => {
        button.removeEventListener('click', dropdownListener);
        button.addEventListener('click', dropdownListener);
    });
}

handleDropdown(document);

window.addEventListener('click', function (e) {
    if (!e.target.closest('.btn__dropdown, .form__control--sm, .form__control--m')) {
        closeDropdown();
    }

    if (e.target.closest('.modal__close, .modal__overlay') || e.target.classList.contains('.modal--close')) {
        closeModal();
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

const openModal = (url) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('modal--visible');
    modal.innerHTML = `
        <div class="modal__overlay"></div>
        <div class="modal__inner"></div>
    `;
    document.querySelector('body').appendChild(modal);
    fetch(url, {}).then(result => {
        return result.text();
    }).then(html => {
        modal.querySelector('.modal__inner').innerHTML = html;
    });

    return false;
}

const closeModal = () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(el => el.classList.remove('modal--visible'));
    setTimeout(() => modals.forEach(el => el.remove()), 500);
}
