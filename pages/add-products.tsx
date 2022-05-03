import type {NextPage} from 'next'
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../configs/config";
import {useRouter} from "next/router";

const AddProducts: NextPage = () => {
    const router = useRouter()
    const [form, setForm] = useState<any>({name: '', description: '', image: '', category: '', price: ''});
    const [categories, setCategories] = useState<any>([]);
    const getCategory = useCallback(() => {
        axios.get(`${API_URL}categories/`).then((categories) => {
            setCategories(categories.data);
        })
    }, []);

    useEffect(() => {
        getCategory()
    }, [getCategory])

    const saveProduct = () => {
        axios.post(`${API_URL}products/`).then(() => {
            router.push('/');
        })
    }
    return (
        <div className='min-h-screen bg-mainbg flex items-center justify-center'>
            <div className="xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-8/12 w-9/12">
                <div className='bg-white text-center rounded-xl px-6 py-10 product-add-box'>
                    <h4 className='text-3xl text-primary mb-3 font-bold capitalize'>
                        Create Product
                    </h4>
                    <div className='mt-3'>
                        <input type="text" placeholder='Product Name'
                               onChange={(e: any) => setForm({...form, name: e.target.value})}
                               className='bg-mainbg border placeholder:text-placeholder border-E3E2FD w-full rounded-2xl py-2 px-4'/>
                    </div>
                    <div className='mt-3'>
                        <textarea placeholder='Description' name="" id="" rows={5}
                                  onChange={(e: any) => setForm({...form, description: e.target.value})}
                                  className='bg-mainbg border placeholder:text-placeholder border-E3E2FD w-full rounded-2xl py-2 px-4'/>
                    </div>
                    <div className='mt-3 flex flex-wrap items-center'>
                        <div className='md:w-7/12 w-full pr-2'>
                            <input type="text" placeholder='Image URL'
                                   onChange={(e: any) => setForm({...form, image: e.target.value})}
                                   className='bg-mainbg border border-E3E2FD placeholder:text-placeholder w-full rounded-2xl py-2 px-4'/>
                        </div>
                        <div className='md:w-5/12 w-full pl-2'>
                            <select name="" id="" value={form.category}
                                    onChange={(e: any) => setForm({...form, category: e.target.value})}
                                    className='bg-mainbg border border-E3E2FD w-full rounded-2xl placeholder:text-placeholder py-2 px-4'>
                                <option value="" disabled>Categories</option>
                                {categories.map((item: any, index: number) => (
                                    <option value={item.id} key={index}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <input type="number" placeholder='Price'
                               onChange={(e: any) => setForm({...form, price: e.target.value})}
                               className='bg-mainbg border placeholder:text-placeholder border-E3E2FD w-full rounded-2xl py-2 px-4'/>
                    </div>

                    <div>
                        <button onClick={() => saveProduct()}
                                className='w-fit px-4 py-2 rounded-2xl mt-4  border border-primary10 text-primary10 capitalize mx-auto text-lg font-medium  leading-none categories-select'>
                            SUBMIT
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProducts
