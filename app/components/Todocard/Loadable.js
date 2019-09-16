/**
 *
 * Asynchronously loads the component for Todocard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
