document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("contactBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var form = document.getElementById("contactForm");
    form.onsubmit = async function(e) {
        e.preventDefault();
        var formData = new FormData(form);
        
        try {
            let response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Thank you for contacting us!");
                form.reset();
                modal.style.display = "none";
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Oops! There was a problem submitting your form");
        }
    }
});

// orojects
function changeImage1(imagePath) {
    document.getElementById('projectImage').src = "/images/image2.jpeg";
}
function changeImage2(imagePath) {
    document.getElementById('projectImage').src = "/images/image3.jpeg";
}
function changeImage3(imagePath) {
    document.getElementById('projectImage').src = "/images/image4.jpeg";
}

// swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });