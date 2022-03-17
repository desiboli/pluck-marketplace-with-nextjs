type Props = {}

const Header = (props: Props) => {
  const handleClick = () => {
    console.log('Connect metamask wallet!')
  }

  return (
    <header className="flex min-h-[100px] w-full items-center justify-end px-10">
      <button
        onClick={handleClick}
        className="h-11 rounded-full bg-[#5333ED] py-2 px-8 text-xs font-bold uppercase text-white hover:bg-[#5233ed9f]"
      >
        Connect wallet
      </button>
    </header>
  )
}

export default Header
