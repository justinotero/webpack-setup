if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}

require('./styles.css');

import { foo } from './foobar';

console.log(foo());