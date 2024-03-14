document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu-items').classList.toggle('active');
        document.querySelector('.menu-toggle').classList.toggle('active');
    });

     // Check if the URL contains "#vip"
     if (window.location.href.includes("#vip")) {
        // Show the VIP dialog
        showVipDialog();
    }


    // Event listener for the VIP menu item
    const vipMenuItem = document.getElementById("vipMenuItem");
    vipMenuItem.addEventListener("click", function() {
        // Show the VIP dialog
        showVipDialog();
    });

    const vipButton = document.getElementById("vipBtn");
    vipButton.addEventListener("click", function() {
        // Show the VIP dialog
        showVipDialog();
    });

    const vipMenuFooter = document.getElementById("vipMenuFooter");
    vipMenuFooter.addEventListener("click", function() {
        // Show the VIP dialog
        showVipDialog();
    });

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

    const app_download_url = "your_apk_download_url_here"; // Replace this with your actual APK download URL
       // Check if the URL contains "#vip"
       if (window.location.href.includes("#download")) {
        window.location.href = app_download_url;
    }
    const downloadMenuItem = document.getElementById("downloadMenuItem");
    downloadMenuItem.addEventListener("click", function() {
        window.location.href = app_download_url;
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
    
    // Add event listener to the download button
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", function () {
        // Redirect to APK download URL
        window.location.href = app_download_url;
    });
    
    // Add event listener to the download button in the footer
    const downloadfooterBtn = document.getElementById("downloadfooterBtn");
    downloadfooterBtn.addEventListener("click", function () {
        // Redirect to APK download URL
        window.location.href = app_download_url;
    });
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
