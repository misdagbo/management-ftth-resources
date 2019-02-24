import { Request } from 'helper';
import { Roe } from '../_dtos/roe';
import { RoeModule } from '../_dtos/roe-module';
export declare class RoeRequest extends Request<Roe> {
    datasRoeModule: Array<RoeModule>;
}
