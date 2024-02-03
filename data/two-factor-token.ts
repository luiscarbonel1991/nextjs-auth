import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token: string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findUnique({
            where: { token }
        });

        return twoFactorToken;
    } catch {
        return null;
    }
};

export const getTwoFactorTokenByEmail = async (email: string, token: string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findFirst({
            where: { email, token }
        });

        return twoFactorToken;
    } catch {
        return null;
    }
};