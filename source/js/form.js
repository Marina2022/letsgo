const nextBtns = document.querySelectorAll('.add-plan__next-button')
const prevBtns = document.querySelectorAll('.add-plan__button-step-back')

const steps = document.querySelectorAll('.step')
const cells = document.querySelectorAll('.calendar__cell')


const travellersInput = document.querySelector('.travellers-input')
const durationInput = document.querySelector('.duration-input')

const nav = document.querySelector('.add-plan__top-nav')

const durationBtnMinus = document.querySelector('.add-plan__input-button--minus.duration-btn')
const durationBtnPlus = document.querySelector('.add-plan__input-button--plus.duration-btn')
const travellersBtnMinus = document.querySelector('.add-plan__input-button--minus.travellers-btn')
const travellersBtnPlus = document.querySelector('.add-plan__input-button--plus.travellers-btn')

durationBtnMinus.addEventListener('click', (e)=>{
  e.preventDefault()
  durationInput.value--
})

durationBtnPlus.addEventListener('click', (e)=>{
  e.preventDefault()
  durationInput.value++
})


travellersBtnMinus.addEventListener('click', (e)=>{
  e.preventDefault()
  travellersInput.value--
})

travellersBtnPlus.addEventListener('click', (e)=>{
  e.preventDefault()
  travellersInput.value++
})


let currentStep = 0

const updateSteps = ()=>{
  // if (currentStep === 2) return
  steps.forEach((step,index)=>{
    step.classList.add('visually-hidden')
    if (index === currentStep) step.classList.remove('visually-hidden')
  })
}

cells.forEach((cell)=>{

  cell.addEventListener('click', (e)=>{
    cells.forEach(cell2=>{
      cell2.classList.remove('calendar__cell--current')
    })
    e.preventDefault()
    cell.classList.add('calendar__cell--current')
  })
})

nextBtns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault()
    currentStep++
    updateSteps()
    if (currentStep !==0 ) nav.classList.add('visually-hidden')
  })
})

prevBtns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault()
    currentStep--
    updateSteps()
    if (currentStep !==1 ) nav.classList.remove('visually-hidden')
  })
})


