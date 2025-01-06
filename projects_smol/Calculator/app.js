document.addEventListener("DOMContentLoaded", function() {
    const inputValue = document.querySelector("#user-input");

    // Handle number button clicks
    document.querySelectorAll(".key-number").forEach(function(item) {
        item.addEventListener("click", function(e) {
            if (inputValue.innerText === "NaN") {
                inputValue.innerText = "";
            }
            if (inputValue.innerText === "0") {
                inputValue.innerText = "";
            }
            inputValue.innerText += e.target.innerText;
        });
    });

    // Handle operation button clicks
    document.querySelectorAll(".key-operate").forEach(function(item) {
        item.addEventListener("click", function(e) {
            const lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);

            if (e.target.innerText === "=") {
                try {
                    inputValue.innerText = eval(inputValue.innerText);
                } catch (err) {
                    inputValue.innerText = "NaN"; // Handle invalid calculations
                }
            } else if (e.target.innerText === "AC") {
                inputValue.innerText = "0";
            } else if (e.target.innerText === "DEL") {
                inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
                if (inputValue.innerText.length === 0) {
                    inputValue.innerText = "0";
                }
            } else {
                if (!isNaN(lastValue)) {
                    inputValue.innerText += e.target.innerText;
                }
            }
        });
    });
});