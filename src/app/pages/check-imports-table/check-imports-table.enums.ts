import {
  CheckImportsElement,
  HeaderTable,
} from './check-imports-table.interface';

export const DATA_HEADER: HeaderTable[] = [
  { element: 'position', title: 'No.', isCheck: false },
  { element: 'name', title: 'Name', isCheck: false },
  { element: 'weight', title: 'Weight', isCheck: false },
  { element: 'symbol', title: 'Symbol', isCheck: false },
  { element: 'toxic', title: 'Toxic', isCheck: true },
];

//dataMock(this shouldt'n be here)
export const ELEMENT_DATA: CheckImportsElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    checkbox: false,
  },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', checkbox: true },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', checkbox: true },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    checkbox: true,
  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', checkbox: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', checkbox: true },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    checkbox: false,
  },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', checkbox: true },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    checkbox: true,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    checkbox: false,
  },
];
