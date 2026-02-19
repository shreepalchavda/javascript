function checkStorage() {
    let storedName = localStorage.getItem("studentName");

    if (storedName === null) {
        document.getElementById("updateBtn").disabled = true;
        document.getElementById("deleteBtn").disabled = true;
    } else {
        document.getElementById("updateBtn").disabled = false;
        document.getElementById("deleteBtn").disabled = false;
    }
}


function saveName() {
    let name = document.getElementById("studentName").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerText = "Please enter a name!";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("studentName", name);
    message.innerText = "Name saved successfully!";
    message.style.color = "green";

    checkStorage();
}


function showName() {
    let storedName = localStorage.getItem("studentName");
    let message = document.getElementById("message");

    if (storedName === null) {
        message.innerText = "No name found in storage!";
        message.style.color = "red";
    } else {
        message.innerText = "Stored Name: " + storedName;
        message.style.color = "blue";
    }
}


function updateName() {
    let name = document.getElementById("studentName").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerText = "Please enter a new name!";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("studentName", name);
    message.innerText = "Name updated successfully!";
    message.style.color = "green";
}


function deleteName() {
    let message = document.getElementById("message");

    localStorage.removeItem("studentName");
    message.innerText = "Name deleted successfully!";
    message.style.color = "green";

    checkStorage();
}


function clearAll() {
    let message = document.getElementById("message");

    localStorage.removeItem("studentName");
    document.getElementById("studentName").value = "";
    message.innerText = "";
    
    checkStorage();
}
