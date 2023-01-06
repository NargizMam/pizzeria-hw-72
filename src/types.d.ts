export interface Dish {
    id: string;
    name: string;
    image: string;
    price: number;
}

export type ApiDish = Omit<Dish, 'id'>;

export interface ApiDishesList {
    [id: string]: ApiDish;
}

export interface DishMutation {
    name: string;
    image: string;
    price: number;
}

export interface CartDish {
    dishId: string;
    amount: number;
}

export interface Customer {
    name: string;
    address: string;
    phone: string;
}

export interface ApiOrder {
    customer: Customer;
    dishes: CartDish[];
}

export interface ApiOrdersList {
    [id: string]: ApiOrder;
}


export interface Orders {
    [id: string]: number;
}

export interface AllOrders extends ApiOrder{
    id: string,

}


