import BalanceWallet from '@/components/address/BalanceWallet'
import SocialButton from '@/components/address/SocialButton'
import { DoughnutChart } from '@/components/chart/DoughnutChart'
import LineChart from '@/components/chart/LineChart'
import { fakeDataLineChart, getUserInfoBalance } from 'api/address/address.api'
import { DataBalancerResponse } from 'api/address/address.api.type'
import { transformDataWalletDoughnutChart } from 'helper/nft/transformDataWalletDoughnutChart'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { hashFormatter } from 'utils/string'

export default function Account() {
  const router = useRouter()
  const account: string = (router?.query?.account as string) || ''
  const [balance, setBalance] = useState<DataBalancerResponse>()

  // const infoWallet = [
  //   +convertBigNumberToStringNumber(
  //     balance?.totalPosiBalance?.walletBalance || 1
  //   ),
  //   +convertBigNumberToStringNumber(
  //     balance?.totalPosiBalance?.stakingBalance || 1
  //   ),
  //   +convertBigNumberToStringNumber(
  //     balance?.totalPosiBalance?.pendingBalance || 1
  //   ),
  // ]
  const infoWallet = [1, 2, 1]
  const dataDoughnutWalletChart = transformDataWalletDoughnutChart(infoWallet)

  useEffect(() => {
    const fetchBalancer = async () => {
      const data: DataBalancerResponse = await getUserInfoBalance(account)
      console.log('data', data)
      setBalance(data)
    }
    fetchBalancer()
  }, [])

  return (
    <main className="relative bg-light-primary dark:bg-primary w-full  mt-10  md:mt-16   px-6  xl:px-0">
      <div className="flex justify-center">
        <div className="flex flex-col  items-center">
          <div className=" rounded-full bg-primary-1 w-32 h-32 flex items-center justify-center drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5">
            <Image
              alt="avatar"
              width={52}
              height={52}
              className="rounded-full float-left h-full"
              src="/user.svg"
            />
          </div>
          <span className="mt-6 text-2xl">Kate Horwitz</span>
          <div className="bg-primary drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5  mt-3    px-4 rounded-[30px] py-2">
            <span className=" text-sm  ">{hashFormatter(account, true)}</span>
          </div>
          <SocialButton />
        </div>
      </div>
      <div className="w-full mt-12 md:grid grid-cols-3 gap-x-12">
        <div className=" h-32 group rounded-md bg-secondary col-span-1 flex justify-center items-center flex-col py-12 gap-y-4">
          <BalanceWallet totalPosiBalance={balance?.totalPosiBalance} />
        </div>
        <div className="h-72 mt-12 md:mt-0  w-full  col-span-2">
          <LineChart data={fakeDataLineChart} showLabel={false} />
        </div>
      </div>

      <div className="w-full mt-12 md:grid grid-cols-3 gap-x-12">
        <div className="h-80 group rounded-md bg-secondary col-span-1 flex justify-center items-center flex-col py-12 gap-y-4">
          <div className="w-72 h-72">
            <DoughnutChart data={dataDoughnutWalletChart} />
          </div>
        </div>
        <div className="h-80 mt-12 md:mt-0  w-full  col-span-2">
          <LineChart data={fakeDataLineChart} showLabel={false} />
        </div>
      </div>
    </main>
  )
}
