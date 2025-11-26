import {
    Plus,
    LogOut,
    Moon,
    Sun,
    Calendar,
    Users,
    BarChart3,
    Gift,
    Shield,
    QrCode,
    Home,
    Edit,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10); // adjust threshold if needed
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navClass = `
      fixed top-0 left-0 w-full z-50
      transition-all duration-500
      ${scrolled ? "bg-white/40 dark:bg-gray-900/40 backdrop-blur" : "bg-transparent"}
    `;


    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                            <div onClick={() => {}} className="flex items-center space-x-3 cursor-pointer">
                                {/* <Calendar className="w-8 h-8 text-rose-500" /> */}
                                <img src='/logo irma.png' className='h-[30px] w-auto' />
                                <span className="text-[18px] font-medium text-gray-900 dark:text-white">
                                   IRMA
                                </span>
                            </div>
                        
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => {}}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${location.pathname.includes('dashboard') && 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'}  font-medium transition-colors`}
                            >
                                <Home className="w-4 h-4" />
                                <span>A propos</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => {}}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${location.pathname.includes('dashboard') && 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'}  font-medium transition-colors`}
                            >
                                <Home className="w-4 h-4" />
                                <span>Programmes</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => {}}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${location.pathname.includes('dashboard') && 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'}  font-medium transition-colors`}
                            >
                                <Home className="w-4 h-4" />
                                <span>S'inscrire</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => {}}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${location.pathname.includes('dashboard') && 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'}  font-medium transition-colors`}
                            >
                                <Home className="w-4 h-4" />
                                <span>Contact</span>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}