document.getElementById('header-container').style.backgroundColor = 'rgb(0, 176, 105';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'rgb(255, 159, 132)';

const emergency = document.querySelectorAll('.emergency-tasks h3');
for (let idx = 0; idx < emergency.length; idx +=1){
    emergency[idx].style.backgroundColor = 'rgb(165, 0, 243)';
}

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let idx = 0; idx < noEmergency.length; idx +=1){
    noEmergency[idx].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 53, 51)';


