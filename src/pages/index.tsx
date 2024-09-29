import Link from 'next/link';
import Tech from '../components/Tech';
import Repo from '../components/Repository/Repo';
import Edu from '../components/Education';
import Head from 'next/head';

export default function HomePage() {
    return  (
    <>
      <Head>
            <link rel="shortcut icon" href="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" />
            <title>Home - Matej Kalc</title>
            <meta name="description" content="Data scientist" />
            <meta name="keywords" content="Matej Kalc, ML, AI, Data science" />
            <meta name="theme-color" content="#41B883"/>
            <meta property="og:image"content="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg" />
        </Head>

        <main>
        <div className="full-container flex">
            <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-white"><Link href="/">Hi, I'm Matej Kalc</Link></h1>
            <p className="mt-5 font-normal leading-relaxed">
                Data scientist from Triest, Italy.
                <br/>
                I have about 4 years of experience with building machine learning applications.
                <br/>
                Projects I have worked on include computer vision, llm, graph neural networks and more.
                <br/>
                In my free time a ski and train calisthenics.
            </p>
            </div>
        </div>
        
        <div className="full-container mt-10">
            <Tech/>
        </div>

        <div className="full-container mt-20">
            <Repo/>
        </div>

        <div className="full-container mt-10">
            <Edu/>
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
