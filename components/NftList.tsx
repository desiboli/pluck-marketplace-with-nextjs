import NftCard from './NftCard'

type Props = {}

const NftList = (props: Props) => {
  const n = 20

  return (
    <div className="w-full">
      <form className="mb-10 space-y-4 text-gray-700">
        <div className="-mx-2 flex flex-wrap space-y-4 md:space-y-0">
          <div className="w-full px-2 md:w-2/4">
            <label className="invisible" htmlFor="formGridCode_month">
              Month
            </label>
            <input
              className="focus:shadow-outline h-16 w-full rounded-lg border border-[#3A3847] bg-[#0A0817] px-6 text-base text-white
              placeholder-[#6C697A]"
              placeholder="Search for a player"
              type="text"
              id="formGridCode_month"
            />
          </div>
          <div className="w-full px-2 md:w-1/4">
            <label className="invisible" htmlFor="formGridCode_year">
              Year
            </label>
            <div className="relative inline-block w-full text-gray-700">
              <select
                className="focus:shadow-outline h-16 w-full cursor-pointer appearance-none rounded-lg border border-[#3A3847] bg-[#0A0817] px-6 text-base text-white placeholder-[#6C697A]"
                placeholder="Filter on portal"
              >
                <option>Filter on portal</option>
                <option>Fnatic</option>
                <option>Vitality</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/4">
            <label className="invisible" htmlFor="formGridCode_cvc">
              CVC
            </label>
            <div className="relative inline-block w-full text-gray-700">
              <select
                className="focus:shadow-outline h-16 w-full cursor-pointer appearance-none rounded-lg border border-[#3A3847] bg-[#0A0817] px-6 text-base text-white placeholder-[#6C697A]"
                placeholder="Sort: Price Low > High"
              >
                <option>Sort: Price Low {'>'} High</option>
                <option>Recently listed</option>
                <option>Oldest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 md:lg:grid-cols-4 xl:grid-cols-7">
        {[...Array(n)].map((el, index) => (
          <div key={index}>
            <NftCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NftList
