import Link from "next/link";


export default function Footer() {
    return (
        <div className="bg-stone-100 border-b border-white/10 justify-center gap-8 flex p-3">
            <Link
                href="https://www.linkedin.com/in/nick-ahlers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-emerald-500 transition-colors duration-200"
                aria-label="GitHub"
            >
                LinkedIn
            </Link>

             <Link
                href="https://jobsandinflation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-emerald-500 transition-colors duration-200"
                aria-label="GitHub"
            >
                Economic Outlook
            </Link>
        </div>
    )
}