/*toggle*/
const getMenu=document.querySelector('.nav3')
const getIcon=document.querySelector('.menu-icon')
// console.log(getMenu)

getIcon.onclick=()=>{
	getMenu.classList.toggle("open")
}
