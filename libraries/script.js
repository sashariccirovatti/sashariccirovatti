const selectors = document.querySelectorAll('.projectSelector');
const views = document.querySelectorAll('.view');

function showProject(id) {
    views.forEach(view => {
        view.classList.toggle('active', view.id === id);
    });
}

selectors.forEach(selector => {
    selector.addEventListener('click', () => {
        showProject(selector.dataset.target);
    });
});