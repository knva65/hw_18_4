window.onload = function() {
    let now = new Date();
    document.getElementById('date').value = `${now.getDate()}.${'0' + (now.getMonth() + 1)}.${now.getFullYear()}`;
  };

  


function checkMessage() {
    document.addEventListener("DOMContentLoaded", function(event) {
        let notices = JSON.parse(localStorage.getItem('notices')) || [];
        if(notices!=null)
        {
        notices = [];
        }
    })
    let notices = JSON.parse(localStorage.getItem('notices')) || [];
    let date_ = document.getElementById("date").value;
    let notice_ = document.getElementById("notices").value;
    let notice = date_ + ' ' + notice_ + '/';
    localStorage.setItem('notice', JSON.stringify(notice));
    notices.push(notice);
    localStorage.setItem('notices', JSON.stringify(notices));
    document.getElementById("notices").value = '';
}

function show() {
    document.getElementById('notices_local').innerHTML = localStorage.getItem('notices');
}

document.getElementById('forma').onsubmit = function(){return false};




