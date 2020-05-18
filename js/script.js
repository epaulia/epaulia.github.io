window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.login_menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.accounting_list'),
    menuItem = document.querySelectorAll('.accounting_item'),
    account = document.querySelector('.account');
    const menu1 = document.querySelector('.operation_list'),
    oper = document.querySelector('.oper');
    

    account.addEventListener('click', () => {
        account.classList.toggle('account_active');
        menu.classList.toggle('accounting_active');
        oper.classList.remove('oper_active');
        menu1.classList.remove('operation_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            account.classList.toggle('account_active');
            menu.classList.toggle('accounting_active');
        }) 
})
})

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.operation_list'),
    menuItem = document.querySelectorAll('.operation_item'),
    oper = document.querySelector('.oper');
    const menu2 = document.querySelector('.accounting_list'),
    account = document.querySelector('.account');

    oper.addEventListener('click', () => {
        oper.classList.toggle('oper_active');
        menu.classList.toggle('operation_active');
        account.classList.remove('account_active');
        menu2.classList.remove('accounting_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            oper.classList.toggle('oper_active');
            menu.classList.toggle('operation_active');
        })
    })
})