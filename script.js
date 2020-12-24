//getting reqd elements
const inputBox= document.querySelector(".inputField input");
const addBtn= document.querySelector(".inputField button");
const todoList= document.querySelector(".todoList");
const deleteAllBtn= document.querySelector(".footer button");


inputBox.onkeyup = ()=> {
	let userData= inputBox.value; //getting user entered input
	if(userData.trim()!=0){ //if user isnt only blank space
		addBtn.classList.add("active"); //activate button
	}else{
		addBtn.classList.remove("active");
	}
}


showTasks();

addBtn.onclick = () =>{
	let userData = inputBox.value;
	let getLocalStorage= localStorage.getItem("New Todo");
	if(getLocalStorage==null){
		listArr=[];
		}else{
			listArr=JSON.parse(getLocalStorage);
		}
		listArr.push(userData);
		localStorage.setItem("New Todo", JSON.stringify(listArr));
		showTasks();
}

//function to add tasks to list
function showTasks(){
	let getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage == null){
		listArr=[];
		}else{
			listArr=JSON.parse(getLocalStorage);
		}
		const pendingNumb=document.querySelector(".pendingNumb");
		pendingNumb.textContent= listArr.length;
		let newLiTag = '';
		listArr.forEach((element,index) => {
			newLiTag += '<li> ${element} <span onclick="deleteTask();"><i class="fa fa-trash-o"></i><span></li>';
		});
		todoList.innerHTML =  newLiTag; //adding new li tag inside ul
		inputBox.value=""; //let inp field be blank once input is entered
}

//function to delete task
function deleteTask(index){
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr=JSON.parse(getLocalStorage);
	listArr.splice(index,1); // delete or remove particular index li tag

	//update local storage after removing item
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTasks();
}

//delete all tasks
deleteAllBtn.onclick = ()=>{
	listArr=[];
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTasks();
}