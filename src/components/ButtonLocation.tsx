import Link from "next/link"

function ButtonLocation() {
  return (
    <Link href="/locations">
        <button
        className="px-8 py-3 rounded-full font-extrabold text-xl transition-all duration-200 
                    bg-blue-400 text-white shadow-lg hover:bg-blue-500 active:bg-blue-600"
        >
        Locations
        </button>
    </Link>
  )
}

export default ButtonLocation