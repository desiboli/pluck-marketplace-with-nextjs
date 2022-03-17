import Image from 'next/image'
import nft from '../assets/card_plastic 1.png'

type Props = {}

const NftCard = (props: Props) => {
  return (
    <div className="inline-block cursor-pointer rounded-xl bg-[#12101F] p-6 hover:bg-[#1B1829]">
      <div className="mb-6 block">
        <Image src={nft} height={276} width={184} />
      </div>

      <p className="font-bold">0.01 ETH</p>
      <span className="text-xs text-[#B4B2C2]">$50.00</span>
    </div>
  )
}

export default NftCard
