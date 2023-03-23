
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Flex, Container, useLayoutContext } from '@gravity-ui/uikit/unstable_layout'

export default function IsMediaActive() {
    const { isMediaActive } = useLayoutContext();

    return (
        <Page prevExample='/activeMediaQuery' nextExample="/getClosestMediaProps">
            <Container>
                <Flex direction="column" space>
                    <Box />
                    <Box />
                    {isMediaActive('l') ? null : <Box>You can see me at s and m screen size</Box>}
                    <Box />
                </Flex>
            </Container>
        </Page>
    )
}
