
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Flex, Container, useLayoutContext } from '@gravity-ui/uikit/unstable_layout'

export default function ActiveMediaQuery() {
    const { activeMediaQuery } = useLayoutContext();
    return (
        <Page prevExample='/flexComplex' nextExample="/isMediaActive">
            <Container>
                <Flex direction="column" space>
                    <Box />
                    <Box />
                    {activeMediaQuery === 'm' ? null : <Box>You can not see me at m screen size</Box>}
                    <Box />
                </Flex>
            </Container>
        </Page>
    )
}
