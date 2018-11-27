import React from 'react';
import TextBlock from '../../common/TextBlock';
import styles from './Paddings.scss';
import PaddingComponent from './PaddingComponent.js';

const PaddingsPage = () => {
    const text1 = `Hello reached number one in almost every country it charted in,
    including the United Kingdom, where it became her second UK number-one single, following Someone like You,
    and has the largest opening week sales in three years. In the United States, Hello 
    debuted at the top of the Billboard Hot 100,
    reigning for 10 consecutive weeks whilst becoming Adele's fourth number-one on 
    the chart and breaking several records, including becoming the
    first song to sell over a million digital copies in a week. By the end of 2015, it had sold 12.3 
    million units globally (combined sales and track-equivalent streams) and was the year's 
    7th best-selling single while it stands as one of the best-selling singles of all-time.[3]hello`;
    return (
        <div className={styles.outer}>
            <TextBlock title="Padding" text={text1} />
            <PaddingComponent subtitle="Basic units of padding" message="8,16,24,32 px (Multiples of 8)" />
            <PaddingComponent subtitle="Basic units of padding" message="8,16,24,32 px (Multiples of 8)" />
            <PaddingComponent subtitle="Basic units of padding" message="8,16,24,32 px (Multiples of 8)" />
            <PaddingComponent subtitle="Basic units of padding" message="8,16,24,32 px (Multiples of 8)" />
            <PaddingComponent subtitle="Basic units of padding" message="8,16,24,32 px (Multiples of 8)" />
            <img src="/images/padding.png" alt="padding" className={styles.paddingImage} />
        </div>

    );
};


export default PaddingsPage;
