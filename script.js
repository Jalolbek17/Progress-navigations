const tabPositive = document.getElementById("tab-positive");
tabPositive.addEventListener("input", function(){tabChange("Positive", tabPositive, 1)});

const tabNegative = document.getElementById("tab-negative");
tabNegative.addEventListener("input", function(){tabChange("Negative", tabNegative, 2)});

const tabNeutral = document.getElementById("tab-neutral");
tabNeutral.addEventListener("input", function(){tabChange("Neutral", tabNeutral, 3)});

const pContent = document.getElementById("p-content");

const btnTab = document.getElementById("btnTab");

btnTab.addEventListener("click", indexChange);

function tabChange(content, theTab, number) {
    if (number === 1) {
        tabPositive.checked = true;
    } else if (number === 2) {
        tabNegative.checked = true;
    } else if (number === 3) {
        tabNeutral.checked = true;
    }

    if (theTab.checked === true) {
        pContent.innerHTML = content + " content";
    }
}

function indexChange() {
    let inputValue = document.getElementById("index-field").value;
    if (inputValue === "1") {
        tabChange("Positive", tabPositive, 1);
    } else if (inputValue === "2") {
        tabChange("Negative", tabNegative, 2);
    } else if (inputValue === "3") {
        tabChange("Neutral", tabNeutral, 3);
    } else if (inputValue !== "") {
        alert("Index is invalid");
    }
}

