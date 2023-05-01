document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
{
    setTimeout(() =>{document.querySelector('.open').style.display = 'inline'} ,300)
    document.querySelector('.close').style.display = 'none';
}
else{
    document.querySelector('.open').style.display = 'none';
   setTimeout(() =>{document.querySelector('.close').style.display = 'inline'} ,300)
   }
})