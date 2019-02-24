import { Request } from 'helper';
import { RoeModule } from '../_dtos/roe-module';
import { RoePort } from '../_dtos/roe-port';
export declare class RoeModuleRequest extends Request<RoeModule> {
    datasRfoRoePortModule: Array<RoePort>;
}
