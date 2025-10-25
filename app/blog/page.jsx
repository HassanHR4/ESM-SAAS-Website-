import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const blogs = [
    {
        id: 1,
        title: "Best School Management System in Pakistan",
        desc: "This blog outlines why eSM software is the ideal choice for schools, colleges, and institutions looking to simplify their operations, improve productivity, and provide better learning outcomes.",
        link: "/blog/blog1",
    },
    {
        id: 2,
        title: "Transforming Education in the Digital Era",
        desc: "From managing attendance and fees to ensuring smooth communication with parents. This is where the best school management system comes in as an all-in-one solution to automate school operations.",
        link: "/blog/blog2",
    },
]
const blogPage = () => {
    return (
        <Head>
            <title>Our Blogs</title>
            <meta
                name="description"
                content="Get in touch with the ESM Software team for inquiries, support, or more information about our products and services."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>,
        <div className='bg-gray-50'>
            <Header />

            <div
                className="relative bg-gray-50 h-[500px] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/images/blog-bg.webp')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >

                {/* Content */}
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
                    <p className="text-base md:text-lg max-w-2xl mx-auto">
                        {/* Optional subtitle text here */}
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[#0361A6] mb-4">Our Blogs</h1>
                </div>

                {/* Blog Cards */}
                <div className="flex flex-wrap justify-center gap-6 items-stretch">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="border border-gray-200 rounded-lg shadow-sm w-[300px] overflow-hidden bg-white hover:shadow-md transition flex flex-col"
                        >
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-[#0361A6] mb-3">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-700 text-justify mb-4 flex-grow">
                                    {blog.desc}
                                </p>
                                <Link
                                    href={blog.link}
                                    className="font-bold text-[#F1AD1D] hover:underline mt-auto"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default blogPage