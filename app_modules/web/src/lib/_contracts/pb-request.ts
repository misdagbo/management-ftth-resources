import { Request } from 'helper';
import { Pb } from '../_dtos/pb';
import { CassetteFibre } from '../_dtos/cassette-fibre';

export class PbRequest extends Request<Pb> {

    public datasSroCassetteFibre: Array<CassetteFibre>;

}
