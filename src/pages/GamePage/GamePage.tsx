import { useLocation } from 'wouter'

import { useState } from 'react'
import { IconButton } from '../../components/Common/IconButton'

export const GamePage: React.FC = () => {
    const [location, setLocation] = useLocation()
    const [gameReady, setGameReady] = useState(true)

    return (
        <main className="flex flex-col w-full h-screen py-4 xs:px-4 md:w-3/5 xl:w-1/4 bg-blue-200">
            <div className="w-full grid grid-cols-6 gap-4">
                <div>
                    <h4>MOVES</h4>
                    <p>12</p>
                </div>
                <h3 className="col-span-3">Фрукти</h3>
                <IconButton icon="fa-solid fa-gear" color="secondary" size="sm" />
                <IconButton icon="fa-solid fa-gear" color="danger" size="sm" />
            </div>
            {gameReady || (
                <div className="bg-red w-screen h-screen absolute z-50 top-0 left-0 grid place-content-center">
                    Loading
                </div>
            )}
        </main>
    )
}
