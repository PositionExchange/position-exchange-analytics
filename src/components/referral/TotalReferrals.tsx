import { PositionReferral } from 'api/referral/referral.api.type'
import React from 'react'
import { commasNumberFormat, nFormatter } from 'utils/number'

export default function TotalReferrals({
  toTalReferral,
}: {
  toTalReferral: PositionReferral | undefined
}) {
  return (
    <div className=" md:grid-cols-5  md:dark:bg-secondary md:grid w-full md:rounded-md  dark:border-0 border ">
      <div className=" dark:bg-secondary col-span-3 md:rounded-none rounded-md  w-full px-6 py-6 ">
        <p className="dark:text-txt-primary text-txt-light-txt-primary  leading-8">
          The Kidz of the metaverse. Built by the community. . Kidzuki starts
          with a collection of 5,555 avatars that give you membership access to
          the Kidz community: a corner of the internet where students...
        </p>
      </div>
      <div className="pt-8 md:mt-0 gap-x-4 md:gap-y-0 flex  md:col-span-2  grid-cols-2 md:grid md:gap-x-6 md:px-6 lg:mx-12 md:py-6">
        <div className=" flex-1 px-2 py-2  md:py-6 lg:py-8 flex flex-col border rounded-md dark:bg-secondary  dark:border-waterloo  items-center justify-center ">
          <p className=" px-2 md:px-6 text-xs lg:text-base dark:text-txt-primary text-txt-light-secondary text-center  ">
            Total Referrals
          </p>
          <p className="mt-3 font-medium text-tiny-xs lg:text-lg dark:text-txt-primary text-txt-light-txt-primary text-center">
            {commasNumberFormat(toTalReferral?.totalReferrals || 0)}
          </p>
        </div>
        <div className="flex-1 px-2 py-8  md:py-6 lg:py-8 flex flex-col border rounded-md dark:bg-secondary  dark:border-waterloo items-center justify-center">
          <p className=" px-2 md:px-6  text-xs lg:text-base dark:text-txt-primary text-txt-light-secondary text-center   ">
            Total referral commission
          </p>
          <p className="mt-3 font-medium  text-tiny-xs lg:text-lg dark:text-txt-primary text-txt-light-txt-primary text-center">
            {nFormatter(toTalReferral?.totalReferralCommissions || 0, 3)}
          </p>
        </div>
      </div>
    </div>
  )
}
