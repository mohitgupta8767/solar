import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"

const Footer = () => {
    return (
        <footer className="text-center text-gray-500 text-sm">
            <div className="flex mt-2 mb-2 justify-center" >
                <a href="https://www.facebook.com/AdaniOnline" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={20} className="mr-4" fill="#0f7ba9" />
                </a>

                <a href="https://x.com/AdaniAILabs" target="_blank" rel="noopener noreferrer">
                    <RiTwitterXFill size={20} className="mr-4" fill="#0f7ba9" />
                </a>

                <a href="https://www.linkedin.com/company/adani-ai-labs/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} className="mr-4" fill="#0f7ba9" />
                </a>

                <a href="https://www.instagram.com/adanionline/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} className="mr-4" fill="#0f7ba9" />
                </a>

                <a href="https://www.youtube.com/user/AdaniOnline" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={20} className="mr-4" fill="#0f7ba9" />
                </a>
            </div>
            <p className="mb-2">
                A venture by the Adani Group, Adani AI Labs uses AI and optimization techniques to solve complex business challenges to unlock value and foster unique competitive advantages.
            </p>

            <a
                href="https://www.adani.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mb-2 text-blue-500 underline hover:text-blue-700"
            >https://www.adani.com/</a>

        </footer>
    )
}

export default Footer;