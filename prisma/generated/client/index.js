
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  password: 'password',
  first_name: 'first_name',
  last_name: 'last_name',
  role: 'role',
  last_active: 'last_active',
  status: 'status',
  phone_number: 'phone_number',
  is_active: 'is_active',
  pentrar_user_id: 'pentrar_user_id',
  verification_code: 'verification_code',
  password_resetCode: 'password_resetCode',
  isEmail_verified: 'isEmail_verified'
};

exports.Prisma.AggregatorScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_active: 'is_active',
  email: 'email',
  password: 'password',
  first_name: 'first_name',
  last_name: 'last_name',
  last_active: 'last_active',
  phone_number: 'phone_number',
  pentrar_aggregator_id: 'pentrar_aggregator_id',
  created_by_id: 'created_by_id',
  verification_code: 'verification_code',
  password_resetCode: 'password_resetCode',
  isEmail_verified: 'isEmail_verified',
  status: 'status',
  role: 'role'
};

exports.Prisma.FarmerScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  phone_number: 'phone_number',
  password: 'password',
  first_name: 'first_name',
  last_name: 'last_name',
  type_of_produce: 'type_of_produce',
  pentrar_farmer_id: 'pentrar_farmer_id',
  created_by_id: 'created_by_id',
  last_active: 'last_active',
  status: 'status',
  verification_code: 'verification_code',
  password_resetCode: 'password_resetCode',
  isEmail_verified: 'isEmail_verified',
  role: 'role',
  is_active: 'is_active'
};

exports.Prisma.TransporterScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  password: 'password',
  first_name: 'first_name',
  last_name: 'last_name',
  role: 'role',
  last_active: 'last_active',
  status: 'status',
  phone_number: 'phone_number',
  is_active: 'is_active',
  pentrar_trans_id: 'pentrar_trans_id',
  created_by_id: 'created_by_id',
  verification_code: 'verification_code',
  password_resetCode: 'password_resetCode',
  isEmail_verified: 'isEmail_verified',
  vehicle_type: 'vehicle_type',
  vehicle_number: 'vehicle_number',
  Vehicle_license: 'Vehicle_license'
};

exports.Prisma.ProduceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  quantity: 'quantity',
  unit: 'unit',
  farmer_id: 'farmer_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  pentrar_produce_id: 'pentrar_produce_id',
  image: 'image',
  description: 'description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserStatus = exports.$Enums.UserStatus = {
  Active: 'Active',
  Inactive: 'Inactive',
  Pending: 'Pending',
  Invited: 'Invited'
};

exports.Prisma.ModelName = {
  User: 'User',
  Aggregator: 'Aggregator',
  Farmer: 'Farmer',
  Transporter: 'Transporter',
  Produce: 'Produce'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Akinsanmi Akintunde\\Desktop\\pentrar-api\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_NEON",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCi8vIGRhdGFzb3VyY2UgZGIgewovLyAgIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCi8vICAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCi8vIH0KCi8vIHByaXNtYS9zY2hlbWEucHJpc21hCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiREFUQUJBU0VfVVJMX05FT04iKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTF9ORU9OIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZF9hdCAgICAgICAgIERhdGVUaW1lICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKICBlbWFpbCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgICAgICAgICAgIFN0cmluZz8KICBmaXJzdF9uYW1lICAgICAgICAgU3RyaW5nPwogIGxhc3RfbmFtZSAgICAgICAgICBTdHJpbmc/CiAgcm9sZSAgICAgICAgICAgICAgIFN0cmluZz8KICBsYXN0X2FjdGl2ZSAgICAgICAgU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICBVc2VyU3RhdHVzCiAgcGhvbmVfbnVtYmVyICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIGlzX2FjdGl2ZSAgICAgICAgICBCb29sZWFuPwogIHBlbnRyYXJfdXNlcl9pZCAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBGYXJtZXIgICAgICAgICAgICAgRmFybWVyW10KICBUcmFuc3BvcnRlciAgICAgICAgVHJhbnNwb3J0ZXJbXQogIEFnZ3JlZ2F0b3IgICAgICAgICBBZ2dyZWdhdG9yW10KICB2ZXJpZmljYXRpb25fY29kZSAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmRfcmVzZXRDb2RlIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIGlzRW1haWxfdmVyaWZpZWQgICBCb29sZWFuICAgICAgIEBkZWZhdWx0KGZhbHNlKQp9Cgptb2RlbCBBZ2dyZWdhdG9yIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAbWFwKCJfaWQiKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZSAgICAgIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZSAgICAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCiAgaXNfYWN0aXZlICAgICAgICAgICAgIEJvb2xlYW4/CiAgZW1haWwgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICAgICBTdHJpbmc/CiAgZmlyc3RfbmFtZSAgICAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgICAgU3RyaW5nPwogIGxhc3RfYWN0aXZlICAgICAgICAgICBTdHJpbmc/CiAgcGhvbmVfbnVtYmVyICAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBlbnRyYXJfYWdncmVnYXRvcl9pZCBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICB1c2VyICAgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX3VzZXJfaWRdLCBtYXA6ICJ1c2VyX3JlbGF0aW9uIikKICBjcmVhdGVkX2J5X2lkICAgICAgICAgU3RyaW5nPwogIEZhcm1lciAgICAgICAgICAgICAgICBGYXJtZXJbXQogIFRyYW5zcG9ydGVyICAgICAgICAgICBUcmFuc3BvcnRlcltdCiAgdmVyaWZpY2F0aW9uX2NvZGUgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkX3Jlc2V0Q29kZSAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBpc0VtYWlsX3ZlcmlmaWVkICAgICAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICBzdGF0dXMgICAgICAgICAgICAgICAgVXNlclN0YXR1cwogIHJvbGUgICAgICAgICAgICAgICAgICBTdHJpbmc/Cn0KCm1vZGVsIEZhcm1lciB7CiAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZF9hdCAgICAgICAgIERhdGVUaW1lICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKICBlbWFpbCAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGhvbmVfbnVtYmVyICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICBTdHJpbmc/CiAgZmlyc3RfbmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgU3RyaW5nPwogIHR5cGVfb2ZfcHJvZHVjZSAgICBTdHJpbmdbXQogIHBlbnRyYXJfZmFybWVyX2lkICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBhZ2dyZWdhdG9yICAgICAgICAgQWdncmVnYXRvciAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2FnZ3JlZ2F0b3JfaWRdLCBtYXA6ICJhZ2dyZWdhdG9yX3JlbGF0aW9uIikKICB1c2VyICAgICAgICAgICAgICAgVXNlciAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX3VzZXJfaWRdLCBtYXA6ICJ1c2VyX3JlbGF0aW9uIikKICBjcmVhdGVkX2J5X2lkICAgICAgU3RyaW5nCiAgbGFzdF9hY3RpdmUgICAgICAgIFN0cmluZz8KICBsaXN0X29mX3Byb2R1Y2UgICAgUHJvZHVjZVtdCiAgVHJhbnNwb3J0ZXIgICAgICAgIFRyYW5zcG9ydGVyW10KICBzdGF0dXMgICAgICAgICAgICAgVXNlclN0YXR1cwogIHZlcmlmaWNhdGlvbl9jb2RlICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBwYXNzd29yZF9yZXNldENvZGUgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgaXNFbWFpbF92ZXJpZmllZCAgIEJvb2xlYW4gICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcm9sZSAgICAgICAgICAgICAgIFN0cmluZz8KICBpc19hY3RpdmUgICAgICAgICAgQm9vbGVhbj8KfQoKbW9kZWwgVHJhbnNwb3J0ZXIgewogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgY3JlYXRlZF9hdCAgICAgICAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCiAgZW1haWwgICAgICAgICAgICAgIFN0cmluZyAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICBTdHJpbmc/CiAgZmlyc3RfbmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgU3RyaW5nPwogIHJvbGUgICAgICAgICAgICAgICBTdHJpbmc/CiAgbGFzdF9hY3RpdmUgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgVXNlclN0YXR1cwogIHBob25lX251bWJlciAgICAgICBTdHJpbmc/ICAgIEB1bmlxdWUKICBpc19hY3RpdmUgICAgICAgICAgQm9vbGVhbj8KICBwZW50cmFyX3RyYW5zX2lkICAgU3RyaW5nPwogIGFnZ3JlZ2F0b3IgICAgICAgICBBZ2dyZWdhdG9yIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkX2J5X2lkXSwgcmVmZXJlbmNlczogW3BlbnRyYXJfYWdncmVnYXRvcl9pZF0sIG1hcDogImFnZ3JlZ2F0b3JfcmVsYXRpb24iKQogIHVzZXIgICAgICAgICAgICAgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkX2J5X2lkXSwgcmVmZXJlbmNlczogW3BlbnRyYXJfdXNlcl9pZF0sIG1hcDogInVzZXJfcmVsYXRpb24iKQogIGZhcm1lciAgICAgICAgICAgICBGYXJtZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkX2J5X2lkXSwgcmVmZXJlbmNlczogW3BlbnRyYXJfZmFybWVyX2lkXSwgbWFwOiAiZmFybWVyX3JlbGF0aW9uIikKICBjcmVhdGVkX2J5X2lkICAgICAgU3RyaW5nCiAgdmVyaWZpY2F0aW9uX2NvZGUgIFN0cmluZz8gICAgQHVuaXF1ZQogIHBhc3N3b3JkX3Jlc2V0Q29kZSBTdHJpbmc/ICAgIEB1bmlxdWUKICBpc0VtYWlsX3ZlcmlmaWVkICAgQm9vbGVhbiAgICBAZGVmYXVsdChmYWxzZSkKICB2ZWhpY2xlX3R5cGUgICAgICAgU3RyaW5nPwogIHZlaGljbGVfbnVtYmVyICAgICBTdHJpbmc/CiAgVmVoaWNsZV9saWNlbnNlICAgIFN0cmluZz8KfQoKbW9kZWwgUHJvZHVjZSB7CiAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBtYXAoIl9pZCIpCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZz8KICBxdWFudGl0eSAgICAgICAgICAgSW50PwogIHVuaXQgICAgICAgICAgICAgICBJbnQ/CiAgZmFybWVyICAgICAgICAgICAgIEZhcm1lciAgIEByZWxhdGlvbihmaWVsZHM6IFtmYXJtZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGZhcm1lcl9pZCAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQogIHBlbnRyYXJfcHJvZHVjZV9pZCBTdHJpbmc/CiAgaW1hZ2UgICAgICAgICAgICAgIFN0cmluZz8KICBkZXNjcmlwdGlvbiAgICAgICAgU3RyaW5nPwp9CgplbnVtIFVzZXJTdGF0dXMgewogIEFjdGl2ZQogIEluYWN0aXZlCiAgUGVuZGluZwogIEludml0ZWQKfQo=",
  "inlineSchemaHash": "8766c36bcf4d65dc8b593b778d991349e9efd6a1fa6c89c9dd8c97dbda7e17ab"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Farmer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"FarmerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transporter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"TransporterToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Aggregator\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Aggregator\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_aggregator_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AggregatorToUser\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Farmer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"AggregatorToFarmer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transporter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"AggregatorToTransporter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Farmer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_of_produce\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_farmer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggregator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToFarmer\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_aggregator_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FarmerToUser\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"list_of_produce\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produce\",\"relationName\":\"FarmerToProduce\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transporter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"FarmerToTransporter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transporter\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_trans_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggregator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToTransporter\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_aggregator_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TransporterToUser\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"FarmerToTransporter\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_farmer_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vehicle_license\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Produce\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"FarmerToProduce\",\"relationFromFields\":[\"farmer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"pentrar_produce_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserStatus\":{\"values\":[{\"name\":\"Active\",\"dbName\":null},{\"name\":\"Inactive\",\"dbName\":null},{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Invited\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
