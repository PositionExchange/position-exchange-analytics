import { ActiveTransaction, ItemTranSaction } from 'api/nft/nft.type'
import React from 'react'
import DataTable, {
  createTheme,
  TableColumn,
  TableStyles,
} from 'react-data-table-component'
import { convertTimesTampToDate } from 'utils/date'
import { nFormatter } from 'utils/number'
type TypeFilter = {
  value: ActiveTransaction
  name: string
}
const listFilterTransaction: TypeFilter[] = [
  {
    name: 'All',
    value: 'Burn',
  },
  {
    name: 'Swap',
    value: 'Burn',
  },
  {
    name: 'Stake',
    value: 'Stake',
  },
]
type Props = {
  transactions: ItemTranSaction[]
}
export default function Transaction({ transactions }: Props) {
  return (
    <div>
      <div className="w-full pt-3 pb-3 pl-6  bg-secondary rounded-t-md ">
        <p className="font-medium text-3xl text-txt-primary ">Transaction</p>
        {/* ?? */}
        <div className="flex flex-row gap-x-4 mt-4 ">
          {listFilterTransaction.map((itemFilter) => {
            return (
              <div className="flex items-center" key={itemFilter.name}>
                <input
                  disabled={true}
                  type="radio"
                  className="focus:ring-rose-700 h-6 w-6 text-red-700 border-gray-300 bg-red-500"
                />
                <label
                  htmlFor="push-everything"
                  className="ml-3 block text-xl font-medium text-txt-primary"
                >
                  {itemFilter.name}
                </label>
              </div>
            )
          })}
        </div>

        {/* ?? */}
      </div>
      <DataTable
        title="Transaction"
        columns={columnsTransaction}
        data={transactions}
        customStyles={customStyles}
        theme="solarized"
        noHeader={true}
      />
    </div>
  )
}

const customStyles: TableStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '30px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: 18,
    },
  },
  cells: {
    style: {
      paddingLeft: '30px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
  header: {
    style: {
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      backgroundColor: '#302E4C',
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
}

createTheme(
  'solarized',
  {
    text: {
      primary: 'white',
    },
    background: {
      default: '#29263C',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: 'rgba(120, 122, 145, 0.5)',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark'
)

export const columnsTransaction: TableColumn<ItemTranSaction>[] = [
  {
    name: 'Action',
    selector: (row) => row?.action,
  },
  {
    name: 'Value',
    selector: (row) => nFormatter(row?.createdBlockNumber, 2),
  },
  {
    name: 'Transaction',
    selector: (row) => row?.id,
  },
  {
    name: 'From',
    selector: (row) => row?.from?.id,
  },
  {
    name: 'To',
    selector: (row) => row?.to?.id,
  },
  {
    name: 'Time',
    selector: (row) => {
      const { date, month, year } = convertTimesTampToDate(row.createdTimestamp)
      return `${date}-${month}-${year}`
    },
  },
]
