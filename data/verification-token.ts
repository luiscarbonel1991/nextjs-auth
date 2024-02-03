import {db} from "@/lib/db"


export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { email: email }
        });
    
        return verificationToken;
    } catch (error) {
        console.error('Error getting verification token', error)
        return null
    }
}

export const getVerificationTokenByToken = async (token: string) => {
    try {
        return await db.verificationToken.findUnique({
            where: {token: token}
        });
    } catch (error) {
        console.error('Error getting verification token', error)
        return null
    }
}