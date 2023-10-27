import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { id } = useParams()

    return (
        <div className=' bg-gray-700 text-white text-center p-4 m-4 text-3xl'>User:{id}</div>
    )
}

