import { Request } from 'helper';
import { RotModule } from '../_dtos/rot-module';
import { RotPort } from '../_dtos/rot-port';

export class RotModuleRequest extends Request<RotModule> {

    public datasRfoRotPortModule: Array<RotPort>;

}
