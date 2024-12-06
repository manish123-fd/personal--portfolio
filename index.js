// Header Toggle
let MENUBTN = document.getElementById('MENUBTN')

MENUBTN.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
let typed = newTyped('auto-input',{
    strings: ['Front-End-Developer!', 'Web Designer!', 'YouTuber!'],
    typespeed: 90,
    backspeed: 90,
    backDelay: 100,
    loop: true,
})