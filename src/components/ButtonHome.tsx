import Link from "next/link";

function ButtonHome() {
  return (
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 font-medium">
          &larr; Kembali ke Home
      </Link>
  )
}

export default ButtonHome