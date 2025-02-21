"use client";
import SearchBar from "./ui/searchbar";


export default function Header(){
    return (
        <header className="bg-gray-300">
            <div className="container mx-auto ">
            <div className="min-h-96 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar />
            </div>
            </div>
            </div>
        </header>
    )
}