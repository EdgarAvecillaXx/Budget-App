"use strict";

//* arrays
const incomes = [];
const expenses = [];

//* currency format
let currencyFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

//* percentage format
let percentageFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

//? HEADER BLOCK STARTGIT 
//* load header script at startup
window.addEventListener("load", () => {
  loadHeader();
});

//* totalize income values
let totalIncome = () => {
  let totalIncome = 0;
  for (const income of incomes) {
    totalIncome += income.value;
  }
  return totalIncome;
};

//* totaliza expense values
let totalExpense = () => {
  let totalExpense = 0;
  for (const expense of expenses) {
    totalExpense += expense.value;
  }

  return totalExpense;
};

//* load budget|incomes|expenses values to header
function loadHeader() {
  let budget = totalIncome() - totalExpense();
  let expensePercentage = totalExpense() / totalIncome();
  document.querySelector(".budget_value").innerHTML = currencyFormat(budget);
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
