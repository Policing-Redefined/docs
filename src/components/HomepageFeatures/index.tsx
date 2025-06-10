import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import zoomableImage from "@site/src/components/UtilityFeatures/ZoomableImage";

type FeatureItem = {
    title: string;
    image: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Advanced Features",
        image: "/img/IndexMenus.png",
        description: (
            <>
                PR opens whole new world of opportunities to make your patrol as immersive as you can imagine,
                offering new and more in-depth features over similar plugins.
            </>
        ),
    },
    {
        title: "Top Immersion",
        image: "/img/IndexImr.png",
        description: (
            <>
                PR enhances ped, traffic stop and backup interactions giving you precise control over your
                gameplay and patrol experience.
            </>
        ),
    },
    {
        title: 'Made For Players',
        image: "/img/IndexCustom.png",
        description: (
            <>
                PR offers a huge amount of customizations and settings that you can
                tweak to your liking and preferences. This is truly <b>your</b> patrol.
            </>
        ),
    },
];

function Feature({ title, image, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                { zoomableImage({ src: image, alt: title, clazz: "featureImg" }) }
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
