function showHome() {
    let homeSection = document.createElement("SECTION");
    homeSection.className = "sectionToShow"
    let headline = document.createElement("h1");
    headline.innerHTML = "HOME";
    homeSection.appendChild(headline);

    return homeSection;
}

export { showHome }