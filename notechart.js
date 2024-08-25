let newInpMission = document.querySelector('.inp-mission');
let addBtn = document.querySelector('.btn-add');
let newMissionLists = document.querySelector('.mission-lists');

addBtn.addEventListener('click', addMission);
newMissionLists.addEventListener('click', missionisChecked);

function missionisChecked(e) {
    const msn = e.target;
    if(msn.classList.contains('btn-checked')) {
        msn.parentElement.classList.toggle('checked-missions')
    }if(msn.classList.contains('btn-deleted')) {

        msn.parentElement.classList.toggle('destroyed');

        msn.parentElement.addEventListener('transitionend', function(){
            msn.parentElement.remove();
        });
    }
}

function addMission(e) {
    e.preventDefault();

    let newDivMission = document.createElement('div');
    newDivMission.classList.add('div-missions');

    let newLi = document.createElement('li');
    newLi.classList.add('li-item');
    newLi.textContent = newInpMission.value;

    newDivMission.appendChild(newLi);
    newInpMission.value = '';

    let btnChecked = document.createElement('button');
    btnChecked.classList.add('btn-checked');
    btnChecked.innerHTML = '<i class="far fa-check-square">';
    newDivMission.appendChild(btnChecked);

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-deleted');
    btnDelete.innerHTML = '<i class="far fa-trash-alt">';
    newDivMission.appendChild(btnDelete);





    newMissionLists.appendChild(newDivMission);
}