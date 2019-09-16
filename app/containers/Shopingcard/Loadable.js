/**
 *
 * Asynchronously loads the component for Shopingcard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
