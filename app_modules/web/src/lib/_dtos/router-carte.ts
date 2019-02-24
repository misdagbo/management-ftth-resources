import { RouterPort } from './router-port';

export class RouterCarte {

    public id: number;
    public numero: string;
    public router: number;
    public modele: number;
    public oltRouterNom: string;
    public paramModeleReference: string;
    public itemsOltRouterPort: Array<RouterPort>;

}
