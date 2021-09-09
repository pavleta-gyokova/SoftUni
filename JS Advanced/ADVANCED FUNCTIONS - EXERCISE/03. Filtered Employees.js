// My solution
function solve(sting, criteria) {
  let data = JSON.parse(sting);
  let isNotAll = criteria !== 'all';
  let [key, value] = criteria.split('-');
  data.filter(function (employee) {
    return isNotAll
      ? employee[key] === value
      : true;
  }).forEach((employee, index) => console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`));
}
// Chaov soliton

function splitCriteria(criteria) {
  return criteria.split('-')
}

function filterByProp(prob, value, element) {
  return element[prob] === value
}
function formatEmployee(element, index) {
  return `${index}. ${element.first_name} ${element.last_name} - ${element.email}`;
}
function solve(data, criteria) {
  return criteria === "all"
    ? JSON.parse(data)
      .map((formatEmployee))
      .join('\n')
    :
    JSON.parse(data)
      .filter(filterByProp.bind(undefined, ...splitCriteria(criteria)))
      .map(formatEmployee)
      .join('\n')
}







solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  'gender-Female'
)