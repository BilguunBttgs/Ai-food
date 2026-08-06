import { UserButton } from "@clerk/nextjs"


const Header = () => {
    return (
        <div className="w-full px-6 flex justify-between items-center py-2 border-b">
            <h1>Quiz App</h1>
            <UserButton />
        </div>
    )
}

export default Header