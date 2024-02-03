import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ReactNode} from "react";
import Link from "next/link";

interface CardServiceProps {
    title: string
    description: string
    headerContent: ReactNode,
    cardClassName?: string,
    link?: string
}

const CardService = ({
                         title,
                         description,
                         headerContent,
                         cardClassName,
    link
                     }: CardServiceProps) => {
    return (
        <Card className={cardClassName}>
            <CardHeader>
                {headerContent}
            </CardHeader>
            <CardContent className="space-y-3">
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                {
                    link && (
                        <Button asChild variant="outline" size="sm" className="rounded-3xl">
                            <Link href={link}>
                                Learn more →
                            </Link>
                        </Button>
                    ) || (
                        <Button variant="outline" size="sm" className="rounded-3xl">
                            Learn more →
                        </Button>
                    )

                }
            </CardFooter>
        </Card>
    )
}

export default CardService