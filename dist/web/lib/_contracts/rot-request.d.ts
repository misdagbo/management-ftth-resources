import { Request } from 'helper';
import { Rot } from '../_dtos/rot';
import { RotModule } from '../_dtos/rot-module';
export declare class RotRequest extends Request<Rot> {
    datasRotModule: Array<RotModule>;
}
