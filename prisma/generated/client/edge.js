
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
} = require('./runtime/edge')


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
  isEmail_verified: 'isEmail_verified',
  role_type: 'role_type'
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

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  phone_number: 'phone_number',
  password: 'password',
  company_name: 'company_name',
  company_address: 'company_address',
  legal_entity_name: 'legal_entity_name',
  tax_identification_number: 'tax_identification_number',
  pentrar_company_id: 'pentrar_company_id',
  created_by_id: 'created_by_id',
  last_active: 'last_active',
  company_type: 'company_type',
  point_of_contact: 'point_of_contact',
  parent_company: 'parent_company',
  subsidiaries_company: 'subsidiaries_company',
  annual_revenue: 'annual_revenue',
  financial_statement: 'financial_statement',
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
exports.Role = exports.$Enums.Role = {
  Admin: 'Admin',
  SubAdmin: 'SubAdmin',
  Farmer: 'Farmer',
  Aggregator: 'Aggregator',
  Company: 'Company',
  Transporter: 'Transporter'
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
  Company: 'Company',
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
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_NEON",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmdlbmVyYXRvciBkYm1sIHsKICBwcm92aWRlciAgID0gInByaXNtYS1kYm1sLWdlbmVyYXRvciIKICBvdXRwdXQgICAgID0gIi4uL2RibWwiCiAgb3V0cHV0TmFtZSA9ICJhd2Vzb21lLmRibWwiCiAgcHJvamVjdE5hbWUgPSAiUHJvamVjdCBOYW1lIgogIHByb2plY3REYXRhYmFzZVR5cGUgPSAiUG9zdGdyZVNRTCIKICBwcm9qZWN0Tm90ZSA9ICJUZXN0IHByb2plY3QgZGVzY3JpcHRpb24iCn0KCi8vIGRhdGFzb3VyY2UgZGIgewovLyAgIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCi8vICAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCi8vIH0KCi8vIHByaXNtYS9zY2hlbWEucHJpc21hCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiREFUQUJBU0VfVVJMX05FT04iKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTF9ORU9OIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZF9hdCAgICAgICAgIERhdGVUaW1lICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKICBlbWFpbCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgICAgICAgICAgIFN0cmluZz8KICBmaXJzdF9uYW1lICAgICAgICAgU3RyaW5nPwogIGxhc3RfbmFtZSAgICAgICAgICBTdHJpbmc/CiAgcm9sZSAgICAgICAgICAgICAgIFJvbGU/CiAgbGFzdF9hY3RpdmUgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgVXNlclN0YXR1cwogIHBob25lX251bWJlciAgICAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBpc19hY3RpdmUgICAgICAgICAgQm9vbGVhbj8KICBwZW50cmFyX3VzZXJfaWQgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgZmFybWVycyAgICAgICAgICAgIEZhcm1lcltdCiAgdHJhbnNwb3J0ZXJzICAgICAgIFRyYW5zcG9ydGVyW10KICBhZ2dyZWdhdG9ycyAgICAgICAgQWdncmVnYXRvcltdCiAgdmVyaWZpY2F0aW9uX2NvZGUgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkX3Jlc2V0Q29kZSBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBpc0VtYWlsX3ZlcmlmaWVkICAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICByb2xlX3R5cGUgICAgICAgICAgU3RyaW5nPwp9Cgptb2RlbCBBZ2dyZWdhdG9yIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAbWFwKCJfaWQiKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZSAgICAgIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZSAgICAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCiAgaXNfYWN0aXZlICAgICAgICAgICAgIEJvb2xlYW4/CiAgZW1haWwgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICAgICBTdHJpbmc/CiAgZmlyc3RfbmFtZSAgICAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgICAgU3RyaW5nPwogIGxhc3RfYWN0aXZlICAgICAgICAgICBTdHJpbmc/CiAgcGhvbmVfbnVtYmVyICAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBlbnRyYXJfYWdncmVnYXRvcl9pZCBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBjb21wYW55ICAgICAgICAgICAgICAgQ29tcGFueSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2NvbXBhbnlfaWRdLCBtYXA6ICJjb21wYW55X3JlbGF0aW9uIikKICB1c2VyICAgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX3VzZXJfaWRdLCBtYXA6ICJ1c2VyX3JlbGF0aW9uIikKICBjcmVhdGVkX2J5X2lkICAgICAgICAgU3RyaW5nCiAgZmFybWVycyAgICAgICAgICAgICAgIEZhcm1lcltdCiAgdHJhbnNwb3J0ZXJzICAgICAgICAgIFRyYW5zcG9ydGVyW10KICB2ZXJpZmljYXRpb25fY29kZSAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmRfcmVzZXRDb2RlICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIGlzRW1haWxfdmVyaWZpZWQgICAgICBCb29sZWFuICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHN0YXR1cyAgICAgICAgICAgICAgICBVc2VyU3RhdHVzCiAgcm9sZSAgICAgICAgICAgICAgICAgIFJvbGU/Cn0KCm1vZGVsIEZhcm1lciB7CiAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjcmVhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZF9hdCAgICAgICAgIERhdGVUaW1lICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKICBlbWFpbCAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGhvbmVfbnVtYmVyICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICBTdHJpbmc/CiAgZmlyc3RfbmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgU3RyaW5nPwogIHR5cGVfb2ZfcHJvZHVjZSAgICBTdHJpbmdbXQogIHBlbnRyYXJfZmFybWVyX2lkICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBhZ2dyZWdhdG9yICAgICAgICAgQWdncmVnYXRvciAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2FnZ3JlZ2F0b3JfaWRdLCBtYXA6ICJhZ2dyZWdhdG9yX3JlbGF0aW9uIikKICB1c2VyICAgICAgICAgICAgICAgVXNlciAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX3VzZXJfaWRdLCBtYXA6ICJ1c2VyX3JlbGF0aW9uIikKICBjb21wYW55ICAgICAgICAgICAgQ29tcGFueSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2NvbXBhbnlfaWRdLCBtYXA6ICJjb21wYW55X3JlbGF0aW9uIikKICBjcmVhdGVkX2J5X2lkICAgICAgU3RyaW5nCiAgbGFzdF9hY3RpdmUgICAgICAgIFN0cmluZz8KICBsaXN0X29mX3Byb2R1Y2UgICAgUHJvZHVjZVtdCiAgdHJhbnNwb3J0ZXJzICAgICAgIFRyYW5zcG9ydGVyW10KICBzdGF0dXMgICAgICAgICAgICAgVXNlclN0YXR1cwogIHZlcmlmaWNhdGlvbl9jb2RlICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBwYXNzd29yZF9yZXNldENvZGUgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgaXNFbWFpbF92ZXJpZmllZCAgIEJvb2xlYW4gICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcm9sZSAgICAgICAgICAgICAgIFJvbGU/CiAgaXNfYWN0aXZlICAgICAgICAgIEJvb2xlYW4/Cn0KCm1vZGVsIENvbXBhbnkgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCiAgZW1haWwgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBwaG9uZV9udW1iZXIgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNvbXBhbnlfbmFtZSAgICAgICAgICAgICAgU3RyaW5nPwogIGNvbXBhbnlfYWRkcmVzcyAgICAgICAgICAgU3RyaW5nPwogIGxlZ2FsX2VudGl0eV9uYW1lICAgICAgICAgU3RyaW5nPwogIHRheF9pZGVudGlmaWNhdGlvbl9udW1iZXIgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGVudHJhcl9jb21wYW55X2lkICAgICAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2J5X2lkICAgICAgICAgICAgIFN0cmluZwogIGxhc3RfYWN0aXZlICAgICAgICAgICAgICAgU3RyaW5nPwogIGNvbXBhbnlfdHlwZSAgICAgICAgICAgICAgU3RyaW5nPwogIHBvaW50X29mX2NvbnRhY3QgICAgICAgICAgU3RyaW5nPwogIHBhcmVudF9jb21wYW55ICAgICAgICAgICAgU3RyaW5nPwogIHN1YnNpZGlhcmllc19jb21wYW55ICAgICAgU3RyaW5nPwogIGFubnVhbF9yZXZlbnVlICAgICAgICAgICAgU3RyaW5nPwogIGZpbmFuY2lhbF9zdGF0ZW1lbnQgICAgICAgU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICAgICAgICAgVXNlclN0YXR1cwogIHZlcmlmaWNhdGlvbl9jb2RlICAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmRfcmVzZXRDb2RlICAgICAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBpc0VtYWlsX3ZlcmlmaWVkICAgICAgICAgIEJvb2xlYW4gICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcm9sZSAgICAgICAgICAgICAgICAgICAgICBSb2xlPwogIGlzX2FjdGl2ZSAgICAgICAgICAgICAgICAgQm9vbGVhbj8KICBmYXJtZXJzICAgICAgICAgICAgICAgICAgIEZhcm1lcltdCiAgYWdncmVnYXRvcnMgICAgICAgICAgICAgICBBZ2dyZWdhdG9yW10KICB0cmFuc3BvcnRlcnMgICAgICAgICAgICAgIFRyYW5zcG9ydGVyW10KfQoKbW9kZWwgVHJhbnNwb3J0ZXIgewogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgY3JlYXRlZF9hdCAgICAgICAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRfYXQgICAgICAgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCiAgZW1haWwgICAgICAgICAgICAgIFN0cmluZyAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICBTdHJpbmc/CiAgZmlyc3RfbmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgU3RyaW5nPwogIHJvbGUgICAgICAgICAgICAgICBSb2xlPwogIGxhc3RfYWN0aXZlICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgIFVzZXJTdGF0dXMKICBwaG9uZV9udW1iZXIgICAgICAgU3RyaW5nPyAgICBAdW5pcXVlCiAgaXNfYWN0aXZlICAgICAgICAgIEJvb2xlYW4/CiAgcGVudHJhcl90cmFuc19pZCAgIFN0cmluZz8KICBjb21wYW55ICAgICAgICAgICAgQ29tcGFueSAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2NvbXBhbnlfaWRdLCBtYXA6ICJjb21wYW55X3JlbGF0aW9uIikKICBhZ2dyZWdhdG9yICAgICAgICAgQWdncmVnYXRvciBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2FnZ3JlZ2F0b3JfaWRdLCBtYXA6ICJhZ2dyZWdhdG9yX3JlbGF0aW9uIikKICB1c2VyICAgICAgICAgICAgICAgVXNlciAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX3VzZXJfaWRdLCBtYXA6ICJ1c2VyX3JlbGF0aW9uIikKICBmYXJtZXIgICAgICAgICAgICAgRmFybWVyICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZF9ieV9pZF0sIHJlZmVyZW5jZXM6IFtwZW50cmFyX2Zhcm1lcl9pZF0sIG1hcDogImZhcm1lcl9yZWxhdGlvbiIpCiAgY3JlYXRlZF9ieV9pZCAgICAgIFN0cmluZwogIHZlcmlmaWNhdGlvbl9jb2RlICBTdHJpbmc/ICAgIEB1bmlxdWUKICBwYXNzd29yZF9yZXNldENvZGUgU3RyaW5nPyAgICBAdW5pcXVlCiAgaXNFbWFpbF92ZXJpZmllZCAgIEJvb2xlYW4gICAgQGRlZmF1bHQoZmFsc2UpCiAgdmVoaWNsZV90eXBlICAgICAgIFN0cmluZz8KICB2ZWhpY2xlX251bWJlciAgICAgU3RyaW5nPwogIFZlaGljbGVfbGljZW5zZSAgICBTdHJpbmc/Cn0KCm1vZGVsIFByb2R1Y2UgewogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAbWFwKCJfaWQiKQogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmc/CiAgcXVhbnRpdHkgICAgICAgICAgIEludD8KICB1bml0ICAgICAgICAgICAgICAgSW50PwogIGZhcm1lciAgICAgICAgICAgICBGYXJtZXIgICBAcmVsYXRpb24oZmllbGRzOiBbZmFybWVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICBmYXJtZXJfaWQgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZF9hdCAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkX2F0ICAgICAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKICBwZW50cmFyX3Byb2R1Y2VfaWQgU3RyaW5nPwogIGltYWdlICAgICAgICAgICAgICBTdHJpbmc/CiAgZGVzY3JpcHRpb24gICAgICAgIFN0cmluZz8KfQoKZW51bSBVc2VyU3RhdHVzIHsKICBBY3RpdmUKICBJbmFjdGl2ZQogIFBlbmRpbmcKICBJbnZpdGVkCn0KCmVudW0gUm9sZSB7CiAgQWRtaW4KICBTdWJBZG1pbgogIEZhcm1lcgogIEFnZ3JlZ2F0b3IKICBDb21wYW55CiAgVHJhbnNwb3J0ZXIKfQo=",
  "inlineSchemaHash": "996cecb2971639d9acb49401ac5b0085a46c3bd393e54f75ac34c36341791032",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"FarmerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transporters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"TransporterToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggregators\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Aggregator\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_aggregator_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"relationName\":\"AggregatorToCompany\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_company_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AggregatorToUser\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"AggregatorToFarmer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transporters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"AggregatorToTransporter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Farmer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_of_produce\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_farmer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggregator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToFarmer\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_aggregator_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FarmerToUser\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"relationName\":\"CompanyToFarmer\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_company_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"list_of_produce\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produce\",\"relationName\":\"FarmerToProduce\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transporters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"FarmerToTransporter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Company\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"legal_entity_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tax_identification_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point_of_contact\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subsidiaries_company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"annual_revenue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"financial_statement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"CompanyToFarmer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggregators\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToCompany\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transporters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transporter\",\"relationName\":\"CompanyToTransporter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transporter\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pentrar_trans_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"relationName\":\"CompanyToTransporter\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_company_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggregator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aggregator\",\"relationName\":\"AggregatorToTransporter\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_aggregator_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TransporterToUser\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"FarmerToTransporter\",\"relationFromFields\":[\"created_by_id\"],\"relationToFields\":[\"pentrar_farmer_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_resetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEmail_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vehicle_license\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Produce\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Farmer\",\"relationName\":\"FarmerToProduce\",\"relationFromFields\":[\"farmer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"pentrar_produce_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserStatus\":{\"values\":[{\"name\":\"Active\",\"dbName\":null},{\"name\":\"Inactive\",\"dbName\":null},{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Invited\",\"dbName\":null}],\"dbName\":null},\"Role\":{\"values\":[{\"name\":\"Admin\",\"dbName\":null},{\"name\":\"SubAdmin\",\"dbName\":null},{\"name\":\"Farmer\",\"dbName\":null},{\"name\":\"Aggregator\",\"dbName\":null},{\"name\":\"Company\",\"dbName\":null},{\"name\":\"Transporter\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_NEON: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_NEON'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_NEON || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

