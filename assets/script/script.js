window.addEventListener('DOMContentLoaded', () => {

    const projectsItem = document.querySelector('.projects__item');
    const projectsItemLinks = projectsItem.querySelectorAll('a');

    for (const link of projectsItemLinks) {

        link.addEventListener('click', (e) => {
            e.preventDefault();

           


        });
    }
});

// [Сегодня Завтра Ср ЧТ Пт Сб Вс]