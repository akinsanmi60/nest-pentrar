
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Aggregator
 * 
 */
export type Aggregator = $Result.DefaultSelection<Prisma.$AggregatorPayload>
/**
 * Model Farmer
 * 
 */
export type Farmer = $Result.DefaultSelection<Prisma.$FarmerPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Transporter
 * 
 */
export type Transporter = $Result.DefaultSelection<Prisma.$TransporterPayload>
/**
 * Model Produce
 * 
 */
export type Produce = $Result.DefaultSelection<Prisma.$ProducePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  Pending: 'Pending',
  Invited: 'Invited'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.aggregator`: Exposes CRUD operations for the **Aggregator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aggregators
    * const aggregators = await prisma.aggregator.findMany()
    * ```
    */
  get aggregator(): Prisma.AggregatorDelegate<ExtArgs>;

  /**
   * `prisma.farmer`: Exposes CRUD operations for the **Farmer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmers
    * const farmers = await prisma.farmer.findMany()
    * ```
    */
  get farmer(): Prisma.FarmerDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.transporter`: Exposes CRUD operations for the **Transporter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transporters
    * const transporters = await prisma.transporter.findMany()
    * ```
    */
  get transporter(): Prisma.TransporterDelegate<ExtArgs>;

  /**
   * `prisma.produce`: Exposes CRUD operations for the **Produce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produces
    * const produces = await prisma.produce.findMany()
    * ```
    */
  get produce(): Prisma.ProduceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Aggregator: 'Aggregator',
    Farmer: 'Farmer',
    Company: 'Company',
    Transporter: 'Transporter',
    Produce: 'Produce'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'aggregator' | 'farmer' | 'company' | 'transporter' | 'produce'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Aggregator: {
        payload: Prisma.$AggregatorPayload<ExtArgs>
        fields: Prisma.AggregatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AggregatorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AggregatorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>
          }
          findFirst: {
            args: Prisma.AggregatorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AggregatorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>
          }
          findMany: {
            args: Prisma.AggregatorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>[]
          }
          create: {
            args: Prisma.AggregatorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>
          }
          createMany: {
            args: Prisma.AggregatorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AggregatorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>
          }
          update: {
            args: Prisma.AggregatorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>
          }
          deleteMany: {
            args: Prisma.AggregatorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AggregatorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AggregatorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AggregatorPayload>
          }
          aggregate: {
            args: Prisma.AggregatorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAggregator>
          }
          groupBy: {
            args: Prisma.AggregatorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AggregatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AggregatorCountArgs<ExtArgs>,
            result: $Utils.Optional<AggregatorCountAggregateOutputType> | number
          }
        }
      }
      Farmer: {
        payload: Prisma.$FarmerPayload<ExtArgs>
        fields: Prisma.FarmerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          findFirst: {
            args: Prisma.FarmerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          findMany: {
            args: Prisma.FarmerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>[]
          }
          create: {
            args: Prisma.FarmerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          createMany: {
            args: Prisma.FarmerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FarmerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          update: {
            args: Prisma.FarmerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          deleteMany: {
            args: Prisma.FarmerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FarmerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FarmerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          aggregate: {
            args: Prisma.FarmerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFarmer>
          }
          groupBy: {
            args: Prisma.FarmerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FarmerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmerCountArgs<ExtArgs>,
            result: $Utils.Optional<FarmerCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Transporter: {
        payload: Prisma.$TransporterPayload<ExtArgs>
        fields: Prisma.TransporterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransporterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransporterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>
          }
          findFirst: {
            args: Prisma.TransporterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransporterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>
          }
          findMany: {
            args: Prisma.TransporterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>[]
          }
          create: {
            args: Prisma.TransporterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>
          }
          createMany: {
            args: Prisma.TransporterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransporterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>
          }
          update: {
            args: Prisma.TransporterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>
          }
          deleteMany: {
            args: Prisma.TransporterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransporterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransporterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransporterPayload>
          }
          aggregate: {
            args: Prisma.TransporterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransporter>
          }
          groupBy: {
            args: Prisma.TransporterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransporterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransporterCountArgs<ExtArgs>,
            result: $Utils.Optional<TransporterCountAggregateOutputType> | number
          }
        }
      }
      Produce: {
        payload: Prisma.$ProducePayload<ExtArgs>
        fields: Prisma.ProduceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findFirst: {
            args: Prisma.ProduceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findMany: {
            args: Prisma.ProduceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          create: {
            args: Prisma.ProduceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          createMany: {
            args: Prisma.ProduceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProduceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          update: {
            args: Prisma.ProduceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          deleteMany: {
            args: Prisma.ProduceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProduceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProduceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          aggregate: {
            args: Prisma.ProduceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduce>
          }
          groupBy: {
            args: Prisma.ProduceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProduceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduceCountArgs<ExtArgs>,
            result: $Utils.Optional<ProduceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    farmers: number
    transporters: number
    aggregators: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | UserCountOutputTypeCountFarmersArgs
    transporters?: boolean | UserCountOutputTypeCountTransportersArgs
    aggregators?: boolean | UserCountOutputTypeCountAggregatorsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransporterWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAggregatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AggregatorWhereInput
  }



  /**
   * Count Type AggregatorCountOutputType
   */

  export type AggregatorCountOutputType = {
    farmers: number
    transporters: number
  }

  export type AggregatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | AggregatorCountOutputTypeCountFarmersArgs
    transporters?: boolean | AggregatorCountOutputTypeCountTransportersArgs
  }

  // Custom InputTypes

  /**
   * AggregatorCountOutputType without action
   */
  export type AggregatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AggregatorCountOutputType
     */
    select?: AggregatorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AggregatorCountOutputType without action
   */
  export type AggregatorCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * AggregatorCountOutputType without action
   */
  export type AggregatorCountOutputTypeCountTransportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransporterWhereInput
  }



  /**
   * Count Type FarmerCountOutputType
   */

  export type FarmerCountOutputType = {
    list_of_produce: number
    transporters: number
  }

  export type FarmerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list_of_produce?: boolean | FarmerCountOutputTypeCountList_of_produceArgs
    transporters?: boolean | FarmerCountOutputTypeCountTransportersArgs
  }

  // Custom InputTypes

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerCountOutputType
     */
    select?: FarmerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountList_of_produceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
  }


  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountTransportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransporterWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    farmers: number
    aggregators: number
    transporters: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | CompanyCountOutputTypeCountFarmersArgs
    aggregators?: boolean | CompanyCountOutputTypeCountAggregatorsArgs
    transporters?: boolean | CompanyCountOutputTypeCountTransportersArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAggregatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AggregatorWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransporterWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    last_active: string | null
    status: $Enums.UserStatus | null
    phone_number: string | null
    is_active: boolean | null
    pentrar_user_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    last_active: string | null
    status: $Enums.UserStatus | null
    phone_number: string | null
    is_active: boolean | null
    pentrar_user_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    email: number
    password: number
    first_name: number
    last_name: number
    role: number
    last_active: number
    status: number
    phone_number: number
    is_active: number
    pentrar_user_id: number
    verification_code: number
    password_resetCode: number
    isEmail_verified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    role?: true
    last_active?: true
    status?: true
    phone_number?: true
    is_active?: true
    pentrar_user_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    role?: true
    last_active?: true
    status?: true
    phone_number?: true
    is_active?: true
    pentrar_user_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    role?: true
    last_active?: true
    status?: true
    phone_number?: true
    is_active?: true
    pentrar_user_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    email: string
    password: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    last_active: string | null
    status: $Enums.UserStatus
    phone_number: string | null
    is_active: boolean | null
    pentrar_user_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    last_active?: boolean
    status?: boolean
    phone_number?: boolean
    is_active?: boolean
    pentrar_user_id?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    farmers?: boolean | User$farmersArgs<ExtArgs>
    transporters?: boolean | User$transportersArgs<ExtArgs>
    aggregators?: boolean | User$aggregatorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    last_active?: boolean
    status?: boolean
    phone_number?: boolean
    is_active?: boolean
    pentrar_user_id?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | User$farmersArgs<ExtArgs>
    transporters?: boolean | User$transportersArgs<ExtArgs>
    aggregators?: boolean | User$aggregatorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
      transporters: Prisma.$TransporterPayload<ExtArgs>[]
      aggregators: Prisma.$AggregatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      email: string
      password: string | null
      first_name: string | null
      last_name: string | null
      role: string | null
      last_active: string | null
      status: $Enums.UserStatus
      phone_number: string | null
      is_active: boolean | null
      pentrar_user_id: string | null
      verification_code: string | null
      password_resetCode: string | null
      isEmail_verified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    farmers<T extends User$farmersArgs<ExtArgs> = {}>(args?: Subset<T, User$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findMany'> | Null>;

    transporters<T extends User$transportersArgs<ExtArgs> = {}>(args?: Subset<T, User$transportersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findMany'> | Null>;

    aggregators<T extends User$aggregatorsArgs<ExtArgs> = {}>(args?: Subset<T, User$aggregatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly last_active: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly pentrar_user_id: FieldRef<"User", 'String'>
    readonly verification_code: FieldRef<"User", 'String'>
    readonly password_resetCode: FieldRef<"User", 'String'>
    readonly isEmail_verified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.farmers
   */
  export type User$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }


  /**
   * User.transporters
   */
  export type User$transportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    where?: TransporterWhereInput
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    cursor?: TransporterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * User.aggregators
   */
  export type User$aggregatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    where?: AggregatorWhereInput
    orderBy?: AggregatorOrderByWithRelationInput | AggregatorOrderByWithRelationInput[]
    cursor?: AggregatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AggregatorScalarFieldEnum | AggregatorScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Aggregator
   */

  export type AggregateAggregator = {
    _count: AggregatorCountAggregateOutputType | null
    _min: AggregatorMinAggregateOutputType | null
    _max: AggregatorMaxAggregateOutputType | null
  }

  export type AggregatorMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_active: boolean | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    last_active: string | null
    phone_number: string | null
    pentrar_aggregator_id: string | null
    created_by_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    status: $Enums.UserStatus | null
    role: string | null
  }

  export type AggregatorMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_active: boolean | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    last_active: string | null
    phone_number: string | null
    pentrar_aggregator_id: string | null
    created_by_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    status: $Enums.UserStatus | null
    role: string | null
  }

  export type AggregatorCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_active: number
    email: number
    password: number
    first_name: number
    last_name: number
    last_active: number
    phone_number: number
    pentrar_aggregator_id: number
    created_by_id: number
    verification_code: number
    password_resetCode: number
    isEmail_verified: number
    status: number
    role: number
    _all: number
  }


  export type AggregatorMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_active?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    last_active?: true
    phone_number?: true
    pentrar_aggregator_id?: true
    created_by_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    status?: true
    role?: true
  }

  export type AggregatorMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_active?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    last_active?: true
    phone_number?: true
    pentrar_aggregator_id?: true
    created_by_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    status?: true
    role?: true
  }

  export type AggregatorCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_active?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    last_active?: true
    phone_number?: true
    pentrar_aggregator_id?: true
    created_by_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    status?: true
    role?: true
    _all?: true
  }

  export type AggregatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aggregator to aggregate.
     */
    where?: AggregatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aggregators to fetch.
     */
    orderBy?: AggregatorOrderByWithRelationInput | AggregatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AggregatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aggregators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aggregators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aggregators
    **/
    _count?: true | AggregatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AggregatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AggregatorMaxAggregateInputType
  }

  export type GetAggregatorAggregateType<T extends AggregatorAggregateArgs> = {
        [P in keyof T & keyof AggregateAggregator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAggregator[P]>
      : GetScalarType<T[P], AggregateAggregator[P]>
  }




  export type AggregatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AggregatorWhereInput
    orderBy?: AggregatorOrderByWithAggregationInput | AggregatorOrderByWithAggregationInput[]
    by: AggregatorScalarFieldEnum[] | AggregatorScalarFieldEnum
    having?: AggregatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AggregatorCountAggregateInputType | true
    _min?: AggregatorMinAggregateInputType
    _max?: AggregatorMaxAggregateInputType
  }

  export type AggregatorGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_active: boolean | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    last_active: string | null
    phone_number: string | null
    pentrar_aggregator_id: string | null
    created_by_id: string
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean
    status: $Enums.UserStatus
    role: string | null
    _count: AggregatorCountAggregateOutputType | null
    _min: AggregatorMinAggregateOutputType | null
    _max: AggregatorMaxAggregateOutputType | null
  }

  type GetAggregatorGroupByPayload<T extends AggregatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AggregatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AggregatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AggregatorGroupByOutputType[P]>
            : GetScalarType<T[P], AggregatorGroupByOutputType[P]>
        }
      >
    >


  export type AggregatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_active?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    last_active?: boolean
    phone_number?: boolean
    pentrar_aggregator_id?: boolean
    created_by_id?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    status?: boolean
    role?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | Aggregator$userArgs<ExtArgs>
    farmers?: boolean | Aggregator$farmersArgs<ExtArgs>
    transporters?: boolean | Aggregator$transportersArgs<ExtArgs>
    _count?: boolean | AggregatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aggregator"]>

  export type AggregatorSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_active?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    last_active?: boolean
    phone_number?: boolean
    pentrar_aggregator_id?: boolean
    created_by_id?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    status?: boolean
    role?: boolean
  }

  export type AggregatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | Aggregator$userArgs<ExtArgs>
    farmers?: boolean | Aggregator$farmersArgs<ExtArgs>
    transporters?: boolean | Aggregator$transportersArgs<ExtArgs>
    _count?: boolean | AggregatorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AggregatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aggregator"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
      transporters: Prisma.$TransporterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      is_active: boolean | null
      email: string | null
      password: string | null
      first_name: string | null
      last_name: string | null
      last_active: string | null
      phone_number: string | null
      pentrar_aggregator_id: string | null
      created_by_id: string
      verification_code: string | null
      password_resetCode: string | null
      isEmail_verified: boolean
      status: $Enums.UserStatus
      role: string | null
    }, ExtArgs["result"]["aggregator"]>
    composites: {}
  }


  type AggregatorGetPayload<S extends boolean | null | undefined | AggregatorDefaultArgs> = $Result.GetResult<Prisma.$AggregatorPayload, S>

  type AggregatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AggregatorFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AggregatorCountAggregateInputType | true
    }

  export interface AggregatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aggregator'], meta: { name: 'Aggregator' } }
    /**
     * Find zero or one Aggregator that matches the filter.
     * @param {AggregatorFindUniqueArgs} args - Arguments to find a Aggregator
     * @example
     * // Get one Aggregator
     * const aggregator = await prisma.aggregator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AggregatorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AggregatorFindUniqueArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aggregator that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AggregatorFindUniqueOrThrowArgs} args - Arguments to find a Aggregator
     * @example
     * // Get one Aggregator
     * const aggregator = await prisma.aggregator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AggregatorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AggregatorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aggregator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorFindFirstArgs} args - Arguments to find a Aggregator
     * @example
     * // Get one Aggregator
     * const aggregator = await prisma.aggregator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AggregatorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AggregatorFindFirstArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aggregator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorFindFirstOrThrowArgs} args - Arguments to find a Aggregator
     * @example
     * // Get one Aggregator
     * const aggregator = await prisma.aggregator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AggregatorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AggregatorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aggregators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aggregators
     * const aggregators = await prisma.aggregator.findMany()
     * 
     * // Get first 10 Aggregators
     * const aggregators = await prisma.aggregator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aggregatorWithIdOnly = await prisma.aggregator.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AggregatorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AggregatorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aggregator.
     * @param {AggregatorCreateArgs} args - Arguments to create a Aggregator.
     * @example
     * // Create one Aggregator
     * const Aggregator = await prisma.aggregator.create({
     *   data: {
     *     // ... data to create a Aggregator
     *   }
     * })
     * 
    **/
    create<T extends AggregatorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AggregatorCreateArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aggregators.
     *     @param {AggregatorCreateManyArgs} args - Arguments to create many Aggregators.
     *     @example
     *     // Create many Aggregators
     *     const aggregator = await prisma.aggregator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AggregatorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AggregatorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aggregator.
     * @param {AggregatorDeleteArgs} args - Arguments to delete one Aggregator.
     * @example
     * // Delete one Aggregator
     * const Aggregator = await prisma.aggregator.delete({
     *   where: {
     *     // ... filter to delete one Aggregator
     *   }
     * })
     * 
    **/
    delete<T extends AggregatorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AggregatorDeleteArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aggregator.
     * @param {AggregatorUpdateArgs} args - Arguments to update one Aggregator.
     * @example
     * // Update one Aggregator
     * const aggregator = await prisma.aggregator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AggregatorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AggregatorUpdateArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aggregators.
     * @param {AggregatorDeleteManyArgs} args - Arguments to filter Aggregators to delete.
     * @example
     * // Delete a few Aggregators
     * const { count } = await prisma.aggregator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AggregatorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AggregatorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aggregators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aggregators
     * const aggregator = await prisma.aggregator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AggregatorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AggregatorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aggregator.
     * @param {AggregatorUpsertArgs} args - Arguments to update or create a Aggregator.
     * @example
     * // Update or create a Aggregator
     * const aggregator = await prisma.aggregator.upsert({
     *   create: {
     *     // ... data to create a Aggregator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aggregator we want to update
     *   }
     * })
    **/
    upsert<T extends AggregatorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AggregatorUpsertArgs<ExtArgs>>
    ): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aggregators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorCountArgs} args - Arguments to filter Aggregators to count.
     * @example
     * // Count the number of Aggregators
     * const count = await prisma.aggregator.count({
     *   where: {
     *     // ... the filter for the Aggregators we want to count
     *   }
     * })
    **/
    count<T extends AggregatorCountArgs>(
      args?: Subset<T, AggregatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AggregatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aggregator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AggregatorAggregateArgs>(args: Subset<T, AggregatorAggregateArgs>): Prisma.PrismaPromise<GetAggregatorAggregateType<T>>

    /**
     * Group by Aggregator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AggregatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AggregatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AggregatorGroupByArgs['orderBy'] }
        : { orderBy?: AggregatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AggregatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAggregatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aggregator model
   */
  readonly fields: AggregatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aggregator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AggregatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends Aggregator$userArgs<ExtArgs> = {}>(args?: Subset<T, Aggregator$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    farmers<T extends Aggregator$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Aggregator$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findMany'> | Null>;

    transporters<T extends Aggregator$transportersArgs<ExtArgs> = {}>(args?: Subset<T, Aggregator$transportersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Aggregator model
   */ 
  interface AggregatorFieldRefs {
    readonly id: FieldRef<"Aggregator", 'String'>
    readonly created_at: FieldRef<"Aggregator", 'DateTime'>
    readonly updated_at: FieldRef<"Aggregator", 'DateTime'>
    readonly is_active: FieldRef<"Aggregator", 'Boolean'>
    readonly email: FieldRef<"Aggregator", 'String'>
    readonly password: FieldRef<"Aggregator", 'String'>
    readonly first_name: FieldRef<"Aggregator", 'String'>
    readonly last_name: FieldRef<"Aggregator", 'String'>
    readonly last_active: FieldRef<"Aggregator", 'String'>
    readonly phone_number: FieldRef<"Aggregator", 'String'>
    readonly pentrar_aggregator_id: FieldRef<"Aggregator", 'String'>
    readonly created_by_id: FieldRef<"Aggregator", 'String'>
    readonly verification_code: FieldRef<"Aggregator", 'String'>
    readonly password_resetCode: FieldRef<"Aggregator", 'String'>
    readonly isEmail_verified: FieldRef<"Aggregator", 'Boolean'>
    readonly status: FieldRef<"Aggregator", 'UserStatus'>
    readonly role: FieldRef<"Aggregator", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Aggregator findUnique
   */
  export type AggregatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * Filter, which Aggregator to fetch.
     */
    where: AggregatorWhereUniqueInput
  }


  /**
   * Aggregator findUniqueOrThrow
   */
  export type AggregatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * Filter, which Aggregator to fetch.
     */
    where: AggregatorWhereUniqueInput
  }


  /**
   * Aggregator findFirst
   */
  export type AggregatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * Filter, which Aggregator to fetch.
     */
    where?: AggregatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aggregators to fetch.
     */
    orderBy?: AggregatorOrderByWithRelationInput | AggregatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aggregators.
     */
    cursor?: AggregatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aggregators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aggregators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aggregators.
     */
    distinct?: AggregatorScalarFieldEnum | AggregatorScalarFieldEnum[]
  }


  /**
   * Aggregator findFirstOrThrow
   */
  export type AggregatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * Filter, which Aggregator to fetch.
     */
    where?: AggregatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aggregators to fetch.
     */
    orderBy?: AggregatorOrderByWithRelationInput | AggregatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aggregators.
     */
    cursor?: AggregatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aggregators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aggregators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aggregators.
     */
    distinct?: AggregatorScalarFieldEnum | AggregatorScalarFieldEnum[]
  }


  /**
   * Aggregator findMany
   */
  export type AggregatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * Filter, which Aggregators to fetch.
     */
    where?: AggregatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aggregators to fetch.
     */
    orderBy?: AggregatorOrderByWithRelationInput | AggregatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aggregators.
     */
    cursor?: AggregatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aggregators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aggregators.
     */
    skip?: number
    distinct?: AggregatorScalarFieldEnum | AggregatorScalarFieldEnum[]
  }


  /**
   * Aggregator create
   */
  export type AggregatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Aggregator.
     */
    data: XOR<AggregatorCreateInput, AggregatorUncheckedCreateInput>
  }


  /**
   * Aggregator createMany
   */
  export type AggregatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aggregators.
     */
    data: AggregatorCreateManyInput | AggregatorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Aggregator update
   */
  export type AggregatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Aggregator.
     */
    data: XOR<AggregatorUpdateInput, AggregatorUncheckedUpdateInput>
    /**
     * Choose, which Aggregator to update.
     */
    where: AggregatorWhereUniqueInput
  }


  /**
   * Aggregator updateMany
   */
  export type AggregatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aggregators.
     */
    data: XOR<AggregatorUpdateManyMutationInput, AggregatorUncheckedUpdateManyInput>
    /**
     * Filter which Aggregators to update
     */
    where?: AggregatorWhereInput
  }


  /**
   * Aggregator upsert
   */
  export type AggregatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Aggregator to update in case it exists.
     */
    where: AggregatorWhereUniqueInput
    /**
     * In case the Aggregator found by the `where` argument doesn't exist, create a new Aggregator with this data.
     */
    create: XOR<AggregatorCreateInput, AggregatorUncheckedCreateInput>
    /**
     * In case the Aggregator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AggregatorUpdateInput, AggregatorUncheckedUpdateInput>
  }


  /**
   * Aggregator delete
   */
  export type AggregatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    /**
     * Filter which Aggregator to delete.
     */
    where: AggregatorWhereUniqueInput
  }


  /**
   * Aggregator deleteMany
   */
  export type AggregatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aggregators to delete
     */
    where?: AggregatorWhereInput
  }


  /**
   * Aggregator.user
   */
  export type Aggregator$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Aggregator.farmers
   */
  export type Aggregator$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }


  /**
   * Aggregator.transporters
   */
  export type Aggregator$transportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    where?: TransporterWhereInput
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    cursor?: TransporterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * Aggregator without action
   */
  export type AggregatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
  }



  /**
   * Model Farmer
   */

  export type AggregateFarmer = {
    _count: FarmerCountAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  export type FarmerMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    phone_number: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    pentrar_farmer_id: string | null
    created_by_id: string | null
    last_active: string | null
    status: $Enums.UserStatus | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    role: string | null
    is_active: boolean | null
  }

  export type FarmerMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    phone_number: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    pentrar_farmer_id: string | null
    created_by_id: string | null
    last_active: string | null
    status: $Enums.UserStatus | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    role: string | null
    is_active: boolean | null
  }

  export type FarmerCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    email: number
    phone_number: number
    password: number
    first_name: number
    last_name: number
    type_of_produce: number
    pentrar_farmer_id: number
    created_by_id: number
    last_active: number
    status: number
    verification_code: number
    password_resetCode: number
    isEmail_verified: number
    role: number
    is_active: number
    _all: number
  }


  export type FarmerMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    phone_number?: true
    password?: true
    first_name?: true
    last_name?: true
    pentrar_farmer_id?: true
    created_by_id?: true
    last_active?: true
    status?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    role?: true
    is_active?: true
  }

  export type FarmerMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    phone_number?: true
    password?: true
    first_name?: true
    last_name?: true
    pentrar_farmer_id?: true
    created_by_id?: true
    last_active?: true
    status?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    role?: true
    is_active?: true
  }

  export type FarmerCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    phone_number?: true
    password?: true
    first_name?: true
    last_name?: true
    type_of_produce?: true
    pentrar_farmer_id?: true
    created_by_id?: true
    last_active?: true
    status?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    role?: true
    is_active?: true
    _all?: true
  }

  export type FarmerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmer to aggregate.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farmers
    **/
    _count?: true | FarmerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmerMaxAggregateInputType
  }

  export type GetFarmerAggregateType<T extends FarmerAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmer[P]>
      : GetScalarType<T[P], AggregateFarmer[P]>
  }




  export type FarmerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithAggregationInput | FarmerOrderByWithAggregationInput[]
    by: FarmerScalarFieldEnum[] | FarmerScalarFieldEnum
    having?: FarmerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmerCountAggregateInputType | true
    _min?: FarmerMinAggregateInputType
    _max?: FarmerMaxAggregateInputType
  }

  export type FarmerGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    email: string | null
    phone_number: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    type_of_produce: string[]
    pentrar_farmer_id: string | null
    created_by_id: string
    last_active: string | null
    status: $Enums.UserStatus
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean
    role: string | null
    is_active: boolean | null
    _count: FarmerCountAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  type GetFarmerGroupByPayload<T extends FarmerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerGroupByOutputType[P]>
        }
      >
    >


  export type FarmerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    type_of_produce?: boolean
    pentrar_farmer_id?: boolean
    created_by_id?: boolean
    last_active?: boolean
    status?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    role?: boolean
    is_active?: boolean
    aggregator?: boolean | AggregatorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    list_of_produce?: boolean | Farmer$list_of_produceArgs<ExtArgs>
    transporters?: boolean | Farmer$transportersArgs<ExtArgs>
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmer"]>

  export type FarmerSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    type_of_produce?: boolean
    pentrar_farmer_id?: boolean
    created_by_id?: boolean
    last_active?: boolean
    status?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    role?: boolean
    is_active?: boolean
  }

  export type FarmerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aggregator?: boolean | AggregatorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    list_of_produce?: boolean | Farmer$list_of_produceArgs<ExtArgs>
    transporters?: boolean | Farmer$transportersArgs<ExtArgs>
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FarmerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farmer"
    objects: {
      aggregator: Prisma.$AggregatorPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      list_of_produce: Prisma.$ProducePayload<ExtArgs>[]
      transporters: Prisma.$TransporterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      email: string | null
      phone_number: string | null
      password: string | null
      first_name: string | null
      last_name: string | null
      type_of_produce: string[]
      pentrar_farmer_id: string | null
      created_by_id: string
      last_active: string | null
      status: $Enums.UserStatus
      verification_code: string | null
      password_resetCode: string | null
      isEmail_verified: boolean
      role: string | null
      is_active: boolean | null
    }, ExtArgs["result"]["farmer"]>
    composites: {}
  }


  type FarmerGetPayload<S extends boolean | null | undefined | FarmerDefaultArgs> = $Result.GetResult<Prisma.$FarmerPayload, S>

  type FarmerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FarmerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FarmerCountAggregateInputType | true
    }

  export interface FarmerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farmer'], meta: { name: 'Farmer' } }
    /**
     * Find zero or one Farmer that matches the filter.
     * @param {FarmerFindUniqueArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FarmerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FarmerFindUniqueArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Farmer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FarmerFindUniqueOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FarmerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FarmerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Farmer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FarmerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FarmerFindFirstArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Farmer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FarmerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FarmerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmer.findMany()
     * 
     * // Get first 10 Farmers
     * const farmers = await prisma.farmer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmerWithIdOnly = await prisma.farmer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FarmerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FarmerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Farmer.
     * @param {FarmerCreateArgs} args - Arguments to create a Farmer.
     * @example
     * // Create one Farmer
     * const Farmer = await prisma.farmer.create({
     *   data: {
     *     // ... data to create a Farmer
     *   }
     * })
     * 
    **/
    create<T extends FarmerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FarmerCreateArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Farmers.
     *     @param {FarmerCreateManyArgs} args - Arguments to create many Farmers.
     *     @example
     *     // Create many Farmers
     *     const farmer = await prisma.farmer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FarmerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FarmerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farmer.
     * @param {FarmerDeleteArgs} args - Arguments to delete one Farmer.
     * @example
     * // Delete one Farmer
     * const Farmer = await prisma.farmer.delete({
     *   where: {
     *     // ... filter to delete one Farmer
     *   }
     * })
     * 
    **/
    delete<T extends FarmerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FarmerDeleteArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Farmer.
     * @param {FarmerUpdateArgs} args - Arguments to update one Farmer.
     * @example
     * // Update one Farmer
     * const farmer = await prisma.farmer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FarmerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FarmerUpdateArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Farmers.
     * @param {FarmerDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FarmerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FarmerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FarmerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FarmerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farmer.
     * @param {FarmerUpsertArgs} args - Arguments to update or create a Farmer.
     * @example
     * // Update or create a Farmer
     * const farmer = await prisma.farmer.upsert({
     *   create: {
     *     // ... data to create a Farmer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmer we want to update
     *   }
     * })
    **/
    upsert<T extends FarmerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FarmerUpsertArgs<ExtArgs>>
    ): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmer.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
    **/
    count<T extends FarmerCountArgs>(
      args?: Subset<T, FarmerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmerAggregateArgs>(args: Subset<T, FarmerAggregateArgs>): Prisma.PrismaPromise<GetFarmerAggregateType<T>>

    /**
     * Group by Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmerGroupByArgs['orderBy'] }
        : { orderBy?: FarmerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farmer model
   */
  readonly fields: FarmerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farmer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    aggregator<T extends AggregatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AggregatorDefaultArgs<ExtArgs>>): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    list_of_produce<T extends Farmer$list_of_produceArgs<ExtArgs> = {}>(args?: Subset<T, Farmer$list_of_produceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'findMany'> | Null>;

    transporters<T extends Farmer$transportersArgs<ExtArgs> = {}>(args?: Subset<T, Farmer$transportersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Farmer model
   */ 
  interface FarmerFieldRefs {
    readonly id: FieldRef<"Farmer", 'String'>
    readonly created_at: FieldRef<"Farmer", 'DateTime'>
    readonly updated_at: FieldRef<"Farmer", 'DateTime'>
    readonly email: FieldRef<"Farmer", 'String'>
    readonly phone_number: FieldRef<"Farmer", 'String'>
    readonly password: FieldRef<"Farmer", 'String'>
    readonly first_name: FieldRef<"Farmer", 'String'>
    readonly last_name: FieldRef<"Farmer", 'String'>
    readonly type_of_produce: FieldRef<"Farmer", 'String[]'>
    readonly pentrar_farmer_id: FieldRef<"Farmer", 'String'>
    readonly created_by_id: FieldRef<"Farmer", 'String'>
    readonly last_active: FieldRef<"Farmer", 'String'>
    readonly status: FieldRef<"Farmer", 'UserStatus'>
    readonly verification_code: FieldRef<"Farmer", 'String'>
    readonly password_resetCode: FieldRef<"Farmer", 'String'>
    readonly isEmail_verified: FieldRef<"Farmer", 'Boolean'>
    readonly role: FieldRef<"Farmer", 'String'>
    readonly is_active: FieldRef<"Farmer", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Farmer findUnique
   */
  export type FarmerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer findUniqueOrThrow
   */
  export type FarmerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer findFirst
   */
  export type FarmerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }


  /**
   * Farmer findFirstOrThrow
   */
  export type FarmerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }


  /**
   * Farmer findMany
   */
  export type FarmerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmers to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }


  /**
   * Farmer create
   */
  export type FarmerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * The data needed to create a Farmer.
     */
    data: XOR<FarmerCreateInput, FarmerUncheckedCreateInput>
  }


  /**
   * Farmer createMany
   */
  export type FarmerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farmers.
     */
    data: FarmerCreateManyInput | FarmerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Farmer update
   */
  export type FarmerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * The data needed to update a Farmer.
     */
    data: XOR<FarmerUpdateInput, FarmerUncheckedUpdateInput>
    /**
     * Choose, which Farmer to update.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer updateMany
   */
  export type FarmerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farmers.
     */
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyInput>
    /**
     * Filter which Farmers to update
     */
    where?: FarmerWhereInput
  }


  /**
   * Farmer upsert
   */
  export type FarmerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * The filter to search for the Farmer to update in case it exists.
     */
    where: FarmerWhereUniqueInput
    /**
     * In case the Farmer found by the `where` argument doesn't exist, create a new Farmer with this data.
     */
    create: XOR<FarmerCreateInput, FarmerUncheckedCreateInput>
    /**
     * In case the Farmer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmerUpdateInput, FarmerUncheckedUpdateInput>
  }


  /**
   * Farmer delete
   */
  export type FarmerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter which Farmer to delete.
     */
    where: FarmerWhereUniqueInput
  }


  /**
   * Farmer deleteMany
   */
  export type FarmerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmers to delete
     */
    where?: FarmerWhereInput
  }


  /**
   * Farmer.list_of_produce
   */
  export type Farmer$list_of_produceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    cursor?: ProduceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }


  /**
   * Farmer.transporters
   */
  export type Farmer$transportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    where?: TransporterWhereInput
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    cursor?: TransporterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * Farmer without action
   */
  export type FarmerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
  }



  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    phone_number: string | null
    password: string | null
    company_name: string | null
    company_address: string | null
    legal_entity_name: string | null
    tax_identification_number: string | null
    pentrar_company_id: string | null
    created_by_id: string | null
    last_active: string | null
    company_type: string | null
    point_of_contact: string | null
    parent_company: string | null
    subsidiaries_company: string | null
    annual_revenue: string | null
    financial_statement: string | null
    status: $Enums.UserStatus | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    role: string | null
    is_active: boolean | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    phone_number: string | null
    password: string | null
    company_name: string | null
    company_address: string | null
    legal_entity_name: string | null
    tax_identification_number: string | null
    pentrar_company_id: string | null
    created_by_id: string | null
    last_active: string | null
    company_type: string | null
    point_of_contact: string | null
    parent_company: string | null
    subsidiaries_company: string | null
    annual_revenue: string | null
    financial_statement: string | null
    status: $Enums.UserStatus | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    role: string | null
    is_active: boolean | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    email: number
    phone_number: number
    password: number
    company_name: number
    company_address: number
    legal_entity_name: number
    tax_identification_number: number
    pentrar_company_id: number
    created_by_id: number
    last_active: number
    company_type: number
    point_of_contact: number
    parent_company: number
    subsidiaries_company: number
    annual_revenue: number
    financial_statement: number
    status: number
    verification_code: number
    password_resetCode: number
    isEmail_verified: number
    role: number
    is_active: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    phone_number?: true
    password?: true
    company_name?: true
    company_address?: true
    legal_entity_name?: true
    tax_identification_number?: true
    pentrar_company_id?: true
    created_by_id?: true
    last_active?: true
    company_type?: true
    point_of_contact?: true
    parent_company?: true
    subsidiaries_company?: true
    annual_revenue?: true
    financial_statement?: true
    status?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    role?: true
    is_active?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    phone_number?: true
    password?: true
    company_name?: true
    company_address?: true
    legal_entity_name?: true
    tax_identification_number?: true
    pentrar_company_id?: true
    created_by_id?: true
    last_active?: true
    company_type?: true
    point_of_contact?: true
    parent_company?: true
    subsidiaries_company?: true
    annual_revenue?: true
    financial_statement?: true
    status?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    role?: true
    is_active?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    phone_number?: true
    password?: true
    company_name?: true
    company_address?: true
    legal_entity_name?: true
    tax_identification_number?: true
    pentrar_company_id?: true
    created_by_id?: true
    last_active?: true
    company_type?: true
    point_of_contact?: true
    parent_company?: true
    subsidiaries_company?: true
    annual_revenue?: true
    financial_statement?: true
    status?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    role?: true
    is_active?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    email: string | null
    phone_number: string | null
    password: string | null
    company_name: string | null
    company_address: string | null
    legal_entity_name: string | null
    tax_identification_number: string | null
    pentrar_company_id: string | null
    created_by_id: string
    last_active: string | null
    company_type: string | null
    point_of_contact: string | null
    parent_company: string | null
    subsidiaries_company: string | null
    annual_revenue: string | null
    financial_statement: string | null
    status: $Enums.UserStatus
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean
    role: string | null
    is_active: boolean | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    company_name?: boolean
    company_address?: boolean
    legal_entity_name?: boolean
    tax_identification_number?: boolean
    pentrar_company_id?: boolean
    created_by_id?: boolean
    last_active?: boolean
    company_type?: boolean
    point_of_contact?: boolean
    parent_company?: boolean
    subsidiaries_company?: boolean
    annual_revenue?: boolean
    financial_statement?: boolean
    status?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    role?: boolean
    is_active?: boolean
    farmers?: boolean | Company$farmersArgs<ExtArgs>
    aggregators?: boolean | Company$aggregatorsArgs<ExtArgs>
    transporters?: boolean | Company$transportersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    company_name?: boolean
    company_address?: boolean
    legal_entity_name?: boolean
    tax_identification_number?: boolean
    pentrar_company_id?: boolean
    created_by_id?: boolean
    last_active?: boolean
    company_type?: boolean
    point_of_contact?: boolean
    parent_company?: boolean
    subsidiaries_company?: boolean
    annual_revenue?: boolean
    financial_statement?: boolean
    status?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    role?: boolean
    is_active?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | Company$farmersArgs<ExtArgs>
    aggregators?: boolean | Company$aggregatorsArgs<ExtArgs>
    transporters?: boolean | Company$transportersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
      aggregators: Prisma.$AggregatorPayload<ExtArgs>[]
      transporters: Prisma.$TransporterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      email: string | null
      phone_number: string | null
      password: string | null
      company_name: string | null
      company_address: string | null
      legal_entity_name: string | null
      tax_identification_number: string | null
      pentrar_company_id: string | null
      created_by_id: string
      last_active: string | null
      company_type: string | null
      point_of_contact: string | null
      parent_company: string | null
      subsidiaries_company: string | null
      annual_revenue: string | null
      financial_statement: string | null
      status: $Enums.UserStatus
      verification_code: string | null
      password_resetCode: string | null
      isEmail_verified: boolean
      role: string | null
      is_active: boolean | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    farmers<T extends Company$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Company$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findMany'> | Null>;

    aggregators<T extends Company$aggregatorsArgs<ExtArgs> = {}>(args?: Subset<T, Company$aggregatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findMany'> | Null>;

    transporters<T extends Company$transportersArgs<ExtArgs> = {}>(args?: Subset<T, Company$transportersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
    readonly updated_at: FieldRef<"Company", 'DateTime'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone_number: FieldRef<"Company", 'String'>
    readonly password: FieldRef<"Company", 'String'>
    readonly company_name: FieldRef<"Company", 'String'>
    readonly company_address: FieldRef<"Company", 'String'>
    readonly legal_entity_name: FieldRef<"Company", 'String'>
    readonly tax_identification_number: FieldRef<"Company", 'String'>
    readonly pentrar_company_id: FieldRef<"Company", 'String'>
    readonly created_by_id: FieldRef<"Company", 'String'>
    readonly last_active: FieldRef<"Company", 'String'>
    readonly company_type: FieldRef<"Company", 'String'>
    readonly point_of_contact: FieldRef<"Company", 'String'>
    readonly parent_company: FieldRef<"Company", 'String'>
    readonly subsidiaries_company: FieldRef<"Company", 'String'>
    readonly annual_revenue: FieldRef<"Company", 'String'>
    readonly financial_statement: FieldRef<"Company", 'String'>
    readonly status: FieldRef<"Company", 'UserStatus'>
    readonly verification_code: FieldRef<"Company", 'String'>
    readonly password_resetCode: FieldRef<"Company", 'String'>
    readonly isEmail_verified: FieldRef<"Company", 'Boolean'>
    readonly role: FieldRef<"Company", 'String'>
    readonly is_active: FieldRef<"Company", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.farmers
   */
  export type Company$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }


  /**
   * Company.aggregators
   */
  export type Company$aggregatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aggregator
     */
    select?: AggregatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AggregatorInclude<ExtArgs> | null
    where?: AggregatorWhereInput
    orderBy?: AggregatorOrderByWithRelationInput | AggregatorOrderByWithRelationInput[]
    cursor?: AggregatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AggregatorScalarFieldEnum | AggregatorScalarFieldEnum[]
  }


  /**
   * Company.transporters
   */
  export type Company$transportersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    where?: TransporterWhereInput
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    cursor?: TransporterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model Transporter
   */

  export type AggregateTransporter = {
    _count: TransporterCountAggregateOutputType | null
    _min: TransporterMinAggregateOutputType | null
    _max: TransporterMaxAggregateOutputType | null
  }

  export type TransporterMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    last_active: string | null
    status: $Enums.UserStatus | null
    phone_number: string | null
    is_active: boolean | null
    pentrar_trans_id: string | null
    created_by_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    vehicle_type: string | null
    vehicle_number: string | null
    Vehicle_license: string | null
  }

  export type TransporterMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    last_active: string | null
    status: $Enums.UserStatus | null
    phone_number: string | null
    is_active: boolean | null
    pentrar_trans_id: string | null
    created_by_id: string | null
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean | null
    vehicle_type: string | null
    vehicle_number: string | null
    Vehicle_license: string | null
  }

  export type TransporterCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    email: number
    password: number
    first_name: number
    last_name: number
    role: number
    last_active: number
    status: number
    phone_number: number
    is_active: number
    pentrar_trans_id: number
    created_by_id: number
    verification_code: number
    password_resetCode: number
    isEmail_verified: number
    vehicle_type: number
    vehicle_number: number
    Vehicle_license: number
    _all: number
  }


  export type TransporterMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    role?: true
    last_active?: true
    status?: true
    phone_number?: true
    is_active?: true
    pentrar_trans_id?: true
    created_by_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    vehicle_type?: true
    vehicle_number?: true
    Vehicle_license?: true
  }

  export type TransporterMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    role?: true
    last_active?: true
    status?: true
    phone_number?: true
    is_active?: true
    pentrar_trans_id?: true
    created_by_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    vehicle_type?: true
    vehicle_number?: true
    Vehicle_license?: true
  }

  export type TransporterCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    role?: true
    last_active?: true
    status?: true
    phone_number?: true
    is_active?: true
    pentrar_trans_id?: true
    created_by_id?: true
    verification_code?: true
    password_resetCode?: true
    isEmail_verified?: true
    vehicle_type?: true
    vehicle_number?: true
    Vehicle_license?: true
    _all?: true
  }

  export type TransporterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transporter to aggregate.
     */
    where?: TransporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transporters to fetch.
     */
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transporters
    **/
    _count?: true | TransporterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransporterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransporterMaxAggregateInputType
  }

  export type GetTransporterAggregateType<T extends TransporterAggregateArgs> = {
        [P in keyof T & keyof AggregateTransporter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransporter[P]>
      : GetScalarType<T[P], AggregateTransporter[P]>
  }




  export type TransporterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransporterWhereInput
    orderBy?: TransporterOrderByWithAggregationInput | TransporterOrderByWithAggregationInput[]
    by: TransporterScalarFieldEnum[] | TransporterScalarFieldEnum
    having?: TransporterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransporterCountAggregateInputType | true
    _min?: TransporterMinAggregateInputType
    _max?: TransporterMaxAggregateInputType
  }

  export type TransporterGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    email: string
    password: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    last_active: string | null
    status: $Enums.UserStatus
    phone_number: string | null
    is_active: boolean | null
    pentrar_trans_id: string | null
    created_by_id: string
    verification_code: string | null
    password_resetCode: string | null
    isEmail_verified: boolean
    vehicle_type: string | null
    vehicle_number: string | null
    Vehicle_license: string | null
    _count: TransporterCountAggregateOutputType | null
    _min: TransporterMinAggregateOutputType | null
    _max: TransporterMaxAggregateOutputType | null
  }

  type GetTransporterGroupByPayload<T extends TransporterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransporterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransporterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransporterGroupByOutputType[P]>
            : GetScalarType<T[P], TransporterGroupByOutputType[P]>
        }
      >
    >


  export type TransporterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    last_active?: boolean
    status?: boolean
    phone_number?: boolean
    is_active?: boolean
    pentrar_trans_id?: boolean
    created_by_id?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    vehicle_type?: boolean
    vehicle_number?: boolean
    Vehicle_license?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    aggregator?: boolean | AggregatorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transporter"]>

  export type TransporterSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    last_active?: boolean
    status?: boolean
    phone_number?: boolean
    is_active?: boolean
    pentrar_trans_id?: boolean
    created_by_id?: boolean
    verification_code?: boolean
    password_resetCode?: boolean
    isEmail_verified?: boolean
    vehicle_type?: boolean
    vehicle_number?: boolean
    Vehicle_license?: boolean
  }

  export type TransporterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    aggregator?: boolean | AggregatorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
  }


  export type $TransporterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transporter"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      aggregator: Prisma.$AggregatorPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      farmer: Prisma.$FarmerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      email: string
      password: string | null
      first_name: string | null
      last_name: string | null
      role: string | null
      last_active: string | null
      status: $Enums.UserStatus
      phone_number: string | null
      is_active: boolean | null
      pentrar_trans_id: string | null
      created_by_id: string
      verification_code: string | null
      password_resetCode: string | null
      isEmail_verified: boolean
      vehicle_type: string | null
      vehicle_number: string | null
      Vehicle_license: string | null
    }, ExtArgs["result"]["transporter"]>
    composites: {}
  }


  type TransporterGetPayload<S extends boolean | null | undefined | TransporterDefaultArgs> = $Result.GetResult<Prisma.$TransporterPayload, S>

  type TransporterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransporterFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TransporterCountAggregateInputType | true
    }

  export interface TransporterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transporter'], meta: { name: 'Transporter' } }
    /**
     * Find zero or one Transporter that matches the filter.
     * @param {TransporterFindUniqueArgs} args - Arguments to find a Transporter
     * @example
     * // Get one Transporter
     * const transporter = await prisma.transporter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransporterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransporterFindUniqueArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transporter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransporterFindUniqueOrThrowArgs} args - Arguments to find a Transporter
     * @example
     * // Get one Transporter
     * const transporter = await prisma.transporter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransporterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransporterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transporter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterFindFirstArgs} args - Arguments to find a Transporter
     * @example
     * // Get one Transporter
     * const transporter = await prisma.transporter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransporterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransporterFindFirstArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transporter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterFindFirstOrThrowArgs} args - Arguments to find a Transporter
     * @example
     * // Get one Transporter
     * const transporter = await prisma.transporter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransporterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransporterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transporters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transporters
     * const transporters = await prisma.transporter.findMany()
     * 
     * // Get first 10 Transporters
     * const transporters = await prisma.transporter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transporterWithIdOnly = await prisma.transporter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransporterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransporterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transporter.
     * @param {TransporterCreateArgs} args - Arguments to create a Transporter.
     * @example
     * // Create one Transporter
     * const Transporter = await prisma.transporter.create({
     *   data: {
     *     // ... data to create a Transporter
     *   }
     * })
     * 
    **/
    create<T extends TransporterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransporterCreateArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transporters.
     *     @param {TransporterCreateManyArgs} args - Arguments to create many Transporters.
     *     @example
     *     // Create many Transporters
     *     const transporter = await prisma.transporter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransporterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransporterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transporter.
     * @param {TransporterDeleteArgs} args - Arguments to delete one Transporter.
     * @example
     * // Delete one Transporter
     * const Transporter = await prisma.transporter.delete({
     *   where: {
     *     // ... filter to delete one Transporter
     *   }
     * })
     * 
    **/
    delete<T extends TransporterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransporterDeleteArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transporter.
     * @param {TransporterUpdateArgs} args - Arguments to update one Transporter.
     * @example
     * // Update one Transporter
     * const transporter = await prisma.transporter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransporterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransporterUpdateArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transporters.
     * @param {TransporterDeleteManyArgs} args - Arguments to filter Transporters to delete.
     * @example
     * // Delete a few Transporters
     * const { count } = await prisma.transporter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransporterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransporterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transporters
     * const transporter = await prisma.transporter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransporterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransporterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transporter.
     * @param {TransporterUpsertArgs} args - Arguments to update or create a Transporter.
     * @example
     * // Update or create a Transporter
     * const transporter = await prisma.transporter.upsert({
     *   create: {
     *     // ... data to create a Transporter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transporter we want to update
     *   }
     * })
    **/
    upsert<T extends TransporterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransporterUpsertArgs<ExtArgs>>
    ): Prisma__TransporterClient<$Result.GetResult<Prisma.$TransporterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterCountArgs} args - Arguments to filter Transporters to count.
     * @example
     * // Count the number of Transporters
     * const count = await prisma.transporter.count({
     *   where: {
     *     // ... the filter for the Transporters we want to count
     *   }
     * })
    **/
    count<T extends TransporterCountArgs>(
      args?: Subset<T, TransporterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransporterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transporter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransporterAggregateArgs>(args: Subset<T, TransporterAggregateArgs>): Prisma.PrismaPromise<GetTransporterAggregateType<T>>

    /**
     * Group by Transporter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransporterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransporterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransporterGroupByArgs['orderBy'] }
        : { orderBy?: TransporterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransporterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransporterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transporter model
   */
  readonly fields: TransporterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transporter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransporterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    aggregator<T extends AggregatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AggregatorDefaultArgs<ExtArgs>>): Prisma__AggregatorClient<$Result.GetResult<Prisma.$AggregatorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    farmer<T extends FarmerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmerDefaultArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transporter model
   */ 
  interface TransporterFieldRefs {
    readonly id: FieldRef<"Transporter", 'String'>
    readonly created_at: FieldRef<"Transporter", 'DateTime'>
    readonly updated_at: FieldRef<"Transporter", 'DateTime'>
    readonly email: FieldRef<"Transporter", 'String'>
    readonly password: FieldRef<"Transporter", 'String'>
    readonly first_name: FieldRef<"Transporter", 'String'>
    readonly last_name: FieldRef<"Transporter", 'String'>
    readonly role: FieldRef<"Transporter", 'String'>
    readonly last_active: FieldRef<"Transporter", 'String'>
    readonly status: FieldRef<"Transporter", 'UserStatus'>
    readonly phone_number: FieldRef<"Transporter", 'String'>
    readonly is_active: FieldRef<"Transporter", 'Boolean'>
    readonly pentrar_trans_id: FieldRef<"Transporter", 'String'>
    readonly created_by_id: FieldRef<"Transporter", 'String'>
    readonly verification_code: FieldRef<"Transporter", 'String'>
    readonly password_resetCode: FieldRef<"Transporter", 'String'>
    readonly isEmail_verified: FieldRef<"Transporter", 'Boolean'>
    readonly vehicle_type: FieldRef<"Transporter", 'String'>
    readonly vehicle_number: FieldRef<"Transporter", 'String'>
    readonly Vehicle_license: FieldRef<"Transporter", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Transporter findUnique
   */
  export type TransporterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * Filter, which Transporter to fetch.
     */
    where: TransporterWhereUniqueInput
  }


  /**
   * Transporter findUniqueOrThrow
   */
  export type TransporterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * Filter, which Transporter to fetch.
     */
    where: TransporterWhereUniqueInput
  }


  /**
   * Transporter findFirst
   */
  export type TransporterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * Filter, which Transporter to fetch.
     */
    where?: TransporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transporters to fetch.
     */
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transporters.
     */
    cursor?: TransporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transporters.
     */
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * Transporter findFirstOrThrow
   */
  export type TransporterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * Filter, which Transporter to fetch.
     */
    where?: TransporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transporters to fetch.
     */
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transporters.
     */
    cursor?: TransporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transporters.
     */
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * Transporter findMany
   */
  export type TransporterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * Filter, which Transporters to fetch.
     */
    where?: TransporterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transporters to fetch.
     */
    orderBy?: TransporterOrderByWithRelationInput | TransporterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transporters.
     */
    cursor?: TransporterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transporters.
     */
    skip?: number
    distinct?: TransporterScalarFieldEnum | TransporterScalarFieldEnum[]
  }


  /**
   * Transporter create
   */
  export type TransporterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * The data needed to create a Transporter.
     */
    data: XOR<TransporterCreateInput, TransporterUncheckedCreateInput>
  }


  /**
   * Transporter createMany
   */
  export type TransporterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transporters.
     */
    data: TransporterCreateManyInput | TransporterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Transporter update
   */
  export type TransporterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * The data needed to update a Transporter.
     */
    data: XOR<TransporterUpdateInput, TransporterUncheckedUpdateInput>
    /**
     * Choose, which Transporter to update.
     */
    where: TransporterWhereUniqueInput
  }


  /**
   * Transporter updateMany
   */
  export type TransporterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transporters.
     */
    data: XOR<TransporterUpdateManyMutationInput, TransporterUncheckedUpdateManyInput>
    /**
     * Filter which Transporters to update
     */
    where?: TransporterWhereInput
  }


  /**
   * Transporter upsert
   */
  export type TransporterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * The filter to search for the Transporter to update in case it exists.
     */
    where: TransporterWhereUniqueInput
    /**
     * In case the Transporter found by the `where` argument doesn't exist, create a new Transporter with this data.
     */
    create: XOR<TransporterCreateInput, TransporterUncheckedCreateInput>
    /**
     * In case the Transporter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransporterUpdateInput, TransporterUncheckedUpdateInput>
  }


  /**
   * Transporter delete
   */
  export type TransporterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
    /**
     * Filter which Transporter to delete.
     */
    where: TransporterWhereUniqueInput
  }


  /**
   * Transporter deleteMany
   */
  export type TransporterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transporters to delete
     */
    where?: TransporterWhereInput
  }


  /**
   * Transporter without action
   */
  export type TransporterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transporter
     */
    select?: TransporterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransporterInclude<ExtArgs> | null
  }



  /**
   * Model Produce
   */

  export type AggregateProduce = {
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  export type ProduceAvgAggregateOutputType = {
    quantity: number | null
    unit: number | null
  }

  export type ProduceSumAggregateOutputType = {
    quantity: number | null
    unit: number | null
  }

  export type ProduceMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: number | null
    farmer_id: string | null
    created_at: Date | null
    updated_at: Date | null
    pentrar_produce_id: string | null
    image: string | null
    description: string | null
  }

  export type ProduceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: number | null
    farmer_id: string | null
    created_at: Date | null
    updated_at: Date | null
    pentrar_produce_id: string | null
    image: string | null
    description: string | null
  }

  export type ProduceCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    unit: number
    farmer_id: number
    created_at: number
    updated_at: number
    pentrar_produce_id: number
    image: number
    description: number
    _all: number
  }


  export type ProduceAvgAggregateInputType = {
    quantity?: true
    unit?: true
  }

  export type ProduceSumAggregateInputType = {
    quantity?: true
    unit?: true
  }

  export type ProduceMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    farmer_id?: true
    created_at?: true
    updated_at?: true
    pentrar_produce_id?: true
    image?: true
    description?: true
  }

  export type ProduceMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    farmer_id?: true
    created_at?: true
    updated_at?: true
    pentrar_produce_id?: true
    image?: true
    description?: true
  }

  export type ProduceCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    farmer_id?: true
    created_at?: true
    updated_at?: true
    pentrar_produce_id?: true
    image?: true
    description?: true
    _all?: true
  }

  export type ProduceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produce to aggregate.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produces
    **/
    _count?: true | ProduceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduceMaxAggregateInputType
  }

  export type GetProduceAggregateType<T extends ProduceAggregateArgs> = {
        [P in keyof T & keyof AggregateProduce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduce[P]>
      : GetScalarType<T[P], AggregateProduce[P]>
  }




  export type ProduceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithAggregationInput | ProduceOrderByWithAggregationInput[]
    by: ProduceScalarFieldEnum[] | ProduceScalarFieldEnum
    having?: ProduceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduceCountAggregateInputType | true
    _avg?: ProduceAvgAggregateInputType
    _sum?: ProduceSumAggregateInputType
    _min?: ProduceMinAggregateInputType
    _max?: ProduceMaxAggregateInputType
  }

  export type ProduceGroupByOutputType = {
    id: string
    name: string | null
    quantity: number | null
    unit: number | null
    farmer_id: string
    created_at: Date
    updated_at: Date
    pentrar_produce_id: string | null
    image: string | null
    description: string | null
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  type GetProduceGroupByPayload<T extends ProduceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduceGroupByOutputType[P]>
            : GetScalarType<T[P], ProduceGroupByOutputType[P]>
        }
      >
    >


  export type ProduceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    farmer_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    pentrar_produce_id?: boolean
    image?: boolean
    description?: boolean
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    farmer_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    pentrar_produce_id?: boolean
    image?: boolean
    description?: boolean
  }

  export type ProduceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
  }


  export type $ProducePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produce"
    objects: {
      farmer: Prisma.$FarmerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      quantity: number | null
      unit: number | null
      farmer_id: string
      created_at: Date
      updated_at: Date
      pentrar_produce_id: string | null
      image: string | null
      description: string | null
    }, ExtArgs["result"]["produce"]>
    composites: {}
  }


  type ProduceGetPayload<S extends boolean | null | undefined | ProduceDefaultArgs> = $Result.GetResult<Prisma.$ProducePayload, S>

  type ProduceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProduceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProduceCountAggregateInputType | true
    }

  export interface ProduceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produce'], meta: { name: 'Produce' } }
    /**
     * Find zero or one Produce that matches the filter.
     * @param {ProduceFindUniqueArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProduceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProduceFindUniqueArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Produce that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProduceFindUniqueOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProduceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProduceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Produce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProduceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProduceFindFirstArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Produce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProduceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProduceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Produces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produces
     * const produces = await prisma.produce.findMany()
     * 
     * // Get first 10 Produces
     * const produces = await prisma.produce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produceWithIdOnly = await prisma.produce.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProduceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProduceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Produce.
     * @param {ProduceCreateArgs} args - Arguments to create a Produce.
     * @example
     * // Create one Produce
     * const Produce = await prisma.produce.create({
     *   data: {
     *     // ... data to create a Produce
     *   }
     * })
     * 
    **/
    create<T extends ProduceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProduceCreateArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Produces.
     *     @param {ProduceCreateManyArgs} args - Arguments to create many Produces.
     *     @example
     *     // Create many Produces
     *     const produce = await prisma.produce.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProduceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProduceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produce.
     * @param {ProduceDeleteArgs} args - Arguments to delete one Produce.
     * @example
     * // Delete one Produce
     * const Produce = await prisma.produce.delete({
     *   where: {
     *     // ... filter to delete one Produce
     *   }
     * })
     * 
    **/
    delete<T extends ProduceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProduceDeleteArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Produce.
     * @param {ProduceUpdateArgs} args - Arguments to update one Produce.
     * @example
     * // Update one Produce
     * const produce = await prisma.produce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProduceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProduceUpdateArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Produces.
     * @param {ProduceDeleteManyArgs} args - Arguments to filter Produces to delete.
     * @example
     * // Delete a few Produces
     * const { count } = await prisma.produce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProduceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProduceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produces
     * const produce = await prisma.produce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProduceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProduceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produce.
     * @param {ProduceUpsertArgs} args - Arguments to update or create a Produce.
     * @example
     * // Update or create a Produce
     * const produce = await prisma.produce.upsert({
     *   create: {
     *     // ... data to create a Produce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produce we want to update
     *   }
     * })
    **/
    upsert<T extends ProduceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProduceUpsertArgs<ExtArgs>>
    ): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceCountArgs} args - Arguments to filter Produces to count.
     * @example
     * // Count the number of Produces
     * const count = await prisma.produce.count({
     *   where: {
     *     // ... the filter for the Produces we want to count
     *   }
     * })
    **/
    count<T extends ProduceCountArgs>(
      args?: Subset<T, ProduceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduceAggregateArgs>(args: Subset<T, ProduceAggregateArgs>): Prisma.PrismaPromise<GetProduceAggregateType<T>>

    /**
     * Group by Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProduceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduceGroupByArgs['orderBy'] }
        : { orderBy?: ProduceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProduceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produce model
   */
  readonly fields: ProduceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    farmer<T extends FarmerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmerDefaultArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Produce model
   */ 
  interface ProduceFieldRefs {
    readonly id: FieldRef<"Produce", 'String'>
    readonly name: FieldRef<"Produce", 'String'>
    readonly quantity: FieldRef<"Produce", 'Int'>
    readonly unit: FieldRef<"Produce", 'Int'>
    readonly farmer_id: FieldRef<"Produce", 'String'>
    readonly created_at: FieldRef<"Produce", 'DateTime'>
    readonly updated_at: FieldRef<"Produce", 'DateTime'>
    readonly pentrar_produce_id: FieldRef<"Produce", 'String'>
    readonly image: FieldRef<"Produce", 'String'>
    readonly description: FieldRef<"Produce", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Produce findUnique
   */
  export type ProduceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }


  /**
   * Produce findUniqueOrThrow
   */
  export type ProduceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }


  /**
   * Produce findFirst
   */
  export type ProduceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }


  /**
   * Produce findFirstOrThrow
   */
  export type ProduceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }


  /**
   * Produce findMany
   */
  export type ProduceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produces to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }


  /**
   * Produce create
   */
  export type ProduceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to create a Produce.
     */
    data: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
  }


  /**
   * Produce createMany
   */
  export type ProduceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Produce update
   */
  export type ProduceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to update a Produce.
     */
    data: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
    /**
     * Choose, which Produce to update.
     */
    where: ProduceWhereUniqueInput
  }


  /**
   * Produce updateMany
   */
  export type ProduceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produces.
     */
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyInput>
    /**
     * Filter which Produces to update
     */
    where?: ProduceWhereInput
  }


  /**
   * Produce upsert
   */
  export type ProduceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The filter to search for the Produce to update in case it exists.
     */
    where: ProduceWhereUniqueInput
    /**
     * In case the Produce found by the `where` argument doesn't exist, create a new Produce with this data.
     */
    create: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
    /**
     * In case the Produce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
  }


  /**
   * Produce delete
   */
  export type ProduceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter which Produce to delete.
     */
    where: ProduceWhereUniqueInput
  }


  /**
   * Produce deleteMany
   */
  export type ProduceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produces to delete
     */
    where?: ProduceWhereInput
  }


  /**
   * Produce without action
   */
  export type ProduceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProduceInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AggregatorScalarFieldEnum: {
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

  export type AggregatorScalarFieldEnum = (typeof AggregatorScalarFieldEnum)[keyof typeof AggregatorScalarFieldEnum]


  export const FarmerScalarFieldEnum: {
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

  export type FarmerScalarFieldEnum = (typeof FarmerScalarFieldEnum)[keyof typeof FarmerScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
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

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const TransporterScalarFieldEnum: {
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

  export type TransporterScalarFieldEnum = (typeof TransporterScalarFieldEnum)[keyof typeof TransporterScalarFieldEnum]


  export const ProduceScalarFieldEnum: {
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

  export type ProduceScalarFieldEnum = (typeof ProduceScalarFieldEnum)[keyof typeof ProduceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    last_active?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    phone_number?: StringNullableFilter<"User"> | string | null
    is_active?: BoolNullableFilter<"User"> | boolean | null
    pentrar_user_id?: StringNullableFilter<"User"> | string | null
    verification_code?: StringNullableFilter<"User"> | string | null
    password_resetCode?: StringNullableFilter<"User"> | string | null
    isEmail_verified?: BoolFilter<"User"> | boolean
    farmers?: FarmerListRelationFilter
    transporters?: TransporterListRelationFilter
    aggregators?: AggregatorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    last_active?: SortOrderInput | SortOrder
    status?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    pentrar_user_id?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    farmers?: FarmerOrderByRelationAggregateInput
    transporters?: TransporterOrderByRelationAggregateInput
    aggregators?: AggregatorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    pentrar_user_id?: string
    verification_code?: string
    password_resetCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    last_active?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    is_active?: BoolNullableFilter<"User"> | boolean | null
    isEmail_verified?: BoolFilter<"User"> | boolean
    farmers?: FarmerListRelationFilter
    transporters?: TransporterListRelationFilter
    aggregators?: AggregatorListRelationFilter
  }, "id" | "email" | "phone_number" | "pentrar_user_id" | "verification_code" | "password_resetCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    last_active?: SortOrderInput | SortOrder
    status?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    pentrar_user_id?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_active?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    pentrar_user_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    verification_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_resetCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmail_verified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type AggregatorWhereInput = {
    AND?: AggregatorWhereInput | AggregatorWhereInput[]
    OR?: AggregatorWhereInput[]
    NOT?: AggregatorWhereInput | AggregatorWhereInput[]
    id?: StringFilter<"Aggregator"> | string
    created_at?: DateTimeFilter<"Aggregator"> | Date | string
    updated_at?: DateTimeFilter<"Aggregator"> | Date | string
    is_active?: BoolNullableFilter<"Aggregator"> | boolean | null
    email?: StringNullableFilter<"Aggregator"> | string | null
    password?: StringNullableFilter<"Aggregator"> | string | null
    first_name?: StringNullableFilter<"Aggregator"> | string | null
    last_name?: StringNullableFilter<"Aggregator"> | string | null
    last_active?: StringNullableFilter<"Aggregator"> | string | null
    phone_number?: StringNullableFilter<"Aggregator"> | string | null
    pentrar_aggregator_id?: StringNullableFilter<"Aggregator"> | string | null
    created_by_id?: StringFilter<"Aggregator"> | string
    verification_code?: StringNullableFilter<"Aggregator"> | string | null
    password_resetCode?: StringNullableFilter<"Aggregator"> | string | null
    isEmail_verified?: BoolFilter<"Aggregator"> | boolean
    status?: EnumUserStatusFilter<"Aggregator"> | $Enums.UserStatus
    role?: StringNullableFilter<"Aggregator"> | string | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    farmers?: FarmerListRelationFilter
    transporters?: TransporterListRelationFilter
  }

  export type AggregatorOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    last_active?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    pentrar_aggregator_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    status?: SortOrder
    role?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    farmers?: FarmerOrderByRelationAggregateInput
    transporters?: TransporterOrderByRelationAggregateInput
  }

  export type AggregatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    pentrar_aggregator_id?: string
    verification_code?: string
    password_resetCode?: string
    AND?: AggregatorWhereInput | AggregatorWhereInput[]
    OR?: AggregatorWhereInput[]
    NOT?: AggregatorWhereInput | AggregatorWhereInput[]
    created_at?: DateTimeFilter<"Aggregator"> | Date | string
    updated_at?: DateTimeFilter<"Aggregator"> | Date | string
    is_active?: BoolNullableFilter<"Aggregator"> | boolean | null
    password?: StringNullableFilter<"Aggregator"> | string | null
    first_name?: StringNullableFilter<"Aggregator"> | string | null
    last_name?: StringNullableFilter<"Aggregator"> | string | null
    last_active?: StringNullableFilter<"Aggregator"> | string | null
    created_by_id?: StringFilter<"Aggregator"> | string
    isEmail_verified?: BoolFilter<"Aggregator"> | boolean
    status?: EnumUserStatusFilter<"Aggregator"> | $Enums.UserStatus
    role?: StringNullableFilter<"Aggregator"> | string | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    farmers?: FarmerListRelationFilter
    transporters?: TransporterListRelationFilter
  }, "id" | "email" | "phone_number" | "pentrar_aggregator_id" | "verification_code" | "password_resetCode">

  export type AggregatorOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    last_active?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    pentrar_aggregator_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    status?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: AggregatorCountOrderByAggregateInput
    _max?: AggregatorMaxOrderByAggregateInput
    _min?: AggregatorMinOrderByAggregateInput
  }

  export type AggregatorScalarWhereWithAggregatesInput = {
    AND?: AggregatorScalarWhereWithAggregatesInput | AggregatorScalarWhereWithAggregatesInput[]
    OR?: AggregatorScalarWhereWithAggregatesInput[]
    NOT?: AggregatorScalarWhereWithAggregatesInput | AggregatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aggregator"> | string
    created_at?: DateTimeWithAggregatesFilter<"Aggregator"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Aggregator"> | Date | string
    is_active?: BoolNullableWithAggregatesFilter<"Aggregator"> | boolean | null
    email?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    password?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    last_active?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    pentrar_aggregator_id?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    created_by_id?: StringWithAggregatesFilter<"Aggregator"> | string
    verification_code?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    password_resetCode?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
    isEmail_verified?: BoolWithAggregatesFilter<"Aggregator"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"Aggregator"> | $Enums.UserStatus
    role?: StringNullableWithAggregatesFilter<"Aggregator"> | string | null
  }

  export type FarmerWhereInput = {
    AND?: FarmerWhereInput | FarmerWhereInput[]
    OR?: FarmerWhereInput[]
    NOT?: FarmerWhereInput | FarmerWhereInput[]
    id?: StringFilter<"Farmer"> | string
    created_at?: DateTimeFilter<"Farmer"> | Date | string
    updated_at?: DateTimeFilter<"Farmer"> | Date | string
    email?: StringNullableFilter<"Farmer"> | string | null
    phone_number?: StringNullableFilter<"Farmer"> | string | null
    password?: StringNullableFilter<"Farmer"> | string | null
    first_name?: StringNullableFilter<"Farmer"> | string | null
    last_name?: StringNullableFilter<"Farmer"> | string | null
    type_of_produce?: StringNullableListFilter<"Farmer">
    pentrar_farmer_id?: StringNullableFilter<"Farmer"> | string | null
    created_by_id?: StringFilter<"Farmer"> | string
    last_active?: StringNullableFilter<"Farmer"> | string | null
    status?: EnumUserStatusFilter<"Farmer"> | $Enums.UserStatus
    verification_code?: StringNullableFilter<"Farmer"> | string | null
    password_resetCode?: StringNullableFilter<"Farmer"> | string | null
    isEmail_verified?: BoolFilter<"Farmer"> | boolean
    role?: StringNullableFilter<"Farmer"> | string | null
    is_active?: BoolNullableFilter<"Farmer"> | boolean | null
    aggregator?: XOR<AggregatorRelationFilter, AggregatorWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    list_of_produce?: ProduceListRelationFilter
    transporters?: TransporterListRelationFilter
  }

  export type FarmerOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    type_of_produce?: SortOrder
    pentrar_farmer_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrderInput | SortOrder
    status?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    aggregator?: AggregatorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    list_of_produce?: ProduceOrderByRelationAggregateInput
    transporters?: TransporterOrderByRelationAggregateInput
  }

  export type FarmerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    pentrar_farmer_id?: string
    verification_code?: string
    password_resetCode?: string
    AND?: FarmerWhereInput | FarmerWhereInput[]
    OR?: FarmerWhereInput[]
    NOT?: FarmerWhereInput | FarmerWhereInput[]
    created_at?: DateTimeFilter<"Farmer"> | Date | string
    updated_at?: DateTimeFilter<"Farmer"> | Date | string
    password?: StringNullableFilter<"Farmer"> | string | null
    first_name?: StringNullableFilter<"Farmer"> | string | null
    last_name?: StringNullableFilter<"Farmer"> | string | null
    type_of_produce?: StringNullableListFilter<"Farmer">
    created_by_id?: StringFilter<"Farmer"> | string
    last_active?: StringNullableFilter<"Farmer"> | string | null
    status?: EnumUserStatusFilter<"Farmer"> | $Enums.UserStatus
    isEmail_verified?: BoolFilter<"Farmer"> | boolean
    role?: StringNullableFilter<"Farmer"> | string | null
    is_active?: BoolNullableFilter<"Farmer"> | boolean | null
    aggregator?: XOR<AggregatorRelationFilter, AggregatorWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    list_of_produce?: ProduceListRelationFilter
    transporters?: TransporterListRelationFilter
  }, "id" | "email" | "phone_number" | "pentrar_farmer_id" | "verification_code" | "password_resetCode">

  export type FarmerOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    type_of_produce?: SortOrder
    pentrar_farmer_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrderInput | SortOrder
    status?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: FarmerCountOrderByAggregateInput
    _max?: FarmerMaxOrderByAggregateInput
    _min?: FarmerMinOrderByAggregateInput
  }

  export type FarmerScalarWhereWithAggregatesInput = {
    AND?: FarmerScalarWhereWithAggregatesInput | FarmerScalarWhereWithAggregatesInput[]
    OR?: FarmerScalarWhereWithAggregatesInput[]
    NOT?: FarmerScalarWhereWithAggregatesInput | FarmerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Farmer"> | string
    created_at?: DateTimeWithAggregatesFilter<"Farmer"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Farmer"> | Date | string
    email?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    password?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    type_of_produce?: StringNullableListFilter<"Farmer">
    pentrar_farmer_id?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    created_by_id?: StringWithAggregatesFilter<"Farmer"> | string
    last_active?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"Farmer"> | $Enums.UserStatus
    verification_code?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    password_resetCode?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    isEmail_verified?: BoolWithAggregatesFilter<"Farmer"> | boolean
    role?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"Farmer"> | boolean | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    email?: StringNullableFilter<"Company"> | string | null
    phone_number?: StringNullableFilter<"Company"> | string | null
    password?: StringNullableFilter<"Company"> | string | null
    company_name?: StringNullableFilter<"Company"> | string | null
    company_address?: StringNullableFilter<"Company"> | string | null
    legal_entity_name?: StringNullableFilter<"Company"> | string | null
    tax_identification_number?: StringNullableFilter<"Company"> | string | null
    pentrar_company_id?: StringNullableFilter<"Company"> | string | null
    created_by_id?: StringFilter<"Company"> | string
    last_active?: StringNullableFilter<"Company"> | string | null
    company_type?: StringNullableFilter<"Company"> | string | null
    point_of_contact?: StringNullableFilter<"Company"> | string | null
    parent_company?: StringNullableFilter<"Company"> | string | null
    subsidiaries_company?: StringNullableFilter<"Company"> | string | null
    annual_revenue?: StringNullableFilter<"Company"> | string | null
    financial_statement?: StringNullableFilter<"Company"> | string | null
    status?: EnumUserStatusFilter<"Company"> | $Enums.UserStatus
    verification_code?: StringNullableFilter<"Company"> | string | null
    password_resetCode?: StringNullableFilter<"Company"> | string | null
    isEmail_verified?: BoolFilter<"Company"> | boolean
    role?: StringNullableFilter<"Company"> | string | null
    is_active?: BoolNullableFilter<"Company"> | boolean | null
    farmers?: FarmerListRelationFilter
    aggregators?: AggregatorListRelationFilter
    transporters?: TransporterListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    company_address?: SortOrderInput | SortOrder
    legal_entity_name?: SortOrderInput | SortOrder
    tax_identification_number?: SortOrderInput | SortOrder
    pentrar_company_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrderInput | SortOrder
    company_type?: SortOrderInput | SortOrder
    point_of_contact?: SortOrderInput | SortOrder
    parent_company?: SortOrderInput | SortOrder
    subsidiaries_company?: SortOrderInput | SortOrder
    annual_revenue?: SortOrderInput | SortOrder
    financial_statement?: SortOrderInput | SortOrder
    status?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    farmers?: FarmerOrderByRelationAggregateInput
    aggregators?: AggregatorOrderByRelationAggregateInput
    transporters?: TransporterOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    tax_identification_number?: string
    pentrar_company_id?: string
    verification_code?: string
    password_resetCode?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    password?: StringNullableFilter<"Company"> | string | null
    company_name?: StringNullableFilter<"Company"> | string | null
    company_address?: StringNullableFilter<"Company"> | string | null
    legal_entity_name?: StringNullableFilter<"Company"> | string | null
    created_by_id?: StringFilter<"Company"> | string
    last_active?: StringNullableFilter<"Company"> | string | null
    company_type?: StringNullableFilter<"Company"> | string | null
    point_of_contact?: StringNullableFilter<"Company"> | string | null
    parent_company?: StringNullableFilter<"Company"> | string | null
    subsidiaries_company?: StringNullableFilter<"Company"> | string | null
    annual_revenue?: StringNullableFilter<"Company"> | string | null
    financial_statement?: StringNullableFilter<"Company"> | string | null
    status?: EnumUserStatusFilter<"Company"> | $Enums.UserStatus
    isEmail_verified?: BoolFilter<"Company"> | boolean
    role?: StringNullableFilter<"Company"> | string | null
    is_active?: BoolNullableFilter<"Company"> | boolean | null
    farmers?: FarmerListRelationFilter
    aggregators?: AggregatorListRelationFilter
    transporters?: TransporterListRelationFilter
  }, "id" | "email" | "phone_number" | "tax_identification_number" | "pentrar_company_id" | "verification_code" | "password_resetCode">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    company_address?: SortOrderInput | SortOrder
    legal_entity_name?: SortOrderInput | SortOrder
    tax_identification_number?: SortOrderInput | SortOrder
    pentrar_company_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrderInput | SortOrder
    company_type?: SortOrderInput | SortOrder
    point_of_contact?: SortOrderInput | SortOrder
    parent_company?: SortOrderInput | SortOrder
    subsidiaries_company?: SortOrderInput | SortOrder
    annual_revenue?: SortOrderInput | SortOrder
    financial_statement?: SortOrderInput | SortOrder
    status?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Company"> | string | null
    password?: StringNullableWithAggregatesFilter<"Company"> | string | null
    company_name?: StringNullableWithAggregatesFilter<"Company"> | string | null
    company_address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    legal_entity_name?: StringNullableWithAggregatesFilter<"Company"> | string | null
    tax_identification_number?: StringNullableWithAggregatesFilter<"Company"> | string | null
    pentrar_company_id?: StringNullableWithAggregatesFilter<"Company"> | string | null
    created_by_id?: StringWithAggregatesFilter<"Company"> | string
    last_active?: StringNullableWithAggregatesFilter<"Company"> | string | null
    company_type?: StringNullableWithAggregatesFilter<"Company"> | string | null
    point_of_contact?: StringNullableWithAggregatesFilter<"Company"> | string | null
    parent_company?: StringNullableWithAggregatesFilter<"Company"> | string | null
    subsidiaries_company?: StringNullableWithAggregatesFilter<"Company"> | string | null
    annual_revenue?: StringNullableWithAggregatesFilter<"Company"> | string | null
    financial_statement?: StringNullableWithAggregatesFilter<"Company"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"Company"> | $Enums.UserStatus
    verification_code?: StringNullableWithAggregatesFilter<"Company"> | string | null
    password_resetCode?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isEmail_verified?: BoolWithAggregatesFilter<"Company"> | boolean
    role?: StringNullableWithAggregatesFilter<"Company"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"Company"> | boolean | null
  }

  export type TransporterWhereInput = {
    AND?: TransporterWhereInput | TransporterWhereInput[]
    OR?: TransporterWhereInput[]
    NOT?: TransporterWhereInput | TransporterWhereInput[]
    id?: StringFilter<"Transporter"> | string
    created_at?: DateTimeFilter<"Transporter"> | Date | string
    updated_at?: DateTimeFilter<"Transporter"> | Date | string
    email?: StringFilter<"Transporter"> | string
    password?: StringNullableFilter<"Transporter"> | string | null
    first_name?: StringNullableFilter<"Transporter"> | string | null
    last_name?: StringNullableFilter<"Transporter"> | string | null
    role?: StringNullableFilter<"Transporter"> | string | null
    last_active?: StringNullableFilter<"Transporter"> | string | null
    status?: EnumUserStatusFilter<"Transporter"> | $Enums.UserStatus
    phone_number?: StringNullableFilter<"Transporter"> | string | null
    is_active?: BoolNullableFilter<"Transporter"> | boolean | null
    pentrar_trans_id?: StringNullableFilter<"Transporter"> | string | null
    created_by_id?: StringFilter<"Transporter"> | string
    verification_code?: StringNullableFilter<"Transporter"> | string | null
    password_resetCode?: StringNullableFilter<"Transporter"> | string | null
    isEmail_verified?: BoolFilter<"Transporter"> | boolean
    vehicle_type?: StringNullableFilter<"Transporter"> | string | null
    vehicle_number?: StringNullableFilter<"Transporter"> | string | null
    Vehicle_license?: StringNullableFilter<"Transporter"> | string | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    aggregator?: XOR<AggregatorRelationFilter, AggregatorWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    farmer?: XOR<FarmerRelationFilter, FarmerWhereInput>
  }

  export type TransporterOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    last_active?: SortOrderInput | SortOrder
    status?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    pentrar_trans_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    vehicle_type?: SortOrderInput | SortOrder
    vehicle_number?: SortOrderInput | SortOrder
    Vehicle_license?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    aggregator?: AggregatorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    farmer?: FarmerOrderByWithRelationInput
  }

  export type TransporterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    verification_code?: string
    password_resetCode?: string
    AND?: TransporterWhereInput | TransporterWhereInput[]
    OR?: TransporterWhereInput[]
    NOT?: TransporterWhereInput | TransporterWhereInput[]
    created_at?: DateTimeFilter<"Transporter"> | Date | string
    updated_at?: DateTimeFilter<"Transporter"> | Date | string
    password?: StringNullableFilter<"Transporter"> | string | null
    first_name?: StringNullableFilter<"Transporter"> | string | null
    last_name?: StringNullableFilter<"Transporter"> | string | null
    role?: StringNullableFilter<"Transporter"> | string | null
    last_active?: StringNullableFilter<"Transporter"> | string | null
    status?: EnumUserStatusFilter<"Transporter"> | $Enums.UserStatus
    is_active?: BoolNullableFilter<"Transporter"> | boolean | null
    pentrar_trans_id?: StringNullableFilter<"Transporter"> | string | null
    created_by_id?: StringFilter<"Transporter"> | string
    isEmail_verified?: BoolFilter<"Transporter"> | boolean
    vehicle_type?: StringNullableFilter<"Transporter"> | string | null
    vehicle_number?: StringNullableFilter<"Transporter"> | string | null
    Vehicle_license?: StringNullableFilter<"Transporter"> | string | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
    aggregator?: XOR<AggregatorRelationFilter, AggregatorWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    farmer?: XOR<FarmerRelationFilter, FarmerWhereInput>
  }, "id" | "email" | "phone_number" | "verification_code" | "password_resetCode">

  export type TransporterOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    last_active?: SortOrderInput | SortOrder
    status?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    pentrar_trans_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrderInput | SortOrder
    password_resetCode?: SortOrderInput | SortOrder
    isEmail_verified?: SortOrder
    vehicle_type?: SortOrderInput | SortOrder
    vehicle_number?: SortOrderInput | SortOrder
    Vehicle_license?: SortOrderInput | SortOrder
    _count?: TransporterCountOrderByAggregateInput
    _max?: TransporterMaxOrderByAggregateInput
    _min?: TransporterMinOrderByAggregateInput
  }

  export type TransporterScalarWhereWithAggregatesInput = {
    AND?: TransporterScalarWhereWithAggregatesInput | TransporterScalarWhereWithAggregatesInput[]
    OR?: TransporterScalarWhereWithAggregatesInput[]
    NOT?: TransporterScalarWhereWithAggregatesInput | TransporterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transporter"> | string
    created_at?: DateTimeWithAggregatesFilter<"Transporter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Transporter"> | Date | string
    email?: StringWithAggregatesFilter<"Transporter"> | string
    password?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    role?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    last_active?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"Transporter"> | $Enums.UserStatus
    phone_number?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"Transporter"> | boolean | null
    pentrar_trans_id?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    created_by_id?: StringWithAggregatesFilter<"Transporter"> | string
    verification_code?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    password_resetCode?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    isEmail_verified?: BoolWithAggregatesFilter<"Transporter"> | boolean
    vehicle_type?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    vehicle_number?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
    Vehicle_license?: StringNullableWithAggregatesFilter<"Transporter"> | string | null
  }

  export type ProduceWhereInput = {
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    id?: StringFilter<"Produce"> | string
    name?: StringNullableFilter<"Produce"> | string | null
    quantity?: IntNullableFilter<"Produce"> | number | null
    unit?: IntNullableFilter<"Produce"> | number | null
    farmer_id?: StringFilter<"Produce"> | string
    created_at?: DateTimeFilter<"Produce"> | Date | string
    updated_at?: DateTimeFilter<"Produce"> | Date | string
    pentrar_produce_id?: StringNullableFilter<"Produce"> | string | null
    image?: StringNullableFilter<"Produce"> | string | null
    description?: StringNullableFilter<"Produce"> | string | null
    farmer?: XOR<FarmerRelationFilter, FarmerWhereInput>
  }

  export type ProduceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    farmer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pentrar_produce_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    farmer?: FarmerOrderByWithRelationInput
  }

  export type ProduceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    name?: StringNullableFilter<"Produce"> | string | null
    quantity?: IntNullableFilter<"Produce"> | number | null
    unit?: IntNullableFilter<"Produce"> | number | null
    farmer_id?: StringFilter<"Produce"> | string
    created_at?: DateTimeFilter<"Produce"> | Date | string
    updated_at?: DateTimeFilter<"Produce"> | Date | string
    pentrar_produce_id?: StringNullableFilter<"Produce"> | string | null
    image?: StringNullableFilter<"Produce"> | string | null
    description?: StringNullableFilter<"Produce"> | string | null
    farmer?: XOR<FarmerRelationFilter, FarmerWhereInput>
  }, "id">

  export type ProduceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    farmer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pentrar_produce_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ProduceCountOrderByAggregateInput
    _avg?: ProduceAvgOrderByAggregateInput
    _max?: ProduceMaxOrderByAggregateInput
    _min?: ProduceMinOrderByAggregateInput
    _sum?: ProduceSumOrderByAggregateInput
  }

  export type ProduceScalarWhereWithAggregatesInput = {
    AND?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    OR?: ProduceScalarWhereWithAggregatesInput[]
    NOT?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produce"> | string
    name?: StringNullableWithAggregatesFilter<"Produce"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"Produce"> | number | null
    unit?: IntNullableWithAggregatesFilter<"Produce"> | number | null
    farmer_id?: StringWithAggregatesFilter<"Produce"> | string
    created_at?: DateTimeWithAggregatesFilter<"Produce"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Produce"> | Date | string
    pentrar_produce_id?: StringNullableWithAggregatesFilter<"Produce"> | string | null
    image?: StringNullableWithAggregatesFilter<"Produce"> | string | null
    description?: StringNullableWithAggregatesFilter<"Produce"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    farmers?: FarmerCreateNestedManyWithoutUserInput
    transporters?: TransporterCreateNestedManyWithoutUserInput
    aggregators?: AggregatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    farmers?: FarmerUncheckedCreateNestedManyWithoutUserInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutUserInput
    aggregators?: AggregatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    farmers?: FarmerUpdateManyWithoutUserNestedInput
    transporters?: TransporterUpdateManyWithoutUserNestedInput
    aggregators?: AggregatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    farmers?: FarmerUncheckedUpdateManyWithoutUserNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutUserNestedInput
    aggregators?: AggregatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AggregatorCreateInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    company: CompanyCreateNestedOneWithoutAggregatorsInput
    user?: UserCreateNestedOneWithoutAggregatorsInput
    farmers?: FarmerCreateNestedManyWithoutAggregatorInput
    transporters?: TransporterCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorUncheckedCreateInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    created_by_id: string
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutAggregatorInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutAggregatorsNestedInput
    user?: UserUpdateOneWithoutAggregatorsNestedInput
    farmers?: FarmerUpdateManyWithoutAggregatorNestedInput
    transporters?: TransporterUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    farmers?: FarmerUncheckedUpdateManyWithoutAggregatorNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorCreateManyInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    created_by_id: string
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
  }

  export type AggregatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AggregatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FarmerCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregator: AggregatorCreateNestedOneWithoutFarmersInput
    user: UserCreateNestedOneWithoutFarmersInput
    company: CompanyCreateNestedOneWithoutFarmersInput
    list_of_produce?: ProduceCreateNestedManyWithoutFarmerInput
    transporters?: TransporterCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    created_by_id: string
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    list_of_produce?: ProduceUncheckedCreateNestedManyWithoutFarmerInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregator?: AggregatorUpdateOneRequiredWithoutFarmersNestedInput
    user?: UserUpdateOneRequiredWithoutFarmersNestedInput
    company?: CompanyUpdateOneRequiredWithoutFarmersNestedInput
    list_of_produce?: ProduceUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    list_of_produce?: ProduceUncheckedUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    created_by_id: string
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
  }

  export type FarmerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FarmerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CompanyCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    farmers?: FarmerCreateNestedManyWithoutCompanyInput
    aggregators?: AggregatorCreateNestedManyWithoutCompanyInput
    transporters?: TransporterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutCompanyInput
    aggregators?: AggregatorUncheckedCreateNestedManyWithoutCompanyInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    farmers?: FarmerUpdateManyWithoutCompanyNestedInput
    aggregators?: AggregatorUpdateManyWithoutCompanyNestedInput
    transporters?: TransporterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    farmers?: FarmerUncheckedUpdateManyWithoutCompanyNestedInput
    aggregators?: AggregatorUncheckedUpdateManyWithoutCompanyNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TransporterCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
    company: CompanyCreateNestedOneWithoutTransportersInput
    aggregator: AggregatorCreateNestedOneWithoutTransportersInput
    user: UserCreateNestedOneWithoutTransportersInput
    farmer: FarmerCreateNestedOneWithoutTransportersInput
  }

  export type TransporterUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    created_by_id: string
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type TransporterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutTransportersNestedInput
    aggregator?: AggregatorUpdateOneRequiredWithoutTransportersNestedInput
    user?: UserUpdateOneRequiredWithoutTransportersNestedInput
    farmer?: FarmerUpdateOneRequiredWithoutTransportersNestedInput
  }

  export type TransporterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterCreateManyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    created_by_id: string
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type TransporterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduceCreateInput = {
    id?: string
    name?: string | null
    quantity?: number | null
    unit?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    pentrar_produce_id?: string | null
    image?: string | null
    description?: string | null
    farmer: FarmerCreateNestedOneWithoutList_of_produceInput
  }

  export type ProduceUncheckedCreateInput = {
    id?: string
    name?: string | null
    quantity?: number | null
    unit?: number | null
    farmer_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pentrar_produce_id?: string | null
    image?: string | null
    description?: string | null
  }

  export type ProduceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmer?: FarmerUpdateOneRequiredWithoutList_of_produceNestedInput
  }

  export type ProduceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    farmer_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduceCreateManyInput = {
    id?: string
    name?: string | null
    quantity?: number | null
    unit?: number | null
    farmer_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pentrar_produce_id?: string | null
    image?: string | null
    description?: string | null
  }

  export type ProduceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    farmer_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FarmerListRelationFilter = {
    every?: FarmerWhereInput
    some?: FarmerWhereInput
    none?: FarmerWhereInput
  }

  export type TransporterListRelationFilter = {
    every?: TransporterWhereInput
    some?: TransporterWhereInput
    none?: TransporterWhereInput
  }

  export type AggregatorListRelationFilter = {
    every?: AggregatorWhereInput
    some?: AggregatorWhereInput
    none?: AggregatorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FarmerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransporterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AggregatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    is_active?: SortOrder
    pentrar_user_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    is_active?: SortOrder
    pentrar_user_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    is_active?: SortOrder
    pentrar_user_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AggregatorCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_active?: SortOrder
    phone_number?: SortOrder
    pentrar_aggregator_id?: SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type AggregatorMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_active?: SortOrder
    phone_number?: SortOrder
    pentrar_aggregator_id?: SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type AggregatorMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    last_active?: SortOrder
    phone_number?: SortOrder
    pentrar_aggregator_id?: SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AggregatorRelationFilter = {
    is?: AggregatorWhereInput
    isNot?: AggregatorWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProduceListRelationFilter = {
    every?: ProduceWhereInput
    some?: ProduceWhereInput
    none?: ProduceWhereInput
  }

  export type ProduceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmerCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    type_of_produce?: SortOrder
    pentrar_farmer_id?: SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
  }

  export type FarmerMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    pentrar_farmer_id?: SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
  }

  export type FarmerMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    pentrar_farmer_id?: SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    company_name?: SortOrder
    company_address?: SortOrder
    legal_entity_name?: SortOrder
    tax_identification_number?: SortOrder
    pentrar_company_id?: SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrder
    company_type?: SortOrder
    point_of_contact?: SortOrder
    parent_company?: SortOrder
    subsidiaries_company?: SortOrder
    annual_revenue?: SortOrder
    financial_statement?: SortOrder
    status?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    company_name?: SortOrder
    company_address?: SortOrder
    legal_entity_name?: SortOrder
    tax_identification_number?: SortOrder
    pentrar_company_id?: SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrder
    company_type?: SortOrder
    point_of_contact?: SortOrder
    parent_company?: SortOrder
    subsidiaries_company?: SortOrder
    annual_revenue?: SortOrder
    financial_statement?: SortOrder
    status?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    company_name?: SortOrder
    company_address?: SortOrder
    legal_entity_name?: SortOrder
    tax_identification_number?: SortOrder
    pentrar_company_id?: SortOrder
    created_by_id?: SortOrder
    last_active?: SortOrder
    company_type?: SortOrder
    point_of_contact?: SortOrder
    parent_company?: SortOrder
    subsidiaries_company?: SortOrder
    annual_revenue?: SortOrder
    financial_statement?: SortOrder
    status?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
  }

  export type FarmerRelationFilter = {
    is?: FarmerWhereInput
    isNot?: FarmerWhereInput
  }

  export type TransporterCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    is_active?: SortOrder
    pentrar_trans_id?: SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    vehicle_type?: SortOrder
    vehicle_number?: SortOrder
    Vehicle_license?: SortOrder
  }

  export type TransporterMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    is_active?: SortOrder
    pentrar_trans_id?: SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    vehicle_type?: SortOrder
    vehicle_number?: SortOrder
    Vehicle_license?: SortOrder
  }

  export type TransporterMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    last_active?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    is_active?: SortOrder
    pentrar_trans_id?: SortOrder
    created_by_id?: SortOrder
    verification_code?: SortOrder
    password_resetCode?: SortOrder
    isEmail_verified?: SortOrder
    vehicle_type?: SortOrder
    vehicle_number?: SortOrder
    Vehicle_license?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProduceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    farmer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pentrar_produce_id?: SortOrder
    image?: SortOrder
    description?: SortOrder
  }

  export type ProduceAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type ProduceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    farmer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pentrar_produce_id?: SortOrder
    image?: SortOrder
    description?: SortOrder
  }

  export type ProduceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    farmer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pentrar_produce_id?: SortOrder
    image?: SortOrder
    description?: SortOrder
  }

  export type ProduceSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FarmerCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmerCreateWithoutUserInput, FarmerUncheckedCreateWithoutUserInput> | FarmerCreateWithoutUserInput[] | FarmerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutUserInput | FarmerCreateOrConnectWithoutUserInput[]
    createMany?: FarmerCreateManyUserInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type TransporterCreateNestedManyWithoutUserInput = {
    create?: XOR<TransporterCreateWithoutUserInput, TransporterUncheckedCreateWithoutUserInput> | TransporterCreateWithoutUserInput[] | TransporterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutUserInput | TransporterCreateOrConnectWithoutUserInput[]
    createMany?: TransporterCreateManyUserInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type AggregatorCreateNestedManyWithoutUserInput = {
    create?: XOR<AggregatorCreateWithoutUserInput, AggregatorUncheckedCreateWithoutUserInput> | AggregatorCreateWithoutUserInput[] | AggregatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutUserInput | AggregatorCreateOrConnectWithoutUserInput[]
    createMany?: AggregatorCreateManyUserInputEnvelope
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FarmerCreateWithoutUserInput, FarmerUncheckedCreateWithoutUserInput> | FarmerCreateWithoutUserInput[] | FarmerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutUserInput | FarmerCreateOrConnectWithoutUserInput[]
    createMany?: FarmerCreateManyUserInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type TransporterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransporterCreateWithoutUserInput, TransporterUncheckedCreateWithoutUserInput> | TransporterCreateWithoutUserInput[] | TransporterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutUserInput | TransporterCreateOrConnectWithoutUserInput[]
    createMany?: TransporterCreateManyUserInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type AggregatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AggregatorCreateWithoutUserInput, AggregatorUncheckedCreateWithoutUserInput> | AggregatorCreateWithoutUserInput[] | AggregatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutUserInput | AggregatorCreateOrConnectWithoutUserInput[]
    createMany?: AggregatorCreateManyUserInputEnvelope
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FarmerUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmerCreateWithoutUserInput, FarmerUncheckedCreateWithoutUserInput> | FarmerCreateWithoutUserInput[] | FarmerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutUserInput | FarmerCreateOrConnectWithoutUserInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutUserInput | FarmerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmerCreateManyUserInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutUserInput | FarmerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutUserInput | FarmerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type TransporterUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransporterCreateWithoutUserInput, TransporterUncheckedCreateWithoutUserInput> | TransporterCreateWithoutUserInput[] | TransporterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutUserInput | TransporterCreateOrConnectWithoutUserInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutUserInput | TransporterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransporterCreateManyUserInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutUserInput | TransporterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutUserInput | TransporterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type AggregatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AggregatorCreateWithoutUserInput, AggregatorUncheckedCreateWithoutUserInput> | AggregatorCreateWithoutUserInput[] | AggregatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutUserInput | AggregatorCreateOrConnectWithoutUserInput[]
    upsert?: AggregatorUpsertWithWhereUniqueWithoutUserInput | AggregatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AggregatorCreateManyUserInputEnvelope
    set?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    disconnect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    delete?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    update?: AggregatorUpdateWithWhereUniqueWithoutUserInput | AggregatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AggregatorUpdateManyWithWhereWithoutUserInput | AggregatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AggregatorScalarWhereInput | AggregatorScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FarmerCreateWithoutUserInput, FarmerUncheckedCreateWithoutUserInput> | FarmerCreateWithoutUserInput[] | FarmerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutUserInput | FarmerCreateOrConnectWithoutUserInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutUserInput | FarmerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FarmerCreateManyUserInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutUserInput | FarmerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutUserInput | FarmerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type TransporterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransporterCreateWithoutUserInput, TransporterUncheckedCreateWithoutUserInput> | TransporterCreateWithoutUserInput[] | TransporterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutUserInput | TransporterCreateOrConnectWithoutUserInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutUserInput | TransporterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransporterCreateManyUserInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutUserInput | TransporterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutUserInput | TransporterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type AggregatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AggregatorCreateWithoutUserInput, AggregatorUncheckedCreateWithoutUserInput> | AggregatorCreateWithoutUserInput[] | AggregatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutUserInput | AggregatorCreateOrConnectWithoutUserInput[]
    upsert?: AggregatorUpsertWithWhereUniqueWithoutUserInput | AggregatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AggregatorCreateManyUserInputEnvelope
    set?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    disconnect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    delete?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    update?: AggregatorUpdateWithWhereUniqueWithoutUserInput | AggregatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AggregatorUpdateManyWithWhereWithoutUserInput | AggregatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AggregatorScalarWhereInput | AggregatorScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutAggregatorsInput = {
    create?: XOR<CompanyCreateWithoutAggregatorsInput, CompanyUncheckedCreateWithoutAggregatorsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAggregatorsInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAggregatorsInput = {
    create?: XOR<UserCreateWithoutAggregatorsInput, UserUncheckedCreateWithoutAggregatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAggregatorsInput
    connect?: UserWhereUniqueInput
  }

  export type FarmerCreateNestedManyWithoutAggregatorInput = {
    create?: XOR<FarmerCreateWithoutAggregatorInput, FarmerUncheckedCreateWithoutAggregatorInput> | FarmerCreateWithoutAggregatorInput[] | FarmerUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutAggregatorInput | FarmerCreateOrConnectWithoutAggregatorInput[]
    createMany?: FarmerCreateManyAggregatorInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type TransporterCreateNestedManyWithoutAggregatorInput = {
    create?: XOR<TransporterCreateWithoutAggregatorInput, TransporterUncheckedCreateWithoutAggregatorInput> | TransporterCreateWithoutAggregatorInput[] | TransporterUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutAggregatorInput | TransporterCreateOrConnectWithoutAggregatorInput[]
    createMany?: TransporterCreateManyAggregatorInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutAggregatorInput = {
    create?: XOR<FarmerCreateWithoutAggregatorInput, FarmerUncheckedCreateWithoutAggregatorInput> | FarmerCreateWithoutAggregatorInput[] | FarmerUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutAggregatorInput | FarmerCreateOrConnectWithoutAggregatorInput[]
    createMany?: FarmerCreateManyAggregatorInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type TransporterUncheckedCreateNestedManyWithoutAggregatorInput = {
    create?: XOR<TransporterCreateWithoutAggregatorInput, TransporterUncheckedCreateWithoutAggregatorInput> | TransporterCreateWithoutAggregatorInput[] | TransporterUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutAggregatorInput | TransporterCreateOrConnectWithoutAggregatorInput[]
    createMany?: TransporterCreateManyAggregatorInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutAggregatorsNestedInput = {
    create?: XOR<CompanyCreateWithoutAggregatorsInput, CompanyUncheckedCreateWithoutAggregatorsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAggregatorsInput
    upsert?: CompanyUpsertWithoutAggregatorsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAggregatorsInput, CompanyUpdateWithoutAggregatorsInput>, CompanyUncheckedUpdateWithoutAggregatorsInput>
  }

  export type UserUpdateOneWithoutAggregatorsNestedInput = {
    create?: XOR<UserCreateWithoutAggregatorsInput, UserUncheckedCreateWithoutAggregatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAggregatorsInput
    upsert?: UserUpsertWithoutAggregatorsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAggregatorsInput, UserUpdateWithoutAggregatorsInput>, UserUncheckedUpdateWithoutAggregatorsInput>
  }

  export type FarmerUpdateManyWithoutAggregatorNestedInput = {
    create?: XOR<FarmerCreateWithoutAggregatorInput, FarmerUncheckedCreateWithoutAggregatorInput> | FarmerCreateWithoutAggregatorInput[] | FarmerUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutAggregatorInput | FarmerCreateOrConnectWithoutAggregatorInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutAggregatorInput | FarmerUpsertWithWhereUniqueWithoutAggregatorInput[]
    createMany?: FarmerCreateManyAggregatorInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutAggregatorInput | FarmerUpdateWithWhereUniqueWithoutAggregatorInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutAggregatorInput | FarmerUpdateManyWithWhereWithoutAggregatorInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type TransporterUpdateManyWithoutAggregatorNestedInput = {
    create?: XOR<TransporterCreateWithoutAggregatorInput, TransporterUncheckedCreateWithoutAggregatorInput> | TransporterCreateWithoutAggregatorInput[] | TransporterUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutAggregatorInput | TransporterCreateOrConnectWithoutAggregatorInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutAggregatorInput | TransporterUpsertWithWhereUniqueWithoutAggregatorInput[]
    createMany?: TransporterCreateManyAggregatorInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutAggregatorInput | TransporterUpdateWithWhereUniqueWithoutAggregatorInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutAggregatorInput | TransporterUpdateManyWithWhereWithoutAggregatorInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutAggregatorNestedInput = {
    create?: XOR<FarmerCreateWithoutAggregatorInput, FarmerUncheckedCreateWithoutAggregatorInput> | FarmerCreateWithoutAggregatorInput[] | FarmerUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutAggregatorInput | FarmerCreateOrConnectWithoutAggregatorInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutAggregatorInput | FarmerUpsertWithWhereUniqueWithoutAggregatorInput[]
    createMany?: FarmerCreateManyAggregatorInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutAggregatorInput | FarmerUpdateWithWhereUniqueWithoutAggregatorInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutAggregatorInput | FarmerUpdateManyWithWhereWithoutAggregatorInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type TransporterUncheckedUpdateManyWithoutAggregatorNestedInput = {
    create?: XOR<TransporterCreateWithoutAggregatorInput, TransporterUncheckedCreateWithoutAggregatorInput> | TransporterCreateWithoutAggregatorInput[] | TransporterUncheckedCreateWithoutAggregatorInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutAggregatorInput | TransporterCreateOrConnectWithoutAggregatorInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutAggregatorInput | TransporterUpsertWithWhereUniqueWithoutAggregatorInput[]
    createMany?: TransporterCreateManyAggregatorInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutAggregatorInput | TransporterUpdateWithWhereUniqueWithoutAggregatorInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutAggregatorInput | TransporterUpdateManyWithWhereWithoutAggregatorInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type FarmerCreatetype_of_produceInput = {
    set: string[]
  }

  export type AggregatorCreateNestedOneWithoutFarmersInput = {
    create?: XOR<AggregatorCreateWithoutFarmersInput, AggregatorUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: AggregatorCreateOrConnectWithoutFarmersInput
    connect?: AggregatorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFarmersInput = {
    create?: XOR<UserCreateWithoutFarmersInput, UserUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmersInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutFarmersInput = {
    create?: XOR<CompanyCreateWithoutFarmersInput, CompanyUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFarmersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProduceCreateNestedManyWithoutFarmerInput = {
    create?: XOR<ProduceCreateWithoutFarmerInput, ProduceUncheckedCreateWithoutFarmerInput> | ProduceCreateWithoutFarmerInput[] | ProduceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutFarmerInput | ProduceCreateOrConnectWithoutFarmerInput[]
    createMany?: ProduceCreateManyFarmerInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type TransporterCreateNestedManyWithoutFarmerInput = {
    create?: XOR<TransporterCreateWithoutFarmerInput, TransporterUncheckedCreateWithoutFarmerInput> | TransporterCreateWithoutFarmerInput[] | TransporterUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutFarmerInput | TransporterCreateOrConnectWithoutFarmerInput[]
    createMany?: TransporterCreateManyFarmerInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type ProduceUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<ProduceCreateWithoutFarmerInput, ProduceUncheckedCreateWithoutFarmerInput> | ProduceCreateWithoutFarmerInput[] | ProduceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutFarmerInput | ProduceCreateOrConnectWithoutFarmerInput[]
    createMany?: ProduceCreateManyFarmerInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type TransporterUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<TransporterCreateWithoutFarmerInput, TransporterUncheckedCreateWithoutFarmerInput> | TransporterCreateWithoutFarmerInput[] | TransporterUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutFarmerInput | TransporterCreateOrConnectWithoutFarmerInput[]
    createMany?: TransporterCreateManyFarmerInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type FarmerUpdatetype_of_produceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AggregatorUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<AggregatorCreateWithoutFarmersInput, AggregatorUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: AggregatorCreateOrConnectWithoutFarmersInput
    upsert?: AggregatorUpsertWithoutFarmersInput
    connect?: AggregatorWhereUniqueInput
    update?: XOR<XOR<AggregatorUpdateToOneWithWhereWithoutFarmersInput, AggregatorUpdateWithoutFarmersInput>, AggregatorUncheckedUpdateWithoutFarmersInput>
  }

  export type UserUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<UserCreateWithoutFarmersInput, UserUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmersInput
    upsert?: UserUpsertWithoutFarmersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmersInput, UserUpdateWithoutFarmersInput>, UserUncheckedUpdateWithoutFarmersInput>
  }

  export type CompanyUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<CompanyCreateWithoutFarmersInput, CompanyUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFarmersInput
    upsert?: CompanyUpsertWithoutFarmersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFarmersInput, CompanyUpdateWithoutFarmersInput>, CompanyUncheckedUpdateWithoutFarmersInput>
  }

  export type ProduceUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<ProduceCreateWithoutFarmerInput, ProduceUncheckedCreateWithoutFarmerInput> | ProduceCreateWithoutFarmerInput[] | ProduceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutFarmerInput | ProduceCreateOrConnectWithoutFarmerInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutFarmerInput | ProduceUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: ProduceCreateManyFarmerInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutFarmerInput | ProduceUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutFarmerInput | ProduceUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type TransporterUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<TransporterCreateWithoutFarmerInput, TransporterUncheckedCreateWithoutFarmerInput> | TransporterCreateWithoutFarmerInput[] | TransporterUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutFarmerInput | TransporterCreateOrConnectWithoutFarmerInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutFarmerInput | TransporterUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: TransporterCreateManyFarmerInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutFarmerInput | TransporterUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutFarmerInput | TransporterUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type ProduceUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<ProduceCreateWithoutFarmerInput, ProduceUncheckedCreateWithoutFarmerInput> | ProduceCreateWithoutFarmerInput[] | ProduceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutFarmerInput | ProduceCreateOrConnectWithoutFarmerInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutFarmerInput | ProduceUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: ProduceCreateManyFarmerInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutFarmerInput | ProduceUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutFarmerInput | ProduceUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type TransporterUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<TransporterCreateWithoutFarmerInput, TransporterUncheckedCreateWithoutFarmerInput> | TransporterCreateWithoutFarmerInput[] | TransporterUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutFarmerInput | TransporterCreateOrConnectWithoutFarmerInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutFarmerInput | TransporterUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: TransporterCreateManyFarmerInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutFarmerInput | TransporterUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutFarmerInput | TransporterUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type FarmerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FarmerCreateWithoutCompanyInput, FarmerUncheckedCreateWithoutCompanyInput> | FarmerCreateWithoutCompanyInput[] | FarmerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCompanyInput | FarmerCreateOrConnectWithoutCompanyInput[]
    createMany?: FarmerCreateManyCompanyInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type AggregatorCreateNestedManyWithoutCompanyInput = {
    create?: XOR<AggregatorCreateWithoutCompanyInput, AggregatorUncheckedCreateWithoutCompanyInput> | AggregatorCreateWithoutCompanyInput[] | AggregatorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutCompanyInput | AggregatorCreateOrConnectWithoutCompanyInput[]
    createMany?: AggregatorCreateManyCompanyInputEnvelope
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
  }

  export type TransporterCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransporterCreateWithoutCompanyInput, TransporterUncheckedCreateWithoutCompanyInput> | TransporterCreateWithoutCompanyInput[] | TransporterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutCompanyInput | TransporterCreateOrConnectWithoutCompanyInput[]
    createMany?: TransporterCreateManyCompanyInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FarmerCreateWithoutCompanyInput, FarmerUncheckedCreateWithoutCompanyInput> | FarmerCreateWithoutCompanyInput[] | FarmerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCompanyInput | FarmerCreateOrConnectWithoutCompanyInput[]
    createMany?: FarmerCreateManyCompanyInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type AggregatorUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<AggregatorCreateWithoutCompanyInput, AggregatorUncheckedCreateWithoutCompanyInput> | AggregatorCreateWithoutCompanyInput[] | AggregatorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutCompanyInput | AggregatorCreateOrConnectWithoutCompanyInput[]
    createMany?: AggregatorCreateManyCompanyInputEnvelope
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
  }

  export type TransporterUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransporterCreateWithoutCompanyInput, TransporterUncheckedCreateWithoutCompanyInput> | TransporterCreateWithoutCompanyInput[] | TransporterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutCompanyInput | TransporterCreateOrConnectWithoutCompanyInput[]
    createMany?: TransporterCreateManyCompanyInputEnvelope
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
  }

  export type FarmerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FarmerCreateWithoutCompanyInput, FarmerUncheckedCreateWithoutCompanyInput> | FarmerCreateWithoutCompanyInput[] | FarmerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCompanyInput | FarmerCreateOrConnectWithoutCompanyInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutCompanyInput | FarmerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FarmerCreateManyCompanyInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutCompanyInput | FarmerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutCompanyInput | FarmerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type AggregatorUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<AggregatorCreateWithoutCompanyInput, AggregatorUncheckedCreateWithoutCompanyInput> | AggregatorCreateWithoutCompanyInput[] | AggregatorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutCompanyInput | AggregatorCreateOrConnectWithoutCompanyInput[]
    upsert?: AggregatorUpsertWithWhereUniqueWithoutCompanyInput | AggregatorUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: AggregatorCreateManyCompanyInputEnvelope
    set?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    disconnect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    delete?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    update?: AggregatorUpdateWithWhereUniqueWithoutCompanyInput | AggregatorUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: AggregatorUpdateManyWithWhereWithoutCompanyInput | AggregatorUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: AggregatorScalarWhereInput | AggregatorScalarWhereInput[]
  }

  export type TransporterUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransporterCreateWithoutCompanyInput, TransporterUncheckedCreateWithoutCompanyInput> | TransporterCreateWithoutCompanyInput[] | TransporterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutCompanyInput | TransporterCreateOrConnectWithoutCompanyInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutCompanyInput | TransporterUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransporterCreateManyCompanyInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutCompanyInput | TransporterUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutCompanyInput | TransporterUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FarmerCreateWithoutCompanyInput, FarmerUncheckedCreateWithoutCompanyInput> | FarmerCreateWithoutCompanyInput[] | FarmerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCompanyInput | FarmerCreateOrConnectWithoutCompanyInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutCompanyInput | FarmerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FarmerCreateManyCompanyInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutCompanyInput | FarmerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutCompanyInput | FarmerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type AggregatorUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<AggregatorCreateWithoutCompanyInput, AggregatorUncheckedCreateWithoutCompanyInput> | AggregatorCreateWithoutCompanyInput[] | AggregatorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AggregatorCreateOrConnectWithoutCompanyInput | AggregatorCreateOrConnectWithoutCompanyInput[]
    upsert?: AggregatorUpsertWithWhereUniqueWithoutCompanyInput | AggregatorUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: AggregatorCreateManyCompanyInputEnvelope
    set?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    disconnect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    delete?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    connect?: AggregatorWhereUniqueInput | AggregatorWhereUniqueInput[]
    update?: AggregatorUpdateWithWhereUniqueWithoutCompanyInput | AggregatorUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: AggregatorUpdateManyWithWhereWithoutCompanyInput | AggregatorUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: AggregatorScalarWhereInput | AggregatorScalarWhereInput[]
  }

  export type TransporterUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransporterCreateWithoutCompanyInput, TransporterUncheckedCreateWithoutCompanyInput> | TransporterCreateWithoutCompanyInput[] | TransporterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransporterCreateOrConnectWithoutCompanyInput | TransporterCreateOrConnectWithoutCompanyInput[]
    upsert?: TransporterUpsertWithWhereUniqueWithoutCompanyInput | TransporterUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransporterCreateManyCompanyInputEnvelope
    set?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    disconnect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    delete?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    connect?: TransporterWhereUniqueInput | TransporterWhereUniqueInput[]
    update?: TransporterUpdateWithWhereUniqueWithoutCompanyInput | TransporterUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransporterUpdateManyWithWhereWithoutCompanyInput | TransporterUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutTransportersInput = {
    create?: XOR<CompanyCreateWithoutTransportersInput, CompanyUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransportersInput
    connect?: CompanyWhereUniqueInput
  }

  export type AggregatorCreateNestedOneWithoutTransportersInput = {
    create?: XOR<AggregatorCreateWithoutTransportersInput, AggregatorUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: AggregatorCreateOrConnectWithoutTransportersInput
    connect?: AggregatorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransportersInput = {
    create?: XOR<UserCreateWithoutTransportersInput, UserUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransportersInput
    connect?: UserWhereUniqueInput
  }

  export type FarmerCreateNestedOneWithoutTransportersInput = {
    create?: XOR<FarmerCreateWithoutTransportersInput, FarmerUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutTransportersInput
    connect?: FarmerWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutTransportersNestedInput = {
    create?: XOR<CompanyCreateWithoutTransportersInput, CompanyUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransportersInput
    upsert?: CompanyUpsertWithoutTransportersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTransportersInput, CompanyUpdateWithoutTransportersInput>, CompanyUncheckedUpdateWithoutTransportersInput>
  }

  export type AggregatorUpdateOneRequiredWithoutTransportersNestedInput = {
    create?: XOR<AggregatorCreateWithoutTransportersInput, AggregatorUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: AggregatorCreateOrConnectWithoutTransportersInput
    upsert?: AggregatorUpsertWithoutTransportersInput
    connect?: AggregatorWhereUniqueInput
    update?: XOR<XOR<AggregatorUpdateToOneWithWhereWithoutTransportersInput, AggregatorUpdateWithoutTransportersInput>, AggregatorUncheckedUpdateWithoutTransportersInput>
  }

  export type UserUpdateOneRequiredWithoutTransportersNestedInput = {
    create?: XOR<UserCreateWithoutTransportersInput, UserUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransportersInput
    upsert?: UserUpsertWithoutTransportersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransportersInput, UserUpdateWithoutTransportersInput>, UserUncheckedUpdateWithoutTransportersInput>
  }

  export type FarmerUpdateOneRequiredWithoutTransportersNestedInput = {
    create?: XOR<FarmerCreateWithoutTransportersInput, FarmerUncheckedCreateWithoutTransportersInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutTransportersInput
    upsert?: FarmerUpsertWithoutTransportersInput
    connect?: FarmerWhereUniqueInput
    update?: XOR<XOR<FarmerUpdateToOneWithWhereWithoutTransportersInput, FarmerUpdateWithoutTransportersInput>, FarmerUncheckedUpdateWithoutTransportersInput>
  }

  export type FarmerCreateNestedOneWithoutList_of_produceInput = {
    create?: XOR<FarmerCreateWithoutList_of_produceInput, FarmerUncheckedCreateWithoutList_of_produceInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutList_of_produceInput
    connect?: FarmerWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmerUpdateOneRequiredWithoutList_of_produceNestedInput = {
    create?: XOR<FarmerCreateWithoutList_of_produceInput, FarmerUncheckedCreateWithoutList_of_produceInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutList_of_produceInput
    upsert?: FarmerUpsertWithoutList_of_produceInput
    connect?: FarmerWhereUniqueInput
    update?: XOR<XOR<FarmerUpdateToOneWithWhereWithoutList_of_produceInput, FarmerUpdateWithoutList_of_produceInput>, FarmerUncheckedUpdateWithoutList_of_produceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FarmerCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregator: AggregatorCreateNestedOneWithoutFarmersInput
    company: CompanyCreateNestedOneWithoutFarmersInput
    list_of_produce?: ProduceCreateNestedManyWithoutFarmerInput
    transporters?: TransporterCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    list_of_produce?: ProduceUncheckedCreateNestedManyWithoutFarmerInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutUserInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutUserInput, FarmerUncheckedCreateWithoutUserInput>
  }

  export type FarmerCreateManyUserInputEnvelope = {
    data: FarmerCreateManyUserInput | FarmerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransporterCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
    company: CompanyCreateNestedOneWithoutTransportersInput
    aggregator: AggregatorCreateNestedOneWithoutTransportersInput
    farmer: FarmerCreateNestedOneWithoutTransportersInput
  }

  export type TransporterUncheckedCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type TransporterCreateOrConnectWithoutUserInput = {
    where: TransporterWhereUniqueInput
    create: XOR<TransporterCreateWithoutUserInput, TransporterUncheckedCreateWithoutUserInput>
  }

  export type TransporterCreateManyUserInputEnvelope = {
    data: TransporterCreateManyUserInput | TransporterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AggregatorCreateWithoutUserInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    company: CompanyCreateNestedOneWithoutAggregatorsInput
    farmers?: FarmerCreateNestedManyWithoutAggregatorInput
    transporters?: TransporterCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorUncheckedCreateWithoutUserInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutAggregatorInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorCreateOrConnectWithoutUserInput = {
    where: AggregatorWhereUniqueInput
    create: XOR<AggregatorCreateWithoutUserInput, AggregatorUncheckedCreateWithoutUserInput>
  }

  export type AggregatorCreateManyUserInputEnvelope = {
    data: AggregatorCreateManyUserInput | AggregatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FarmerUpsertWithWhereUniqueWithoutUserInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutUserInput, FarmerUncheckedUpdateWithoutUserInput>
    create: XOR<FarmerCreateWithoutUserInput, FarmerUncheckedCreateWithoutUserInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutUserInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutUserInput, FarmerUncheckedUpdateWithoutUserInput>
  }

  export type FarmerUpdateManyWithWhereWithoutUserInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutUserInput>
  }

  export type FarmerScalarWhereInput = {
    AND?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
    OR?: FarmerScalarWhereInput[]
    NOT?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
    id?: StringFilter<"Farmer"> | string
    created_at?: DateTimeFilter<"Farmer"> | Date | string
    updated_at?: DateTimeFilter<"Farmer"> | Date | string
    email?: StringNullableFilter<"Farmer"> | string | null
    phone_number?: StringNullableFilter<"Farmer"> | string | null
    password?: StringNullableFilter<"Farmer"> | string | null
    first_name?: StringNullableFilter<"Farmer"> | string | null
    last_name?: StringNullableFilter<"Farmer"> | string | null
    type_of_produce?: StringNullableListFilter<"Farmer">
    pentrar_farmer_id?: StringNullableFilter<"Farmer"> | string | null
    created_by_id?: StringFilter<"Farmer"> | string
    last_active?: StringNullableFilter<"Farmer"> | string | null
    status?: EnumUserStatusFilter<"Farmer"> | $Enums.UserStatus
    verification_code?: StringNullableFilter<"Farmer"> | string | null
    password_resetCode?: StringNullableFilter<"Farmer"> | string | null
    isEmail_verified?: BoolFilter<"Farmer"> | boolean
    role?: StringNullableFilter<"Farmer"> | string | null
    is_active?: BoolNullableFilter<"Farmer"> | boolean | null
  }

  export type TransporterUpsertWithWhereUniqueWithoutUserInput = {
    where: TransporterWhereUniqueInput
    update: XOR<TransporterUpdateWithoutUserInput, TransporterUncheckedUpdateWithoutUserInput>
    create: XOR<TransporterCreateWithoutUserInput, TransporterUncheckedCreateWithoutUserInput>
  }

  export type TransporterUpdateWithWhereUniqueWithoutUserInput = {
    where: TransporterWhereUniqueInput
    data: XOR<TransporterUpdateWithoutUserInput, TransporterUncheckedUpdateWithoutUserInput>
  }

  export type TransporterUpdateManyWithWhereWithoutUserInput = {
    where: TransporterScalarWhereInput
    data: XOR<TransporterUpdateManyMutationInput, TransporterUncheckedUpdateManyWithoutUserInput>
  }

  export type TransporterScalarWhereInput = {
    AND?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
    OR?: TransporterScalarWhereInput[]
    NOT?: TransporterScalarWhereInput | TransporterScalarWhereInput[]
    id?: StringFilter<"Transporter"> | string
    created_at?: DateTimeFilter<"Transporter"> | Date | string
    updated_at?: DateTimeFilter<"Transporter"> | Date | string
    email?: StringFilter<"Transporter"> | string
    password?: StringNullableFilter<"Transporter"> | string | null
    first_name?: StringNullableFilter<"Transporter"> | string | null
    last_name?: StringNullableFilter<"Transporter"> | string | null
    role?: StringNullableFilter<"Transporter"> | string | null
    last_active?: StringNullableFilter<"Transporter"> | string | null
    status?: EnumUserStatusFilter<"Transporter"> | $Enums.UserStatus
    phone_number?: StringNullableFilter<"Transporter"> | string | null
    is_active?: BoolNullableFilter<"Transporter"> | boolean | null
    pentrar_trans_id?: StringNullableFilter<"Transporter"> | string | null
    created_by_id?: StringFilter<"Transporter"> | string
    verification_code?: StringNullableFilter<"Transporter"> | string | null
    password_resetCode?: StringNullableFilter<"Transporter"> | string | null
    isEmail_verified?: BoolFilter<"Transporter"> | boolean
    vehicle_type?: StringNullableFilter<"Transporter"> | string | null
    vehicle_number?: StringNullableFilter<"Transporter"> | string | null
    Vehicle_license?: StringNullableFilter<"Transporter"> | string | null
  }

  export type AggregatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AggregatorWhereUniqueInput
    update: XOR<AggregatorUpdateWithoutUserInput, AggregatorUncheckedUpdateWithoutUserInput>
    create: XOR<AggregatorCreateWithoutUserInput, AggregatorUncheckedCreateWithoutUserInput>
  }

  export type AggregatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AggregatorWhereUniqueInput
    data: XOR<AggregatorUpdateWithoutUserInput, AggregatorUncheckedUpdateWithoutUserInput>
  }

  export type AggregatorUpdateManyWithWhereWithoutUserInput = {
    where: AggregatorScalarWhereInput
    data: XOR<AggregatorUpdateManyMutationInput, AggregatorUncheckedUpdateManyWithoutUserInput>
  }

  export type AggregatorScalarWhereInput = {
    AND?: AggregatorScalarWhereInput | AggregatorScalarWhereInput[]
    OR?: AggregatorScalarWhereInput[]
    NOT?: AggregatorScalarWhereInput | AggregatorScalarWhereInput[]
    id?: StringFilter<"Aggregator"> | string
    created_at?: DateTimeFilter<"Aggregator"> | Date | string
    updated_at?: DateTimeFilter<"Aggregator"> | Date | string
    is_active?: BoolNullableFilter<"Aggregator"> | boolean | null
    email?: StringNullableFilter<"Aggregator"> | string | null
    password?: StringNullableFilter<"Aggregator"> | string | null
    first_name?: StringNullableFilter<"Aggregator"> | string | null
    last_name?: StringNullableFilter<"Aggregator"> | string | null
    last_active?: StringNullableFilter<"Aggregator"> | string | null
    phone_number?: StringNullableFilter<"Aggregator"> | string | null
    pentrar_aggregator_id?: StringNullableFilter<"Aggregator"> | string | null
    created_by_id?: StringFilter<"Aggregator"> | string
    verification_code?: StringNullableFilter<"Aggregator"> | string | null
    password_resetCode?: StringNullableFilter<"Aggregator"> | string | null
    isEmail_verified?: BoolFilter<"Aggregator"> | boolean
    status?: EnumUserStatusFilter<"Aggregator"> | $Enums.UserStatus
    role?: StringNullableFilter<"Aggregator"> | string | null
  }

  export type CompanyCreateWithoutAggregatorsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    farmers?: FarmerCreateNestedManyWithoutCompanyInput
    transporters?: TransporterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAggregatorsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutCompanyInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAggregatorsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAggregatorsInput, CompanyUncheckedCreateWithoutAggregatorsInput>
  }

  export type UserCreateWithoutAggregatorsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    farmers?: FarmerCreateNestedManyWithoutUserInput
    transporters?: TransporterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAggregatorsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    farmers?: FarmerUncheckedCreateNestedManyWithoutUserInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAggregatorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAggregatorsInput, UserUncheckedCreateWithoutAggregatorsInput>
  }

  export type FarmerCreateWithoutAggregatorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    user: UserCreateNestedOneWithoutFarmersInput
    company: CompanyCreateNestedOneWithoutFarmersInput
    list_of_produce?: ProduceCreateNestedManyWithoutFarmerInput
    transporters?: TransporterCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutAggregatorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    list_of_produce?: ProduceUncheckedCreateNestedManyWithoutFarmerInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutAggregatorInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutAggregatorInput, FarmerUncheckedCreateWithoutAggregatorInput>
  }

  export type FarmerCreateManyAggregatorInputEnvelope = {
    data: FarmerCreateManyAggregatorInput | FarmerCreateManyAggregatorInput[]
    skipDuplicates?: boolean
  }

  export type TransporterCreateWithoutAggregatorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
    company: CompanyCreateNestedOneWithoutTransportersInput
    user: UserCreateNestedOneWithoutTransportersInput
    farmer: FarmerCreateNestedOneWithoutTransportersInput
  }

  export type TransporterUncheckedCreateWithoutAggregatorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type TransporterCreateOrConnectWithoutAggregatorInput = {
    where: TransporterWhereUniqueInput
    create: XOR<TransporterCreateWithoutAggregatorInput, TransporterUncheckedCreateWithoutAggregatorInput>
  }

  export type TransporterCreateManyAggregatorInputEnvelope = {
    data: TransporterCreateManyAggregatorInput | TransporterCreateManyAggregatorInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutAggregatorsInput = {
    update: XOR<CompanyUpdateWithoutAggregatorsInput, CompanyUncheckedUpdateWithoutAggregatorsInput>
    create: XOR<CompanyCreateWithoutAggregatorsInput, CompanyUncheckedCreateWithoutAggregatorsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAggregatorsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAggregatorsInput, CompanyUncheckedUpdateWithoutAggregatorsInput>
  }

  export type CompanyUpdateWithoutAggregatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    farmers?: FarmerUpdateManyWithoutCompanyNestedInput
    transporters?: TransporterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAggregatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    farmers?: FarmerUncheckedUpdateManyWithoutCompanyNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutAggregatorsInput = {
    update: XOR<UserUpdateWithoutAggregatorsInput, UserUncheckedUpdateWithoutAggregatorsInput>
    create: XOR<UserCreateWithoutAggregatorsInput, UserUncheckedCreateWithoutAggregatorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAggregatorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAggregatorsInput, UserUncheckedUpdateWithoutAggregatorsInput>
  }

  export type UserUpdateWithoutAggregatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    farmers?: FarmerUpdateManyWithoutUserNestedInput
    transporters?: TransporterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAggregatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    farmers?: FarmerUncheckedUpdateManyWithoutUserNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FarmerUpsertWithWhereUniqueWithoutAggregatorInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutAggregatorInput, FarmerUncheckedUpdateWithoutAggregatorInput>
    create: XOR<FarmerCreateWithoutAggregatorInput, FarmerUncheckedCreateWithoutAggregatorInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutAggregatorInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutAggregatorInput, FarmerUncheckedUpdateWithoutAggregatorInput>
  }

  export type FarmerUpdateManyWithWhereWithoutAggregatorInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutAggregatorInput>
  }

  export type TransporterUpsertWithWhereUniqueWithoutAggregatorInput = {
    where: TransporterWhereUniqueInput
    update: XOR<TransporterUpdateWithoutAggregatorInput, TransporterUncheckedUpdateWithoutAggregatorInput>
    create: XOR<TransporterCreateWithoutAggregatorInput, TransporterUncheckedCreateWithoutAggregatorInput>
  }

  export type TransporterUpdateWithWhereUniqueWithoutAggregatorInput = {
    where: TransporterWhereUniqueInput
    data: XOR<TransporterUpdateWithoutAggregatorInput, TransporterUncheckedUpdateWithoutAggregatorInput>
  }

  export type TransporterUpdateManyWithWhereWithoutAggregatorInput = {
    where: TransporterScalarWhereInput
    data: XOR<TransporterUpdateManyMutationInput, TransporterUncheckedUpdateManyWithoutAggregatorInput>
  }

  export type AggregatorCreateWithoutFarmersInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    company: CompanyCreateNestedOneWithoutAggregatorsInput
    user?: UserCreateNestedOneWithoutAggregatorsInput
    transporters?: TransporterCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorUncheckedCreateWithoutFarmersInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    created_by_id: string
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    transporters?: TransporterUncheckedCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorCreateOrConnectWithoutFarmersInput = {
    where: AggregatorWhereUniqueInput
    create: XOR<AggregatorCreateWithoutFarmersInput, AggregatorUncheckedCreateWithoutFarmersInput>
  }

  export type UserCreateWithoutFarmersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    transporters?: TransporterCreateNestedManyWithoutUserInput
    aggregators?: AggregatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFarmersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    transporters?: TransporterUncheckedCreateNestedManyWithoutUserInput
    aggregators?: AggregatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFarmersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmersInput, UserUncheckedCreateWithoutFarmersInput>
  }

  export type CompanyCreateWithoutFarmersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregators?: AggregatorCreateNestedManyWithoutCompanyInput
    transporters?: TransporterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFarmersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregators?: AggregatorUncheckedCreateNestedManyWithoutCompanyInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFarmersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFarmersInput, CompanyUncheckedCreateWithoutFarmersInput>
  }

  export type ProduceCreateWithoutFarmerInput = {
    id?: string
    name?: string | null
    quantity?: number | null
    unit?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    pentrar_produce_id?: string | null
    image?: string | null
    description?: string | null
  }

  export type ProduceUncheckedCreateWithoutFarmerInput = {
    id?: string
    name?: string | null
    quantity?: number | null
    unit?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    pentrar_produce_id?: string | null
    image?: string | null
    description?: string | null
  }

  export type ProduceCreateOrConnectWithoutFarmerInput = {
    where: ProduceWhereUniqueInput
    create: XOR<ProduceCreateWithoutFarmerInput, ProduceUncheckedCreateWithoutFarmerInput>
  }

  export type ProduceCreateManyFarmerInputEnvelope = {
    data: ProduceCreateManyFarmerInput | ProduceCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type TransporterCreateWithoutFarmerInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
    company: CompanyCreateNestedOneWithoutTransportersInput
    aggregator: AggregatorCreateNestedOneWithoutTransportersInput
    user: UserCreateNestedOneWithoutTransportersInput
  }

  export type TransporterUncheckedCreateWithoutFarmerInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type TransporterCreateOrConnectWithoutFarmerInput = {
    where: TransporterWhereUniqueInput
    create: XOR<TransporterCreateWithoutFarmerInput, TransporterUncheckedCreateWithoutFarmerInput>
  }

  export type TransporterCreateManyFarmerInputEnvelope = {
    data: TransporterCreateManyFarmerInput | TransporterCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type AggregatorUpsertWithoutFarmersInput = {
    update: XOR<AggregatorUpdateWithoutFarmersInput, AggregatorUncheckedUpdateWithoutFarmersInput>
    create: XOR<AggregatorCreateWithoutFarmersInput, AggregatorUncheckedCreateWithoutFarmersInput>
    where?: AggregatorWhereInput
  }

  export type AggregatorUpdateToOneWithWhereWithoutFarmersInput = {
    where?: AggregatorWhereInput
    data: XOR<AggregatorUpdateWithoutFarmersInput, AggregatorUncheckedUpdateWithoutFarmersInput>
  }

  export type AggregatorUpdateWithoutFarmersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutAggregatorsNestedInput
    user?: UserUpdateOneWithoutAggregatorsNestedInput
    transporters?: TransporterUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateWithoutFarmersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    transporters?: TransporterUncheckedUpdateManyWithoutAggregatorNestedInput
  }

  export type UserUpsertWithoutFarmersInput = {
    update: XOR<UserUpdateWithoutFarmersInput, UserUncheckedUpdateWithoutFarmersInput>
    create: XOR<UserCreateWithoutFarmersInput, UserUncheckedCreateWithoutFarmersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmersInput, UserUncheckedUpdateWithoutFarmersInput>
  }

  export type UserUpdateWithoutFarmersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    transporters?: TransporterUpdateManyWithoutUserNestedInput
    aggregators?: AggregatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFarmersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    transporters?: TransporterUncheckedUpdateManyWithoutUserNestedInput
    aggregators?: AggregatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyUpsertWithoutFarmersInput = {
    update: XOR<CompanyUpdateWithoutFarmersInput, CompanyUncheckedUpdateWithoutFarmersInput>
    create: XOR<CompanyCreateWithoutFarmersInput, CompanyUncheckedCreateWithoutFarmersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFarmersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFarmersInput, CompanyUncheckedUpdateWithoutFarmersInput>
  }

  export type CompanyUpdateWithoutFarmersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregators?: AggregatorUpdateManyWithoutCompanyNestedInput
    transporters?: TransporterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFarmersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregators?: AggregatorUncheckedUpdateManyWithoutCompanyNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ProduceUpsertWithWhereUniqueWithoutFarmerInput = {
    where: ProduceWhereUniqueInput
    update: XOR<ProduceUpdateWithoutFarmerInput, ProduceUncheckedUpdateWithoutFarmerInput>
    create: XOR<ProduceCreateWithoutFarmerInput, ProduceUncheckedCreateWithoutFarmerInput>
  }

  export type ProduceUpdateWithWhereUniqueWithoutFarmerInput = {
    where: ProduceWhereUniqueInput
    data: XOR<ProduceUpdateWithoutFarmerInput, ProduceUncheckedUpdateWithoutFarmerInput>
  }

  export type ProduceUpdateManyWithWhereWithoutFarmerInput = {
    where: ProduceScalarWhereInput
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyWithoutFarmerInput>
  }

  export type ProduceScalarWhereInput = {
    AND?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    OR?: ProduceScalarWhereInput[]
    NOT?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    id?: StringFilter<"Produce"> | string
    name?: StringNullableFilter<"Produce"> | string | null
    quantity?: IntNullableFilter<"Produce"> | number | null
    unit?: IntNullableFilter<"Produce"> | number | null
    farmer_id?: StringFilter<"Produce"> | string
    created_at?: DateTimeFilter<"Produce"> | Date | string
    updated_at?: DateTimeFilter<"Produce"> | Date | string
    pentrar_produce_id?: StringNullableFilter<"Produce"> | string | null
    image?: StringNullableFilter<"Produce"> | string | null
    description?: StringNullableFilter<"Produce"> | string | null
  }

  export type TransporterUpsertWithWhereUniqueWithoutFarmerInput = {
    where: TransporterWhereUniqueInput
    update: XOR<TransporterUpdateWithoutFarmerInput, TransporterUncheckedUpdateWithoutFarmerInput>
    create: XOR<TransporterCreateWithoutFarmerInput, TransporterUncheckedCreateWithoutFarmerInput>
  }

  export type TransporterUpdateWithWhereUniqueWithoutFarmerInput = {
    where: TransporterWhereUniqueInput
    data: XOR<TransporterUpdateWithoutFarmerInput, TransporterUncheckedUpdateWithoutFarmerInput>
  }

  export type TransporterUpdateManyWithWhereWithoutFarmerInput = {
    where: TransporterScalarWhereInput
    data: XOR<TransporterUpdateManyMutationInput, TransporterUncheckedUpdateManyWithoutFarmerInput>
  }

  export type FarmerCreateWithoutCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregator: AggregatorCreateNestedOneWithoutFarmersInput
    user: UserCreateNestedOneWithoutFarmersInput
    list_of_produce?: ProduceCreateNestedManyWithoutFarmerInput
    transporters?: TransporterCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    list_of_produce?: ProduceUncheckedCreateNestedManyWithoutFarmerInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutCompanyInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutCompanyInput, FarmerUncheckedCreateWithoutCompanyInput>
  }

  export type FarmerCreateManyCompanyInputEnvelope = {
    data: FarmerCreateManyCompanyInput | FarmerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type AggregatorCreateWithoutCompanyInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    user?: UserCreateNestedOneWithoutAggregatorsInput
    farmers?: FarmerCreateNestedManyWithoutAggregatorInput
    transporters?: TransporterCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorUncheckedCreateWithoutCompanyInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutAggregatorInput
    transporters?: TransporterUncheckedCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorCreateOrConnectWithoutCompanyInput = {
    where: AggregatorWhereUniqueInput
    create: XOR<AggregatorCreateWithoutCompanyInput, AggregatorUncheckedCreateWithoutCompanyInput>
  }

  export type AggregatorCreateManyCompanyInputEnvelope = {
    data: AggregatorCreateManyCompanyInput | AggregatorCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TransporterCreateWithoutCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
    aggregator: AggregatorCreateNestedOneWithoutTransportersInput
    user: UserCreateNestedOneWithoutTransportersInput
    farmer: FarmerCreateNestedOneWithoutTransportersInput
  }

  export type TransporterUncheckedCreateWithoutCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type TransporterCreateOrConnectWithoutCompanyInput = {
    where: TransporterWhereUniqueInput
    create: XOR<TransporterCreateWithoutCompanyInput, TransporterUncheckedCreateWithoutCompanyInput>
  }

  export type TransporterCreateManyCompanyInputEnvelope = {
    data: TransporterCreateManyCompanyInput | TransporterCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FarmerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutCompanyInput, FarmerUncheckedUpdateWithoutCompanyInput>
    create: XOR<FarmerCreateWithoutCompanyInput, FarmerUncheckedCreateWithoutCompanyInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutCompanyInput, FarmerUncheckedUpdateWithoutCompanyInput>
  }

  export type FarmerUpdateManyWithWhereWithoutCompanyInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type AggregatorUpsertWithWhereUniqueWithoutCompanyInput = {
    where: AggregatorWhereUniqueInput
    update: XOR<AggregatorUpdateWithoutCompanyInput, AggregatorUncheckedUpdateWithoutCompanyInput>
    create: XOR<AggregatorCreateWithoutCompanyInput, AggregatorUncheckedCreateWithoutCompanyInput>
  }

  export type AggregatorUpdateWithWhereUniqueWithoutCompanyInput = {
    where: AggregatorWhereUniqueInput
    data: XOR<AggregatorUpdateWithoutCompanyInput, AggregatorUncheckedUpdateWithoutCompanyInput>
  }

  export type AggregatorUpdateManyWithWhereWithoutCompanyInput = {
    where: AggregatorScalarWhereInput
    data: XOR<AggregatorUpdateManyMutationInput, AggregatorUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TransporterUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TransporterWhereUniqueInput
    update: XOR<TransporterUpdateWithoutCompanyInput, TransporterUncheckedUpdateWithoutCompanyInput>
    create: XOR<TransporterCreateWithoutCompanyInput, TransporterUncheckedCreateWithoutCompanyInput>
  }

  export type TransporterUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TransporterWhereUniqueInput
    data: XOR<TransporterUpdateWithoutCompanyInput, TransporterUncheckedUpdateWithoutCompanyInput>
  }

  export type TransporterUpdateManyWithWhereWithoutCompanyInput = {
    where: TransporterScalarWhereInput
    data: XOR<TransporterUpdateManyMutationInput, TransporterUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyCreateWithoutTransportersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    farmers?: FarmerCreateNestedManyWithoutCompanyInput
    aggregators?: AggregatorCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTransportersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    company_name?: string | null
    company_address?: string | null
    legal_entity_name?: string | null
    tax_identification_number?: string | null
    pentrar_company_id?: string | null
    created_by_id: string
    last_active?: string | null
    company_type?: string | null
    point_of_contact?: string | null
    parent_company?: string | null
    subsidiaries_company?: string | null
    annual_revenue?: string | null
    financial_statement?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutCompanyInput
    aggregators?: AggregatorUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTransportersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTransportersInput, CompanyUncheckedCreateWithoutTransportersInput>
  }

  export type AggregatorCreateWithoutTransportersInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    company: CompanyCreateNestedOneWithoutAggregatorsInput
    user?: UserCreateNestedOneWithoutAggregatorsInput
    farmers?: FarmerCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorUncheckedCreateWithoutTransportersInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    created_by_id: string
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
    farmers?: FarmerUncheckedCreateNestedManyWithoutAggregatorInput
  }

  export type AggregatorCreateOrConnectWithoutTransportersInput = {
    where: AggregatorWhereUniqueInput
    create: XOR<AggregatorCreateWithoutTransportersInput, AggregatorUncheckedCreateWithoutTransportersInput>
  }

  export type UserCreateWithoutTransportersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    farmers?: FarmerCreateNestedManyWithoutUserInput
    aggregators?: AggregatorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransportersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_user_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    farmers?: FarmerUncheckedCreateNestedManyWithoutUserInput
    aggregators?: AggregatorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransportersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransportersInput, UserUncheckedCreateWithoutTransportersInput>
  }

  export type FarmerCreateWithoutTransportersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregator: AggregatorCreateNestedOneWithoutFarmersInput
    user: UserCreateNestedOneWithoutFarmersInput
    company: CompanyCreateNestedOneWithoutFarmersInput
    list_of_produce?: ProduceCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutTransportersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    created_by_id: string
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    list_of_produce?: ProduceUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutTransportersInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutTransportersInput, FarmerUncheckedCreateWithoutTransportersInput>
  }

  export type CompanyUpsertWithoutTransportersInput = {
    update: XOR<CompanyUpdateWithoutTransportersInput, CompanyUncheckedUpdateWithoutTransportersInput>
    create: XOR<CompanyCreateWithoutTransportersInput, CompanyUncheckedCreateWithoutTransportersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTransportersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTransportersInput, CompanyUncheckedUpdateWithoutTransportersInput>
  }

  export type CompanyUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    farmers?: FarmerUpdateManyWithoutCompanyNestedInput
    aggregators?: AggregatorUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_address?: NullableStringFieldUpdateOperationsInput | string | null
    legal_entity_name?: NullableStringFieldUpdateOperationsInput | string | null
    tax_identification_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    point_of_contact?: NullableStringFieldUpdateOperationsInput | string | null
    parent_company?: NullableStringFieldUpdateOperationsInput | string | null
    subsidiaries_company?: NullableStringFieldUpdateOperationsInput | string | null
    annual_revenue?: NullableStringFieldUpdateOperationsInput | string | null
    financial_statement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    farmers?: FarmerUncheckedUpdateManyWithoutCompanyNestedInput
    aggregators?: AggregatorUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type AggregatorUpsertWithoutTransportersInput = {
    update: XOR<AggregatorUpdateWithoutTransportersInput, AggregatorUncheckedUpdateWithoutTransportersInput>
    create: XOR<AggregatorCreateWithoutTransportersInput, AggregatorUncheckedCreateWithoutTransportersInput>
    where?: AggregatorWhereInput
  }

  export type AggregatorUpdateToOneWithWhereWithoutTransportersInput = {
    where?: AggregatorWhereInput
    data: XOR<AggregatorUpdateWithoutTransportersInput, AggregatorUncheckedUpdateWithoutTransportersInput>
  }

  export type AggregatorUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutAggregatorsNestedInput
    user?: UserUpdateOneWithoutAggregatorsNestedInput
    farmers?: FarmerUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    farmers?: FarmerUncheckedUpdateManyWithoutAggregatorNestedInput
  }

  export type UserUpsertWithoutTransportersInput = {
    update: XOR<UserUpdateWithoutTransportersInput, UserUncheckedUpdateWithoutTransportersInput>
    create: XOR<UserCreateWithoutTransportersInput, UserUncheckedCreateWithoutTransportersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransportersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransportersInput, UserUncheckedUpdateWithoutTransportersInput>
  }

  export type UserUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    farmers?: FarmerUpdateManyWithoutUserNestedInput
    aggregators?: AggregatorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    farmers?: FarmerUncheckedUpdateManyWithoutUserNestedInput
    aggregators?: AggregatorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FarmerUpsertWithoutTransportersInput = {
    update: XOR<FarmerUpdateWithoutTransportersInput, FarmerUncheckedUpdateWithoutTransportersInput>
    create: XOR<FarmerCreateWithoutTransportersInput, FarmerUncheckedCreateWithoutTransportersInput>
    where?: FarmerWhereInput
  }

  export type FarmerUpdateToOneWithWhereWithoutTransportersInput = {
    where?: FarmerWhereInput
    data: XOR<FarmerUpdateWithoutTransportersInput, FarmerUncheckedUpdateWithoutTransportersInput>
  }

  export type FarmerUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregator?: AggregatorUpdateOneRequiredWithoutFarmersNestedInput
    user?: UserUpdateOneRequiredWithoutFarmersNestedInput
    company?: CompanyUpdateOneRequiredWithoutFarmersNestedInput
    list_of_produce?: ProduceUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutTransportersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    list_of_produce?: ProduceUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerCreateWithoutList_of_produceInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    aggregator: AggregatorCreateNestedOneWithoutFarmersInput
    user: UserCreateNestedOneWithoutFarmersInput
    company: CompanyCreateNestedOneWithoutFarmersInput
    transporters?: TransporterCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutList_of_produceInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    created_by_id: string
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
    transporters?: TransporterUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutList_of_produceInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutList_of_produceInput, FarmerUncheckedCreateWithoutList_of_produceInput>
  }

  export type FarmerUpsertWithoutList_of_produceInput = {
    update: XOR<FarmerUpdateWithoutList_of_produceInput, FarmerUncheckedUpdateWithoutList_of_produceInput>
    create: XOR<FarmerCreateWithoutList_of_produceInput, FarmerUncheckedCreateWithoutList_of_produceInput>
    where?: FarmerWhereInput
  }

  export type FarmerUpdateToOneWithWhereWithoutList_of_produceInput = {
    where?: FarmerWhereInput
    data: XOR<FarmerUpdateWithoutList_of_produceInput, FarmerUncheckedUpdateWithoutList_of_produceInput>
  }

  export type FarmerUpdateWithoutList_of_produceInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregator?: AggregatorUpdateOneRequiredWithoutFarmersNestedInput
    user?: UserUpdateOneRequiredWithoutFarmersNestedInput
    company?: CompanyUpdateOneRequiredWithoutFarmersNestedInput
    transporters?: TransporterUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutList_of_produceInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    transporters?: TransporterUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
  }

  export type TransporterCreateManyUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type AggregatorCreateManyUserInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
  }

  export type FarmerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregator?: AggregatorUpdateOneRequiredWithoutFarmersNestedInput
    company?: CompanyUpdateOneRequiredWithoutFarmersNestedInput
    list_of_produce?: ProduceUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    list_of_produce?: ProduceUncheckedUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TransporterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutTransportersNestedInput
    aggregator?: AggregatorUpdateOneRequiredWithoutTransportersNestedInput
    farmer?: FarmerUpdateOneRequiredWithoutTransportersNestedInput
  }

  export type TransporterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AggregatorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutAggregatorsNestedInput
    farmers?: FarmerUpdateManyWithoutAggregatorNestedInput
    transporters?: TransporterUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    farmers?: FarmerUncheckedUpdateManyWithoutAggregatorNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FarmerCreateManyAggregatorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
  }

  export type TransporterCreateManyAggregatorInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type FarmerUpdateWithoutAggregatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutFarmersNestedInput
    company?: CompanyUpdateOneRequiredWithoutFarmersNestedInput
    list_of_produce?: ProduceUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutAggregatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    list_of_produce?: ProduceUncheckedUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutAggregatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TransporterUpdateWithoutAggregatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutTransportersNestedInput
    user?: UserUpdateOneRequiredWithoutTransportersNestedInput
    farmer?: FarmerUpdateOneRequiredWithoutTransportersNestedInput
  }

  export type TransporterUncheckedUpdateWithoutAggregatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUncheckedUpdateManyWithoutAggregatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduceCreateManyFarmerInput = {
    id?: string
    name?: string | null
    quantity?: number | null
    unit?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    pentrar_produce_id?: string | null
    image?: string | null
    description?: string | null
  }

  export type TransporterCreateManyFarmerInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type ProduceUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduceUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduceUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pentrar_produce_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutTransportersNestedInput
    aggregator?: AggregatorUpdateOneRequiredWithoutTransportersNestedInput
    user?: UserUpdateOneRequiredWithoutTransportersNestedInput
  }

  export type TransporterUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FarmerCreateManyCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email?: string | null
    phone_number?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    type_of_produce?: FarmerCreatetype_of_produceInput | string[]
    pentrar_farmer_id?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    role?: string | null
    is_active?: boolean | null
  }

  export type AggregatorCreateManyCompanyInput = {
    id?: string
    created_at: Date | string
    updated_at?: Date | string
    is_active?: boolean | null
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    last_active?: string | null
    phone_number?: string | null
    pentrar_aggregator_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    status: $Enums.UserStatus
    role?: string | null
  }

  export type TransporterCreateManyCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    email: string
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    role?: string | null
    last_active?: string | null
    status: $Enums.UserStatus
    phone_number?: string | null
    is_active?: boolean | null
    pentrar_trans_id?: string | null
    verification_code?: string | null
    password_resetCode?: string | null
    isEmail_verified?: boolean
    vehicle_type?: string | null
    vehicle_number?: string | null
    Vehicle_license?: string | null
  }

  export type FarmerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aggregator?: AggregatorUpdateOneRequiredWithoutFarmersNestedInput
    user?: UserUpdateOneRequiredWithoutFarmersNestedInput
    list_of_produce?: ProduceUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    list_of_produce?: ProduceUncheckedUpdateManyWithoutFarmerNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    type_of_produce?: FarmerUpdatetype_of_produceInput | string[]
    pentrar_farmer_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AggregatorUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutAggregatorsNestedInput
    farmers?: FarmerUpdateManyWithoutAggregatorNestedInput
    transporters?: TransporterUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
    farmers?: FarmerUncheckedUpdateManyWithoutAggregatorNestedInput
    transporters?: TransporterUncheckedUpdateManyWithoutAggregatorNestedInput
  }

  export type AggregatorUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pentrar_aggregator_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
    aggregator?: AggregatorUpdateOneRequiredWithoutTransportersNestedInput
    user?: UserUpdateOneRequiredWithoutTransportersNestedInput
    farmer?: FarmerUpdateOneRequiredWithoutTransportersNestedInput
  }

  export type TransporterUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransporterUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    last_active?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pentrar_trans_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    password_resetCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmail_verified?: BoolFieldUpdateOperationsInput | boolean
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_number?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle_license?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AggregatorCountOutputTypeDefaultArgs instead
     */
    export type AggregatorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AggregatorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmerCountOutputTypeDefaultArgs instead
     */
    export type FarmerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AggregatorDefaultArgs instead
     */
    export type AggregatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AggregatorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmerDefaultArgs instead
     */
    export type FarmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransporterDefaultArgs instead
     */
    export type TransporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransporterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduceDefaultArgs instead
     */
    export type ProduceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}