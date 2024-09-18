

//custom tabs 2


document.addEventListener("DOMContentLoaded", () => {
    let tabs = document.querySelectorAll('.custom-tabs-item2'),
        tabsContent = document.querySelectorAll('.custom-tabs_item-content2'),
        tabsParent = document.querySelector('.custom-tabs_info-part2');

    function hideTabContent() {

        tabsContent.forEach(item => {

            item.classList.remove('active2');

        });

        tabs.forEach(tab => {
            tab.classList.remove('custom-tabs-item_active2');

        })

    }
    function showTabContent(i = 0) {

        tabsContent[i].classList.add('active2');
        tabs[i].classList.add('custom-tabs-item_active2');

    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (e) => {

        const target = e.target;
        if (target && target.classList.contains('custom-tabs-item2')) {

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

