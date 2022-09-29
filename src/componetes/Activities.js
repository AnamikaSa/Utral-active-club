import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import logo from '../images/1648826689453.jpg'
const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('fitnes.Json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='bg-fuchsia-300 justify-between grid md:grid-cols-2 gap-y-20 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-56 md:gap-y-24 gap-y-10'>
                {
                    activities.map(activity => <ActivityList
                        key={activity.id}
                        activity={activity}>

                    </ActivityList>)
                }
            </div>

            <div className='md:ml-72 bg-purple-300 p-6'>
                <div className='flex '>
                    <img className='rounded-full w-12' src={logo} alt="" />
                    <p className='ml-5'>Anamika Sarker <br /> <span>Sydney,   Australia</span></p>
                </div>
                <div className='flex mt-10'>
                    <div className='pr-5 ml-5'>
                        <h2 className='text-xl font-extrabold'>55kg</h2>
                        <p className='text-zinc-400'>Weight</p>
                    </div>
                    <div className='pr-5'>
                        <h2 className='text-xl font-extrabold'>5.3</h2>
                        <p className='text-zinc-400'>Height</p>
                    </div>
                    <div className='pr-5'>
                        <h2 className='text-xl font-extrabold'>25yrs</h2>
                        <p className='text-zinc-400'>Age</p>
                    </div>
                </div>

                <div>
                    <p className='text-xl font-bold mt-8'>Add A Break</p>
                    <div className='p-6'>
                        <button className=' rounded-full p-2 bg-purple-500 hover:bg-fuchsia-400'>10s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>20s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>30s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>40s</button>
                    </div>
                </div>

                <div>
                <p className='text-xl font-bold mt-8'>Exercise Details</p>
                <p className='p-5 text-lg'>Exercise time : </p>
                <p className='p-5 text-lg'>Break Time    : </p>
                <button className='rounded p-2 bg-fuchsia-500 w-full'>Activity Completed</button>
                </div>
            </div>

        </div>

    );
};

export default Activities;