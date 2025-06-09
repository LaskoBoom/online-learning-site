(function(){
    
    console.log("Hello World!");

    const menuLinks = document.querySelectorAll('[data-button="menu-link"]')
    console.log(menuLinks);
    menuLinks.forEach((link) => {
        console.log(link)
        link.addEventListener('click', () => {
            navigation.classList.remove('active');
        })
    })

    const subscribeButton = document.querySelector('[data-button="subscribe"]')
    console.log(subscribeButton);
    subscribeButton.addEventListener('click', () => {
        alert('clickedSubscribe');
    })

    const menuButton = document.querySelector('[data-button="navigation-toggle"]')
    console.log(menuButton);
    const navigation = document.querySelector('[data-component="navigation"]')
    console.log(navigation);
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle("active") 
    })

    const searchButton = document.querySelector('[data-button="search-toggle"]')
    console.log(searchButton);
    const searchBar = document.querySelector('[data-component="search-bar"]')
    console.log(searchBar);
    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle("active")
    })

    document.addEventListener('click', function (event) {
        const clickedInsideNav = navigation.contains(event.target) || menuButton.contains(event.target);
        const clickedInsideSearch = searchBar.contains(event.target) || searchButton.contains(event.target); 

        if (!clickedInsideNav) {
            navigation.classList.remove('active');
        }

        if (!clickedInsideSearch) {
            searchBar.classList.remove('active');
        }

    })

    menuButton.addEventListener('click', () => {
        if (navigation.classList.contains("active")) {
            searchBar.classList.remove("active");
        }
    })

    menuButton.addEventListener('click', () => {
        if (searchBar.classList.contains("active")) {
            navigation.classList.remove("active");
        }
    })

})();
