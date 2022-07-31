interface Reportable {
    summary(): string;
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,

    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const oldCivic = {
    model: 'civic',
    year: new Date('2000-01-13'),
    broken: true,

    summary(): string {
        return `Name: ${this.model}, Year: ${this.year}, Broken: ${this.broken}`;
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)