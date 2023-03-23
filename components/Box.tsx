import { Text } from "@gravity-ui/uikit"

interface BoxProps {
    width?: React.CSSProperties['width'],
    height?: React.CSSProperties['height'],
    children?: React.ReactNode,
    randSize?: boolean
}

export const Box: React.FC<BoxProps> = ({ randSize,
    height: _height = 100,
    width: _width = '100%',
    children = 'Box'
}) => {
    let width = _width;
    let height = _height;

    if (randSize) {
        width = Math.ceil(Math.random() * 50) + 100
        height = Math.ceil(Math.random() * 50) + 100
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width,
                height,
                padding: 5,
                border: '2px dashed darkgray',
                backgroundColor: 'pink'
            }}>
                <Text variant="display-1">

                    {children}
                </Text>
            </div>
        </div>
    )
}