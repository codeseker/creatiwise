var menu_btn = document.querySelector("#menu-btn")
var sidebar = document.querySelector("#sidebar")
var container = document.querySelector(".my-container")
sidebar.classList.toggle("active-nav")
container.classList.toggle("active-cont");



let addSchedule = document.getElementById('addSchedule');
let schedule = document.getElementById('schedule');
let cnt = 2;
addSchedule.addEventListener('click', () => {

    
    // start date and end date
    let startDate = document.getElementById('startDate');
    //console.log(startDate.value);

    let endDate = document.getElementById('endDate');
    // console.log(endDate.value);

    let weeks = document.getElementById('weeks');
    let heading = document.getElementById('heading');

    schedule.innerHTML += `<div class="accordion my-4" id="accordionOne">
    <div class="accordion-item">
        <div>
            <div>
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    ${heading.value}
                    <span style="position: absolute; right: 6vw;"><img src="/Icons/trash.svg" alt=""
                        style="width: 78%;"></span>
                    </button>
                </h2>
            </div>
            <div class="mx-4 my-2">
                <p class="text-muted">${weeks.value} weeks | 12 Sessions</p>
            </div>
        </div>
        <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour"
            data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex justify-content-between align-items-center">
                <div class="d-flex">
                    <div class="d-flex flex-column mx-3">
                        <p class="text-muted">START DATE</p>
                        <p class="font-bold">${startDate.value}</p>
                    </div>
                    <div class="d-flex flex-column mx-3">
                        <p class="text-muted">END DATE</p>
                        <p class="font-bold">${endDate.value}</p>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <button class="btn btn-success">Update</button>
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-between px-2 py-3">
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4" >
                      SUNDAY
                    </label>
                  </div>
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4">
                      MONDAY
                    </label>
                  </div>
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4">
                      TUESDAY
                    </label>
                  </div>
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4">
                      WEDNESDAY
                    </label>
                  </div>
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4">
                      THURSDAY
                    </label>
                  </div>
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4">
                      FRIDAY
                    </label>
                  </div>
                <div class="form-check select px-5 py-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" style="background-color: green;">
                    <label class="form-check-label" for="flexRadioDefault4">
                      SATURDAY
                    </label>
                  </div>
                
            </div>
        </div>
    </div>
</div>`
})





