
import { Box } from '@/components/Box';
import { Page } from '@/components/Page';
import { Container, useLayoutContext } from '@gravity-ui/uikit/unstable_layout'

const mapOfPropsByScreen = {
    s: "i'm will be shown on 's' and 'm' screen size",
    l: "i'm will be shown on 'l' and 'xl' screen size",
    xxl: "i'm will be shown on 'xxl' and 'xxxl' screen size",
};

export default function GetClosestMediaProps() {
    const { getClosestMediaProps } = useLayoutContext();

    return (
        <Page prevExample='/isMediaActive' nextExample="/">
            <Container>
                <Box>
                    {getClosestMediaProps(mapOfPropsByScreen)}
                </Box>
            </Container>
        </Page>
    )
}
