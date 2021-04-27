export interface CheckImportsElement {
  code: string;
  perInit: string;
  perEnd: string;
  prevImp: string;
  impDate: string;
  imported: boolean;
  attemps: string;
  extrDate: string;
  movements: string;
  action: string;
  accepted: string;
  rejected: string;
  signedUps: string;
  modified: string;
}

export interface HeaderTable {
  element: string;
  title: string;
  isCheck: boolean;
}
