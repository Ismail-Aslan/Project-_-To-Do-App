// Adjusting date for app

const dateOfToday =new Date();
const monthOfYear = function (monthInDigit) {

    if (monthInDigit === 0) {
        return "January"
    } else if (monthInDigit === 1) {
        return "February"
    } else if (monthInDigit === 2) {
        return "March"
    } else if (monthInDigit === 3) {
        return "April"
    } else if (monthInDigit === 4) {
        return "May"
    } else if (monthInDigit === 5) {
        return "June"
    } else if (monthInDigit === 6) {
        return "July"
    } else if (monthInDigit === 7) {
        return "August"
    } else if (monthInDigit === 8) {
        return "September"
    } else if (monthInDigit === 9) {
        return "October"
    } else if (monthInDigit === 10) {
        return "November"
    } else if (monthInDigit === 11) {
        return "December"
    }
}
const dayOfWeek = function (dayInDıgit) {
    if (dayInDıgit === 0) {
        return "Sunday"
    } else if (dayInDıgit === 1) {
        return "Monday"
    } else if (dayInDıgit === 2) {
        return "Tuesday"
    } else if (dayInDıgit === 3) {
        return "Wednesday"
    } else if (dayInDıgit === 4) {
        return "Thursday"
    } else if (dayInDıgit === 5) {
        return "Friday"
    } else if (dayInDıgit === 6) {
        return "Saturday"
    }
}
const todayAsNeeded = dayOfWeek(dateOfToday.getDay()) + ", " + monthOfYear(dateOfToday.getMonth()) + " " + dateOfToday.getDate();
console.log(todayAsNeeded);

// creating onClick methods for sidebar

//sidebar
const sidebar = document.getElementById("aside");
const sidebarItems = document.getElementsByClassName("sidebar-item");
const menu = document.getElementById("menu");
const login = document.getElementById("login");
const myDay = document.getElementById("my-day");
const importantSB = document.getElementById("important");
const planned = document.getElementById("planned");
const asigned = document.getElementById("asigned");
const tasks = document.getElementById("tasks");
const newList = document.getElementById("new-list");

//main
const menuBar = document.getElementById("menu-bar");
const headingHeader = document.getElementById("heading__header");
const headingDate = document.getElementById("heading__date");
const tasksMain = document.getElementById("main-list");
const addTaskIcon = document.getElementsByClassName("fa-plus");
const addTaskInput = document.getElementById("task-input");
const addTaskTasks = document.getElementById("add-task__tasks");
const addTaskCalander = document.getElementById("add-task__calender");
const addTaskClock = document.getElementById("add-task__clock");


//starting-page
headingHeader.innerText = "My Day";
headingDate.innerText = todayAsNeeded;
myDay.style.backgroundColor = "rgba(169, 169, 169, 0.833)";





menu.addEventListener('click',() => {
    menuBar.style.display = "block";
    sidebar.style.width = "0";
    sidebar.style.display = "none";
    document.getElementsByTagName("main")[0].style.width ="100vw"
    
});
menuBar.addEventListener('click',() => {
    menuBar.style.display = "none";
    sidebar.style.width = "";
    sidebar.style.display = "block";
    document.getElementsByTagName("main")[0].style.width =""
    
});

myDay.addEventListener('click',() => {
    headingHeader.innerText = "My Day";
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "My Day") {
        myDay.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "";
    }
});

importantSB.addEventListener('click',() => {
    headingHeader.innerText = "Important";
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "Important") {
        myDay.style.backgroundColor = "";
        importantSB.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
        planned.style.backgroundColor = "";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "";
    }
});

planned.addEventListener('click',() => {
    headingHeader.innerText = "Planned";
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "Planned") {
        myDay.style.backgroundColor = "";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "";
    }
});
asigned.addEventListener('click',() => {
    headingHeader.innerText = "Assigned to Me!";
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "Assigned to Me!") {
        myDay.style.backgroundColor = "";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "";
        asigned.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
        tasks.style.backgroundColor = "";
    }
});
tasks.addEventListener('click',() => {
    headingHeader.innerText = "Tasks";
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "Tasks") {
        myDay.style.backgroundColor = "";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
    }
});





addTaskInput.addEventListener('keydown',function (event) {
    if (event.key === "Enter") {
        let newTask = document.createElement("div");
        newTask.setAttribute('class','task');
        let newFaCircle = document.createElement("i");
        newFaCircle.setAttribute('class','far fa-circle');
        let newFaTrash = document.createElement("i");
        newFaTrash.setAttribute('class','far fa-trash-alt delete-sth');
        tasksMain.append(newTask);
        newTask.append(newFaCircle);
        newTask.append(` ${addTaskInput.value}`)
        newTask.append(newFaTrash);
        console.log(tasksMain);
    }
});