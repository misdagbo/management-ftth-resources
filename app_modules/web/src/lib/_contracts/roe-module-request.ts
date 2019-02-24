import { Request } from 'helper';
import { RoeModule } from '../_dtos/roe-module';
import { RoePort } from '../_dtos/roe-port';

export class RoeModuleRequest extends Request<RoeModule> {

    public datasRfoRoePortModule: Array<RoePort>;

}
