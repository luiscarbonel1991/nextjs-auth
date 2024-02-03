import * as crypto from "crypto";

import { db } from '@/lib/db';
import { getVerificationTokenByEmail } from '@/data/verification-token';
import { v4 as uuidv4 } from 'uuid';
import {getPasswordResetTokenByEmail} from "@/data/password-reset-token";
import {getTwoFactorTokenByToken} from "@/data/two-factor-token";

export const generateTwoFactorToken = async (email: string) => {
    const token = crypto.randomInt(100_000, 999_999).toString();
    const expires = new Date( new Date().getTime() + 60 * 60 * 1000);

    const existingToken = await getTwoFactorTokenByToken(email);

    if(existingToken) {
        await db.twoFactorToken.delete({
            where: {
                id: existingToken.id,
            }
        })
    }

    const twoFactorTokenCreated = await db.twoFactorToken.create({
        data: {
            email: email,
            token: token,
            expires: expires,
        }
    });

    return twoFactorTokenCreated;
}

export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    const existingToken = await getPasswordResetTokenByEmail(email);

    if(existingToken) {
        await db.passwordResetToken.delete({
            where: {
                id: existingToken.id,
            }
        })
    }

    const passwordResetTokenCreated = await db.passwordResetToken.create({
        data: {
            email: email,
            token: token,
            expires: expires,
        }
    });

    return passwordResetTokenCreated;
}

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id,
            }
        })
    }

    const verificationTokenCreated = await db.verificationToken.create({
        data: {
            email: email,
            token: token,
            expires: expires,
        }
    });

    return verificationTokenCreated;
}