// Function to Upload and Display Profile Image
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Function to Upload and Display PDF Files
document.getElementById('pdfUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = function(e) {
            const pdfList = document.getElementById('pdfList');
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${e.target.result}" target="_blank">${file.name}</a>`;
            pdfList.appendChild(listItem);
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please upload a valid PDF file.");
    }
});

// Function to Add Social Media Links Dynamically
function addSocialLink() {
    const input = document.getElementById('socialInput');
    const url = input.value.trim();
    if (url) {
        const socialList = document.getElementById('socialList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
        socialList.appendChild(listItem);
        input.value = ""; // Clear input field
    } else {
        alert("Please enter a valid URL.");
    }
}
