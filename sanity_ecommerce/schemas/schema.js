// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import banner from './banner'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([product,banner]),
})
