if (localStorage.getItem(`keyForTasks`) === null) {
    localStorage.setItem(`keyForTasks`,0);
}

let keyOfTask;
let allTasks = [];
let regexPattern;
var choosenDate ="";

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


const myDayFnk = function () {
    headingHeader.innerText = "My Day";
    
        if (Number(dateOfToday.getMonth()) < 10) {
            month = `0${dateOfToday.getMonth()}`;
        } else {
            month = `${dateOfToday.getMonth()}`;
        }

        if (Number(dateOfToday.getUTCDate()) < 10) {
            day = `0${dateOfToday.getUTCDate()}`;
        } else {
            day = `${dateOfToday.getUTCDate()}`;
        }
    regexPattern = new RegExp(`${dateOfToday.getFullYear()}-${month}-${day}`);
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "My Day") {
        myDay.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "";
        
        renderTodos(allTasks.filter((x)=>{
            return regexPattern.test(x.id);
        }));
    }
    console.log(document.getElementsByTagName("main")[0]);
    document.getElementsByTagName("main")[0].style.backgroundImage = "linear-gradient(0deg, rgba(231, 253, 254, 1) 0%, rgba(2, 215, 218, 1) 100%)";
}
myDay.addEventListener('click',myDayFnk);
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
    renderTodos([]);
    document.getElementsByTagName("main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(255,0,0,0.7063200280112045) 0%, rgba(255,247,197,0.7931547619047619) 100%)";
});

const plannedFnk =() => {
    headingHeader.innerText = "Planned";
    // console.log(headingHeader.innerText);

    regexPattern = /[0-9]{4}/;
    if ( headingHeader.innerText === "Planned") {
        myDay.style.backgroundColor = "";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "";
    }
    renderTodos(allTasks.filter((x)=>{
        return regexPattern.test(x.id);
    }));
    document.getElementsByTagName("main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(0,255,209,1) 0%, rgba(197,255,255,0.7931547619047619) 100%)";
    
}
planned.addEventListener('click',plannedFnk);
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
    renderTodos([]);
    document.getElementsByTagName("main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(255,179,0,1) 0%, rgba(201,197,255,0.7931547619047619) 100%)";
    
    
});


const tasksFnk = () => {
    headingHeader.innerText = "Tasks";
    // console.log(headingHeader.innerText);
    if ( headingHeader.innerText === "Tasks") {
        myDay.style.backgroundColor = "";
        importantSB.style.backgroundColor = "";
        planned.style.backgroundColor = "";
        asigned.style.backgroundColor = "";
        tasks.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
    }
    renderTodos(allTasks);
    document.getElementsByTagName("main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(104,255,0,1) 0%, rgba(226,255,197,0.7931547619047619) 100%)";
}
tasks.addEventListener('click',tasksFnk);





addTaskTasks.addEventListener('click', () => {
        if (document.getElementById("add-final-date").style.display === "block") {
            document.getElementById("add-final-date").style.display = "none";
            if (choosenDate === "") {
                document.getElementById("add-final-date__btn4").style.display = "none";
            }else{
                document.getElementById("add-final-date__btn4").style.display = "block";
            }
        }else{
            document.getElementById("add-final-date").style.display = "block";
            if (choosenDate === "") {
                document.getElementById("add-final-date__btn4").style.display = "none";
            }else{
                document.getElementById("add-final-date__btn4").style.display = "block";
            }
        }
});

document.getElementById("add-final-date__btn1").addEventListener('click',()=>{
    choosenDate = "today";
    document.getElementById("add-final-date").style.display = "none";
    document.getElementById("add-final-date__btn4").style.display = "block";
});
document.getElementById("add-final-date__btn2").addEventListener('click',()=>{
    choosenDate = "tomorrow";
    
    document.getElementById("add-final-date").style.display = "none";
    document.getElementById("add-final-date__btn4").style.display = "block";
    
});
document.getElementById("calendar-input").addEventListener('change',()=>{
    choosenDate = document.getElementById("calendar-input").value;
    
    document.getElementById("add-final-date").style.display = "none";
    document.getElementById("add-final-date__btn4").style.display = "block";
});
document.getElementById("add-final-date__btn4").addEventListener('click',()=>{
    choosenDate = "";
    document.getElementById("add-final-date").style.display = "none";
    document.getElementById("add-final-date__btn4").style.display = "none";
});


addTaskInput.addEventListener('keydown',function (event) {
    if (event.key === "Enter") {
        addTodo(addTaskInput.value);
    }
});




const todoItemsList = document.querySelector('.todo-items');
function addTodo(item) {
    if (addTaskInput.value !== "") {
            

        let finalDate;
        let month;
        let day;

        if (choosenDate === "") {

            finalDate = "zzzzzzzzzz"

        }else if (choosenDate === "today") {
            if (Number(dateOfToday.getMonth()) < 10) {
                month = `0${dateOfToday.getMonth()}`;
            } else {
                month = `${dateOfToday.getMonth()}`;
            }

            if (Number(dateOfToday.getUTCDate()) < 10) {
                day = `0${dateOfToday.getUTCDate()}`;
            } else {
                day = `${dateOfToday.getUTCDate()}`;
            }


            finalDate = `${dateOfToday.getFullYear()}-${month}-${day}`;
            
        } else if (choosenDate === "tomorrow") {
            if (Number(dateOfToday.getMonth()) < 10) {
                month = `0${dateOfToday.getMonth()}`;
            } else {
                month = `${dateOfToday.getMonth()}`;
            }

            if ((Number(dateOfToday.getUTCDate()) + 1)< 10) {
                day = `0${dateOfToday.getUTCDate() + 1}`;
            } else {
                day = `${dateOfToday.getUTCDate() + 1}`;
            }

            finalDate = `${dateOfToday.getFullYear()}-${month}-${day}`;
            
        } else {
            finalDate = choosenDate;
            
        }
        
        let todoKey = finalDate + "/" + localStorage.getItem("keyForTasks");


        localStorage.setItem(`keyForTasks`,`${Number(localStorage.getItem(`keyForTasks`))+1}`)


        const todo = {
            id: todoKey,
            name: item,
            completed: false
        };

        allTasks.push(todo);
        addToLocalStorage(allTasks);

        addTaskInput.value = "";
        choosenDate = "";

    }
}

// function to render given allTasks to screen
function renderTodos(allTasks) {
    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';
  
    
    // run through each item inside allTasks
    allTasks.forEach(function(item) {
      // check if the item is completed
      const checked = item.completed ? 'checked': null;
  
      // make a <li> element and fill it
      // <li> </li>
      const li = document.createElement('li');
      // <li class="item"> </li>
      li.setAttribute('class', 'item container');
      // <li class="item" data-key="20200708"> </li>
      li.setAttribute('data-key', item.id);
      /* <li class="item" data-key="20200708"> 
            <input type="checkbox" class="checkbox">
            Go to Gym
            <button class="delete-button">X</button>
          </li> */
      // if item is completed, then add a class to <li> called 'checked', which will add line-through style
      if (item.completed === true) {
        li.classList.add('checked');
      }
  
      li.innerHTML = `
        ${item.name}
        <input type="checkbox" class="checkbox" ${checked}>
        <span class="checkmark"></span>
        <button class="delete-button"><i class="far fa-trash-alt delete-sth" ></i></button>
        
      `;

      
      // finally add the <li> to the <ul>
      todoItemsList.append(li);
    });
  
  }

  // function to add todos to local storage
function addToLocalStorage(allTasks) {

    allTasks.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    
    // conver the array to string then store it.
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
    // render them to screen
    if (headingHeader.innerText === "My Day") {
        myDayFnk();
    } else if (headingHeader.innerText === "Planned") {
        plannedFnk();
    } else if (headingHeader.innerText === "Tasks") {
        tasksFnk();
    } else {
        renderTodos([]);
    }
    //renderTodos(allTasks);
  }
  
  // function helps to get everything from local storage
  function getFromLocalStorage() {
    const reference = localStorage.getItem('allTasks');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      allTasks = JSON.parse(reference);
      if (headingHeader.innerText === "My Day") {
        myDayFnk();
    } else if (headingHeader.innerText === "Planned") {
        plannedFnk();
    } else if (headingHeader.innerText === "Tasks") {
        tasksFnk();
    } else {
        renderTodos([]);
    }
      //renderTodos(allTasks);
    }
  }

  // toggle the value to completed and not completed
function toggle(id) {
    allTasks.forEach(function(item) {
      // use == not ===, because here types are different. One is number and other is string
      if (item.id == id) {
        // toggle the value
        item.completed = !item.completed;
      }
    });
  
    addToLocalStorage(allTasks);
  }
  
  // deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
    // filters out the <li> with the id and updates the todos array
    allTasks = allTasks.filter(function(item) {
      // use != not !==, because here types are different. One is number and other is string
      return item.id != id;
    });
  
    // update the localStorage
    addToLocalStorage(allTasks);
  }

  // initially get everything from localStorage
getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function(event) {
    // check if the event is on checkbox
    
    if (event.target.classList.contains('checkmark')) {
      // toggle the state
      toggle(event.target.parentElement.getAttribute('data-key'));
    }
  
    // check if that is a delete-button
    if (event.target.classList.contains('delete-sth')) {
      // get id from data-key attribute's value of parent <li> where the delete-button is present
      deleteTodo(event.target.parentElement.parentElement.getAttribute('data-key'));
    }
  });




  
//starting-page
headingHeader.innerText = "My Day";
headingDate.innerText = todayAsNeeded;
myDay.style.backgroundColor = "rgba(169, 169, 169, 0.833)";
myDayFnk();