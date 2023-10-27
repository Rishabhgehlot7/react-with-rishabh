import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Rishabhgehlot7")
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    // }, [])
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=' text-center text-3xl bg-gray-700 text-white p-4 m-4'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="github profile" /></div>

    )
}

export default Github


export const GithubLoader = () => {
    const data = fetch("https://api.github.com/users/Rishabhgehlot7").then((res) => res.json())
    return data
}