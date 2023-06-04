

    /*******************For Menu bar toggling****************/
    // For toggling the menu bar
    let menu_btn = document.querySelector('.menu-btn a');
    let nav_list = document.querySelector('.nav-lists');
    let nav_list_items = document.querySelectorAll('.nav-items');
    let logo = document.querySelector('.logo-section a');
    menu_btn.addEventListener("click",()=>{
        nav_list.classList.toggle('active');
        checkClassActive();
    })
    
    // For scrolling of the window
    window.addEventListener("scroll",()=>{
        let navbar = document.querySelector(".navbar-container");
        navbar.classList.toggle('sticky',window.scrollY>0);

        if(window.scrollY>0){
            navbar.style = "height:70px";
        }
        
    })


    // Toggling the navbar menu when clicked on any navbar list items
    nav_list_items.forEach(element => {
        element.addEventListener('click',()=>{
            nav_list.classList.toggle('active');
            checkClassActive();
        })
    });

    // On clicking afterr the home button or logo
    logo.addEventListener('click',()=>{
        if(nav_list.classList.contains('active')){
            nav_list.classList.toggle('active');
            checkClassActive();
        }
    })


    // Displaying the x button to close the menu and menu buttton
    let checkClassActive = ()=>{
        if(nav_list.classList.contains('active')){
            menu_btn.innerHTML = 'X';
        }else{
            menu_btn.innerHTML = 'M';
        }
    }
