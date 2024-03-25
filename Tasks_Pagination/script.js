const totalPages = 5;

for (let i = 1; i <= totalPages; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => showPage(i));
    document.getElementById("pagination").appendChild(button);
}

// Function to show the selected page
function showPage(pageNumber) {
    // To Hide all pages
    let pages = document.querySelectorAll("#content > p");
    pages.forEach(page => page.style.display = "none");
    
    // To Show the selected page
    let pageToShow = document.querySelector(`#content > p:nth-child(${pageNumber + 1})`);
    if (pageToShow) {
        pageToShow.style.display = "block";
    }
}
