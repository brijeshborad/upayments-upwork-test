import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../configs/config";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const [products, setProducts] = useState<any>([]);
    const [filteredProducts, setFilteredProducts] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const router = useRouter();
    const [search, setSearch] = useState<string>('')
    const [category, setCategory] = useState<string>('')

    const getProducts = useCallback(() => {
        axios.get(`${API_URL}products/`).then((products) => {
            setProducts(products.data);
            setFilteredProducts(products.data);
        })
    }, []);

    const getCategory = useCallback(() => {
        axios.get(`${API_URL}categories/`).then((categories) => {
            setCategories(categories.data);
        })
    }, []);

    const filterData = useCallback(() => {
        let prods = products.filter((item: any) => {
            if (search && category) {
                return item.name.toLowerCase().includes(search.toLowerCase()) && item.category.toLowerCase().includes(category.toLowerCase());
            } else if (search) {
                return item.name.toLowerCase().includes(search.toLowerCase());
            } else if (category) {
                if (item.category) {
                    return item.category.toLowerCase().includes(category.toLowerCase());
                } else if (item.Category) {
                    return item.Category.toLowerCase().includes(category.toLowerCase());
                } else {
                    return false;
                }
            }
            return true
        });
        setFilteredProducts(prods);
    }, [search, category, products])

    useEffect(() => {
        filterData()
    }, [search, category])

    useEffect(() => {
        getProducts()
        getCategory()
    }, [getProducts, getCategory])
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className='min-h-screen bg-mainbg'>
                <a href='/add-products'
                   className='add-product w-10 h-10 p-3 fixed bottom-6 right-6 rounded-full flex items-center justify-center'>
                    <img src="/add.png" alt=""/>
                </a>
                <div className="w-full mx-auto">
                    <div className="header">
                        <div className='w-1/2'>
                            <a href="#" className='text-primary text-3xl font-bold leading-none'>
                                UPayments
                            </a>
                        </div>
                        <div className='w-1/2'>
                            <a href="#" className='register-btn'>
                                <img src="/register.png" className='w-5 mr-2 ' alt="Login/ Register"/>
                                Register
                            </a>
                        </div>
                    </div>
                    <div className='product-details lg:px-12 md:px-8 sm:px-6 px-4'>
                        <div className="flex flex-wrap items-center mb-20">
                            <div className='md:w-8/12 w-full'>
                                <div className="relative">
                                    <input type="text" placeholder='Search'
                                           onKeyUp={(e: any) => setSearch(e.target.value)}
                                           className='w-full pl-10 pr-4 py-3 rounded-2xl border border-primary10'/>
                                    <img src="/search.png"
                                         className='w-5 mr-2 absolute top-1/2 -translate-y-1/2 left-4 '
                                         alt="Login/ Register"/>
                                </div>
                            </div>
                            <div className='md:w-4/12 w-full md:mt-0 mt-3'>
                                <div className="relative flex">
                                    <select value={category} onChange={(e: any) => setCategory(e.target.value)}
                                            className='w-fit px-4 py-3 rounded-2xl border border-primary10 text-primary10 capitalize ml-auto text-lg  leading-none categories-select'
                                            name="" id="">
                                        <option disabled value="">Category</option>
                                        {categories.map((category: any, index: number) => (
                                            <option key={index} value={category.name}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap lg:px-40 md:px-24 sm:px-20 px-4 pb-10">
                            {filteredProducts.map((product: any, index: number) => (
                                <div key={index} className='lg:w-3/12 md:w-4/12 w-6/12 px-2 mb-3 cursor-pointer'
                                     onClick={() => router.push(`product/${product.id}`)}>
                                    <div className="product-box h-full flex flex-col justify-between">
                                        <h6 className='lg:text-2xl md:text-xl sm:text-lg text-md font-bold capitalize text-primary mb-3'>
                                            {product.name}
                                        </h6>
                                        <div className='product-img flex justify-center items-center'>
                                            <LazyLoadImage
                                                className='w-full flex items-center justify-center'
                                                placeholderSrc={'/shoes.png'}
                                                src={product.avatar}/>
                                        </div>
                                        <div className="product-details mt-3">
                                            <h6 className='text-xl font-bold'>
                                                {/*<span className='text-lg font-medium line-through opacity-30 mr-3'>*/}
                                                {/*  $600.00*/}
                                                {/*</span>*/}
                                                ${product.price}
                                            </h6>
                                            {/*<div*/}
                                            {/*    className='border rounded-r-full py-2 px-4 -ml-4 mt-3 border-l-0 flex w-fit '>*/}
                                            {/*    <div className='w-10 h-10 rounded-full mr-2 bg-blue'>*/}
                                            {/*    </div>*/}
                                            {/*    <div className='w-10 h-10 rounded-full mr-2 bg-primary'>*/}
                                            {/*    </div>*/}
                                            {/*    <div className='w-10 h-10 rounded-full mr-2 bg-gray-500'>*/}
                                            {/*    </div>*/}
                                            {/*    <div className='w-10 h-10 rounded-full mr-2 bg-gray-300'>*/}
                                            {/*    </div>*/}
                                            {/*    <div className='w-10 h-10 rounded-full mr-2 bg-gray-200'>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/*  <footer className={styles.footer}>*/}
            {/*      <a*/}
            {/*          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
            {/*          target="_blank"*/}
            {/*          rel="noopener noreferrer"*/}
            {/*      >*/}
            {/*          Powered by{' '}*/}
            {/*          <span className={styles.logo}>*/}
            {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>*/}
            {/*</span>*/}
            {/*      </a>*/}
            {/*  </footer>*/}
        </div>
    )
}

export default Home
