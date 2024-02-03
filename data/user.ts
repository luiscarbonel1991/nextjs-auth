import { db } from "@/lib/db"

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } })
        return user
    } catch (error) {
        console.error('Error getting user by email', error)
        return null
    }
}

export const getUserById = async (id: string) => {
    try {
      return await db.user.findUnique({ where: { id } });
    } catch (error) {
        console.error('Error getting user by id', error)
        return null
    }
}