const isStatus = document.querySelector('h3');
const btn = document.querySelector('#add');
let check = 0;

btn.addEventListener('click', (e) => {
    if (check === 0) {
        isStatus.textContent = "Friends";
        isStatus.style.color = "#008000";
        btn.textContent = "Remove";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#111"; 
        check = 1;
    } else {
        isStatus.textContent = "Stanger";
        isStatus.style.color = "#ff0000";
        btn.textContent = "Add friend";
        btn.style.backgroundColor = "#5f9ea0";
        btn.style.color = "#fff"; 
        check = 0;
    }
})