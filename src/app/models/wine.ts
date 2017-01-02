export class Wine {

    constructor(public name: string, public type: string, public year: number, public origin: string, public description: string,
            public sweetness: number, public abv: number, public image: string, public price: {retail?: number, wholesale?: number},
            public wholesaleQuantity: number) {
    }

    getURIEncodedName() {
        return encodeURIComponent(this.name);
    }

    compare(criteria: string, w: Wine) {
        switch (criteria) {
            case 'retailPrice':
                if (!(this.price && w.price && this.price.retail && w.price.retail) ||
                    this.price.retail === w.price.retail) {
                    return 0;
                }
                return this.price.retail > w.price.retail ? 1 : -1;
            case 'year': return this.year === w.year ? 0 : (this.year > w.year ? 1 : -1);
            default: return 0;
        }
    }
}
