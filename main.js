
const txt1 = document.getElementById('tdob');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('showDOB');

function fun1() {
    out1.innerHTML = "Date of Birth: " + txt1.value;
    var userInput = document.getElementById("tdob").value;
    let a = new Date(userInput);
    //call other functions
    calculateAge();
    getZodiak(a);
    findLifePath(txt1.value);
    getAngel();
}

btn1.addEventListener('click', fun1)

function calculateAge() {
    var userInput = document.getElementById("tdob").value;
    var DOB = new Date(userInput);
    if (userInput == null || userInput == '') {
        document.getElementById("message").innerHTML = "***Input date please!***";
        return false;
    }
    else {
        //Month Difference from current time
        var diff_ms = Date.now() - DOB.getTime();
        //convert diff in date format
        var age_dt = new Date(diff_ms);
        //extract year from date 
        var year = age_dt.getUTCFullYear();
        // calculate user age
        var age = Math.abs(year - 1970);

        //display age
        return document.getElementById("showAge").innerHTML = "Your Age: " + age;
    }
}

// function outputGender() {
//     var ele = document.getElementsByName('gender');
//     for (i = 0; i < ele.length; i++) {
//         if (ele[i].checked) {
//             document.getElementById("showGender").innerHTML = "Gender: " + ele[i].value;
//         }
//     }
// }

const getZodiak = (date) => {
    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let month = date.getMonth();
    let day = date.getDate();
    if (month == 0 && day <= 20) {
        month = 11;
    }else if (day < days[month]) {
        month--;
    };
    return document.getElementById("showStar").innerHTML = "Zodiak Sign: " + signs[month];
};

let path = "";
let img = "";
let imageShown = "";
const findLifePath = (date = '') => {
    const sum = (arr = []) => {
        if (arr.length === 1) {
            return +arr[0];
        };
        let total = arr.reduce((acc, val) => acc + val);
        if (total < 10) {
            if (total === 1) {
                path = "*Innovative Leader*"
                imageShown = "images/innovate.jpeg";
            }
            else if (total ===2) {
                path = "*Mediator of Peace*"
                imageShown = "images/mediator.png";
            }
            else if (total ===3) {
                path = "*Messenger of Joy*"
                imageShown = "images/joy.jpeg";

            }
            else if (total ===4) {
                path = "*Practical Manifester*"
                imageShown = "images/manifest.jpeg";

            }
            else if (total ===5) {
                path = "*Messenger of Freedom*"
                imageShown = "images/freedom.png";

            }
            else if (total ===6) {
                path = "*Healer of Love*"
                imageShown = "images/healer.jpeg";

            }
            else if (total ===7) {
                path = "*Seeker of Truth*"
                imageShown = "images/seeker.jpeg";

            }
            else if (total ===8) {
                path = "*Visionary Leader*"
                imageShown = "images/vision.jpeg";

            }
            else if(total === 9) {
                path = "*The Care Taker*"
                imageShown = "images/caretaker.jpeg";

            }
            return total;
        };
        return sum(String(total).split("").map(Number));
    };
    let [year, month, day] = date.split("-")
    year = sum(String(year).split("").map(Number));
    month = sum(String(month).split("").map(Number));
    day = sum(String(day).split("").map(Number));
    var lifeNum = sum([year, month, day]);
    
    img = document.getElementById('Myimg').src = imageShown;
    return document.getElementById("life").innerHTML = "Life Number: " + lifeNum +" = "+path;
};

function getAngel() {
    var userInput = document.getElementById("tdob").value;
    let a = new Date(userInput);
    let month = ("0" +(a.getMonth() +1)).slice(-2);

    let angel = "";
    let angelBio = "";

    switch (month) {
        case "01":
            angel = "GABRIEL";
            angelBio = "The angel of Knowledge, intelligence and prophecy.";

            break;
        case "02":
             angel = "HANIEL";
             angelBio = "The angel of peace and love.";
             
            break;
        case "03":
             angel = "SAMAEL";
             angelBio = "The angel of darkness.";

            break;
        case "04":
            angel = "MURIEL";
            angelBio = "The angel of beauty and balance.";
            
            break;
        case "05":
            angel = "URIEL";
            angelBio = "The angel of divine wisdom.";
            
            break;
        case "06":
            angel = "ZADKIEL";
            angelBio = "The archangel associated with justice and harmony for humankind.";
            
            break;
        case "07":
            angel = "AZRAEL";
            angelBio = "\"The angel of the dead\", yearning for reunification with people who have died.";
            
            break;
        case "08":
            angel = "MICHAEL";
            angelBio = "An angel of war.";

            break;
        case "09":
            angel = "ANAEL";
            angelBio = "The angel of creation.";
            
            break;
        case "10":
             angel = "JEREMIEL";
             angelBio = "The angel of wisdom";
            
            break;
        case "11":
            angel = "CASSIEL";
            angelBio = "An angel of mercy and justice.";

            break;
        case "12":
            angel = "ARIEL";
            angelBio = "The angel who keeps watch over earthly places and one's personal belongings on Earth (can also be seen as a guard dog or cat).";
            
            break;
        default:
            break;
    }

    return document.getElementById("angel").innerHTML = "GUARDIAN ANGEL: "+ angel +"<br>" +angelBio;
}