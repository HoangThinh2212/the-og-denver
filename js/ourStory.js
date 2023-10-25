// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overLay = document.getElementById('overLay')
// openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })
// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })
// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')

// }
// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')

// }
const openModalBtn = document.getElementById("crew-box");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overLay");

// Function to open or close the modal
function toggleModal() {
  const personalInfo = document.querySelector(".personalinfo");
  personalInfo.classList.toggle("active");
  overlay.classList.toggle("active");
}
openModalBtn.addEventListener("click", toggleModal());

closeBtn.addEventListener("click", toggleCloseModal());
function toggleCloseModal() {
  const personalInfo = document.querySelector(".personalinfo");
  personalInfo.classList.remove("active");
  overlay.classList.remove("active");
}






const openModalBtn2 = document.getElementById("crew-box");
const closeBtn2 = document.getElementById("close-btn");
const overlay2 = document.getElementById("overLay2");
function toggleModal2() {
  const personalInfo2 = document.querySelector(".personalinfo2");
  personalInfo2.classList.toggle("active");
  overlay2.classList.toggle("active");
}
openModalBtn2.addEventListener("click", toggleModal2());

closeBtn.addEventListener("click", toggleCloseModal2());
function toggleCloseModal2() {
  const personalInfo2 = document.querySelector(".personalinfo2");
  personalInfo2.classList.remove("active");
  overlay2.classList.remove("active");
}





