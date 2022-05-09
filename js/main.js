"use strict";

//? GENERAL INFO BLOCK
//* arrays
const incomes = [new Income("venta coche", 5000), new Income("sueldo", 1500)];
const expenses = [new Expense("renta oficina", 2000)];

//* currency format
const currencyFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

//* percentage format
const percentageFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

//? DOM EVENTS
//* load all functions that display info, at startup
window.addEventListener("load", () => {
  loadHeader();
  loadIncomes();
  loadExpenses();
});

//? HEADER BLOCK START
//* totalize income values
const totalIncome = () => {
  let totalIncome = 0;
  for (const income of incomes) {
    totalIncome += income.value;
  }
  return totalIncome;
};

//* totalize expense values
const totalExpense = () => {
  let totalExpense = 0;
  for (const expense of expenses) {
    totalExpense += expense.value;
  }
  console.log(totalExpense);
  return totalExpense;
};

//* load budget|incomes|expenses values to header
function loadHeader() {
  const budget = totalIncome() - totalExpense();
  const expensePercentage = totalExpense() / totalIncome();
  document.querySelector(".budget_value").innerHTML = currencyFormat(budget);
  console.log(currencyFormat(budget));
  document.querySelector(".budget_income--value").innerHTML = currencyFormat(
    totalIncome()
  );
  document.querySelector(".budget_expense--value").innerHTML = currencyFormat(
    totalExpense()
  );
  document.querySelector(".budget_expense--percentage").innerHTML =
    percentageFormat(expensePercentage);
}
//? HEADER BLOCK END

//? LIST BLOCK START
//* load all incomes to income list section
function loadIncomes() {
  //* this variable is needed to concat all the HTML elements created
  let incomeHTML = "";
  for (const income of incomes) {
    incomeHTML += createIncomeHTML(income);
  }
  document.getElementById("incomes-list").innerHTML = incomeHTML;
}

//* create an income list element with the layout data
const createIncomeHTML = (income) => {
  //* Here the function insert a HTML element with the required layout structure
  const incomeHTML = `<div class="element clearStyles">
     <div class="element_description">${income.description}</div>
     <div class="right clearStyles">
       <div class="element_value">+ ${currencyFormat(income.value)}</div>
       <div class="element_delete">
         <button class="element_delete--btn">
           <i class="bi bi-trash-fill" onclick="deleteIncome(${income.id})"></i>
         </button>
       </div>
     </div>
   </div>`;

  return incomeHTML;
};

//* delete an income element, is linked to onclick event declared in the incomeHTML value.
const deleteIncome = (id) => {
  //* the id, is the income id iterated in loadIncomes()
  //*findIndex, returns the index where the element that fulfills the condition is located
  const index = incomes.findIndex((element) => element.id === id);
  //* delete the object in the incex value obtained
  incomes.splice(index, 1);
  //* reload our info
  loadHeader();
  loadIncomes();
};

//* load all expenses to expense list section
function loadExpenses() {
  let expenseHTML = "";
  for (const expense of expenses) {
    expenseHTML += createExpenseHTML(expense);
  }
  document.getElementById("expenses-list").innerHTML = expenseHTML;
}

//* create an expense list element with the layout data
const createExpenseHTML = (expense) => {
  //* Here the function insert a HTML element with the required layout structure
  const expenseHTML = `<div class="element clearStyles">
     <div class="element_description">${expense.description}</div>
     <div class="right clearStyles">
       <div class="element_value">- ${currencyFormat(expense.value)}</div>
       <div class="element_percentage">${percentageFormat(
         expense.value / totalExpense()
       )}</div>
       <div class="element_delete">
         <button class="element_delete--btn">
           <i class="bi bi-trash-fill" onclick="deleteExpense(${
             expense.id
           })"></i>
         </button>
       </div>
     </div>
   </div>`;
  return expenseHTML;
};

//* delete an expense element, is linked to onclick event declared in the ExpenseHTML value.
const deleteExpense = (id) => {
  //* the id, is the Expense id iterated in loadExpenses()
  //*findIndex, returns the index where the element that fulfills the condition is located
  let index = expenses.findIndex((element) => element.id === id);
  //* delete the object in the index value obtained
  expenses.splice(index, 1);
  //* reload our info
  loadHeader();
  loadExpenses();
};
