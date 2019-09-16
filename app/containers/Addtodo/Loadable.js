/**
 *
 * Asynchronously loads the component for Addtodo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
