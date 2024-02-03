import {Header} from "@/app/(main)/_components/header";

const MainDashBoardLayout = ({
                                 children
                             }: {
    children: React.ReactNode
}) => {
    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}

export default MainDashBoardLayout