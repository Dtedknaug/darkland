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
        window.location.href = app_download_url;
    }

  


 

  
 
     // Event listener for the close button in the VIP dialog
     const closeVipDialogButton = document.getElementById("closeVipDialog");
     closeVipDialogButton.addEventListener("click", function() {
         // Close the VIP dialog
         closeVipDialog();
     });
    
    // Example data for each list
    const data = {
        list1: [
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            // Add more items as needed
        ],
        list2: [
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            // Add more items as needed
        ],
        list3: [
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            // Add more items as needed
        ],
        list4: [
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            // Add more items as needed
        ],
        list5: [
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            { thumbnail: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg", title: "Title" },
            { thumbnail: "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg", title: "Title" },
            // Add more items as needed
        ]
    };

    // Generate 5 horizontal lists
    for (let i = 1; i <= 5; i++) {
        const horizontalList = document.getElementById(`horizontalList${i}`);
        const listData = data[`list${i}`];

        listData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("strong");
            title.textContent = item.title;

            const image = document.createElement("img");
            image.src = item.thumbnail;

            card.appendChild(image);
            card.appendChild(title);
            horizontalList.appendChild(card);

            // Add click event listener to each card
            card.addEventListener("click", function() {
                showDialogue(item);
            });
        });
    }
    document.getElementById('title1').appendChild(document.createTextNode('Channel1'));
    document.getElementById('title2').appendChild(document.createTextNode('Channel2'));
    document.getElementById('title3').appendChild(document.createTextNode('Channel3'));
    document.getElementById('title4').appendChild(document.createTextNode('Channel4'));
    document.getElementById('title5').appendChild(document.createTextNode('Channel5'));
 
  


    document.getElementById("downloadBtn").addEventListener("click", function() {
        window.location.href = "download.html";
    });
    document.getElementById("downloadfooterBtn").addEventListener("click", function() {
        window.location.href = "download.html";
    });
    
    document.getElementById("vipBtn").addEventListener("click", function() {
        window.location.href = "vipmember.html";
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
            window.location.href = "download.html";
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

