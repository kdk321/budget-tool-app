import { CurrencyPipe } from '@angular/common';

export class Item {
    id: number;
    paid: boolean;
    dateDue: Date;
    item: string;
    amount: number;
    reviewed: boolean;
}
