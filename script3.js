const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const resetBtn = document.getElementById('reset-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');
const searchInput = document.getElementById('search-input');
const filterCategory = document.getElementById('filter-category');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function updateTotal() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  totalAmountCell.textContent = total.toFixed(2);
}

function renderExpenses(data = expenses) {
  expenseTableBody.innerHTML = '';

  data.forEach((expense, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${expense.category}</td>
      <td>₹ ${expense.amount}</td>
      <td>${expense.date}</td>
      <td><button class="delete-btn" data-index="${index}">Delete</button></td>
    `;

    expenseTableBody.appendChild(row);
  });

  updateTotal();
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

addBtn.addEventListener('click', () => {
  const category = categorySelect.value;
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;

  if (!category || isNaN(amount) || !date) {
    alert('Please fill in all fields.');
    return;
  }

  expenses.push({ category, amount, date });
  renderExpenses();

  amountInput.value = '';
  dateInput.value = '';
});

expenseTableBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.getAttribute('data-index');
    expenses.splice(index, 1);
    renderExpenses();
  }
});

resetBtn.addEventListener('click', () => {
  if (confirm('Clear all expenses?')) {
    expenses = [];
    renderExpenses();
  }
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = expenses.filter(
    exp =>
      exp.category.toLowerCase().includes(query) ||
      exp.date.includes(query)
  );
  renderExpenses(filtered);
});

filterCategory.addEventListener('change', () => {
  const selected = filterCategory.value;
  if (selected === '') {
    renderExpenses();
  } else {
    const filtered = expenses.filter(exp => exp.category === selected);
    renderExpenses(filtered);
  }
});

// Load on start
renderExpenses();

// Simple calculator function
function calculateSum() {
   const num1 = parseFloat(document.getElementById('calc-num1').value);
   const num2 = parseFloat(document.getElementById('calc-num2').value);
   const result = document.getElementById('calc-result');
 
   if (isNaN(num1) || isNaN(num2)) {
     result.textContent = "❗ Please enter valid numbers.";
   } else {
     result.textContent = `✅ Sum: ₹ ${num1 + num2}`;
   }
 }
 
 // Sync total tracker section
 function updateTotalTracker() {
   document.getElementById('total-tracker-display').textContent = `₹ ${totalAmountCell.textContent}`;
 }
 setInterval(updateTotalTracker, 1000);
 

 
