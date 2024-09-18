console.log('text from github ');
//custom tabs 1

document.addEventListener("DOMContentLoaded", () => {
    let tabs = document.querySelectorAll('.custom-tabs-item'),
        tabsContent = document.querySelectorAll('.custom-tabs_item-content'),
        tabsParent = document.querySelector('.custom-tabs_info-part');

    function hideTabContent() {

        tabsContent.forEach(item => {

            item.classList.remove('active');

        });

        tabs.forEach(tab => {
            tab.classList.remove('custom-tabs-item_active');

        })

    }
    function showTabContent(i = 0) {

        tabsContent[i].classList.add('active');
        tabs[i].classList.add('custom-tabs-item_active');

    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (e) => {

        const target = e.target;
        if (target && target.classList.contains('custom-tabs-item')) {

            tabs.forEach((item, i) => {
                console.log(item, i);
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);

                }

            });

        }

    });

});
