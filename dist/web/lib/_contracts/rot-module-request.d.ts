import { Request } from 'helper';
import { RotModule } from '../_dtos/rot-module';
import { RotPort } from '../_dtos/rot-port';
export declare class RotModuleRequest extends Request<RotModule> {
    datasRfoRotPortModule: Array<RotPort>;
}
