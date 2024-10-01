import pythonLogo from '../../assets/img/python-logo-only.png';
import torchLogo from '../../assets/img/pytorch-icon.png';
import numpyLogo from '../../assets/img/numpylogoicon.png';
import hfLogo from '../../assets/img/hf-logo.png';
import azureLogo from '../../assets/img/azure.png';
import awsLogo from '../../assets/img/aws.png';
import dbLogo from '../../assets/img/databricks.png';
import tfLogo from '../../assets/img/TensorFlow.png';
import tsLogo from '../../assets/img/ts.png';
import Image from 'next/image';

export default function Repo() {
    return(
        <>
            <section>
                <h2 id="projects" className="font-semibold text-3xl text-white" >Projects</h2>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
                        <a href="https://repozitorij.uni-lj.si/Dokument.php?id=191998&lang=slv" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">Automobile insurance fraud detection</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    A machine learning project that detects automobile insurance fraud using graph neural networks.
                                    The model is evaluated on real word data provided by one of the ten biggest insurance companies in the world.
                                </p>
                                <div className="mt-1 flex space-x-2">
                                    <Image src={pythonLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                    <Image src={torchLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
                        <a href="https://github.com/KalcMatej99/TrafficPrediction_MLG_Project" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">Traffic prediction</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    Traffic forecasting using temporal graph neural networks.
                                    The model is evaluated on real word data of an european country.
                                </p>
                                <div className="mt-1 flex space-x-2">
                                    <Image src={pythonLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                    <Image src={torchLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
                        <a href="https://github.com/KalcMatej99/NLP-tripleM" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">Word sense disambiguation</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    An NLP project that disambiguates words based on context in Slovenian using SloBERTa.
                                </p>
                                <div className="mt-1 flex space-x-2">
                                    <Image src={pythonLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                    <Image src={hfLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
                        <a href="https://repozitorij.uni-lj.si/Dokument.php?id=146876&lang=slv" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">CTR prediction</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    During a Data science competition my team and I developed various CTR prediction models.
                                    We evaluated them on the same data set provided by Outbrain.
                                </p>
                                <div className="mt-1 flex space-x-2">
                                    <Image src={pythonLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                    <Image src={tfLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
                        <a href="https://kalcmatej99.github.io/PathFinderVisualizer/" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">Path finding algorithms</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    Developed website for visializing path finding algorithms, such as A* and Dijkstra.
                                </p>
                                <div className="mt-1 flex space-x-2">
                                    <Image src={tsLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
                        <a href="https://brdina.org" className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-semibold">SK Brdina website</span>
                                </div>
                                <p className="text-white overflow-hidden font-sans">
                                    Developed website for the ski club Brdina.
                                </p>
                                <div className="mt-1 flex space-x-2">
                                    <Image src={tsLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0  h-7 w-7" />
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
            </section>
        </>
    )
}