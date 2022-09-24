import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schemas
import {userSchema} from "./userSchema";
import {conversationsSchema} from "./conversationsSchema";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema, conversationsSchema]),
})
