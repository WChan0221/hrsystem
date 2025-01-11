//Sidebar Dropdown Menu
const allDropdown= document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=>{
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click',function(e){
        e.preventDefault();
        
        if(!this.classList.contains('drop')){
            allDropdown.forEach(i=>{
                const aLink = i.parentElement.querySelector('a:first-child');
                
                aLink.classList.remove('drop'); //这个如果要effect 可以把drop换去active,在css里面就可以看到effect了
                i.classList.remove('show');
           })
    }
        this.classList.toggle('drop'); //这个如果要effect 可以把drop换去active,在css里面就可以看到effect了
    
        item.classList.toggle('show');
    })
})

sidebar.addEventListener('mouseleave',function(){
    if(this.classList.contains('hide')) {
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('drop');
            item.classList.remove('show');
            })
            allSideDivider.forEach(item=> {
                item.textContent = ""
            })
        }
})

sidebar.addEventListener('mouseenter',function(){
    if(this.classList.contains('hide')) {
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('drop');
            item.classList.remove('show');
            })
            allSideDivider.forEach(item=> {
                item.textContent = item.dataset.text;
            })
        }
})
    


//Profile Dropdown Menu
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function(){
    dropdownProfile.classList.toggle('show');
})


window.addEventListener('click',function(e){
    if(e.target !== imgProfile){
        if(e.target !== dropdownProfile){
            if(dropdownProfile.classList.contains('show')){
                dropdownProfile.classList.remove('show');
            }
        }
    }
})


//Sidebar Collapse
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')){
    allSideDivider.forEach(item=> {
        item.textContent = ""
    })

    allDropdown.forEach(item=>{
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('drop');
        item.classList.remove('show');
    })

}else{
    allSideDivider.forEach(item=> {
        item.textContent = item.dataset.text;
    })
}

toggleSidebar.addEventListener('click',function(){
    sidebar.classList.toggle('hide');

    if(sidebar.classList.contains('hide')){
        allSideDivider.forEach(item=> {
            item.textContent = ""
        })

        allDropdown.forEach(item=>{
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('drop');
            item.classList.remove('show');
        })

    }else{
        allSideDivider.forEach(item=> {
            item.textContent = item.dataset.text;
        })
    }
})


  //for Radio Button -start (full day/half day selection)
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //for Radio Button -end (full day/half day selection)

