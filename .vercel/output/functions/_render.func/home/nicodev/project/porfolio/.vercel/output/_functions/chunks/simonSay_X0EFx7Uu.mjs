export { renderers } from '../renderers.mjs';

const page = () => import('./pages/simonSay_1yyNo1Ma.mjs').then(n => n.b);

export { page };
