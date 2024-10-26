"use client"
import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [now, change] = useState(new Date());
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const date = now.getDate();
    const day = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(now);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(now);
    const year = now.getFullYear();

    useEffect(() => {
        const interval = setInterval(() => {
            change(new Date());
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='absolute bottom-5 left-5 flex flex-col text-white'>
            <span className='flex items-baseline text-7xl font-bold' style={{ letterSpacing: '0.1em' }}>
                {formattedHours}:{minutes}
                <span className='ml-2 text-lg' style={{ letterSpacing: '0.1em' }}>{period}</span>
            </span>

            <span className='text-lg text-3 font-semibold'>
                {day}, {date} {month} {year}
            </span>
        </div>
    )
}
