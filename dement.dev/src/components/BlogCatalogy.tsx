

export const BlogCatalogy = () => {
    type Post = {
        title: string;
        description: string;
        date: string;
        path: string;
    }
    const posts = [
        {
            title: "Railway Functions - The fastest way to deploy your serverless functions",
            description: "A look at how to use Railway Functions in your project",
            date: "2023-01-01",
            path: "/blog/railway"
        },
    ]


    return (
        <div id="blog-catalogy" className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center py-12">
            <div className="max-w-2xl text-left justify-center pb-4 border-b border-gray-200 dark:border-zinc-700">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 transition-colors dark:text-zinc-50">
                    Blog
                </h1>
                <p className="dark:text-zinc-300 text-gray-600 leading-relaxed max-w-prose italic">
                    Welcome to my blog! This is still under development, but in the future I will write blog posts here!
                </p>
            </div>
            <div className="flex flex-col items-start gap-4 mt-4">
                {posts.map((post) => (
                    <div key={post.path} className="flex flex-col items-start gap-4 border-b border-gray-200 dark:border-zinc-700 pb-4 max-w-prose">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-50">
                                <a href={post.path} className="transition-colors hover:text-gray-700 dark:hover:text-zinc-300">
                                    {post.title}
                                </a>
                            </h2>
                            <p className="dark:text-zinc-300 text-gray-600 leading-relaxed max-w-prose">
                                {post.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-500 dark:text-zinc-400">
                                {post.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}