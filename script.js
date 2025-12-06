document.addEventListener("DOMContentLoaded", () => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].map(el => new bootstrap.Popover(el));
    const popover = new bootstrap.Popover('.popover-dismiss', {
        trigger: 'focus'
    })
});

const myModal = document.getElementById('modal')
const myInput = document.getElementById('input')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})