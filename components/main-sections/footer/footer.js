export default function Footer() {
    return (
        <div className="w-full min-h-24 lg:min-h-28 p-4 flex justify-center">
            {/* desktop */}
            <div className="hidden lg:flex flex-row gap-8 justify-center text-sm">
                <div className="flex flex-col justify-end">
                    <span className="font-semibold text-emerald-400">2025 nathant.dev</span>
                </div>

                <div className="flex flex-col justify-end"><span>⚈</span></div>

                <div className="flex flex-col justify-end">
                    <span className="underline hover:text-blue-500">    
                        <a href="https://github.com/nathvnt" target="_blank">https://github.com/nathvnt</a>
                    </span>
                </div>

                <div className="flex flex-col justify-end"><span>⚈</span></div>

                <div className="flex flex-col justify-end">
                    <span className="underline hover:text-blue-500">    
                        <a href="https://housewarmth.com/" target="_blank">https://housewarmth.com/</a>
                    </span>
                </div>

                <div className="flex flex-col justify-end"><span>⚈</span></div>

                <div className="flex flex-col justify-end">
                    <span className="underline hover:text-blue-500">    
                        <a href="https://ipflux.io/" target="_blank">https://ipflux.io/</a>
                    </span>
                </div>
            </div>

            {/* mobile */}
            <div className="flex lg:hidden flex-row gap-8 justify-center text-xs">
                <div className="flex flex-col justify-end gap-2">
                    <span className="font-semibold text-emerald-400">2025 nathant.dev</span>

                    <span className="underline hover:text-blue-500">    
                        <a href="https://github.com/nathvnt" target="_blank">https://github.com/nathvnt</a>
                    </span>
                </div>

                <div className="flex flex-col justify-end gap-2">
                    <span className="underline hover:text-blue-500">    
                        <a href="https://ipflux.io/" target="_blank">https://ipflux.io/</a>
                    </span>

                    <span className="underline hover:text-blue-500">    
                        <a href="https://housewarmth.com/" target="_blank">https://housewarmth.com/</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
