import React from 'react'

type Props = {}

const MarketplaceStats = (props: Props) => {
  return (
    <div className="mb-20 flex space-x-2 text-center">
      <div className="left rounded-xl border-2 border-solid border-[#3A3847] py-3 px-8 lg:py-5 lg:px-14">
        <p className="font-bold md:text-2xl">128k</p>
        <span className="text-xs font-bold uppercase text-[#6c697a]">
          Gamers
        </span>
      </div>
      <div className="center rounded-xl border-2 border-solid border-[#3A3847] py-3 px-8 lg:py-5 lg:px-14">
        <p className="font-bold md:text-2xl">896k</p>
        <span className="text-xs font-bold uppercase text-[#6c697a]">
          Cards
        </span>
      </div>
      <div className="right rounded-xl border-2 border-solid border-[#3A3847] py-3 px-8 lg:py-5 lg:px-14">
        <p className="font-bold md:text-2xl">84k</p>
        <span className="text-xs font-bold uppercase text-[#6c697a]">
          Owners
        </span>
      </div>
    </div>
  )
}

export default MarketplaceStats
