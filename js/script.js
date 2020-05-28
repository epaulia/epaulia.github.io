/* window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.login_menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
}) */

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.accounting_list'),
    menuItem = document.querySelectorAll('.accounting_item'),
    account = document.querySelector('.account');
    const menu1 = document.querySelector('.operation_list'),
    oper = document.querySelector('.oper');
    const hrr = document.querySelector('.hrr');
    const menu3 = document.querySelector('.hr_list');
    const menu4 = document.querySelector('.settings_list'),
    set = document.querySelector('.set');
    const menu5 = document.querySelector('.account_list'),
    acc = document.querySelector('.acc');
    

    account.addEventListener('click', () => {
        account.classList.toggle('account_active');
        menu.classList.toggle('accounting_active');
        oper.classList.remove('oper_active');
        menu1.classList.remove('operation_active');
        hrr.classList.remove('hrr_active');
        menu3.classList.remove('hr_active');
        set.classList.remove('set_active');
        menu4.classList.remove('settings_active');
        acc.classList.remove('acc_active');
        menu5.classList.remove('act_active');
    });
})

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.operation_list'),
    menuItem = document.querySelectorAll('.operation_item'),
    oper = document.querySelector('.oper');
    const menu2 = document.querySelector('.accounting_list'),
    account = document.querySelector('.account');
    const hrr = document.querySelector('.hrr');
    const menu3 = document.querySelector('.hr_list');
    const menu4 = document.querySelector('.settings_list'),
    set = document.querySelector('.set');
    const menu5 = document.querySelector('.account_list'),
    acc = document.querySelector('.acc');

    oper.addEventListener('click', () => {
        oper.classList.toggle('oper_active');
        menu.classList.toggle('operation_active');
        account.classList.remove('account_active');
        menu2.classList.remove('accounting_active');
        hrr.classList.remove('hrr_active');
        menu3.classList.remove('hr_active');
        set.classList.remove('set_active');
        menu4.classList.remove('settings_active');
        acc.classList.remove('acc_active');
        menu5.classList.remove('act_active');
    });
})

window.addEventListener('DOMContentLoaded', () => {
    const menu5 = document.querySelector('.account_list'),
    menuItem = document.querySelectorAll('.account_item'),
    acc = document.querySelector('.acc');
    const menu4 = document.querySelector('.settings_list'),
    set = document.querySelector('.set');
    const menu2 = document.querySelector('.accounting_list'),
    account = document.querySelector('.account');
    const hrr = document.querySelector('.hrr');
    const menu3 = document.querySelector('.hr_list');
    const menu1 = document.querySelector('.operation_list'),
    oper = document.querySelector('.oper');

    acc.addEventListener('click', () => {
        acc.classList.toggle('acc_active');
        menu5.classList.toggle('act_active');
        set.classList.remove('set_active');
        menu4.classList.remove('settings_active');
        account.classList.remove('account_active');
        menu2.classList.remove('accounting_active');
        hrr.classList.remove('hrr_active');
        menu3.classList.remove('hr_active');
        oper.classList.remove('oper_active');
        menu1.classList.remove('operation_active');
    });
})

window.addEventListener('DOMContentLoaded', () => {
    const menu4 = document.querySelector('.settings_list'),
    menuItem = document.querySelectorAll('.settings_item'),
    set = document.querySelector('.set');
    const menu2 = document.querySelector('.accounting_list'),
    account = document.querySelector('.account');
    const menu1 = document.querySelector('.operation_list'),
    oper = document.querySelector('.oper');
    const menu = document.querySelector('.hr_list'),
    hrr = document.querySelector('.hrr');
    const menu5 = document.querySelector('.account_list'),
    acc = document.querySelector('.acc');

    set.addEventListener('click', () => {
        set.classList.toggle('set_active');
        menu4.classList.toggle('settings_active');
        account.classList.remove('account_active');
        menu2.classList.remove('accounting_active');
        oper.classList.remove('oper_active');
        menu1.classList.remove('operation_active');
        hrr.classList.remove('hrr_active');
        menu.classList.remove('hr_active');
        acc.classList.remove('acc_active');
        menu5.classList.remove('act_active');
    });
})

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hr_list'),
    menuItem = document.querySelectorAll('.hr_item'),
    hrr = document.querySelector('.hrr');
    const menu2 = document.querySelector('.accounting_list'),
    account = document.querySelector('.account');
    const menu1 = document.querySelector('.operation_list'),
    oper = document.querySelector('.oper');
    const menu4 = document.querySelector('.settings_list'),
    set = document.querySelector('.set');
    const menu5 = document.querySelector('.account_list'),
    acc = document.querySelector('.acc');

    hrr.addEventListener('click', () => {
        hrr.classList.toggle('hrr_active');
        menu.classList.toggle('hr_active');
        account.classList.remove('account_active');
        menu2.classList.remove('accounting_active');
        oper.classList.remove('oper_active');
        menu1.classList.remove('operation_active');
        set.classList.remove('set_active');
        menu4.classList.remove('settings_active');
        acc.classList.remove('acc_active');
        menu5.classList.remove('act_active');
    });
})



    /* menuItem.forEach(item => {
        item.addEventListener('click', () => {
            oper.classList.toggle('oper_active');
            menu.classList.toggle('operation_active');
        })
    }) */