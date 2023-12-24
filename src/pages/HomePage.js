import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import { TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

import Bull from './assets/WAGGARRARI.png'
import SmallBull from './assets/WAGGARRARI-small.png'
import empty from './assets/emptytrack.jpeg'
import './Home.css'

import { Button } from 'primereact/button';
import {Card} from 'primereact/card';
import { Message } from 'primereact/message';

import sound from './sound/reving.mp3'

const HomePage = () => {


    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });


    const events = [
        { status: 'Phase: 1', date: '15/10/2020 10:30', icon: 'pi pi-user', color: '#9C27B0', image: 'game-controller.jpg', details:"Launch 5000 HODLers" },
        { status: 'Phase: 2', date: '15/10/2020 14:00', icon: 'pi pi-cog pi-spin', color: '#673AB7' , details:"50 000 CEX (centralised exchange) listing" },
        { status: 'Phase: 3', date: '15/10/2020 16:15', icon: 'pi pi-money-bill', color: '#FF9800', details:"Game drop community growth marketing"  },
        { status: 'Phase: 4', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', details:"100 000 tier 1 listing"  },
    ];

    return (
        <div >   
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Broken+Fax"></link>

            <section className='ms:w-full sm:w-full ' id='home' >
                <div className={`background-image`} style={{ fontFamily: 'Silkscreen, serif', width:`${isMobile ? "130%":"100%"}`}}>
                <div style={{ height: isMobile ? '35%' : '25%' }}></div>
                <div className='flex align-items-center justify-content-center'>
                    <span className={`block text-${isMobile ? '2xl' : '5xl'} font-bold mb-1`}>It's the Bull ... So</span>
                </div>
                <div className='flex align-items-center justify-content-center'>
                    <div className={`text-${isMobile ? '2xl' : '5xl'} text-primary-800 font-bold mb-3`}>We all gonna get a Ferrari</div>
                </div>
                <div className='flex align-items-center justify-content-center'>
                    <div className={`text-${isMobile ? '2xl' : '5xl'} text-red font-bold mb-3`}>$ WAGGARARI </div>
                </div>
                <div className='flex align-items-center justify-content-center'>
                    <audio id='audioToPlay'>
                    <source src={sound} type="audio/mpeg"/>
                    </audio>
                </div>
                <div style={{ height: isMobile ? '5px' : '10px' }}></div>
                <div className='flex align-items-center justify-content-center gap-'>Powered By</div>
                <div style={{ height: isMobile ? '30px' : '20px' }}></div>
                <div className='flex align-items-center justify-content-center gap-4'>
                    { isMobile && (

                        <div className=''>
                           
                            <Message
                            className='block mb-3 w-full'
                            style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                            content={<div className="flex align-items-center">
                            <img alt="logo" src='https://cryptologos.cc/logos/ethereum-eth-logo.png?v=002' width="32" /> <div>ethereum</div> </div>}
                            />
                            <Message
                            className='block mb-3 w-full'
                            style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                            content={<div className="flex align-items-center"><img alt="logo" src='https://cryptologos.cc/logos/chainlink-link-logo.png?v=029' width="32" /><div>chainlink</div></div>
                            }/>
                            <Message
                            className='block mb-3 w-full'
                            style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                            content={<div className="flex align-items-center"><img alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png' width="32" /><div>metamask</div></div>
                            }/>
                        </div>
                    )}
                    {isTablet && (
                        <div className='flex align-items-center justify-content-center gap-4'>
                        <Message
                        style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                        content={<div className="flex align-items-center">
                            <img alt="logo" src='https://cryptologos.cc/logos/ethereum-eth-logo.png?v=002' width="32" /><div className="ml-2">Ethereum</div></div>}
                        />
                        
                        <Message
                        style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                        content={<div className="flex align-items-center"><img alt="logo" src='https://cryptologos.cc/logos/chainlink-link-logo.png?v=029' width="32" /><div className="ml-2">Chainlink</div></div>
                        }/>
                        <Message
                        style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                        content={<div className="flex align-items-center"><img alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png' width="32" /><div className="ml-2">MetaMask</div></div>
                        }/>
                    </div>
                    )}
                    {isDesktop && (
                        <div className='flex align-items-center justify-content-center gap-4'>
                            <Message
                            style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                            content={<div className="flex align-items-center">
                                <img alt="logo" src='https://cryptologos.cc/logos/ethereum-eth-logo.png?v=002' width="32" /><div className="ml-2">Ethereum</div></div>}
                            />
                            <Message
                            style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                            content={<div className="flex align-items-center"><img alt="logo" src='https://cryptologos.cc/logos/chainlink-link-logo.png?v=029' width="32" /><div className="ml-2">Chainlink</div></div>
                            }/>
                            <Message
                            style={{border: 'solid #696cff',borderWidth: '0 0 0 6px',color: '#696cff'}}
                            content={<div className="flex align-items-center"><img alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png' width="32" /><div className="ml-2">MetaMask</div></div>
                            }/>
                        </div>
                    )}

                </div>
                    <img src={isMobile ? SmallBull : Bull} alt='' className='BackGround-image' />
                </div>

                <div className={`image-container`} style={{ background: `url(${empty})`, width:`${isMobile ? "130%":"100%"}`}}>
                    <img src={Bull} alt='' className={`image-animation`} />
                </div>
            </section>

            {/* style={{width:`${isMobile ? "125%":"105%"}`}} */}
            <section className='ms:w-max sm:w-full ' id='about' >
                <div style={{ fontFamily:"Silkscreen, serif", width:`${isMobile ? "130%":"100%"}` }}>
                <div className="surface-0 text-800" style={{background:'radial-gradient(circle at 10% 20%, rgb(221, 49, 49) 0%, rgb(119, 0, 0) 90%)'}}>
                    <div className={`flex align-items-center justify-content-center ${isMobile ? 'text-1xl' : 'text-4xl'} font-bold mb-1 text-white`}>
                    First Wagmi then WAGGARARI!
                    </div>

                    <div className={`flex align-items-center justify-content-center ${isMobile ? 'text-1xl' : 'text-4xl'} font-bold mb-1 text-white`}>
                    During the Bear market
                    </div>

                    <div className={`flex align-items-center justify-content-center ${isMobile ? 'text-1xl' : 'text-4xl'} text-primary font-bold mb-3 text-white`}>
                    Ferrari began accepting Crypto payments!
                    </div>

                    <div className="flex align-items-center justify-content-center">
                    <div className={`flex flex-row flex-wrap gap-${isMobile ? '2' : '3'} col-9`}>
                        {/* <Card> */}
                        <TwitterTweetEmbed tweetId={'1713961718974693723'} />
                        {/* </Card> */}
                        {/* <Card> */}
                        <TwitterTweetEmbed tweetId={'1713098800644960694'} />
                        {/* </Card> */}
                        {/* <Card> */}
                        <TwitterTweetEmbed tweetId={'1713505145806278909'} />
                        {/* </Card> */}
                    </div>
                    </div>
                </div>
                </div>
            </section>
    
            <Element name="how-to-buy">
                <section className='ms:w-full sm:w-full' >
                    <div style={{ background: 'radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)', width:`${isMobile ? "130%":"100%"}`, fontFamily: 'Silkscreen, serif'}}>
                    <div>
                        <div className={`flex align-items-center justify-content-center ${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-1 text-white`}>
                        How to buy $WAGGARARI
                        </div>

                        <div className="flex align-items-center justify-content-center">
                        <div className={`flex flex-row flex-wrap gap-${isMobile ? '4' : '6'}`}>
                            {/* <Card className={`flex justify-content-center ${isMobile ? 'w-full' : 'w-50'}`}> */}
                            <iframe
                                className="wuksD5"
                                title="Embedded Content"
                                name="htmlComp-iframe"
                                width={isMobile ? '110%' : '45vw'}
                                height="100%"
                                allow="fullscreen"
                                data-src=""
                                src="https://www-pepe-vip.filesusr.com/html/1f3f2b_d97dc6210ef477f566aeee9b168830b1.html"
                                style={{ width: isMobile ? '105%' : '45vw', height: '500px' }}
                            ></iframe>
                            {/* </Card> */}
                            <div className={`flex flex-column row-gap-5 pt-5 ${isMobile ? 'w-full' : 'w-50'}`}>
                            <Message
                                style={{
                                border: 'solid #696cff',
                                borderWidth: '0 0 0 6px',
                                color: '#696cff',
                                fontFamily: 'Silkscreen, serif'
                                }}
                                className="border-primary w-full justify-content-start bg-primary-900 text-white"
                                severity="info"
                                content={
                                <div className="flex align-items-center">
                                    <img alt="logo" src={Bull} width="32" />
                                    <div className="ml-2">create a wallet.</div>
                                </div>
                                }
                            />
                            <Message
                                style={{
                                border: 'solid #696cff',
                                borderWidth: '0 0 0 6px',
                                color: '#696cff',
                                fontFamily: 'Silkscreen, serif'
                                }}
                                className="border-primary w-full justify-content-start bg-primary-900 text-white"
                                severity="info"
                                content={
                                <div className="flex align-items-center">
                                    <img alt="logo" src={Bull} width="32" />
                                    <div className="ml-2">get some eth</div>
                                </div>
                                }
                            />
                            <Message
                                style={{
                                border: 'solid #696cff',
                                borderWidth: '0 0 0 6px',
                                color: '#696cff',
                                fontFamily: 'Silkscreen, serif'
                                }}
                                className="border-primary w-full justify-content-start bg-primary-900 text-white"
                                severity="info"
                                content={
                                <div className="flex align-items-center">
                                    <img alt="logo" src={Bull} width="32" />
                                    <div className="ml-2">go to uniswap</div>
                                </div>
                                }
                            />
                            <Message
                                style={{
                                border: 'solid #696cff',
                                borderWidth: '0 0 0 6px',
                                color: '#696cff',
                                fontFamily: 'Silkscreen, serif'
                                }}
                                className="border-primary w-full justify-content-start bg-primary-900 text-white"
                                severity="info"
                                content={
                                <div className="flex align-items-center">
                                    <img alt="logo" src={Bull} width="32" />
                                    <div className="ml-2">switch eth for $WAGGARARI.</div>
                                </div>
                                }
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div style={{height:"20px"}}></div>
                    </div>
                </section>
            </Element>

            <section className='ms:w-full sm:w-full' style={{background:'radial-gradient(circle at 10% 20%, rgb(221, 49, 49) 0%, rgb(119, 0, 0) 90%)', fontFamily: 'Silkscreen, serif'}} id='roadmap'>
                <div
                className={`flexflex flex-row flex-wrap gap-${isMobile ? '2' : '3'} ` }
                style={{ background:'radial-gradient(circle at 10% 20%, rgb(221, 49, 49) 0%, rgb(119, 0, 0) 90%)', height: `${isMobile ? '190vh' : '140vh'}`, width:`${isMobile ? "130%":"100%"}`, height:`${isTablet && ("270vh")}` }}
                >
                    
                <div className="flex align-items-center justify-content-center">
                    <div className={`text-${isMobile ? '2xl' : '4xl'} text-primary-100 font-bold mb-3`}>Road Map For WAGGARARI</div>
                </div>
                <div style={{height:`${isDesktop ? '120' : '4'} px`}}></div>
                <div className="flex align-items-center justify-content-center" >
                    <div className={`flex flex-row flex-wrap gap-${isMobile ? '1' : '2'} col-9`}>
                    {events.map((item, index) => (
                        <React.Fragment key={index}>
                        <Card
                            title={item.status}
                            className={`w-${isMobile ? '23' : '14'}rem h-${isMobile ? '10' : '20'}rem`}
                            style={{ background: 'radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)', color: 'whitesmoke' ,fontFamily: 'Silkscreen, serif' }}
                        >
                            <p style={{ fontFamily: 'Silkscreen, serif' }}>{item.details}</p>
                        </Card>
                        </React.Fragment>
                    ))}
                    </div>
                </div>
                </div>
            </section>

            <section className='ms:w-full sm:w-full' id='tokenomics'>
                <div style={{ background: 'radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)', fontFamily:"Silkscreen, serif", width:`${isMobile ? "130%":"100%"}` }}>
                <div className="flex align-items-center justify-content-center">
                    <span className={`block text-${isMobile ? '4xl' : '5xl'} font-bold mb-1 text-white`}>TOKENOMICS</span>
                </div>

                <div className="flex flex-column align-items-center justify-content-center">
                    <p className={`block text-${isMobile ? '2xl' : '3xl'} font-bold mb-1 text-white`}>348.1T $WAGGARARI</p>
                    <p className={`block text-${isMobile ? '2xl' : '3xl'} font-bold mb-1 text-white`}>With allocations</p>
                    <p className={`block text-${isMobile ? '2xl' : '3xl'} font-bold mb-1 text-white`}>no taxes</p>
                    <p className={`block text-${isMobile ? '2xl' : '3xl'} font-bold mb-1 text-white`}>no bs</p>
                    <p className={`block text-${isMobile ? '0.4xl' : '3xl'} font-bold mb-1 text-white`}>0x420FcA0121DC2803914500957097f2329</p>
                </div>
                </div>
            </section>

            <section className='ms:w-full sm:w-full' id='disclaimer'>
                <div style={{background: 'radial-gradient(circle at 10% 20%, rgb(221, 49, 49) 0%, rgb(119, 0, 0) 90%)', fontFamily:"Silkscreen, serif", width:`${isMobile ? "130%":"100%"}`}}>
                    <div>                 
                        <div className='flex align-items-center justify-content-center'>
                            <span className="block text-4xl font-bold mb-1 text-green-700">Disclaimer !</span>
                        </div>
    
                        <div className="flex align-items-center justify-content-center">
                            <p className='block font-bold mb-1 text-white text-sm'>$WAGGARARI is a meme coin with no intrinsic value or expectation of financial return</p>
                        </div>
                        <div className="flex align-items-center justify-content-center">
                            <p className='block font-bold mb-1 text-white '>The coin is completely useless and for entertainment purposes only.</p>
                        </div>
                    </div>
                </div>
            </section>
    
            <footer>
            <div className='flex align-items-center justify-content-center'> <p> &copy; 2023 [WAGGARARI] - LiddX labs - All Rights reserved</p> </div>
            </footer>
        </div>
        );
};

export default HomePage;
