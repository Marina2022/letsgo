const nextBtns=document.querySelectorAll(".add-plan__next-button"),prevBtns=document.querySelectorAll(".add-plan__button-step-back"),steps=document.querySelectorAll(".step"),cells=document.querySelectorAll(".calendar__cell"),travellersInput=document.querySelector(".travellers-input"),durationInput=document.querySelector(".duration-input"),nav=document.querySelector(".add-plan__top-nav"),durationBtnMinus=document.querySelector(".add-plan__input-button--minus.duration-btn"),durationBtnPlus=document.querySelector(".add-plan__input-button--plus.duration-btn"),travellersBtnMinus=document.querySelector(".add-plan__input-button--minus.travellers-btn"),travellersBtnPlus=document.querySelector(".add-plan__input-button--plus.travellers-btn");durationBtnMinus.addEventListener("click",(e=>{e.preventDefault(),durationInput.value--})),durationBtnPlus.addEventListener("click",(e=>{e.preventDefault(),durationInput.value++})),travellersBtnMinus.addEventListener("click",(e=>{e.preventDefault(),travellersInput.value--})),travellersBtnPlus.addEventListener("click",(e=>{e.preventDefault(),travellersInput.value++}));let currentStep=0;const updateSteps=()=>{steps.forEach(((e,t)=>{e.classList.add("visually-hidden"),t===currentStep&&e.classList.remove("visually-hidden")}))};cells.forEach((e=>{e.addEventListener("click",(t=>{cells.forEach((e=>{e.classList.remove("calendar__cell--current")})),t.preventDefault(),e.classList.add("calendar__cell--current")}))})),nextBtns.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),currentStep++,updateSteps(),0!==currentStep&&nav.classList.add("visually-hidden")}))})),prevBtns.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),currentStep--,updateSteps(),1!==currentStep&&nav.classList.remove("visually-hidden")}))}));