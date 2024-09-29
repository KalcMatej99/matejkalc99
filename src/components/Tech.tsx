import Image from 'next/image'
import pythonLogo from './../assets/img/python-logo-only.png';
import torchLogo from './../assets/img/pytorch-icon.png';
import numpyLogo from './../assets/img/numpylogoicon.png';
import hfLogo from './../assets/img/hf-logo.png';
import azureLogo from './../assets/img/azure.png';
import awsLogo from './../assets/img/aws.png';
import dbLogo from './../assets/img/databricks.png';
import tfLogo from './../assets/img/TensorFlow.png';
import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';

export default function Tech() {
    return (
        <>
            <div className="mt-20">
                <div>
                    <h1 className="font-semibold text-3xl text-white">Technologies I use</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4 sm:gird-cols-3 md:grid-cols-4">
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={pythonLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">Python</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={torchLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">Torch</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={tfLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">TensorFlow</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={numpyLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">Numpy</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={hfLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">Transformers</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={azureLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">Azure</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={awsLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">AWS</span>                    
                    </div>
                    <div className="flex space-x-2 text-white items-center overflow-hidden">
                        <Image src={dbLogo} width={28} height={28} alt="Python logo" className="flex-shrink-0" />
                        <span className="lang font-medium">Databricks</span>                    
                    </div>
                </div>
            </div>

        </>
    )
}