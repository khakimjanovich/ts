class Vehicle {
    // color: string;
    //
    // constructor(color: string) {
    //     this.color = color;
    // }

    constructor(public color: string) {
    }

    protected honk(): void {
        console.log(
            'beep!'
        )
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
    constructor(color: string, public wheels: number) {
        super(color);
    }

    startDrivingProcess() {
        this.drive()
        this.honk()
    }

    private drive(): void {
        console.log('voom!')
    }
}

const car = new Car('orange', 4);
car.startDrivingProcess();
