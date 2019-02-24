import { Request } from 'helper';
import { Pb } from '../_dtos/pb';
import { CassetteFibre } from '../_dtos/cassette-fibre';
export declare class PbRequest extends Request<Pb> {
    datasSroCassetteFibre: Array<CassetteFibre>;
}
