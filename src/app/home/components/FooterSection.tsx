'use client'

import { Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from './data/socialLinksData';

export default function FooterSection() {
    return (
        <footer className="py-12 mt-14">
            <div className="mx-5 xs:mx-10 sm:mx-14 md:mx-24 lg:mx-44 2xl:mx-72">
                <div className="border-t border-gray-100 pt-8 pb-4">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">

                        <div>
                            <div className="text-secondary text-center md:text-left">
                                <p><Copyright className='inline-block mb-1' width={18} /> 2025 Leonardo Ferreira.</p>
                                <p>Todos os direitos reservados.</p>
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="flex items-center gap-2 border border-gray-100 rounded-md px-3 py-2 font-spaceGrotesk text-secondary text-lg"
                                >
                                    <Image
                                        src="/img/icons/arrow-up.svg"
                                        alt="Seta para cima"
                                        className="w-6 h-6"
                                        loading="lazy"
                                        width={24}
                                        height={24}
                                    />
                                    Voltar ao topo
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row items-start gap-6">
                            {socialLinks.map(({ href, src, alt, label }, index) => (
                                <Link 
                                    key={index} 
                                    href={href} 
                                    className="text-secondary flex items-center gap-1" 
                                    aria-label={label} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Image 
                                        src={src}
                                        alt={alt}
                                        className="w-7 h-7"
                                        loading="lazy"
                                        width={24}
                                        height={24}
                                    />
                                    <span>{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
