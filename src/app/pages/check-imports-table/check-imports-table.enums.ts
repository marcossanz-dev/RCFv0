import {
  CheckImportsElement,
  HeaderTable,
} from './check-imports-table.interface';

export const DATA_HEADER: HeaderTable[] = [
  { element: 'code', title: 'CODIGO SISTEMA PRODUCTOR', isCheck: false },
  { element: 'perInit', title: 'INICIO PERIODO', isCheck: false },
  { element: 'perEnd', title: 'FIN PERIODO', isCheck: false },
  { element: 'prevImp', title: 'PREVISIÓN IMPORTACIÓN', isCheck: false },
  { element: 'impDate', title: 'FECHA IMPORTACIÓN', isCheck: false },
  { element: 'imported', title: 'IMPORTADO', isCheck: true },
  { element: 'attemps', title: 'INTENTOS', isCheck: false },
  { element: 'extrDate', title: 'FECHA EXTRACCIÓN', isCheck: false },
  { element: 'movements', title: 'MOVIMIENTOS', isCheck: false },
  { element: 'action', title: 'ACCIÓN', isCheck: false },
  { element: 'accepted', title: 'ACEPTADOS', isCheck: false },
  { element: 'rejected', title: 'RECHAZADOS', isCheck: false },
  { element: 'signedUps', title: 'ALTAS', isCheck: false },
  { element: 'modified', title: 'MODIFICADOS', isCheck: false },
];

//dataMock(this shouldt'n be here)
export const ELEMENT_DATA: CheckImportsElement[] = [
  {
    code: '00000',
    perInit: '04/05/2021',
    perEnd: '05/05/2021',
    prevImp: '04/05/2021',
    impDate: '06/05/2021',
    imported: true,
    attemps: '45',
    extrDate: '12/05/2021',
    movements: '2',
    action: 'MOVE STEP',
    accepted: '3',
    rejected: '2',
    signedUps: '4',
    modified: '3',
  },
  {
    code: '00001',
    perInit: '06/05/2021',
    perEnd: '15/05/2021',
    prevImp: '24/05/2021',
    impDate: '26/05/2021',
    imported: false,
    attemps: '45',
    extrDate: '12/05/2021',
    movements: '2',
    action: 'MOVE',
    accepted: '3',
    rejected: '2',
    signedUps: '4',
    modified: '3',
  },
  {
    code: '00002',
    perInit: '04/05/2021',
    perEnd: '15/05/2021',
    prevImp: '04/07/2021',
    impDate: '26/05/2021',
    imported: false,
    attemps: '45',
    extrDate: '12/05/2021',
    movements: '2',
    action: 'MOVE',
    accepted: '3',
    rejected: '2',
    signedUps: '4',
    modified: '3',
  },
  {
    code: '00003',
    perInit: '04/05/2021',
    perEnd: '05/05/2021',
    prevImp: '04/05/2021',
    impDate: '06/05/2021',
    imported: true,
    attemps: '45',
    extrDate: '12/05/2021',
    movements: '2',
    action: 'MOVE',
    accepted: '3',
    rejected: '2',
    signedUps: '7',
    modified: '3',
  },
];
