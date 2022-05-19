import Image from 'next/image'
import React from 'react'

const Button = (props: any) => {
  const { image } = props
  
  return (
    <div className="flex items-center py-2 px-6 bg-primary rounded-[30px] ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#1B2431]">
      <Image
        src={image}
        alt="logo"
        width={20}
        height={20}
        layout="fixed"
      />
      <div className="ml-2">Add</div>
    </div>
  )
}

export default function SocialButton() {
  return (
    <div className="flex flex-row gap-x-4 py-2 px-4 mt-4">
      <Button image={'/twitter-logo.svg'} />
      <Button image={'/github_logo.svg'} />
      <Button image={'/mail-logo.svg'} />
    </div>
  )
}
