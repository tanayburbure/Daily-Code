// let ctr = 0;
// function callback(){
//     document.querySelectorAll("h4")[1].innerHTML = ctr;
//     const el = document.querySelectorAll("h4")[1];
//     el.innerHTML = ctr;
//     ctr = ctr + 1;
// }
// // setInterval(callback,1000) 

// function deleterandometodo(){
//     const element = document.querySelector("h4");
//     const parentelement = element.parentElement;
//     parentelement.removeChild(element)
// }

// function addTodo(){
//     const divEL = document.createElement("div");
//     divEL.innerHTML = "Hiiiiiiiiiiiii thereeeeeeee";
//     const parentEL = document.querySelector("body");
//     parentEL.appendChild(divEL);
// }


// let ctr = 1


// function addtodo(){
    
//     const inputEL = document.querySelector("input")
//     const value = inputEL.value

//     const newDivEL = document.createElement("div")
//     newDivEL.setAttribute("id",ctr)
//     newDivEL.innerHTML = "<div>" + value + '</div><button onclick="deletetodo('+ ctr +')" >delete</button>';
//     document.querySelector("body").appendChild(newDivEL)
//     ctr = ctr + 1 ; 
// }

// function deletetodo(index){
//     const element = document.getElementById(index);
//     element.parentNode.removeChild(element)
// }




// let ctr = 1;
// function addtodo(){
//     const inputEl = document.querySelector("input");
//     const value = inputEl.value;

//     const newDivEl = document.createElement("div")
//     newDivEl.setAttribute("id",ctr)
//     newDivEl.innerHTML = "div" + value + '</div> <button onclick="deletetodo('+ ctr +')"> delete </button>'
//     document.querySelector("body").appendChild(newDivEl)
// }

// function deletetodo(index){
//     const element = document.getElementById(index)
//     element.parentNode.removeChild(element)
// }

//  Raw HTML element

// let ctr = 0 ;
//  function addtodo(){
//     const inputEL = document.querySelector("input");
//     const value = inputEL.value;
//     const newDivEL= document.createElement("div");
//     newDivEL.setAttribute("id",ctr);
//     newDivEL.innerHTML = value + ' <button onclick="deletetodo('+ ctr +')" > delete</button>';
//     document.querySelector("body").appendChild(newDivEL);
//  }

//  function deletetodo(index){
//     const element = document.getElementById(index);
//     element.parentNode.removeChild(element);
//  }

//  More Cleaner Way to write the code

// function addtodo(){
//    const value = document.querySelector("input").value;
//    const spanEl = document.createElement("span");
//    const buttonEl = document.createElement("button");
//    spanEl.innerHTML = value;
//    buttonEl.innerHTML = "Delete";
//    ///
//    const divEl = document.createElement("div");
//    divEl.appendChild(spanEl);
//    divEl.appendChild(buttonEl);
//    ///
//    document.querySelector("body").appendChild(divEl)
// }


//Better approach as we are going more functionality

// let todos=[];
// function createTodoComponent(todo){
//    const div = document.querySelector("div");
//    const h1 = document.createElement("h1");
//    const button = document.createElement("button");
//    button.innerHTML = "Delete"
//    todo.innerHTML = todo.title;
//    div.append(h1);
//    div.append(button);
//    return div
// }

// This is React library do it automatically 

// function render(){
//    document.querySelector("#todos").innerHTML="";
//    for(let i = 0;i<todos.length;i++){
//       const element = createTodoComponent(todos[i]);
//       document.querySelector("#todos").appendChild(div)
//    }
// }

// Simple react like code 


// input box
// button onclick="addTodo()"
// button onclick="DeletFirstTodo()"
// button onclick="DeleteLastTodo()"


// let todos = [];

// function addTodo(){
//    todos.push({
//       title : document.querySelector("input").value
//    })
//    render();
// }

// function deleteTodo(index){
//    todos.splice(index,1);
//    render()
// }

// function deleteFirstTodo(){
//    todos.splice(0,1);
//    render()
// }

// function deleteLastTodo(){
//    todos.pop();
//    render()
// }


// function createTodoComponent(todo,index){
//    const div = document.createElement("div")
//    const h1 = document.createElement("h1")
//    const button = document.createElement("button");
//    button.innerHTML = "Delete";
//    button.addEventListener("click",function(){
//       deleteTodo(index)
//    })
//    h1.innerHTML = todo.title;
//    div.append(h1);
//    div.append(button);
//    return div
// }
 
// function render(){
//    document.querySelector("#todos").innerHTML = "";
//    for (let i = 0; i < todos.length ; i++){
//       const element = createTodoComponent(todos[i]);
//       document.querySelector("#todos").appendChild(element)
//    }
// }



let todos = [];

function addTodo(){
   todos.push({
      title : document.querySelector("input").value
   })
   render()
}

function deleteTodo(index){
   todos.splice(index,1)
   render()
}

function deleteFirstTodo(){
   todos.splice(1,0)
   render()
}

function deleteLastTodo(){
   todos.pop()
   render()
}



function createTodoComponent(todo,index){
   const div = document.createElement("div");
   const h1 = document.createElement("h1");
   const button = document.createElement("button")
   button.innerHTML = "Delete";
   button.addEventListener("click",function(){
      deleteTodo(index)
   })
   h1.innerHTML = todo.title
   div.appendChild(h1)
   div.appendChild(button)
   return div
}

function render(){
   document.querySelector("#todos").innerHTML = ""
   for (let i = 0 ; i < todos.length ; i++ ){
      const element = createTodoComponent(todos[i]);
      document.querySelector("#todos").appendChild(element)
   }
}