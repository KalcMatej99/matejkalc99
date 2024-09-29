import image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
    <>
        <header className="full-container py-10">
            <nav className="space-x-5 flex">
                <Link href="/" className="hover:bg-gray-400 rounded py-1 px-2">
                    Home
                </Link>
                <Link href="#projects" className="hover:bg-gray-400 rounded py-1 px-2">
                    Projects
                </Link>
                <Link href="mailto:matejkalc@gmail.com" className="hover:bg-gray-400 rounded py-1 px-2">
                    Contact me
                </Link>
            </nav>
            <hr className="mt-4 opacity-20" />
        </header>
    </>
    )
}