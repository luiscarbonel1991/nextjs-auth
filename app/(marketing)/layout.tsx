import Footer from "./_components/footer"
import Header from "./_components/header"

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col bg-background">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default MarketingLayout