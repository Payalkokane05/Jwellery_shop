import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    // ✅ get men / women from URL
    const gender = searchParams.get("jwellery");

    const [filters, setFilters] = useState({
        category: "",
        material: "",
        minPrice: 0,
        maxPrice: 100
    })

    const [priceRange, setPriceRange] = useState([0, 100])

    // ✅ separate categories
    const womenCategories = [
        "Rings", "Earrings", "Bangles", "Necklaces",
        "Anklets", "Bracelets", "Pendant", "Nosepin", "Mangalsutra"
    ];

    const menCategories = [
        "Rings", "Chain", "Bracelets", "Bali", "Pendant"
    ];

    // ✅ dynamic category
    const category = gender === "men" ? menCategories : womenCategories;

    const material = ["Gold", "Silver"]

    // ✅ sync filters with URL
    useEffect(() => {
        const params = Object.fromEntries([...searchParams])

        setFilters({
            category: params.category || "",
            material: params.material || "",
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100
        });

        setPriceRange([0, params.maxPrice || 100])
    }, [searchParams])

    // ✅ handle filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target

        const newFilter = {
            ...filters,
            [name]: value
        }

        setFilters(newFilter)
        updateURLParams(newFilter)
    }

    // ✅ FIX: preserve jwellery param
    const updateURLParams = (newFilter) => {
        const params = new URLSearchParams(searchParams)

        Object.keys(newFilter).forEach((key) => {
            if (newFilter[key]) {
                params.set(key, newFilter[key])
            } else {
                params.delete(key)
            }
        })

        setSearchParams(params)
    }

    // ✅ price change
    const handlePriceChange = (e) => {
        const value = e.target.value

        setPriceRange([0, value])

        const newFilter = {
            ...filters,
            maxPrice: value
        }

        setFilters(newFilter)
        updateURLParams(newFilter)
    }

    return (
        <div className='p-4'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

            {/* category filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Category</label>

                {category.map((cat) => (
                    <div key={cat} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="category"
                            value={cat}
                            checked={filters.category === cat}
                            onChange={handleFilterChange}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span>{cat}</span>
                    </div>
                ))}
            </div>

            {/* material filter */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2'>Material</label>

                {material.map((mat) => (
                    <div key={mat} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="material"
                            value={mat}
                            checked={filters.material === mat}
                            onChange={handleFilterChange}
                            className='mr-2 h-4 w-4 text-blue-500'
                        />
                        <span>{mat}</span>
                    </div>
                ))}
            </div>

            {/* price range */}
            <div className='mb-8'>
                <label className='block text-gray-600 font-medium mb-2'>Price Range</label>

                <input
                    type='range'
                    name="maxPrice"
                    min={0}
                    max={100}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full'
                />

                <div className='flex justify-between mt-2'>
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar
