export const Footer = () => {
    return (
        <footer className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center sm:py-12">
            <div className="max-w-2xl text-left">
                <p className="text-zinc-300 leading-relaxed w-[100vw] max-w-prose mt-4">
                    © {new Date().getFullYear()} | Jacob Dement
                </p>
            </div>
        </footer>
                
    );
};