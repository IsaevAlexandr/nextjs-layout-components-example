import { Text } from "@gravity-ui/uikit"
import { Flex, useLayoutContext } from "@gravity-ui/uikit/unstable_layout"
import Link from "next/link"

export const Page = ({ children, nextExample, prevExample }: {
    children: React.ReactNode,
    nextExample?: string
    prevExample?: string
}) => {
    const { activeMediaQuery } = useLayoutContext()

    return (
        <>
            <Flex alignItems="center" style={{ padding: 10 }} wrap="wrap" gap>
                <Text variant="header-1" color="secondary" style={{ marginRight: 'auto' }}>
                    Current active media query: <Text variant="display-1" color="info">{activeMediaQuery}</Text>
                </Text>

                {prevExample && (
                    <Text variant="header-1" color="hint" >
                        <Link href={prevExample}>
                            prev: {prevExample}
                        </Link>
                    </Text>
                )}

                {nextExample && (
                    <Text variant="header-1" color="hint" >
                        <Link href={nextExample}>
                            next: {nextExample}
                        </Link>
                    </Text>
                )}
            </Flex>
            {children}
        </>
    )
}