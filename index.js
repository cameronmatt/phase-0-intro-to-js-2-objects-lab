// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
    }
function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
return Object.assign({},employee,{[streetAddress]: '11 Broadway'})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
employee[streetAddress] = '12 Broadway'
return employee
}
function deleteFromEmployeeByKey(employee, name){
let newemployee =  Object.assign({},employee)
delete newemployee[name]
return newemployee}
function destructivelyDeleteFromEmployeeByKey(employee, name){
delete employee[name]
return employee
}

