import faker from "faker"

export class Company {


    companyName: string
    catchPhrase: string

    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    location: {
        lat: number,
        lng: number
    }

    markerContent(): string {
        return(`
        <div>
        <h1>
        Company Name is ${this.companyName}
        </h1>
        <h3>
        Catch phrase is ${this.catchPhrase}
        </h3>
        </div>
        `)
    }

}