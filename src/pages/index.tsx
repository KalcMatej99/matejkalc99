import Link from 'next/link';
import Tech from '../components/Tech';
import Repo from '../components/Repository/Repo';
import Edu from '../components/Education';
import Head from 'next/head';
import linkedinLogo from './../assets/img/linkedin.png';
import githubLogo from './../assets/img/github-mark-white.png';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Home - Matej Kalc</title>
                <meta name="description" content="Data scientist" />
                <meta name="keywords" content="Matej Kalc, ML, AI, Data science" />
                <meta name="theme-color" content="#41B883" />

                <meta name="application-name" content="Matej Kalc" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Matej Kalc" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />

                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://matejkalc.com" />
                <meta name="twitter:title" content="Matej Kalc" />
                <meta name="twitter:description" content="Matej Kalc personal website" />
                <meta name="twitter:image" content="https://matejkalc.com/icons/android-chrome-192x192.png" />
                <meta name="twitter:creator" content="@DavidWShadow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Matej Kalc" />
                <meta property="og:description" content="Matej Kalc personal website" />
                <meta property="og:site_name" content="Matej Kalc" />
                <meta property="og:url" content="https://matejkalc.com" />
                <meta property="og:image" content="https://matejkalc.com/icons/apple-touch-icon.png" />
            </Head>

            <main>
                <div className="full-container flex">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-semibold text-white"><Link href="/">Hi, I'm Matej Kalc!</Link></h1>
                        <p className="mt-5 font-normal leading-relaxed">
                            I'm a data scientist from Trieste, Italy, with 4 years of experience in <b>machine learning</b>,
                            specializing in time series and graph neural networks. I've worked on projects like
                            insurance fraud detection and traffic prediction. Outside of work, I enjoy skiing and calisthenics,
                            always looking to challenge myself both physically and mentally.
                            <br />
                            Find me on:
                        </p>
                        <div className="grid grid-cols-2 gap-5 mt-4 sm:gird-cols-3 md:grid-cols-4">
                            <div className="flex space-x-2 text-white items-center overflow-hidden">
                                <Link href="https://www.linkedin.com/in/matej-kalc-8122b5164/" target="_blank" rel="noreferrer">
                                    <Image src={linkedinLogo} width={56} height={56} alt="Python logo" className="flex-shrink-0" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/matej-kalc-8122b5164/" target="_blank" rel="noreferrer">
                                    <span className='lang font-medium'>LinkedIn</span>
                                </Link>
                            </div>
                            <div className="flex space-x-2 text-white items-center overflow-hidden">
                                <Link href="https://github.com/KalcMatej99" target="_blank" rel="noreferrer">
                                    <Image src={githubLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                                </Link>
                                <Link href="https://github.com/KalcMatej99" target="_blank" rel="noreferrer">
                                    <span className='lang font-medium'>Github</span>
                                </Link>
                            </div>
                            <div className="flex space-x-2 text-white items-center overflow-hidden">
                                <Link href="mailto:matejkalc99@protonmail.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} width={28} height={28} />
                                </Link>
                                <Link href="mailto:matejkalc99@protonmail.com" target="_blank" rel="noreferrer">
                                    <span className='lang font-medium'>Mail</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="full-container mt-10">
                    <Tech />
                </div>

                <div className="full-container mt-10">
                    <Repo />
                </div>

                <div className="full-container mt-10">
                    <Edu />
                </div>
            </main>

            <footer className="w-full bottom-0 text-white bg-gray-900 bg-opacity-50 flex justify-center">
                <div className="py-3 px-3 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="text-sm font-semibold sm:ml-2 sm:pl-4 sm:mt-1 mt-4">
                        © 2024 Matej Kalc
                    </p>
                </div>
            </footer>
        </>
    )
} 
