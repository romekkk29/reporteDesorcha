function exportTable(){
    alert("entra")
    TableToExcel.convert(document.getElementById("table1"));
}
let exportExcel=document.querySelector("#export")
exportExcel.addEventListener("click",()=>{
  
    exportTable()
})