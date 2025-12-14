function submitWish() {
    let name = document.getElementById("name").value;
    let branch = document.getElementById("branch").value;
    let wish = document.getElementById("wish").value;

    if (name === "" || branch === "" || wish === "") {
        alert("Please fill all the fields!");
        return;
    }

    // Store data
    localStorage.setItem("userName", name);
    localStorage.setItem("userBranch", branch);
    localStorage.setItem("userWish", wish);

    // Open output page in new tab
    window.open("index1.html", "_blank");
}


