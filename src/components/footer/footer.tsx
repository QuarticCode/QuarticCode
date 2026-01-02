import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black dark:text-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                <div className="col-span-1 lg:col-span-1 space-y-4">
                    <a href="#" className="flex items-center gap-2 group">
                        <Image src={'/logo.svg'} width={80} height={80} alt="logo image"/>
                        <span className="text-xl font-semibold tracking-tight ">QuarticCode</span>
                    </a>
                    <p className="text-sm  leading-relaxed max-w-xs">
                        We are a group of developers ready to make all your ideas possible and update your business.
                    </p>
                </div>

                <div className="col-span-1 space-y-6">
                    <h3 className="text-sm font-semibold  uppercase tracking-wider">Contact</h3>
                    <ul className="space-y-4">
                        <li className="group flex items-start gap-3">
                            <div className="mt-1 group-hover:text-[#cc0000] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <a href="mailto:hello@brand.com" target="_blank" className="text-sm hover:text-[#cc0000] font-medium transition-colors hover-underline-animation">
                                    quarticcode@gmail.com
                                </a>
                                <p className="text-xs">Direct support and inquiries</p>
                            </div>
                        </li>

                        <li className="group flex items-start gap-3">
                            <div className="mt-1 group-hover:text-[#0088cc] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m22 2-7 20-4-9-9-4Z"/>
                                    <path d="M22 2 11 13"/>
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <a href="https://t.me/username" target="_blank" className="text-sm  hover:text-[#0088cc] font-medium transition-colors hover-underline-animation">
                                    @quartic_code
                                </a>
                                <p className="text-xs ">Join our community</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1 space-y-6">
                    <h3 className="text-sm font-semibold  uppercase tracking-wider">Development</h3>
                    <ul className="space-y-4">
                        <li className="group flex items-start gap-3">
                            <div className="mt-1  group-hover:text-black dark:group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <a href="https://github.com/QuarticCode" target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-black dark:hover:text-white font-medium transition-colors hover-underline-animation">
                                    GitHub Account
                                </a>
                            </div>
                        </li>
                        
                        <li className="group flex items-start gap-3">
                            <div className="mt-1  group- transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <a href="#" className="text-sm   font-medium transition-colors hover-underline-animation">
                                    Blog
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1 space-y-6">
                    <h3 className="text-sm font-semibold  uppercase tracking-wider">Legal</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="text-sm   transition-colors">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm   transition-colors">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm   transition-colors">Cookie Settings</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm ">
                    &copy; 2026 QuarticCode. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="  transition-colors" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                    </a>
                    <a href="#" className="  transition-colors" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}
