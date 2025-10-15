import Link from "next/link"

function ButtonCharacter() {
  return (
    <Link href="/characters">
        <button
            className="px-8 py-3 rounded-full font-extrabold text-xl transition-all duration-200 
                        bg-orange-500 text-white shadow-lg hover:bg-orange-600 active:bg-orange-700"
        >
            Character
        </button>
    </Link>
  )
}

export default ButtonCharacter