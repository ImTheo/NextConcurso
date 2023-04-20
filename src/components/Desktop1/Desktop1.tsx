import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.image1}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.startTransaction}>
        <div className={classes.textBlock}>Start </div>
        <div className={classes.textBlock2}>Transaction</div>
      </div>
      <div className={classes.eMOTIONSSAD50ANGRY30SCARED20}>
        <div className={classes.textBlock3}>EMOTIONS</div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>SAD: </span>
            <span className={classes.label2}>50%</span>
          </p>
        </div>
        <div className={classes.textBlock5}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>ANGRY:</span>
            <span className={classes.label4}> 30%</span>
          </p>
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label5}>SCARED:</span>
            <span className={classes.label6}> 20%</span>
          </p>
        </div>
      </div>
      <div className={classes.sTATUSREJECTED}>
        <div className={classes.textBlock7}>STATUS</div>
        <div className={classes.textBlock8}>
          <p className={classes.labelWrapper4}>
            <span className={classes.label7}>REJECTED</span>
          </p>
        </div>
      </div>
      <div className={classes.sentiguardLogo2}></div>
    </div>
  );
});
