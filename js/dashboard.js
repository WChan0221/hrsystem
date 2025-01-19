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

function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');

    // Clear the current QR code
    qrCodeContainer.innerHTML = '';

    // Generate new text for the QR code (current timestamp in Malaysia time)
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" });
    const qrText = `Generated at: ${currentTime}`;

    // Generate the QR code
    new QRCode(qrCodeContainer, {
      text: qrText,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');

    // Get the current time in Malaysia time
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" });
    const currentTime = new Date(now);

    // Set the target to midnight of the next day in Malaysia time
    const nextMidnight = new Date(currentTime);
    nextMidnight.setHours(24, 0, 0, 0); // Set to midnight

    // Calculate the time difference in milliseconds
    const timeDifference = nextMidnight - currentTime;

    // Convert the difference to hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    countdownDisplay.textContent = `Time until next refresh: ${hours}h ${minutes}m ${seconds}s`;
  }

  // Initial QR code generation
  generateQRCode();

  // Refresh the QR code every day (24 hours)
  setInterval(generateQRCode, 86400000); // 86400000ms = 24 hours

  // Update countdown every second
  setInterval(updateCountdown, 1000); // 1000ms = 1 second


  function updateTime() {
    let now = new Date();
    
    let dateOptions = { 
        timeZone: "Asia/Kuala_Lumpur", 
        year: "numeric", 
        month: "long",  
        day: "2-digit"
    };
    
    let timeOptions = { 
        timeZone: "Asia/Kuala_Lumpur", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: true
    };

    let dateString = now.toLocaleDateString("en-US", dateOptions);
    let timeString = now.toLocaleTimeString("en-US", timeOptions);

    document.getElementById("date").innerHTML = dateString;
    document.getElementById("time").innerHTML = timeString;
}

setInterval(updateTime, 1000); //refresh every second
window.onload = updateTime;  //when loading页面加载时执行一次

