const btnEl = document.querySelector("#btn");

const birthdyEl = document.querySelector("#birthdy");

const resultEl = document.querySelector("#result");

function getAge(birthdyValue) {
    const currentDate = new Date();
    const birthdyDate = new Date(birthdyValue);
    let age = currentDate.getFullYear() - birthdyDate.getFullYear();
    const month = currentDate.getMonth() - birthdyDate.getMonth();
    
    if (month<0 || (month === 0 && currentDate.getDay() < birthdyDate.getDay())) {
        age--
    }
    return age;
}


btnEl.addEventListener("click", () => {
    // console.log("clicked");
    const birthdyValue = birthdyEl.value;
    // console.log(birthdyValue);
    if (birthdyValue === "") {
        alert("Please enter your birthday")
    } else {
        const age = getAge(birthdyValue)
        resultEl.innerHTML = `Your Age is ${age} years old`;
    }
});