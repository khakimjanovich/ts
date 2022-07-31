const carMakers: string[] = ['ford', ' toyota', 'GM'];

const dates = [new Date, new Date]

const carsByMake = [
    ['f1590'],
    ['corolla'],
    ['camaro']
]

//help with inference when extracting values
const car = carMakers[0]

const myCar = carMakers.pop()

//prevent incompatible values
// carMakers.push(100)

//help with map
carMakers.map((car: string) => {
    return car.toUpperCase();
})

//Flexible types

const importantDates: (Date | string)[] = [new Date,]
importantDates.push('2020-12-12');
importantDates.push(new Date())
// importantDates.push(123)