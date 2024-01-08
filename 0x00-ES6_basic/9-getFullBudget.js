import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(incomeParam, gdp, capita) {
  const budget = getBudgetObject(incomeParam, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
