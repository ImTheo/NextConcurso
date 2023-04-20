import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 788 788' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={394} cy={394} r={394} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
