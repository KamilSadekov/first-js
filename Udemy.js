var money = prompt('ваш бюджет на месяц');
var time = prompt('введите дату в формате YYYY-MM-DD');
var expensesQuest = prompt('Введите обязательную статью расходов в этом месяце');
var price = prompt('Во сколько обойдется?');
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
appData.expenses[expensesQuest] = price;
var oneDay = money / 30;
alert('бюджет на день: ' + oneDay);