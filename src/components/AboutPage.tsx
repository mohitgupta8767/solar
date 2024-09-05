import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"

const AboutPage = () => {
    return (
        <div className="h-[calc(100vh-60px)] pt-2">
            <div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3
                        className="card_title text-xl font-semibold mb-4 cursor-pointer"
                    >
                        Overview
                    </h3>
                    <p>A venture by the Adani Group, Adani AI Labs uses AI and optimization techniques to solve complex business challenges to unlock value and foster unique competitive advantages.</p>

                    <br />
                    <h3 className="card_title text-xl font-semibold mb-4 cursor-pointer">Website</h3>
                    <a
                        href="https://www.adani.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700"
                    >https://www.adani.com/</a>
                    <br />
                    <br />

                    <h3 className="card_title text-xl font-semibold mb-4 cursor-pointer">Headquarters</h3>
                    <p>Kolkata, West Bengal</p>

                    <div className="flex mt-2">
                        <a href="https://www.facebook.com/AdaniOnline" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="mr-4" fill="#0f7ba9"/>
                        </a>

                        <a href="https://x.com/AdaniAILabs" target="_blank" rel="noopener noreferrer">
                            <RiTwitterXFill className="mr-4" fill="#0f7ba9"/>
                        </a>

                        <a href="https://www.linkedin.com/company/adani-ai-labs/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="mr-4" fill="#0f7ba9"/>
                        </a>

                        <a href="https://www.instagram.com/adanionline/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="mr-4" fill="#0f7ba9"/>
                        </a>

                        <a href="https://www.youtube.com/user/AdaniOnline" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="mr-4" fill="#0f7ba9"/>
                        </a>
                    </div>
                </div>


            </div>


        </div>

    )
}

export default AboutPage
