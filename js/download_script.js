document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu-items').classList.toggle('active');
        document.querySelector('.menu-toggle').classList.toggle('active');
    });

     // Check if the URL contains "#vip"
     if (window.location.href.includes("vipmember.html")) {
        // Show the VIP dialog
        showVipDialog();
    }

    if (window.location.href.includes("#download")) {
        window.location.href = "https://github.com/darklandadmin/darkland/raw/main/apk/mmdarkland-v-1.0.2.apk";
    }


 


    document.getElementById("downloadBtn").addEventListener("click", function() {
        window.location.href = "https://github.com/darklandadmin/darkland/raw/main/apk/mmdarkland-v-1.0.2.apk";
    });


    // Function to show dialogue
    function showDialogue(item) {
        const dialogue = document.getElementById("dialogue");
        const dialogueTitle = document.getElementById("dialogueTitle");
        const dialogueImage = document.getElementById("dialogueImage");
        const dialogueMessage = document.getElementById("dialogueMessage");
    
        dialogueTitle.textContent = item.title;
        dialogueImage.src = item.thumbnail;
        dialogueMessage.textContent = "ဒီဇာတ်ကားကိုကြည့်ရန် အောက်က Download Apkကို နှိပ်ပြီး ‌ဒေါင်းပါ။";
    
        dialogue.style.display = "block";
    
        // Close dialogue when close button clicked
        document.getElementById("closeButton").addEventListener("click", function () {
            closeDialogue();
        });
    
        // Handle download button click
        document.getElementById("downloadButton").addEventListener("click", function () {
            // Redirect to download URL
            window.location.href = app_download_url;
        });
    
        // Handle cancel button click
        document.getElementById("cancelButton").addEventListener("click", function () {
            closeDialogue();
        });
    
        // Close dialogue when clicking outside of it
        window.addEventListener("click", function (event) {
            if (event.target === dialogue) {
                closeDialogue();
            }
        });
    }
    
    // Function to close dialogue
    function closeDialogue() {
        const dialogue = document.getElementById("dialogue");
        dialogue.classList.add("close");
        setTimeout(() => {
            dialogue.style.display = "none";
            dialogue.classList.remove("close");
        }, 500);
    }
    

      
    
}); 

// Function to navigate to a URL
function navigateTo(url) {
    window.location.href = url;
}

// Function to show the VIP dialog
function showVipDialog() {
    const vipDialog = document.getElementById("vip_dialog");
    vipDialog.style.display = "block";
}

// Function to close the VIP dialog
function closeVipDialog() {
    const vipDialog = document.getElementById("vip_dialog");
    vipDialog.classList.add("fadeOut");
    setTimeout(() => {
        vipDialog.style.display = "none";
        vipDialog.classList.remove("fadeOut");
    }, 500);
}


// Get the About App button
document.getElementById("aboutAppBtn").addEventListener("click", function() {
    const aboutAppDialog = document.getElementById("aboutAppDialog");
    aboutAppDialog.style.display = "block";
    aboutAppDialog.classList.add("fadeIn"); // Add fade-in animation
});

document.getElementById("closeAboutAppDialog").addEventListener("click", function() {
    const aboutAppDialog = document.getElementById("aboutAppDialog");
    aboutAppDialog.classList.remove("fadeIn"); // Remove fade-in animation
    setTimeout(() => {
        aboutAppDialog.style.display = "none";
    }, 500); // Delay to match the animation duration
});

