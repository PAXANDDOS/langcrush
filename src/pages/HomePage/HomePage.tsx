import { Button } from '../../components/Common/Button'

export const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-black font-rubik text-regal-blue mb-6">
                LANG<span className="text-regal-red">DICE</span>
            </h1>
            <Button content="PLAY" full />
            <div className="flex flex-row items-center justify-center mt-4 gap-4">
                <Button content={<i className="fa-solid fa-right-to-bracket"></i>} textSize="2xl" />
                <Button content={<i className="fa-solid fa-gear"></i>} textSize="2xl" />
                <Button content={<i className="fa-solid fa-circle-info"></i>} textSize="2xl" />
            </div>
        </div>
    )
}
