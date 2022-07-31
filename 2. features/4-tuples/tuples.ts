const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 49,
}

//type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 50];
// pepsi[0] = 40;

const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]


const carSpecs: [number, number] = [400, 3352]

const carStats = {
    horsePower: 400,
    weight: 3352,
}