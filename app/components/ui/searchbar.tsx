"use client";
import { Search } from 'lucide-react';

export default function SearchBar(){
    return (
        <div className="w-full py-3 bg-white rounded-[8px]">
            <div className='flex items-center gap-4 py-2 px-4 bg-none justify-center'>
                <Search color='#767676' size={20} />
                <input type="text" className="bg-none w-full outline-none" placeholder="Search for photo and illustrations"  />
            </div>
        </div>
    )
}