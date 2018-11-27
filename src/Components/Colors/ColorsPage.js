import React from 'react';
import TextBlock from '../../common/TextBlock';
import { COLORS } from './DisplayComponents';
import Row from '../../common/Row';
import Color from '../../temp/Color';
import styles from './Colors.scss';

const ColorsPage = () => {
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
            <TextBlock title="Colors" text={text1} />
            <div className="colors">
                {
                    COLORS.map((color) => {
                        return (
                            <Row
                                code={color.code}
                                name={color.name}
                            >
                                <Color subtitle={color.subtitle} message={color.message} />
                            </Row>
                        );
                    })
                }
            </div>
        </div>

    );
};


export default ColorsPage;
