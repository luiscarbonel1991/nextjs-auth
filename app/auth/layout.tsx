import Header from "@/app/(marketing)/_components/header";
import Footer from "@/app/(marketing)/_components/footer";

const AuthLayout = ({
                        children
                    }: { children: React.ReactNode }
) => {
    return (
        <main className="relative flex min-h-screen flex-col bg-background justify-center items-center">
                {children}
        </main>
    );
}

export default AuthLayout