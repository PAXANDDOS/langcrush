import './particles.css'

export const ParticlesBackground: React.FC = () => {
    return (
        <ul className="-z-20 fixed w-screen h-screen top-0 left-0 bg-gradient-to-b from-white from-75% to-secondary overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
                <li key={i} className="particle"></li>
            ))}
        </ul>
    )
}
