import AnimatedCursor from 'react-animated-cursor'

export const MouseAnimated = () => {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={20}
            color="255, 51, 102"
            outerAlpha={0.1}
            innerScale={0.7}
            outerScale={3}
            outerStyle={{
                border: '2px solid rgb(255, 51, 102)',
            }}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
            ]}
        />
    )
}
