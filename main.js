document.getElementById("taskForm").addEventListener("submit", function(event){
    event.preventDefault();

    const taskValue=document.getElementById("taskInput").value;
    if (taskValue.trim()==="") return;

    // 填写数据
    const table = document.getElementById("taskTable");
    const newRow = table.insertRow();
    
    

    // 创建复选框
    const checkCell = newRow.insertCell();
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(){
        newCell.style.textDecoration = this.checked ? "line-through" : "none";
    });
    checkCell.prepend(checkbox);

    const newCell = newRow.insertCell();
    newCell.textContent = taskValue;

    // 创建删除按钮
    const deletecell = newRow.insertCell();
    const deleteBtn = document.createElement("button");
    const img = document.createElement("img");

    // 创建删除图片
    img.src = "delete.png";
    img.alt = "Delete";
    img.style.width = "16px";
    img.style.height = "16px";
    deleteBtn.appendChild(img);

    deleteBtn.addEventListener("click", function(){
        table.deleteRow(newRow.rowIndex)
    });
    deletecell.appendChild(deleteBtn);

    document.getElementById("taskInput").value= "";

})

