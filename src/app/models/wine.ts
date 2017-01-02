export class Wine {

    constructor(public name: string, public type: string, public year: number, public origin: string, public description: string,
            public sweetness: number, public abv: number, public image: string, public price: {retail?: number, wholesale?: number},
            public wholesaleQuantity: number) {
    }
}
