import { useEffect, useState } from "react";

export const BlogCatalogy = () => {

    const [viewCountLoaded, setViewCountLoaded] = useState(false);

    const [posts, setPosts] = useState<Post[]>(
        [
            {
                title: "Railway Functions Blew Me Away.",
                description: "A look at Railway functions - the most convenient way I've seen to deploy serverless functions & how I implemented a blog post view counter using Railway functions.",
                date: "03/07/2025",
                path: "/blog/railway",
                viewCountURL: "https://function-bun-production-cbf5.up.railway.app/",
                postId: 1,
                viewCount: 0,
            },
        ]
    );


    type Post = {
        title: string;
        description: string;
        date: string;
        path: string;
        viewCountURL: string;
        postId: number;
        viewCount: number;
    }

    useEffect(() => {
        for (const post of posts) {
            fetch(`${post.viewCountURL}api/views`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("data:", data);
                    setPosts((prevPosts) => {
                        const updatedPosts = prevPosts.map((prevPost) => {
                            console.log(prevPost.postId);
                            if (prevPost.postId === post.postId) {
                                console.log("prevPost.postId:", prevPost.postId);
                                console.log("post.postId:", post.postId);
                                console.log("data.view_count:", data[prevPost.postId - 1].view_count);
                                return {
                                    ...prevPost,
                                    viewCount: data[prevPost.postId - 1].view_count,
                                };
                            }
                            return prevPost;
                        });
                        setViewCountLoaded(true);
                        return updatedPosts;
                    });
                });
        }
    }, []);

    const incrementViewCount = async (post: Post) => {
        const response = await fetch(`https://function-bun-production-cbf5.up.railway.app/api/views/${post.postId}`, {
            method: 'POST'
          });;
        const data = await response.json();
        console.log(data);
        setPosts((prevPosts) => {
            const updatedPosts = prevPosts.map((prevPost) => {
                if (prevPost.path === post.path) {
                    return {
                        ...prevPost,
                        viewCount: data.view_count,
                    };
                }
                return prevPost;
            });
            return updatedPosts;
        });
    };



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
                                <a href="/blog/railway" onClick={() => incrementViewCount(post)} className="transition-colors hover:text-gray-700 dark:hover:text-zinc-300">
                                    {post.title}
                                </a>
                            </h2>
                            <p className="dark:text-zinc-300 text-gray-600 leading-relaxed max-w-prose">
                                {post.description}
                            </p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-sm text-gray-500 dark:text-zinc-400">
                                {post.date}
                            </p>
                            <div className="flex items-center gap-1 text-gray-500 dark:text-zinc-400">
                                <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                                {!viewCountLoaded ? (
                                    <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                    <p className="text-sm text-gray-500 dark:text-zinc-400">
                                        {post.viewCount}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}