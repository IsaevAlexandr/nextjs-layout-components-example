import { Text } from "@gravity-ui/uikit"
import { Flex, spacing, useLayoutContext } from "@gravity-ui/uikit/unstable_layout"
import Link from "next/link"

export const Page = ({ children, nextExample }: { children: React.ReactNode, nextExample?: string }) => {

    const { activeMediaQuery } = useLayoutContext()
    return <Flex direction='column'>
        <Flex alignItems="center" style={{ padding: 10 }}>

            <Text variant="header-1" color="secondary">
                Current active media query: <Text variant="display-1" color="info">{activeMediaQuery}</Text>
            </Text> {nextExample && <Text variant="header-1" color="hint" style={{ marginLeft: 'auto' }}><Link href={nextExample}>
                next example
            </Link></Text>}
        </Flex>
        {children}
    </Flex >
}