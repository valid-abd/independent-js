'use strict';

let money = +prompt("Ваш месячный доход?", 42000) ,             // доход за месяц
    income = "фриланс" ,    // дополнительный доход 
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "coco, koko"),    // доп. расходы
    deposit = confirm("Есть ли у вас депозит в банке?"),         // 
    mission = 45000,        // цель суммы
    period = 12 ;           // периуд 
    



let question = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' уход, поход, рифмаплет'),
    question02 = +prompt('Во сколько это обойдется?', 1500),
    question03 = prompt('Какие обязательные ежемесячные расходы у вас есть?',' one, one '),
    question04 = +prompt('Во сколько это обойдется?', 1500);

    console.log(question);
    console.log(question02);
    console.log(question03);
    console.log(question04);


let budgetMonth = money-(question02+question04); // чистый доход 
    console.log('доход за месяц с учетом расходов ', budgetMonth); // доход за месяц с расходами 

let budgetDay = Math.floor(budgetMonth/30) ;   // Доход за месяц


let condition = (budgetDay >= 800) ? ' Высокий уровень дохода' :
                (budgetDay >= 300 ) ? ' средний уровень дохода' :
                (budgetDay >= 0) ? ' Низкий уровень дохода' :
                ' Что то пошло не так';
                
                console.log(" Ваш уровень дохода ". condition);

    console.log('будет достигнута цель через месяцев', Math.ceil(mission/budgetMonth));
    console.log(money);
    console.log(income);
    console.log(deposit);
    // console.log(income.length);

    console.log(budgetDay);

    console.log(" Период " + period+ " месяцев");
    console.log(" Цель заработать " + mission+ " руб");
    console.log(addExpenses.toLowerCase().split(' '));
    
