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



document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('tbody tr');
    const totalInput = document.querySelector('input[name="total_hours"]');

    rows.forEach(row => {
        const resetBtn = row.querySelector('.reset-btn');
        const openInput = row.querySelector('input[name^="open"]');
        const closeInput = row.querySelector('input[name^="close"]');
        const breakInput = row.querySelector('input[name^="break"]');
        const hoursInput = row.querySelector('input[name^="hours"]');

        function calculateHours() {
            const openTime = new Date(`1970-01-01T${openInput.value}:00`);
            const closeTime = new Date(`1970-01-01T${closeInput.value}:00`);
            const breakTime = parseFloat(breakInput.value || 0);

            let hours = (closeTime - openTime) / (1000 * 60 * 60) - breakTime;
            hoursInput.value = Math.max(0, hours).toFixed(3);
            calculateTotal();
        }

        function calculateTotal() {
            let total = 0;
            rows.forEach(row => {
                total += parseFloat(row.querySelector('input[name^="hours"]').value || 0);
            });
            totalInput.value = total.toFixed(3);
        }

        // 重置按钮逻辑
        resetBtn.addEventListener('click', function () {
            openInput.value = '00:00';
            closeInput.value = '00:00';
            breakInput.value = '0';
            hoursInput.value = '0';
            calculateTotal();
        });

        openInput.addEventListener('change', calculateHours);
        closeInput.addEventListener('change', calculateHours);
        breakInput.addEventListener('input', calculateHours);
    });
});

