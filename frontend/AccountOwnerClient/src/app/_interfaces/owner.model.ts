import { Account } from "./account.models";
export interface Owner {
    id: string;
    name: string;
    datoOfBirth: Date;
    address: string;

    account?: Account[];
}