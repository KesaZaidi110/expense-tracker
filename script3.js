let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('Amount-input');
const dateInput = document.getElementById('Date-input');
const addBtn = document.getElementById('add-btn');
const expensetableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('Total-amount');

addBtn.addEventListener('click', function(){
 const category = categorySelect.value;
 const amount= Number(amountInput.value);
 const date = dateInput.Value;

 if( category ==='') {
    alert("Please select Category");
    return;

 }
 if (isNaN (amount) || amount<=0) {
    alert("Please enter a valid amount");
    return;
 }
 if(date === '') {
    alert("please select a date");
    return;
 }
 expenses.push({category, amount, date});

 totalAmount += amount;
 totalAmountCell.textContent=totalAmount;

 const newRow = expensetableBody.insertRow();

 const categoryCell = newRow.insertCell();
 const amountCell = newRow.insertCell();
 const dateCell = newRow.insertCell();
 const deleteCell = newRow.insertCell();

 const deleteBtn = document.createElement('Button');

 deleteBtn.textContent = "Delete";
 deleteBtn.classList.add('delete-btn');
 deleteBtn.addEventListener('click' , function(){
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount-=expense.amount;
    totalAmountCell.textContent = totalAmount;

    expensetableBody.removeChild(newRow);

 });
 const expense = expenses[expenses.length - 1];
 categoryCell.textContent=expense.category;
 amountCell.textContent-expense.amount;
 deleteCell.textContent= expense.date;
 deleteCell.appendChild(deleteBtn);
});
for(const expense of expenses) {
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;
   
    const newRow = expensetableBody.insertRow();
   
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
   
    const deleteBtn = document.createElement('Button');
   
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click' , function(){
       expenses.splice(expenses.indexOf(expense), 1);
   
       totalAmount-=expense.amount;
       totalAmountCell.textContent = totalAmount;
   
       expensetableBody.removeChild(newRow);
   
    })
    const expense = expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    amountCell.textContent-expense.amount;
    deleteCell.textContent= expense.date;
    deleteCell.appendChild(deleteBtn);
   }


