import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../configs/config";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ProductId: NextPage = () => {
    const router = useRouter()
    const [product, setProduct] = useState<any>(null);

    const getProductDetails = useCallback(() => {
        const {productId} = router.query
        if (productId) {
            axios.get(`${API_URL}products/${productId}`).then(product => {
                setProduct(product.data);
            })
        }
    }, [router.query])

    useEffect(() => {
        getProductDetails()
    }, [getProductDetails])

    return (
        <div className='min-h-screen bg-mainbg'>
            <div className="w-full mx-auto">
                <div className="header">
                    <div className='w-1/2'>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/" className='text-primary text-3xl font-bold leading-none'>
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
                <div className='product-details lg:px-32 md:px-24 sm:px-20 px-4'>
                    <div className='flex flex-wrap justify-center'>
                        <div className='lg:w-3/12 md:w-4/12 sm:w-5/12 w-12 pr-3'>
                            <div
                                className='lg:w-72 lg:h-72 rounded-full bg-white flex items-center product-details-box overflow-hidden'>
                                <LazyLoadImage src={product?.avatar} placeholderSrc={'/details-shoes.png'}
                                               className='' alt="Login/ Register"/>
                            </div>
                        </div>
                        <div className='lg:w-4/12 md:w-5/12 sm:w-6/12 w-12 pl-4'>
                            <div className=''>
                                <h4 className='md:text-4xl sm:text-3xl capitalize text-2xl font-bold '>
                                    {product?.name}
                                </h4>
                                <h6 className='text-xl font-bold pt-3'>
                                    {/*<span className='text-lg font-medium line-through opacity-30 mr-3'>*/}
                                    {/*  $600.00*/}
                                    {/*</span>*/}
                                    ${product?.price}
                                </h6>
                                {/*<div className='flex w-fit'>*/}
                                {/*    <div className='p-1 rounded-full mr-2 border border-blue'>*/}
                                {/*        <div className='w-10 h-10 rounded-full bg-blue'>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className='p-1 rounded-full mr-2'>*/}
                                {/*        <div className='w-10 h-10 rounded-full bg-primary'>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className='p-1 rounded-full mr-2'>*/}
                                {/*        <div className='w-10 h-10 rounded-full bg-primary'>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className='p-1 rounded-full mr-2'>*/}
                                {/*        <div className='w-10 h-10 rounded-full bg-gray-500'>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className='p-1 rounded-full mr-2'>*/}
                                {/*        <div className='w-10 h-10 rounded-full bg-gray-300'>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className='p-1 rounded-full mr-2'>*/}
                                {/*        <div className='w-10 h-10 rounded-full bg-gray-300'>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className='mt-6'>
                                    {/*<h6 className='text-xl leading-none text-gray-400 mb-4'>*/}
                                    {/*    Size :*/}
                                    {/*</h6>*/}
                                    {/*<div className='flex flex-wrap'>*/}
                                    {/*    <h6 className='rounded-full px-3 py-1 bg-primary10 text-primary mr-3 text-base leading-none mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*    <h6 className='rounded-full border border-gray-400 text-gray-500 px-3 text-base leading-none py-1 mr-3 mb-3'>*/}
                                    {/*        UK 5*/}
                                    {/*    </h6>*/}
                                    {/*</div>*/}
                                    <div className='mt-3 pb-6 border-b border-gray-200'>
                                        <div
                                            className='w-fit px-4 py-3 rounded-2xl border border-primary10 text-primary10 capitalize text-lg  leading-none categories-select'>
                                            ADD TO CARD
                                        </div>
                                    </div>

                                    <div className='mt-6'>
                                        <h4 className='text-gray-500 font-bold text-3xl leading-none'>
                                            Description
                                        </h4>
                                        <p className='text-lg mt-3 text-gray-400'>
                                            {product?.Description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductId
