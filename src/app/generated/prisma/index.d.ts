
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model IncomeProfile
 * 
 */
export type IncomeProfile = $Result.DefaultSelection<Prisma.$IncomeProfilePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model OtherDeduction
 * 
 */
export type OtherDeduction = $Result.DefaultSelection<Prisma.$OtherDeductionPayload>
/**
 * Model OtherIncomeSource
 * 
 */
export type OtherIncomeSource = $Result.DefaultSelection<Prisma.$OtherIncomeSourcePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  admin: 'admin',
  user: 'user'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const EmploymentStatus: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  SEASONAL: 'SEASONAL',
  RETIRED: 'RETIRED',
  UNEMPLOYED: 'UNEMPLOYED',
  STUDENT: 'STUDENT'
};

export type EmploymentStatus = (typeof EmploymentStatus)[keyof typeof EmploymentStatus]


export const PaymentFrequency: {
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
  MONTHLY: 'MONTHLY',
  SEMIMONTHLY: 'SEMIMONTHLY'
};

export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency]


export const PaystubPeriod: {
  ONE_WEEK: 'ONE_WEEK',
  TWO_WEEKS: 'TWO_WEEKS',
  HALF_MONTH: 'HALF_MONTH',
  ONE_MONTH: 'ONE_MONTH'
};

export type PaystubPeriod = (typeof PaystubPeriod)[keyof typeof PaystubPeriod]


export const OtherIncomeType: {
  UNEMPLOYMENT: 'UNEMPLOYMENT',
  DISABILITY: 'DISABILITY',
  RETIREMENT: 'RETIREMENT',
  PUBLIC_ASSISTANCE: 'PUBLIC_ASSISTANCE',
  CHILD_SUPPORT: 'CHILD_SUPPORT',
  VETERANS_BENEFITS: 'VETERANS_BENEFITS',
  ALIMONY: 'ALIMONY',
  STUDENT_LOANS_GRANTS: 'STUDENT_LOANS_GRANTS',
  SCHOLARSHIPS: 'SCHOLARSHIPS',
  TAX_REFUND: 'TAX_REFUND',
  RENTAL_INCOME: 'RENTAL_INCOME',
  INVESTMENT_INCOME: 'INVESTMENT_INCOME',
  OTHER: 'OTHER'
};

export type OtherIncomeType = (typeof OtherIncomeType)[keyof typeof OtherIncomeType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type EmploymentStatus = $Enums.EmploymentStatus

export const EmploymentStatus: typeof $Enums.EmploymentStatus

export type PaymentFrequency = $Enums.PaymentFrequency

export const PaymentFrequency: typeof $Enums.PaymentFrequency

export type PaystubPeriod = $Enums.PaystubPeriod

export const PaystubPeriod: typeof $Enums.PaystubPeriod

export type OtherIncomeType = $Enums.OtherIncomeType

export const OtherIncomeType: typeof $Enums.OtherIncomeType

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incomeProfile`: Exposes CRUD operations for the **IncomeProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncomeProfiles
    * const incomeProfiles = await prisma.incomeProfile.findMany()
    * ```
    */
  get incomeProfile(): Prisma.IncomeProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherDeduction`: Exposes CRUD operations for the **OtherDeduction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherDeductions
    * const otherDeductions = await prisma.otherDeduction.findMany()
    * ```
    */
  get otherDeduction(): Prisma.OtherDeductionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherIncomeSource`: Exposes CRUD operations for the **OtherIncomeSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherIncomeSources
    * const otherIncomeSources = await prisma.otherIncomeSource.findMany()
    * ```
    */
  get otherIncomeSource(): Prisma.OtherIncomeSourceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    IncomeProfile: 'IncomeProfile',
    Job: 'Job',
    OtherDeduction: 'OtherDeduction',
    OtherIncomeSource: 'OtherIncomeSource'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "incomeProfile" | "job" | "otherDeduction" | "otherIncomeSource"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      IncomeProfile: {
        payload: Prisma.$IncomeProfilePayload<ExtArgs>
        fields: Prisma.IncomeProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomeProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomeProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>
          }
          findFirst: {
            args: Prisma.IncomeProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomeProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>
          }
          findMany: {
            args: Prisma.IncomeProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>[]
          }
          create: {
            args: Prisma.IncomeProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>
          }
          createMany: {
            args: Prisma.IncomeProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomeProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>[]
          }
          delete: {
            args: Prisma.IncomeProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>
          }
          update: {
            args: Prisma.IncomeProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>
          }
          deleteMany: {
            args: Prisma.IncomeProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomeProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncomeProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>[]
          }
          upsert: {
            args: Prisma.IncomeProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeProfilePayload>
          }
          aggregate: {
            args: Prisma.IncomeProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncomeProfile>
          }
          groupBy: {
            args: Prisma.IncomeProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomeProfileCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeProfileCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      OtherDeduction: {
        payload: Prisma.$OtherDeductionPayload<ExtArgs>
        fields: Prisma.OtherDeductionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherDeductionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherDeductionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>
          }
          findFirst: {
            args: Prisma.OtherDeductionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherDeductionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>
          }
          findMany: {
            args: Prisma.OtherDeductionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>[]
          }
          create: {
            args: Prisma.OtherDeductionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>
          }
          createMany: {
            args: Prisma.OtherDeductionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtherDeductionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>[]
          }
          delete: {
            args: Prisma.OtherDeductionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>
          }
          update: {
            args: Prisma.OtherDeductionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>
          }
          deleteMany: {
            args: Prisma.OtherDeductionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherDeductionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtherDeductionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>[]
          }
          upsert: {
            args: Prisma.OtherDeductionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherDeductionPayload>
          }
          aggregate: {
            args: Prisma.OtherDeductionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherDeduction>
          }
          groupBy: {
            args: Prisma.OtherDeductionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherDeductionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherDeductionCountArgs<ExtArgs>
            result: $Utils.Optional<OtherDeductionCountAggregateOutputType> | number
          }
        }
      }
      OtherIncomeSource: {
        payload: Prisma.$OtherIncomeSourcePayload<ExtArgs>
        fields: Prisma.OtherIncomeSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherIncomeSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherIncomeSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>
          }
          findFirst: {
            args: Prisma.OtherIncomeSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherIncomeSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>
          }
          findMany: {
            args: Prisma.OtherIncomeSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>[]
          }
          create: {
            args: Prisma.OtherIncomeSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>
          }
          createMany: {
            args: Prisma.OtherIncomeSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtherIncomeSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>[]
          }
          delete: {
            args: Prisma.OtherIncomeSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>
          }
          update: {
            args: Prisma.OtherIncomeSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>
          }
          deleteMany: {
            args: Prisma.OtherIncomeSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherIncomeSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtherIncomeSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>[]
          }
          upsert: {
            args: Prisma.OtherIncomeSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherIncomeSourcePayload>
          }
          aggregate: {
            args: Prisma.OtherIncomeSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherIncomeSource>
          }
          groupBy: {
            args: Prisma.OtherIncomeSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherIncomeSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherIncomeSourceCountArgs<ExtArgs>
            result: $Utils.Optional<OtherIncomeSourceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    incomeProfile?: IncomeProfileOmit
    job?: JobOmit
    otherDeduction?: OtherDeductionOmit
    otherIncomeSource?: OtherIncomeSourceOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type IncomeProfileCountOutputType
   */

  export type IncomeProfileCountOutputType = {
    jobs: number
    otherIncomes: number
  }

  export type IncomeProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | IncomeProfileCountOutputTypeCountJobsArgs
    otherIncomes?: boolean | IncomeProfileCountOutputTypeCountOtherIncomesArgs
  }

  // Custom InputTypes
  /**
   * IncomeProfileCountOutputType without action
   */
  export type IncomeProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfileCountOutputType
     */
    select?: IncomeProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncomeProfileCountOutputType without action
   */
  export type IncomeProfileCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * IncomeProfileCountOutputType without action
   */
  export type IncomeProfileCountOutputTypeCountOtherIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherIncomeSourceWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    otherDeductions: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherDeductions?: boolean | JobCountOutputTypeCountOtherDeductionsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountOtherDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherDeductionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    hashedPassword: string | null
    type: $Enums.UserType | null
    emailVerified: Date | null
    verifiedAt: Date | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    hashedPassword: string | null
    type: $Enums.UserType | null
    emailVerified: Date | null
    verifiedAt: Date | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    hashedPassword: number
    type: number
    emailVerified: number
    verifiedAt: number
    verificationToken: number
    verificationTokenExpiry: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    type?: true
    emailVerified?: true
    verifiedAt?: true
    verificationToken?: true
    verificationTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    type?: true
    emailVerified?: true
    verifiedAt?: true
    verificationToken?: true
    verificationTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    hashedPassword?: true
    type?: true
    emailVerified?: true
    verifiedAt?: true
    verificationToken?: true
    verificationTokenExpiry?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    hashedPassword: string
    type: $Enums.UserType
    emailVerified: Date | null
    verifiedAt: Date | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    type?: boolean
    emailVerified?: boolean
    verifiedAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    incomeProfile?: boolean | User$incomeProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    type?: boolean
    emailVerified?: boolean
    verifiedAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    type?: boolean
    emailVerified?: boolean
    verifiedAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    hashedPassword?: boolean
    type?: boolean
    emailVerified?: boolean
    verifiedAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "hashedPassword" | "type" | "emailVerified" | "verifiedAt" | "verificationToken" | "verificationTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | User$incomeProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      incomeProfile: Prisma.$IncomeProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      hashedPassword: string
      type: $Enums.UserType
      emailVerified: Date | null
      verifiedAt: Date | null
      verificationToken: string | null
      verificationTokenExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incomeProfile<T extends User$incomeProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$incomeProfileArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpiry: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.incomeProfile
   */
  export type User$incomeProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    where?: IncomeProfileWhereInput
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model IncomeProfile
   */

  export type AggregateIncomeProfile = {
    _count: IncomeProfileCountAggregateOutputType | null
    _avg: IncomeProfileAvgAggregateOutputType | null
    _sum: IncomeProfileSumAggregateOutputType | null
    _min: IncomeProfileMinAggregateOutputType | null
    _max: IncomeProfileMaxAggregateOutputType | null
  }

  export type IncomeProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IncomeProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IncomeProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncomeProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncomeProfileCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncomeProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IncomeProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IncomeProfileMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncomeProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncomeProfileCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncomeProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomeProfile to aggregate.
     */
    where?: IncomeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeProfiles to fetch.
     */
    orderBy?: IncomeProfileOrderByWithRelationInput | IncomeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncomeProfiles
    **/
    _count?: true | IncomeProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeProfileMaxAggregateInputType
  }

  export type GetIncomeProfileAggregateType<T extends IncomeProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateIncomeProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncomeProfile[P]>
      : GetScalarType<T[P], AggregateIncomeProfile[P]>
  }




  export type IncomeProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeProfileWhereInput
    orderBy?: IncomeProfileOrderByWithAggregationInput | IncomeProfileOrderByWithAggregationInput[]
    by: IncomeProfileScalarFieldEnum[] | IncomeProfileScalarFieldEnum
    having?: IncomeProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeProfileCountAggregateInputType | true
    _avg?: IncomeProfileAvgAggregateInputType
    _sum?: IncomeProfileSumAggregateInputType
    _min?: IncomeProfileMinAggregateInputType
    _max?: IncomeProfileMaxAggregateInputType
  }

  export type IncomeProfileGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: IncomeProfileCountAggregateOutputType | null
    _avg: IncomeProfileAvgAggregateOutputType | null
    _sum: IncomeProfileSumAggregateOutputType | null
    _min: IncomeProfileMinAggregateOutputType | null
    _max: IncomeProfileMaxAggregateOutputType | null
  }

  type GetIncomeProfileGroupByPayload<T extends IncomeProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeProfileGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeProfileGroupByOutputType[P]>
        }
      >
    >


  export type IncomeProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | IncomeProfile$jobsArgs<ExtArgs>
    otherIncomes?: boolean | IncomeProfile$otherIncomesArgs<ExtArgs>
    _count?: boolean | IncomeProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomeProfile"]>

  export type IncomeProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomeProfile"]>

  export type IncomeProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomeProfile"]>

  export type IncomeProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncomeProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["incomeProfile"]>
  export type IncomeProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | IncomeProfile$jobsArgs<ExtArgs>
    otherIncomes?: boolean | IncomeProfile$otherIncomesArgs<ExtArgs>
    _count?: boolean | IncomeProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncomeProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomeProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncomeProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncomeProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobPayload<ExtArgs>[]
      otherIncomes: Prisma.$OtherIncomeSourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incomeProfile"]>
    composites: {}
  }

  type IncomeProfileGetPayload<S extends boolean | null | undefined | IncomeProfileDefaultArgs> = $Result.GetResult<Prisma.$IncomeProfilePayload, S>

  type IncomeProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncomeProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeProfileCountAggregateInputType | true
    }

  export interface IncomeProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncomeProfile'], meta: { name: 'IncomeProfile' } }
    /**
     * Find zero or one IncomeProfile that matches the filter.
     * @param {IncomeProfileFindUniqueArgs} args - Arguments to find a IncomeProfile
     * @example
     * // Get one IncomeProfile
     * const incomeProfile = await prisma.incomeProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomeProfileFindUniqueArgs>(args: SelectSubset<T, IncomeProfileFindUniqueArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncomeProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncomeProfileFindUniqueOrThrowArgs} args - Arguments to find a IncomeProfile
     * @example
     * // Get one IncomeProfile
     * const incomeProfile = await prisma.incomeProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomeProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomeProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncomeProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileFindFirstArgs} args - Arguments to find a IncomeProfile
     * @example
     * // Get one IncomeProfile
     * const incomeProfile = await prisma.incomeProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomeProfileFindFirstArgs>(args?: SelectSubset<T, IncomeProfileFindFirstArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncomeProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileFindFirstOrThrowArgs} args - Arguments to find a IncomeProfile
     * @example
     * // Get one IncomeProfile
     * const incomeProfile = await prisma.incomeProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomeProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomeProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncomeProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncomeProfiles
     * const incomeProfiles = await prisma.incomeProfile.findMany()
     * 
     * // Get first 10 IncomeProfiles
     * const incomeProfiles = await prisma.incomeProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeProfileWithIdOnly = await prisma.incomeProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomeProfileFindManyArgs>(args?: SelectSubset<T, IncomeProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncomeProfile.
     * @param {IncomeProfileCreateArgs} args - Arguments to create a IncomeProfile.
     * @example
     * // Create one IncomeProfile
     * const IncomeProfile = await prisma.incomeProfile.create({
     *   data: {
     *     // ... data to create a IncomeProfile
     *   }
     * })
     * 
     */
    create<T extends IncomeProfileCreateArgs>(args: SelectSubset<T, IncomeProfileCreateArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncomeProfiles.
     * @param {IncomeProfileCreateManyArgs} args - Arguments to create many IncomeProfiles.
     * @example
     * // Create many IncomeProfiles
     * const incomeProfile = await prisma.incomeProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomeProfileCreateManyArgs>(args?: SelectSubset<T, IncomeProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncomeProfiles and returns the data saved in the database.
     * @param {IncomeProfileCreateManyAndReturnArgs} args - Arguments to create many IncomeProfiles.
     * @example
     * // Create many IncomeProfiles
     * const incomeProfile = await prisma.incomeProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncomeProfiles and only return the `id`
     * const incomeProfileWithIdOnly = await prisma.incomeProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomeProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomeProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncomeProfile.
     * @param {IncomeProfileDeleteArgs} args - Arguments to delete one IncomeProfile.
     * @example
     * // Delete one IncomeProfile
     * const IncomeProfile = await prisma.incomeProfile.delete({
     *   where: {
     *     // ... filter to delete one IncomeProfile
     *   }
     * })
     * 
     */
    delete<T extends IncomeProfileDeleteArgs>(args: SelectSubset<T, IncomeProfileDeleteArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncomeProfile.
     * @param {IncomeProfileUpdateArgs} args - Arguments to update one IncomeProfile.
     * @example
     * // Update one IncomeProfile
     * const incomeProfile = await prisma.incomeProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomeProfileUpdateArgs>(args: SelectSubset<T, IncomeProfileUpdateArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncomeProfiles.
     * @param {IncomeProfileDeleteManyArgs} args - Arguments to filter IncomeProfiles to delete.
     * @example
     * // Delete a few IncomeProfiles
     * const { count } = await prisma.incomeProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomeProfileDeleteManyArgs>(args?: SelectSubset<T, IncomeProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncomeProfiles
     * const incomeProfile = await prisma.incomeProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomeProfileUpdateManyArgs>(args: SelectSubset<T, IncomeProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomeProfiles and returns the data updated in the database.
     * @param {IncomeProfileUpdateManyAndReturnArgs} args - Arguments to update many IncomeProfiles.
     * @example
     * // Update many IncomeProfiles
     * const incomeProfile = await prisma.incomeProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncomeProfiles and only return the `id`
     * const incomeProfileWithIdOnly = await prisma.incomeProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncomeProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, IncomeProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncomeProfile.
     * @param {IncomeProfileUpsertArgs} args - Arguments to update or create a IncomeProfile.
     * @example
     * // Update or create a IncomeProfile
     * const incomeProfile = await prisma.incomeProfile.upsert({
     *   create: {
     *     // ... data to create a IncomeProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncomeProfile we want to update
     *   }
     * })
     */
    upsert<T extends IncomeProfileUpsertArgs>(args: SelectSubset<T, IncomeProfileUpsertArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncomeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileCountArgs} args - Arguments to filter IncomeProfiles to count.
     * @example
     * // Count the number of IncomeProfiles
     * const count = await prisma.incomeProfile.count({
     *   where: {
     *     // ... the filter for the IncomeProfiles we want to count
     *   }
     * })
    **/
    count<T extends IncomeProfileCountArgs>(
      args?: Subset<T, IncomeProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncomeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncomeProfileAggregateArgs>(args: Subset<T, IncomeProfileAggregateArgs>): Prisma.PrismaPromise<GetIncomeProfileAggregateType<T>>

    /**
     * Group by IncomeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeProfileGroupByArgs} args - Group by arguments.
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
      T extends IncomeProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomeProfileGroupByArgs['orderBy'] }
        : { orderBy?: IncomeProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncomeProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncomeProfile model
   */
  readonly fields: IncomeProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncomeProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomeProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobs<T extends IncomeProfile$jobsArgs<ExtArgs> = {}>(args?: Subset<T, IncomeProfile$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otherIncomes<T extends IncomeProfile$otherIncomesArgs<ExtArgs> = {}>(args?: Subset<T, IncomeProfile$otherIncomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncomeProfile model
   */
  interface IncomeProfileFieldRefs {
    readonly id: FieldRef<"IncomeProfile", 'Int'>
    readonly userId: FieldRef<"IncomeProfile", 'Int'>
    readonly createdAt: FieldRef<"IncomeProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"IncomeProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncomeProfile findUnique
   */
  export type IncomeProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IncomeProfile to fetch.
     */
    where: IncomeProfileWhereUniqueInput
  }

  /**
   * IncomeProfile findUniqueOrThrow
   */
  export type IncomeProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IncomeProfile to fetch.
     */
    where: IncomeProfileWhereUniqueInput
  }

  /**
   * IncomeProfile findFirst
   */
  export type IncomeProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IncomeProfile to fetch.
     */
    where?: IncomeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeProfiles to fetch.
     */
    orderBy?: IncomeProfileOrderByWithRelationInput | IncomeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomeProfiles.
     */
    cursor?: IncomeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomeProfiles.
     */
    distinct?: IncomeProfileScalarFieldEnum | IncomeProfileScalarFieldEnum[]
  }

  /**
   * IncomeProfile findFirstOrThrow
   */
  export type IncomeProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IncomeProfile to fetch.
     */
    where?: IncomeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeProfiles to fetch.
     */
    orderBy?: IncomeProfileOrderByWithRelationInput | IncomeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomeProfiles.
     */
    cursor?: IncomeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomeProfiles.
     */
    distinct?: IncomeProfileScalarFieldEnum | IncomeProfileScalarFieldEnum[]
  }

  /**
   * IncomeProfile findMany
   */
  export type IncomeProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IncomeProfiles to fetch.
     */
    where?: IncomeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeProfiles to fetch.
     */
    orderBy?: IncomeProfileOrderByWithRelationInput | IncomeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncomeProfiles.
     */
    cursor?: IncomeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeProfiles.
     */
    skip?: number
    distinct?: IncomeProfileScalarFieldEnum | IncomeProfileScalarFieldEnum[]
  }

  /**
   * IncomeProfile create
   */
  export type IncomeProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a IncomeProfile.
     */
    data: XOR<IncomeProfileCreateInput, IncomeProfileUncheckedCreateInput>
  }

  /**
   * IncomeProfile createMany
   */
  export type IncomeProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncomeProfiles.
     */
    data: IncomeProfileCreateManyInput | IncomeProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncomeProfile createManyAndReturn
   */
  export type IncomeProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * The data used to create many IncomeProfiles.
     */
    data: IncomeProfileCreateManyInput | IncomeProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomeProfile update
   */
  export type IncomeProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a IncomeProfile.
     */
    data: XOR<IncomeProfileUpdateInput, IncomeProfileUncheckedUpdateInput>
    /**
     * Choose, which IncomeProfile to update.
     */
    where: IncomeProfileWhereUniqueInput
  }

  /**
   * IncomeProfile updateMany
   */
  export type IncomeProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncomeProfiles.
     */
    data: XOR<IncomeProfileUpdateManyMutationInput, IncomeProfileUncheckedUpdateManyInput>
    /**
     * Filter which IncomeProfiles to update
     */
    where?: IncomeProfileWhereInput
    /**
     * Limit how many IncomeProfiles to update.
     */
    limit?: number
  }

  /**
   * IncomeProfile updateManyAndReturn
   */
  export type IncomeProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * The data used to update IncomeProfiles.
     */
    data: XOR<IncomeProfileUpdateManyMutationInput, IncomeProfileUncheckedUpdateManyInput>
    /**
     * Filter which IncomeProfiles to update
     */
    where?: IncomeProfileWhereInput
    /**
     * Limit how many IncomeProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomeProfile upsert
   */
  export type IncomeProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the IncomeProfile to update in case it exists.
     */
    where: IncomeProfileWhereUniqueInput
    /**
     * In case the IncomeProfile found by the `where` argument doesn't exist, create a new IncomeProfile with this data.
     */
    create: XOR<IncomeProfileCreateInput, IncomeProfileUncheckedCreateInput>
    /**
     * In case the IncomeProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomeProfileUpdateInput, IncomeProfileUncheckedUpdateInput>
  }

  /**
   * IncomeProfile delete
   */
  export type IncomeProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
    /**
     * Filter which IncomeProfile to delete.
     */
    where: IncomeProfileWhereUniqueInput
  }

  /**
   * IncomeProfile deleteMany
   */
  export type IncomeProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomeProfiles to delete
     */
    where?: IncomeProfileWhereInput
    /**
     * Limit how many IncomeProfiles to delete.
     */
    limit?: number
  }

  /**
   * IncomeProfile.jobs
   */
  export type IncomeProfile$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * IncomeProfile.otherIncomes
   */
  export type IncomeProfile$otherIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    where?: OtherIncomeSourceWhereInput
    orderBy?: OtherIncomeSourceOrderByWithRelationInput | OtherIncomeSourceOrderByWithRelationInput[]
    cursor?: OtherIncomeSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherIncomeSourceScalarFieldEnum | OtherIncomeSourceScalarFieldEnum[]
  }

  /**
   * IncomeProfile without action
   */
  export type IncomeProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeProfile
     */
    select?: IncomeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeProfile
     */
    omit?: IncomeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeProfileInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    grossSalary: Decimal | null
    taxDeductions: Decimal | null
    healthInsurance: Decimal | null
    retirementContributions: Decimal | null
    netSalary: Decimal | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    grossSalary: Decimal | null
    taxDeductions: Decimal | null
    healthInsurance: Decimal | null
    retirementContributions: Decimal | null
    netSalary: Decimal | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    employmentStatus: $Enums.EmploymentStatus | null
    employerName: string | null
    roleTitle: string | null
    paymentFrequency: $Enums.PaymentFrequency | null
    paystubPeriod: $Enums.PaystubPeriod | null
    grossSalary: Decimal | null
    taxDeductions: Decimal | null
    healthInsurance: Decimal | null
    retirementContributions: Decimal | null
    netSalary: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    employmentStatus: $Enums.EmploymentStatus | null
    employerName: string | null
    roleTitle: string | null
    paymentFrequency: $Enums.PaymentFrequency | null
    paystubPeriod: $Enums.PaystubPeriod | null
    grossSalary: Decimal | null
    taxDeductions: Decimal | null
    healthInsurance: Decimal | null
    retirementContributions: Decimal | null
    netSalary: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    incomeProfileId: number
    employmentStatus: number
    employerName: number
    roleTitle: number
    paymentFrequency: number
    paystubPeriod: number
    grossSalary: number
    taxDeductions: number
    healthInsurance: number
    retirementContributions: number
    netSalary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    incomeProfileId?: true
    grossSalary?: true
    taxDeductions?: true
    healthInsurance?: true
    retirementContributions?: true
    netSalary?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    incomeProfileId?: true
    grossSalary?: true
    taxDeductions?: true
    healthInsurance?: true
    retirementContributions?: true
    netSalary?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    incomeProfileId?: true
    employmentStatus?: true
    employerName?: true
    roleTitle?: true
    paymentFrequency?: true
    paystubPeriod?: true
    grossSalary?: true
    taxDeductions?: true
    healthInsurance?: true
    retirementContributions?: true
    netSalary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    incomeProfileId?: true
    employmentStatus?: true
    employerName?: true
    roleTitle?: true
    paymentFrequency?: true
    paystubPeriod?: true
    grossSalary?: true
    taxDeductions?: true
    healthInsurance?: true
    retirementContributions?: true
    netSalary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    incomeProfileId?: true
    employmentStatus?: true
    employerName?: true
    roleTitle?: true
    paymentFrequency?: true
    paystubPeriod?: true
    grossSalary?: true
    taxDeductions?: true
    healthInsurance?: true
    retirementContributions?: true
    netSalary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    incomeProfileId: number
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal
    taxDeductions: Decimal
    healthInsurance: Decimal
    retirementContributions: Decimal
    netSalary: Decimal
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomeProfileId?: boolean
    employmentStatus?: boolean
    employerName?: boolean
    roleTitle?: boolean
    paymentFrequency?: boolean
    paystubPeriod?: boolean
    grossSalary?: boolean
    taxDeductions?: boolean
    healthInsurance?: boolean
    retirementContributions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
    otherDeductions?: boolean | Job$otherDeductionsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomeProfileId?: boolean
    employmentStatus?: boolean
    employerName?: boolean
    roleTitle?: boolean
    paymentFrequency?: boolean
    paystubPeriod?: boolean
    grossSalary?: boolean
    taxDeductions?: boolean
    healthInsurance?: boolean
    retirementContributions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomeProfileId?: boolean
    employmentStatus?: boolean
    employerName?: boolean
    roleTitle?: boolean
    paymentFrequency?: boolean
    paystubPeriod?: boolean
    grossSalary?: boolean
    taxDeductions?: boolean
    healthInsurance?: boolean
    retirementContributions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    incomeProfileId?: boolean
    employmentStatus?: boolean
    employerName?: boolean
    roleTitle?: boolean
    paymentFrequency?: boolean
    paystubPeriod?: boolean
    grossSalary?: boolean
    taxDeductions?: boolean
    healthInsurance?: boolean
    retirementContributions?: boolean
    netSalary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incomeProfileId" | "employmentStatus" | "employerName" | "roleTitle" | "paymentFrequency" | "paystubPeriod" | "grossSalary" | "taxDeductions" | "healthInsurance" | "retirementContributions" | "netSalary" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
    otherDeductions?: boolean | Job$otherDeductionsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      incomeProfile: Prisma.$IncomeProfilePayload<ExtArgs>
      otherDeductions: Prisma.$OtherDeductionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incomeProfileId: number
      employmentStatus: $Enums.EmploymentStatus
      employerName: string
      roleTitle: string
      paymentFrequency: $Enums.PaymentFrequency
      paystubPeriod: $Enums.PaystubPeriod
      grossSalary: Prisma.Decimal
      taxDeductions: Prisma.Decimal
      healthInsurance: Prisma.Decimal
      retirementContributions: Prisma.Decimal
      netSalary: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incomeProfile<T extends IncomeProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncomeProfileDefaultArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    otherDeductions<T extends Job$otherDeductionsArgs<ExtArgs> = {}>(args?: Subset<T, Job$otherDeductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly incomeProfileId: FieldRef<"Job", 'Int'>
    readonly employmentStatus: FieldRef<"Job", 'EmploymentStatus'>
    readonly employerName: FieldRef<"Job", 'String'>
    readonly roleTitle: FieldRef<"Job", 'String'>
    readonly paymentFrequency: FieldRef<"Job", 'PaymentFrequency'>
    readonly paystubPeriod: FieldRef<"Job", 'PaystubPeriod'>
    readonly grossSalary: FieldRef<"Job", 'Decimal'>
    readonly taxDeductions: FieldRef<"Job", 'Decimal'>
    readonly healthInsurance: FieldRef<"Job", 'Decimal'>
    readonly retirementContributions: FieldRef<"Job", 'Decimal'>
    readonly netSalary: FieldRef<"Job", 'Decimal'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.otherDeductions
   */
  export type Job$otherDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    where?: OtherDeductionWhereInput
    orderBy?: OtherDeductionOrderByWithRelationInput | OtherDeductionOrderByWithRelationInput[]
    cursor?: OtherDeductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherDeductionScalarFieldEnum | OtherDeductionScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model OtherDeduction
   */

  export type AggregateOtherDeduction = {
    _count: OtherDeductionCountAggregateOutputType | null
    _avg: OtherDeductionAvgAggregateOutputType | null
    _sum: OtherDeductionSumAggregateOutputType | null
    _min: OtherDeductionMinAggregateOutputType | null
    _max: OtherDeductionMaxAggregateOutputType | null
  }

  export type OtherDeductionAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    amount: Decimal | null
  }

  export type OtherDeductionSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    amount: Decimal | null
  }

  export type OtherDeductionMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    name: string | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherDeductionMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    name: string | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherDeductionCountAggregateOutputType = {
    id: number
    jobId: number
    name: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtherDeductionAvgAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
  }

  export type OtherDeductionSumAggregateInputType = {
    id?: true
    jobId?: true
    amount?: true
  }

  export type OtherDeductionMinAggregateInputType = {
    id?: true
    jobId?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherDeductionMaxAggregateInputType = {
    id?: true
    jobId?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherDeductionCountAggregateInputType = {
    id?: true
    jobId?: true
    name?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtherDeductionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherDeduction to aggregate.
     */
    where?: OtherDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherDeductions to fetch.
     */
    orderBy?: OtherDeductionOrderByWithRelationInput | OtherDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherDeductions
    **/
    _count?: true | OtherDeductionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherDeductionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherDeductionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherDeductionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherDeductionMaxAggregateInputType
  }

  export type GetOtherDeductionAggregateType<T extends OtherDeductionAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherDeduction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherDeduction[P]>
      : GetScalarType<T[P], AggregateOtherDeduction[P]>
  }




  export type OtherDeductionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherDeductionWhereInput
    orderBy?: OtherDeductionOrderByWithAggregationInput | OtherDeductionOrderByWithAggregationInput[]
    by: OtherDeductionScalarFieldEnum[] | OtherDeductionScalarFieldEnum
    having?: OtherDeductionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherDeductionCountAggregateInputType | true
    _avg?: OtherDeductionAvgAggregateInputType
    _sum?: OtherDeductionSumAggregateInputType
    _min?: OtherDeductionMinAggregateInputType
    _max?: OtherDeductionMaxAggregateInputType
  }

  export type OtherDeductionGroupByOutputType = {
    id: number
    jobId: number
    name: string
    amount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OtherDeductionCountAggregateOutputType | null
    _avg: OtherDeductionAvgAggregateOutputType | null
    _sum: OtherDeductionSumAggregateOutputType | null
    _min: OtherDeductionMinAggregateOutputType | null
    _max: OtherDeductionMaxAggregateOutputType | null
  }

  type GetOtherDeductionGroupByPayload<T extends OtherDeductionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherDeductionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherDeductionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherDeductionGroupByOutputType[P]>
            : GetScalarType<T[P], OtherDeductionGroupByOutputType[P]>
        }
      >
    >


  export type OtherDeductionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherDeduction"]>

  export type OtherDeductionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherDeduction"]>

  export type OtherDeductionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherDeduction"]>

  export type OtherDeductionSelectScalar = {
    id?: boolean
    jobId?: boolean
    name?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtherDeductionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "name" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["otherDeduction"]>
  export type OtherDeductionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type OtherDeductionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type OtherDeductionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $OtherDeductionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherDeduction"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      name: string
      amount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otherDeduction"]>
    composites: {}
  }

  type OtherDeductionGetPayload<S extends boolean | null | undefined | OtherDeductionDefaultArgs> = $Result.GetResult<Prisma.$OtherDeductionPayload, S>

  type OtherDeductionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherDeductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherDeductionCountAggregateInputType | true
    }

  export interface OtherDeductionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherDeduction'], meta: { name: 'OtherDeduction' } }
    /**
     * Find zero or one OtherDeduction that matches the filter.
     * @param {OtherDeductionFindUniqueArgs} args - Arguments to find a OtherDeduction
     * @example
     * // Get one OtherDeduction
     * const otherDeduction = await prisma.otherDeduction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherDeductionFindUniqueArgs>(args: SelectSubset<T, OtherDeductionFindUniqueArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherDeduction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherDeductionFindUniqueOrThrowArgs} args - Arguments to find a OtherDeduction
     * @example
     * // Get one OtherDeduction
     * const otherDeduction = await prisma.otherDeduction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherDeductionFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherDeductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherDeduction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionFindFirstArgs} args - Arguments to find a OtherDeduction
     * @example
     * // Get one OtherDeduction
     * const otherDeduction = await prisma.otherDeduction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherDeductionFindFirstArgs>(args?: SelectSubset<T, OtherDeductionFindFirstArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherDeduction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionFindFirstOrThrowArgs} args - Arguments to find a OtherDeduction
     * @example
     * // Get one OtherDeduction
     * const otherDeduction = await prisma.otherDeduction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherDeductionFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherDeductionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherDeductions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherDeductions
     * const otherDeductions = await prisma.otherDeduction.findMany()
     * 
     * // Get first 10 OtherDeductions
     * const otherDeductions = await prisma.otherDeduction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherDeductionWithIdOnly = await prisma.otherDeduction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtherDeductionFindManyArgs>(args?: SelectSubset<T, OtherDeductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherDeduction.
     * @param {OtherDeductionCreateArgs} args - Arguments to create a OtherDeduction.
     * @example
     * // Create one OtherDeduction
     * const OtherDeduction = await prisma.otherDeduction.create({
     *   data: {
     *     // ... data to create a OtherDeduction
     *   }
     * })
     * 
     */
    create<T extends OtherDeductionCreateArgs>(args: SelectSubset<T, OtherDeductionCreateArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherDeductions.
     * @param {OtherDeductionCreateManyArgs} args - Arguments to create many OtherDeductions.
     * @example
     * // Create many OtherDeductions
     * const otherDeduction = await prisma.otherDeduction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherDeductionCreateManyArgs>(args?: SelectSubset<T, OtherDeductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtherDeductions and returns the data saved in the database.
     * @param {OtherDeductionCreateManyAndReturnArgs} args - Arguments to create many OtherDeductions.
     * @example
     * // Create many OtherDeductions
     * const otherDeduction = await prisma.otherDeduction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtherDeductions and only return the `id`
     * const otherDeductionWithIdOnly = await prisma.otherDeduction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtherDeductionCreateManyAndReturnArgs>(args?: SelectSubset<T, OtherDeductionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtherDeduction.
     * @param {OtherDeductionDeleteArgs} args - Arguments to delete one OtherDeduction.
     * @example
     * // Delete one OtherDeduction
     * const OtherDeduction = await prisma.otherDeduction.delete({
     *   where: {
     *     // ... filter to delete one OtherDeduction
     *   }
     * })
     * 
     */
    delete<T extends OtherDeductionDeleteArgs>(args: SelectSubset<T, OtherDeductionDeleteArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherDeduction.
     * @param {OtherDeductionUpdateArgs} args - Arguments to update one OtherDeduction.
     * @example
     * // Update one OtherDeduction
     * const otherDeduction = await prisma.otherDeduction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherDeductionUpdateArgs>(args: SelectSubset<T, OtherDeductionUpdateArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherDeductions.
     * @param {OtherDeductionDeleteManyArgs} args - Arguments to filter OtherDeductions to delete.
     * @example
     * // Delete a few OtherDeductions
     * const { count } = await prisma.otherDeduction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherDeductionDeleteManyArgs>(args?: SelectSubset<T, OtherDeductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherDeductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherDeductions
     * const otherDeduction = await prisma.otherDeduction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherDeductionUpdateManyArgs>(args: SelectSubset<T, OtherDeductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherDeductions and returns the data updated in the database.
     * @param {OtherDeductionUpdateManyAndReturnArgs} args - Arguments to update many OtherDeductions.
     * @example
     * // Update many OtherDeductions
     * const otherDeduction = await prisma.otherDeduction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtherDeductions and only return the `id`
     * const otherDeductionWithIdOnly = await prisma.otherDeduction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtherDeductionUpdateManyAndReturnArgs>(args: SelectSubset<T, OtherDeductionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtherDeduction.
     * @param {OtherDeductionUpsertArgs} args - Arguments to update or create a OtherDeduction.
     * @example
     * // Update or create a OtherDeduction
     * const otherDeduction = await prisma.otherDeduction.upsert({
     *   create: {
     *     // ... data to create a OtherDeduction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherDeduction we want to update
     *   }
     * })
     */
    upsert<T extends OtherDeductionUpsertArgs>(args: SelectSubset<T, OtherDeductionUpsertArgs<ExtArgs>>): Prisma__OtherDeductionClient<$Result.GetResult<Prisma.$OtherDeductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherDeductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionCountArgs} args - Arguments to filter OtherDeductions to count.
     * @example
     * // Count the number of OtherDeductions
     * const count = await prisma.otherDeduction.count({
     *   where: {
     *     // ... the filter for the OtherDeductions we want to count
     *   }
     * })
    **/
    count<T extends OtherDeductionCountArgs>(
      args?: Subset<T, OtherDeductionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherDeductionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherDeduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherDeductionAggregateArgs>(args: Subset<T, OtherDeductionAggregateArgs>): Prisma.PrismaPromise<GetOtherDeductionAggregateType<T>>

    /**
     * Group by OtherDeduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherDeductionGroupByArgs} args - Group by arguments.
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
      T extends OtherDeductionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherDeductionGroupByArgs['orderBy'] }
        : { orderBy?: OtherDeductionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtherDeductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherDeductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherDeduction model
   */
  readonly fields: OtherDeductionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherDeduction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherDeductionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtherDeduction model
   */
  interface OtherDeductionFieldRefs {
    readonly id: FieldRef<"OtherDeduction", 'Int'>
    readonly jobId: FieldRef<"OtherDeduction", 'Int'>
    readonly name: FieldRef<"OtherDeduction", 'String'>
    readonly amount: FieldRef<"OtherDeduction", 'Decimal'>
    readonly createdAt: FieldRef<"OtherDeduction", 'DateTime'>
    readonly updatedAt: FieldRef<"OtherDeduction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtherDeduction findUnique
   */
  export type OtherDeductionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * Filter, which OtherDeduction to fetch.
     */
    where: OtherDeductionWhereUniqueInput
  }

  /**
   * OtherDeduction findUniqueOrThrow
   */
  export type OtherDeductionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * Filter, which OtherDeduction to fetch.
     */
    where: OtherDeductionWhereUniqueInput
  }

  /**
   * OtherDeduction findFirst
   */
  export type OtherDeductionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * Filter, which OtherDeduction to fetch.
     */
    where?: OtherDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherDeductions to fetch.
     */
    orderBy?: OtherDeductionOrderByWithRelationInput | OtherDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherDeductions.
     */
    cursor?: OtherDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherDeductions.
     */
    distinct?: OtherDeductionScalarFieldEnum | OtherDeductionScalarFieldEnum[]
  }

  /**
   * OtherDeduction findFirstOrThrow
   */
  export type OtherDeductionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * Filter, which OtherDeduction to fetch.
     */
    where?: OtherDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherDeductions to fetch.
     */
    orderBy?: OtherDeductionOrderByWithRelationInput | OtherDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherDeductions.
     */
    cursor?: OtherDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherDeductions.
     */
    distinct?: OtherDeductionScalarFieldEnum | OtherDeductionScalarFieldEnum[]
  }

  /**
   * OtherDeduction findMany
   */
  export type OtherDeductionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * Filter, which OtherDeductions to fetch.
     */
    where?: OtherDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherDeductions to fetch.
     */
    orderBy?: OtherDeductionOrderByWithRelationInput | OtherDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherDeductions.
     */
    cursor?: OtherDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherDeductions.
     */
    skip?: number
    distinct?: OtherDeductionScalarFieldEnum | OtherDeductionScalarFieldEnum[]
  }

  /**
   * OtherDeduction create
   */
  export type OtherDeductionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherDeduction.
     */
    data: XOR<OtherDeductionCreateInput, OtherDeductionUncheckedCreateInput>
  }

  /**
   * OtherDeduction createMany
   */
  export type OtherDeductionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherDeductions.
     */
    data: OtherDeductionCreateManyInput | OtherDeductionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherDeduction createManyAndReturn
   */
  export type OtherDeductionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * The data used to create many OtherDeductions.
     */
    data: OtherDeductionCreateManyInput | OtherDeductionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtherDeduction update
   */
  export type OtherDeductionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherDeduction.
     */
    data: XOR<OtherDeductionUpdateInput, OtherDeductionUncheckedUpdateInput>
    /**
     * Choose, which OtherDeduction to update.
     */
    where: OtherDeductionWhereUniqueInput
  }

  /**
   * OtherDeduction updateMany
   */
  export type OtherDeductionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherDeductions.
     */
    data: XOR<OtherDeductionUpdateManyMutationInput, OtherDeductionUncheckedUpdateManyInput>
    /**
     * Filter which OtherDeductions to update
     */
    where?: OtherDeductionWhereInput
    /**
     * Limit how many OtherDeductions to update.
     */
    limit?: number
  }

  /**
   * OtherDeduction updateManyAndReturn
   */
  export type OtherDeductionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * The data used to update OtherDeductions.
     */
    data: XOR<OtherDeductionUpdateManyMutationInput, OtherDeductionUncheckedUpdateManyInput>
    /**
     * Filter which OtherDeductions to update
     */
    where?: OtherDeductionWhereInput
    /**
     * Limit how many OtherDeductions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtherDeduction upsert
   */
  export type OtherDeductionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherDeduction to update in case it exists.
     */
    where: OtherDeductionWhereUniqueInput
    /**
     * In case the OtherDeduction found by the `where` argument doesn't exist, create a new OtherDeduction with this data.
     */
    create: XOR<OtherDeductionCreateInput, OtherDeductionUncheckedCreateInput>
    /**
     * In case the OtherDeduction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherDeductionUpdateInput, OtherDeductionUncheckedUpdateInput>
  }

  /**
   * OtherDeduction delete
   */
  export type OtherDeductionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
    /**
     * Filter which OtherDeduction to delete.
     */
    where: OtherDeductionWhereUniqueInput
  }

  /**
   * OtherDeduction deleteMany
   */
  export type OtherDeductionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherDeductions to delete
     */
    where?: OtherDeductionWhereInput
    /**
     * Limit how many OtherDeductions to delete.
     */
    limit?: number
  }

  /**
   * OtherDeduction without action
   */
  export type OtherDeductionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherDeduction
     */
    select?: OtherDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherDeduction
     */
    omit?: OtherDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherDeductionInclude<ExtArgs> | null
  }


  /**
   * Model OtherIncomeSource
   */

  export type AggregateOtherIncomeSource = {
    _count: OtherIncomeSourceCountAggregateOutputType | null
    _avg: OtherIncomeSourceAvgAggregateOutputType | null
    _sum: OtherIncomeSourceSumAggregateOutputType | null
    _min: OtherIncomeSourceMinAggregateOutputType | null
    _max: OtherIncomeSourceMaxAggregateOutputType | null
  }

  export type OtherIncomeSourceAvgAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    amount: Decimal | null
  }

  export type OtherIncomeSourceSumAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    amount: Decimal | null
  }

  export type OtherIncomeSourceMinAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    sourceType: $Enums.OtherIncomeType | null
    frequency: $Enums.PaymentFrequency | null
    amount: Decimal | null
    additionalContext: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherIncomeSourceMaxAggregateOutputType = {
    id: number | null
    incomeProfileId: number | null
    sourceType: $Enums.OtherIncomeType | null
    frequency: $Enums.PaymentFrequency | null
    amount: Decimal | null
    additionalContext: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtherIncomeSourceCountAggregateOutputType = {
    id: number
    incomeProfileId: number
    sourceType: number
    frequency: number
    amount: number
    additionalContext: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtherIncomeSourceAvgAggregateInputType = {
    id?: true
    incomeProfileId?: true
    amount?: true
  }

  export type OtherIncomeSourceSumAggregateInputType = {
    id?: true
    incomeProfileId?: true
    amount?: true
  }

  export type OtherIncomeSourceMinAggregateInputType = {
    id?: true
    incomeProfileId?: true
    sourceType?: true
    frequency?: true
    amount?: true
    additionalContext?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherIncomeSourceMaxAggregateInputType = {
    id?: true
    incomeProfileId?: true
    sourceType?: true
    frequency?: true
    amount?: true
    additionalContext?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtherIncomeSourceCountAggregateInputType = {
    id?: true
    incomeProfileId?: true
    sourceType?: true
    frequency?: true
    amount?: true
    additionalContext?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtherIncomeSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherIncomeSource to aggregate.
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherIncomeSources to fetch.
     */
    orderBy?: OtherIncomeSourceOrderByWithRelationInput | OtherIncomeSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherIncomeSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherIncomeSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherIncomeSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherIncomeSources
    **/
    _count?: true | OtherIncomeSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherIncomeSourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherIncomeSourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherIncomeSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherIncomeSourceMaxAggregateInputType
  }

  export type GetOtherIncomeSourceAggregateType<T extends OtherIncomeSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherIncomeSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherIncomeSource[P]>
      : GetScalarType<T[P], AggregateOtherIncomeSource[P]>
  }




  export type OtherIncomeSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherIncomeSourceWhereInput
    orderBy?: OtherIncomeSourceOrderByWithAggregationInput | OtherIncomeSourceOrderByWithAggregationInput[]
    by: OtherIncomeSourceScalarFieldEnum[] | OtherIncomeSourceScalarFieldEnum
    having?: OtherIncomeSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherIncomeSourceCountAggregateInputType | true
    _avg?: OtherIncomeSourceAvgAggregateInputType
    _sum?: OtherIncomeSourceSumAggregateInputType
    _min?: OtherIncomeSourceMinAggregateInputType
    _max?: OtherIncomeSourceMaxAggregateInputType
  }

  export type OtherIncomeSourceGroupByOutputType = {
    id: number
    incomeProfileId: number
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal
    additionalContext: string | null
    createdAt: Date
    updatedAt: Date
    _count: OtherIncomeSourceCountAggregateOutputType | null
    _avg: OtherIncomeSourceAvgAggregateOutputType | null
    _sum: OtherIncomeSourceSumAggregateOutputType | null
    _min: OtherIncomeSourceMinAggregateOutputType | null
    _max: OtherIncomeSourceMaxAggregateOutputType | null
  }

  type GetOtherIncomeSourceGroupByPayload<T extends OtherIncomeSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherIncomeSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherIncomeSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherIncomeSourceGroupByOutputType[P]>
            : GetScalarType<T[P], OtherIncomeSourceGroupByOutputType[P]>
        }
      >
    >


  export type OtherIncomeSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomeProfileId?: boolean
    sourceType?: boolean
    frequency?: boolean
    amount?: boolean
    additionalContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherIncomeSource"]>

  export type OtherIncomeSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomeProfileId?: boolean
    sourceType?: boolean
    frequency?: boolean
    amount?: boolean
    additionalContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherIncomeSource"]>

  export type OtherIncomeSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incomeProfileId?: boolean
    sourceType?: boolean
    frequency?: boolean
    amount?: boolean
    additionalContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherIncomeSource"]>

  export type OtherIncomeSourceSelectScalar = {
    id?: boolean
    incomeProfileId?: boolean
    sourceType?: boolean
    frequency?: boolean
    amount?: boolean
    additionalContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtherIncomeSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incomeProfileId" | "sourceType" | "frequency" | "amount" | "additionalContext" | "createdAt" | "updatedAt", ExtArgs["result"]["otherIncomeSource"]>
  export type OtherIncomeSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }
  export type OtherIncomeSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }
  export type OtherIncomeSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomeProfile?: boolean | IncomeProfileDefaultArgs<ExtArgs>
  }

  export type $OtherIncomeSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherIncomeSource"
    objects: {
      incomeProfile: Prisma.$IncomeProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incomeProfileId: number
      sourceType: $Enums.OtherIncomeType
      frequency: $Enums.PaymentFrequency
      amount: Prisma.Decimal
      additionalContext: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otherIncomeSource"]>
    composites: {}
  }

  type OtherIncomeSourceGetPayload<S extends boolean | null | undefined | OtherIncomeSourceDefaultArgs> = $Result.GetResult<Prisma.$OtherIncomeSourcePayload, S>

  type OtherIncomeSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherIncomeSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherIncomeSourceCountAggregateInputType | true
    }

  export interface OtherIncomeSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherIncomeSource'], meta: { name: 'OtherIncomeSource' } }
    /**
     * Find zero or one OtherIncomeSource that matches the filter.
     * @param {OtherIncomeSourceFindUniqueArgs} args - Arguments to find a OtherIncomeSource
     * @example
     * // Get one OtherIncomeSource
     * const otherIncomeSource = await prisma.otherIncomeSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherIncomeSourceFindUniqueArgs>(args: SelectSubset<T, OtherIncomeSourceFindUniqueArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherIncomeSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherIncomeSourceFindUniqueOrThrowArgs} args - Arguments to find a OtherIncomeSource
     * @example
     * // Get one OtherIncomeSource
     * const otherIncomeSource = await prisma.otherIncomeSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherIncomeSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherIncomeSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherIncomeSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceFindFirstArgs} args - Arguments to find a OtherIncomeSource
     * @example
     * // Get one OtherIncomeSource
     * const otherIncomeSource = await prisma.otherIncomeSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherIncomeSourceFindFirstArgs>(args?: SelectSubset<T, OtherIncomeSourceFindFirstArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherIncomeSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceFindFirstOrThrowArgs} args - Arguments to find a OtherIncomeSource
     * @example
     * // Get one OtherIncomeSource
     * const otherIncomeSource = await prisma.otherIncomeSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherIncomeSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherIncomeSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherIncomeSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherIncomeSources
     * const otherIncomeSources = await prisma.otherIncomeSource.findMany()
     * 
     * // Get first 10 OtherIncomeSources
     * const otherIncomeSources = await prisma.otherIncomeSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherIncomeSourceWithIdOnly = await prisma.otherIncomeSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtherIncomeSourceFindManyArgs>(args?: SelectSubset<T, OtherIncomeSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherIncomeSource.
     * @param {OtherIncomeSourceCreateArgs} args - Arguments to create a OtherIncomeSource.
     * @example
     * // Create one OtherIncomeSource
     * const OtherIncomeSource = await prisma.otherIncomeSource.create({
     *   data: {
     *     // ... data to create a OtherIncomeSource
     *   }
     * })
     * 
     */
    create<T extends OtherIncomeSourceCreateArgs>(args: SelectSubset<T, OtherIncomeSourceCreateArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherIncomeSources.
     * @param {OtherIncomeSourceCreateManyArgs} args - Arguments to create many OtherIncomeSources.
     * @example
     * // Create many OtherIncomeSources
     * const otherIncomeSource = await prisma.otherIncomeSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherIncomeSourceCreateManyArgs>(args?: SelectSubset<T, OtherIncomeSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtherIncomeSources and returns the data saved in the database.
     * @param {OtherIncomeSourceCreateManyAndReturnArgs} args - Arguments to create many OtherIncomeSources.
     * @example
     * // Create many OtherIncomeSources
     * const otherIncomeSource = await prisma.otherIncomeSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtherIncomeSources and only return the `id`
     * const otherIncomeSourceWithIdOnly = await prisma.otherIncomeSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtherIncomeSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, OtherIncomeSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtherIncomeSource.
     * @param {OtherIncomeSourceDeleteArgs} args - Arguments to delete one OtherIncomeSource.
     * @example
     * // Delete one OtherIncomeSource
     * const OtherIncomeSource = await prisma.otherIncomeSource.delete({
     *   where: {
     *     // ... filter to delete one OtherIncomeSource
     *   }
     * })
     * 
     */
    delete<T extends OtherIncomeSourceDeleteArgs>(args: SelectSubset<T, OtherIncomeSourceDeleteArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherIncomeSource.
     * @param {OtherIncomeSourceUpdateArgs} args - Arguments to update one OtherIncomeSource.
     * @example
     * // Update one OtherIncomeSource
     * const otherIncomeSource = await prisma.otherIncomeSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherIncomeSourceUpdateArgs>(args: SelectSubset<T, OtherIncomeSourceUpdateArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherIncomeSources.
     * @param {OtherIncomeSourceDeleteManyArgs} args - Arguments to filter OtherIncomeSources to delete.
     * @example
     * // Delete a few OtherIncomeSources
     * const { count } = await prisma.otherIncomeSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherIncomeSourceDeleteManyArgs>(args?: SelectSubset<T, OtherIncomeSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherIncomeSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherIncomeSources
     * const otherIncomeSource = await prisma.otherIncomeSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherIncomeSourceUpdateManyArgs>(args: SelectSubset<T, OtherIncomeSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherIncomeSources and returns the data updated in the database.
     * @param {OtherIncomeSourceUpdateManyAndReturnArgs} args - Arguments to update many OtherIncomeSources.
     * @example
     * // Update many OtherIncomeSources
     * const otherIncomeSource = await prisma.otherIncomeSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtherIncomeSources and only return the `id`
     * const otherIncomeSourceWithIdOnly = await prisma.otherIncomeSource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtherIncomeSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, OtherIncomeSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtherIncomeSource.
     * @param {OtherIncomeSourceUpsertArgs} args - Arguments to update or create a OtherIncomeSource.
     * @example
     * // Update or create a OtherIncomeSource
     * const otherIncomeSource = await prisma.otherIncomeSource.upsert({
     *   create: {
     *     // ... data to create a OtherIncomeSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherIncomeSource we want to update
     *   }
     * })
     */
    upsert<T extends OtherIncomeSourceUpsertArgs>(args: SelectSubset<T, OtherIncomeSourceUpsertArgs<ExtArgs>>): Prisma__OtherIncomeSourceClient<$Result.GetResult<Prisma.$OtherIncomeSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherIncomeSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceCountArgs} args - Arguments to filter OtherIncomeSources to count.
     * @example
     * // Count the number of OtherIncomeSources
     * const count = await prisma.otherIncomeSource.count({
     *   where: {
     *     // ... the filter for the OtherIncomeSources we want to count
     *   }
     * })
    **/
    count<T extends OtherIncomeSourceCountArgs>(
      args?: Subset<T, OtherIncomeSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherIncomeSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherIncomeSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherIncomeSourceAggregateArgs>(args: Subset<T, OtherIncomeSourceAggregateArgs>): Prisma.PrismaPromise<GetOtherIncomeSourceAggregateType<T>>

    /**
     * Group by OtherIncomeSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherIncomeSourceGroupByArgs} args - Group by arguments.
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
      T extends OtherIncomeSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherIncomeSourceGroupByArgs['orderBy'] }
        : { orderBy?: OtherIncomeSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtherIncomeSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherIncomeSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherIncomeSource model
   */
  readonly fields: OtherIncomeSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherIncomeSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherIncomeSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incomeProfile<T extends IncomeProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncomeProfileDefaultArgs<ExtArgs>>): Prisma__IncomeProfileClient<$Result.GetResult<Prisma.$IncomeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtherIncomeSource model
   */
  interface OtherIncomeSourceFieldRefs {
    readonly id: FieldRef<"OtherIncomeSource", 'Int'>
    readonly incomeProfileId: FieldRef<"OtherIncomeSource", 'Int'>
    readonly sourceType: FieldRef<"OtherIncomeSource", 'OtherIncomeType'>
    readonly frequency: FieldRef<"OtherIncomeSource", 'PaymentFrequency'>
    readonly amount: FieldRef<"OtherIncomeSource", 'Decimal'>
    readonly additionalContext: FieldRef<"OtherIncomeSource", 'String'>
    readonly createdAt: FieldRef<"OtherIncomeSource", 'DateTime'>
    readonly updatedAt: FieldRef<"OtherIncomeSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtherIncomeSource findUnique
   */
  export type OtherIncomeSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * Filter, which OtherIncomeSource to fetch.
     */
    where: OtherIncomeSourceWhereUniqueInput
  }

  /**
   * OtherIncomeSource findUniqueOrThrow
   */
  export type OtherIncomeSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * Filter, which OtherIncomeSource to fetch.
     */
    where: OtherIncomeSourceWhereUniqueInput
  }

  /**
   * OtherIncomeSource findFirst
   */
  export type OtherIncomeSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * Filter, which OtherIncomeSource to fetch.
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherIncomeSources to fetch.
     */
    orderBy?: OtherIncomeSourceOrderByWithRelationInput | OtherIncomeSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherIncomeSources.
     */
    cursor?: OtherIncomeSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherIncomeSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherIncomeSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherIncomeSources.
     */
    distinct?: OtherIncomeSourceScalarFieldEnum | OtherIncomeSourceScalarFieldEnum[]
  }

  /**
   * OtherIncomeSource findFirstOrThrow
   */
  export type OtherIncomeSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * Filter, which OtherIncomeSource to fetch.
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherIncomeSources to fetch.
     */
    orderBy?: OtherIncomeSourceOrderByWithRelationInput | OtherIncomeSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherIncomeSources.
     */
    cursor?: OtherIncomeSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherIncomeSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherIncomeSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherIncomeSources.
     */
    distinct?: OtherIncomeSourceScalarFieldEnum | OtherIncomeSourceScalarFieldEnum[]
  }

  /**
   * OtherIncomeSource findMany
   */
  export type OtherIncomeSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * Filter, which OtherIncomeSources to fetch.
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherIncomeSources to fetch.
     */
    orderBy?: OtherIncomeSourceOrderByWithRelationInput | OtherIncomeSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherIncomeSources.
     */
    cursor?: OtherIncomeSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherIncomeSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherIncomeSources.
     */
    skip?: number
    distinct?: OtherIncomeSourceScalarFieldEnum | OtherIncomeSourceScalarFieldEnum[]
  }

  /**
   * OtherIncomeSource create
   */
  export type OtherIncomeSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherIncomeSource.
     */
    data: XOR<OtherIncomeSourceCreateInput, OtherIncomeSourceUncheckedCreateInput>
  }

  /**
   * OtherIncomeSource createMany
   */
  export type OtherIncomeSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherIncomeSources.
     */
    data: OtherIncomeSourceCreateManyInput | OtherIncomeSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherIncomeSource createManyAndReturn
   */
  export type OtherIncomeSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * The data used to create many OtherIncomeSources.
     */
    data: OtherIncomeSourceCreateManyInput | OtherIncomeSourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtherIncomeSource update
   */
  export type OtherIncomeSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherIncomeSource.
     */
    data: XOR<OtherIncomeSourceUpdateInput, OtherIncomeSourceUncheckedUpdateInput>
    /**
     * Choose, which OtherIncomeSource to update.
     */
    where: OtherIncomeSourceWhereUniqueInput
  }

  /**
   * OtherIncomeSource updateMany
   */
  export type OtherIncomeSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherIncomeSources.
     */
    data: XOR<OtherIncomeSourceUpdateManyMutationInput, OtherIncomeSourceUncheckedUpdateManyInput>
    /**
     * Filter which OtherIncomeSources to update
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * Limit how many OtherIncomeSources to update.
     */
    limit?: number
  }

  /**
   * OtherIncomeSource updateManyAndReturn
   */
  export type OtherIncomeSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * The data used to update OtherIncomeSources.
     */
    data: XOR<OtherIncomeSourceUpdateManyMutationInput, OtherIncomeSourceUncheckedUpdateManyInput>
    /**
     * Filter which OtherIncomeSources to update
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * Limit how many OtherIncomeSources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtherIncomeSource upsert
   */
  export type OtherIncomeSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherIncomeSource to update in case it exists.
     */
    where: OtherIncomeSourceWhereUniqueInput
    /**
     * In case the OtherIncomeSource found by the `where` argument doesn't exist, create a new OtherIncomeSource with this data.
     */
    create: XOR<OtherIncomeSourceCreateInput, OtherIncomeSourceUncheckedCreateInput>
    /**
     * In case the OtherIncomeSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherIncomeSourceUpdateInput, OtherIncomeSourceUncheckedUpdateInput>
  }

  /**
   * OtherIncomeSource delete
   */
  export type OtherIncomeSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
    /**
     * Filter which OtherIncomeSource to delete.
     */
    where: OtherIncomeSourceWhereUniqueInput
  }

  /**
   * OtherIncomeSource deleteMany
   */
  export type OtherIncomeSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherIncomeSources to delete
     */
    where?: OtherIncomeSourceWhereInput
    /**
     * Limit how many OtherIncomeSources to delete.
     */
    limit?: number
  }

  /**
   * OtherIncomeSource without action
   */
  export type OtherIncomeSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherIncomeSource
     */
    select?: OtherIncomeSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherIncomeSource
     */
    omit?: OtherIncomeSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherIncomeSourceInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    hashedPassword: 'hashedPassword',
    type: 'type',
    emailVerified: 'emailVerified',
    verifiedAt: 'verifiedAt',
    verificationToken: 'verificationToken',
    verificationTokenExpiry: 'verificationTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IncomeProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncomeProfileScalarFieldEnum = (typeof IncomeProfileScalarFieldEnum)[keyof typeof IncomeProfileScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    incomeProfileId: 'incomeProfileId',
    employmentStatus: 'employmentStatus',
    employerName: 'employerName',
    roleTitle: 'roleTitle',
    paymentFrequency: 'paymentFrequency',
    paystubPeriod: 'paystubPeriod',
    grossSalary: 'grossSalary',
    taxDeductions: 'taxDeductions',
    healthInsurance: 'healthInsurance',
    retirementContributions: 'retirementContributions',
    netSalary: 'netSalary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const OtherDeductionScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    name: 'name',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtherDeductionScalarFieldEnum = (typeof OtherDeductionScalarFieldEnum)[keyof typeof OtherDeductionScalarFieldEnum]


  export const OtherIncomeSourceScalarFieldEnum: {
    id: 'id',
    incomeProfileId: 'incomeProfileId',
    sourceType: 'sourceType',
    frequency: 'frequency',
    amount: 'amount',
    additionalContext: 'additionalContext',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtherIncomeSourceScalarFieldEnum = (typeof OtherIncomeSourceScalarFieldEnum)[keyof typeof OtherIncomeSourceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmploymentStatus'
   */
  export type EnumEmploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentStatus'>
    


  /**
   * Reference to a field of type 'EmploymentStatus[]'
   */
  export type ListEnumEmploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentFrequency'
   */
  export type EnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency'>
    


  /**
   * Reference to a field of type 'PaymentFrequency[]'
   */
  export type ListEnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency[]'>
    


  /**
   * Reference to a field of type 'PaystubPeriod'
   */
  export type EnumPaystubPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaystubPeriod'>
    


  /**
   * Reference to a field of type 'PaystubPeriod[]'
   */
  export type ListEnumPaystubPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaystubPeriod[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OtherIncomeType'
   */
  export type EnumOtherIncomeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtherIncomeType'>
    


  /**
   * Reference to a field of type 'OtherIncomeType[]'
   */
  export type ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtherIncomeType[]'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    incomeProfile?: XOR<IncomeProfileNullableScalarRelationFilter, IncomeProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrder
    type?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiry?: SortOrderInput | SortOrder
    incomeProfile?: IncomeProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    incomeProfile?: XOR<IncomeProfileNullableScalarRelationFilter, IncomeProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrder
    type?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type IncomeProfileWhereInput = {
    AND?: IncomeProfileWhereInput | IncomeProfileWhereInput[]
    OR?: IncomeProfileWhereInput[]
    NOT?: IncomeProfileWhereInput | IncomeProfileWhereInput[]
    id?: IntFilter<"IncomeProfile"> | number
    userId?: IntFilter<"IncomeProfile"> | number
    createdAt?: DateTimeFilter<"IncomeProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IncomeProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
    otherIncomes?: OtherIncomeSourceListRelationFilter
  }

  export type IncomeProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobOrderByRelationAggregateInput
    otherIncomes?: OtherIncomeSourceOrderByRelationAggregateInput
  }

  export type IncomeProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: IncomeProfileWhereInput | IncomeProfileWhereInput[]
    OR?: IncomeProfileWhereInput[]
    NOT?: IncomeProfileWhereInput | IncomeProfileWhereInput[]
    createdAt?: DateTimeFilter<"IncomeProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IncomeProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
    otherIncomes?: OtherIncomeSourceListRelationFilter
  }, "id" | "userId">

  export type IncomeProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncomeProfileCountOrderByAggregateInput
    _avg?: IncomeProfileAvgOrderByAggregateInput
    _max?: IncomeProfileMaxOrderByAggregateInput
    _min?: IncomeProfileMinOrderByAggregateInput
    _sum?: IncomeProfileSumOrderByAggregateInput
  }

  export type IncomeProfileScalarWhereWithAggregatesInput = {
    AND?: IncomeProfileScalarWhereWithAggregatesInput | IncomeProfileScalarWhereWithAggregatesInput[]
    OR?: IncomeProfileScalarWhereWithAggregatesInput[]
    NOT?: IncomeProfileScalarWhereWithAggregatesInput | IncomeProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncomeProfile"> | number
    userId?: IntWithAggregatesFilter<"IncomeProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IncomeProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IncomeProfile"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    incomeProfileId?: IntFilter<"Job"> | number
    employmentStatus?: EnumEmploymentStatusFilter<"Job"> | $Enums.EmploymentStatus
    employerName?: StringFilter<"Job"> | string
    roleTitle?: StringFilter<"Job"> | string
    paymentFrequency?: EnumPaymentFrequencyFilter<"Job"> | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFilter<"Job"> | $Enums.PaystubPeriod
    grossSalary?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    incomeProfile?: XOR<IncomeProfileScalarRelationFilter, IncomeProfileWhereInput>
    otherDeductions?: OtherDeductionListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    employmentStatus?: SortOrder
    employerName?: SortOrder
    roleTitle?: SortOrder
    paymentFrequency?: SortOrder
    paystubPeriod?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomeProfile?: IncomeProfileOrderByWithRelationInput
    otherDeductions?: OtherDeductionOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    incomeProfileId?: IntFilter<"Job"> | number
    employmentStatus?: EnumEmploymentStatusFilter<"Job"> | $Enums.EmploymentStatus
    employerName?: StringFilter<"Job"> | string
    roleTitle?: StringFilter<"Job"> | string
    paymentFrequency?: EnumPaymentFrequencyFilter<"Job"> | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFilter<"Job"> | $Enums.PaystubPeriod
    grossSalary?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    incomeProfile?: XOR<IncomeProfileScalarRelationFilter, IncomeProfileWhereInput>
    otherDeductions?: OtherDeductionListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    employmentStatus?: SortOrder
    employerName?: SortOrder
    roleTitle?: SortOrder
    paymentFrequency?: SortOrder
    paystubPeriod?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    incomeProfileId?: IntWithAggregatesFilter<"Job"> | number
    employmentStatus?: EnumEmploymentStatusWithAggregatesFilter<"Job"> | $Enums.EmploymentStatus
    employerName?: StringWithAggregatesFilter<"Job"> | string
    roleTitle?: StringWithAggregatesFilter<"Job"> | string
    paymentFrequency?: EnumPaymentFrequencyWithAggregatesFilter<"Job"> | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodWithAggregatesFilter<"Job"> | $Enums.PaystubPeriod
    grossSalary?: DecimalWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type OtherDeductionWhereInput = {
    AND?: OtherDeductionWhereInput | OtherDeductionWhereInput[]
    OR?: OtherDeductionWhereInput[]
    NOT?: OtherDeductionWhereInput | OtherDeductionWhereInput[]
    id?: IntFilter<"OtherDeduction"> | number
    jobId?: IntFilter<"OtherDeduction"> | number
    name?: StringFilter<"OtherDeduction"> | string
    amount?: DecimalFilter<"OtherDeduction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OtherDeduction"> | Date | string
    updatedAt?: DateTimeFilter<"OtherDeduction"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type OtherDeductionOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    job?: JobOrderByWithRelationInput
  }

  export type OtherDeductionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtherDeductionWhereInput | OtherDeductionWhereInput[]
    OR?: OtherDeductionWhereInput[]
    NOT?: OtherDeductionWhereInput | OtherDeductionWhereInput[]
    jobId?: IntFilter<"OtherDeduction"> | number
    name?: StringFilter<"OtherDeduction"> | string
    amount?: DecimalFilter<"OtherDeduction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OtherDeduction"> | Date | string
    updatedAt?: DateTimeFilter<"OtherDeduction"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id">

  export type OtherDeductionOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtherDeductionCountOrderByAggregateInput
    _avg?: OtherDeductionAvgOrderByAggregateInput
    _max?: OtherDeductionMaxOrderByAggregateInput
    _min?: OtherDeductionMinOrderByAggregateInput
    _sum?: OtherDeductionSumOrderByAggregateInput
  }

  export type OtherDeductionScalarWhereWithAggregatesInput = {
    AND?: OtherDeductionScalarWhereWithAggregatesInput | OtherDeductionScalarWhereWithAggregatesInput[]
    OR?: OtherDeductionScalarWhereWithAggregatesInput[]
    NOT?: OtherDeductionScalarWhereWithAggregatesInput | OtherDeductionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OtherDeduction"> | number
    jobId?: IntWithAggregatesFilter<"OtherDeduction"> | number
    name?: StringWithAggregatesFilter<"OtherDeduction"> | string
    amount?: DecimalWithAggregatesFilter<"OtherDeduction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OtherDeduction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OtherDeduction"> | Date | string
  }

  export type OtherIncomeSourceWhereInput = {
    AND?: OtherIncomeSourceWhereInput | OtherIncomeSourceWhereInput[]
    OR?: OtherIncomeSourceWhereInput[]
    NOT?: OtherIncomeSourceWhereInput | OtherIncomeSourceWhereInput[]
    id?: IntFilter<"OtherIncomeSource"> | number
    incomeProfileId?: IntFilter<"OtherIncomeSource"> | number
    sourceType?: EnumOtherIncomeTypeFilter<"OtherIncomeSource"> | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFilter<"OtherIncomeSource"> | $Enums.PaymentFrequency
    amount?: DecimalFilter<"OtherIncomeSource"> | Decimal | DecimalJsLike | number | string
    additionalContext?: StringNullableFilter<"OtherIncomeSource"> | string | null
    createdAt?: DateTimeFilter<"OtherIncomeSource"> | Date | string
    updatedAt?: DateTimeFilter<"OtherIncomeSource"> | Date | string
    incomeProfile?: XOR<IncomeProfileScalarRelationFilter, IncomeProfileWhereInput>
  }

  export type OtherIncomeSourceOrderByWithRelationInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    sourceType?: SortOrder
    frequency?: SortOrder
    amount?: SortOrder
    additionalContext?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomeProfile?: IncomeProfileOrderByWithRelationInput
  }

  export type OtherIncomeSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtherIncomeSourceWhereInput | OtherIncomeSourceWhereInput[]
    OR?: OtherIncomeSourceWhereInput[]
    NOT?: OtherIncomeSourceWhereInput | OtherIncomeSourceWhereInput[]
    incomeProfileId?: IntFilter<"OtherIncomeSource"> | number
    sourceType?: EnumOtherIncomeTypeFilter<"OtherIncomeSource"> | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFilter<"OtherIncomeSource"> | $Enums.PaymentFrequency
    amount?: DecimalFilter<"OtherIncomeSource"> | Decimal | DecimalJsLike | number | string
    additionalContext?: StringNullableFilter<"OtherIncomeSource"> | string | null
    createdAt?: DateTimeFilter<"OtherIncomeSource"> | Date | string
    updatedAt?: DateTimeFilter<"OtherIncomeSource"> | Date | string
    incomeProfile?: XOR<IncomeProfileScalarRelationFilter, IncomeProfileWhereInput>
  }, "id">

  export type OtherIncomeSourceOrderByWithAggregationInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    sourceType?: SortOrder
    frequency?: SortOrder
    amount?: SortOrder
    additionalContext?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtherIncomeSourceCountOrderByAggregateInput
    _avg?: OtherIncomeSourceAvgOrderByAggregateInput
    _max?: OtherIncomeSourceMaxOrderByAggregateInput
    _min?: OtherIncomeSourceMinOrderByAggregateInput
    _sum?: OtherIncomeSourceSumOrderByAggregateInput
  }

  export type OtherIncomeSourceScalarWhereWithAggregatesInput = {
    AND?: OtherIncomeSourceScalarWhereWithAggregatesInput | OtherIncomeSourceScalarWhereWithAggregatesInput[]
    OR?: OtherIncomeSourceScalarWhereWithAggregatesInput[]
    NOT?: OtherIncomeSourceScalarWhereWithAggregatesInput | OtherIncomeSourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OtherIncomeSource"> | number
    incomeProfileId?: IntWithAggregatesFilter<"OtherIncomeSource"> | number
    sourceType?: EnumOtherIncomeTypeWithAggregatesFilter<"OtherIncomeSource"> | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyWithAggregatesFilter<"OtherIncomeSource"> | $Enums.PaymentFrequency
    amount?: DecimalWithAggregatesFilter<"OtherIncomeSource"> | Decimal | DecimalJsLike | number | string
    additionalContext?: StringNullableWithAggregatesFilter<"OtherIncomeSource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OtherIncomeSource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OtherIncomeSource"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    hashedPassword: string
    type?: $Enums.UserType
    emailVerified?: Date | string | null
    verifiedAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    incomeProfile?: IncomeProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    hashedPassword: string
    type?: $Enums.UserType
    emailVerified?: Date | string | null
    verifiedAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    incomeProfile?: IncomeProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incomeProfile?: IncomeProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incomeProfile?: IncomeProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    hashedPassword: string
    type?: $Enums.UserType
    emailVerified?: Date | string | null
    verifiedAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IncomeProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIncomeProfileInput
    jobs?: JobCreateNestedManyWithoutIncomeProfileInput
    otherIncomes?: OtherIncomeSourceCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutIncomeProfileInput
    otherIncomes?: OtherIncomeSourceUncheckedCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncomeProfileNestedInput
    jobs?: JobUpdateManyWithoutIncomeProfileNestedInput
    otherIncomes?: OtherIncomeSourceUpdateManyWithoutIncomeProfileNestedInput
  }

  export type IncomeProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutIncomeProfileNestedInput
    otherIncomes?: OtherIncomeSourceUncheckedUpdateManyWithoutIncomeProfileNestedInput
  }

  export type IncomeProfileCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncomeProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    incomeProfile: IncomeProfileCreateNestedOneWithoutJobsInput
    otherDeductions?: OtherDeductionCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    incomeProfileId: number
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    otherDeductions?: OtherDeductionUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomeProfile?: IncomeProfileUpdateOneRequiredWithoutJobsNestedInput
    otherDeductions?: OtherDeductionUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incomeProfileId?: IntFieldUpdateOperationsInput | number
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otherDeductions?: OtherDeductionUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    incomeProfileId: number
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incomeProfileId?: IntFieldUpdateOperationsInput | number
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherDeductionCreateInput = {
    name: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutOtherDeductionsInput
  }

  export type OtherDeductionUncheckedCreateInput = {
    id?: number
    jobId: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherDeductionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutOtherDeductionsNestedInput
  }

  export type OtherDeductionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherDeductionCreateManyInput = {
    id?: number
    jobId: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherDeductionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherDeductionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherIncomeSourceCreateInput = {
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal | DecimalJsLike | number | string
    additionalContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incomeProfile: IncomeProfileCreateNestedOneWithoutOtherIncomesInput
  }

  export type OtherIncomeSourceUncheckedCreateInput = {
    id?: number
    incomeProfileId: number
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal | DecimalJsLike | number | string
    additionalContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherIncomeSourceUpdateInput = {
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomeProfile?: IncomeProfileUpdateOneRequiredWithoutOtherIncomesNestedInput
  }

  export type OtherIncomeSourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incomeProfileId?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherIncomeSourceCreateManyInput = {
    id?: number
    incomeProfileId: number
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal | DecimalJsLike | number | string
    additionalContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherIncomeSourceUpdateManyMutationInput = {
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherIncomeSourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incomeProfileId?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IncomeProfileNullableScalarRelationFilter = {
    is?: IncomeProfileWhereInput | null
    isNot?: IncomeProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    type?: SortOrder
    emailVerified?: SortOrder
    verifiedAt?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    type?: SortOrder
    emailVerified?: SortOrder
    verifiedAt?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    type?: SortOrder
    emailVerified?: SortOrder
    verifiedAt?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type OtherIncomeSourceListRelationFilter = {
    every?: OtherIncomeSourceWhereInput
    some?: OtherIncomeSourceWhereInput
    none?: OtherIncomeSourceWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtherIncomeSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomeProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncomeProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IncomeProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncomeProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncomeProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type EnumEmploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusFilter<$PrismaModel> | $Enums.EmploymentStatus
  }

  export type EnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type EnumPaystubPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaystubPeriod | EnumPaystubPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaystubPeriodFilter<$PrismaModel> | $Enums.PaystubPeriod
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IncomeProfileScalarRelationFilter = {
    is?: IncomeProfileWhereInput
    isNot?: IncomeProfileWhereInput
  }

  export type OtherDeductionListRelationFilter = {
    every?: OtherDeductionWhereInput
    some?: OtherDeductionWhereInput
    none?: OtherDeductionWhereInput
  }

  export type OtherDeductionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    employmentStatus?: SortOrder
    employerName?: SortOrder
    roleTitle?: SortOrder
    paymentFrequency?: SortOrder
    paystubPeriod?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    employmentStatus?: SortOrder
    employerName?: SortOrder
    roleTitle?: SortOrder
    paymentFrequency?: SortOrder
    paystubPeriod?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    employmentStatus?: SortOrder
    employerName?: SortOrder
    roleTitle?: SortOrder
    paymentFrequency?: SortOrder
    paystubPeriod?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    grossSalary?: SortOrder
    taxDeductions?: SortOrder
    healthInsurance?: SortOrder
    retirementContributions?: SortOrder
    netSalary?: SortOrder
  }

  export type EnumEmploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumEmploymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type EnumPaystubPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaystubPeriod | EnumPaystubPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaystubPeriodWithAggregatesFilter<$PrismaModel> | $Enums.PaystubPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaystubPeriodFilter<$PrismaModel>
    _max?: NestedEnumPaystubPeriodFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type OtherDeductionCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherDeductionAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
  }

  export type OtherDeductionMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherDeductionMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherDeductionSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    amount?: SortOrder
  }

  export type EnumOtherIncomeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherIncomeType | EnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherIncomeTypeFilter<$PrismaModel> | $Enums.OtherIncomeType
  }

  export type OtherIncomeSourceCountOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    sourceType?: SortOrder
    frequency?: SortOrder
    amount?: SortOrder
    additionalContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherIncomeSourceAvgOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    amount?: SortOrder
  }

  export type OtherIncomeSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    sourceType?: SortOrder
    frequency?: SortOrder
    amount?: SortOrder
    additionalContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherIncomeSourceMinOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    sourceType?: SortOrder
    frequency?: SortOrder
    amount?: SortOrder
    additionalContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtherIncomeSourceSumOrderByAggregateInput = {
    id?: SortOrder
    incomeProfileId?: SortOrder
    amount?: SortOrder
  }

  export type EnumOtherIncomeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherIncomeType | EnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherIncomeTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtherIncomeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtherIncomeTypeFilter<$PrismaModel>
    _max?: NestedEnumOtherIncomeTypeFilter<$PrismaModel>
  }

  export type IncomeProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<IncomeProfileCreateWithoutUserInput, IncomeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutUserInput
    connect?: IncomeProfileWhereUniqueInput
  }

  export type IncomeProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<IncomeProfileCreateWithoutUserInput, IncomeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutUserInput
    connect?: IncomeProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IncomeProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<IncomeProfileCreateWithoutUserInput, IncomeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutUserInput
    upsert?: IncomeProfileUpsertWithoutUserInput
    disconnect?: IncomeProfileWhereInput | boolean
    delete?: IncomeProfileWhereInput | boolean
    connect?: IncomeProfileWhereUniqueInput
    update?: XOR<XOR<IncomeProfileUpdateToOneWithWhereWithoutUserInput, IncomeProfileUpdateWithoutUserInput>, IncomeProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IncomeProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<IncomeProfileCreateWithoutUserInput, IncomeProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutUserInput
    upsert?: IncomeProfileUpsertWithoutUserInput
    disconnect?: IncomeProfileWhereInput | boolean
    delete?: IncomeProfileWhereInput | boolean
    connect?: IncomeProfileWhereUniqueInput
    update?: XOR<XOR<IncomeProfileUpdateToOneWithWhereWithoutUserInput, IncomeProfileUpdateWithoutUserInput>, IncomeProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutIncomeProfileInput = {
    create?: XOR<UserCreateWithoutIncomeProfileInput, UserUncheckedCreateWithoutIncomeProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomeProfileInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedManyWithoutIncomeProfileInput = {
    create?: XOR<JobCreateWithoutIncomeProfileInput, JobUncheckedCreateWithoutIncomeProfileInput> | JobCreateWithoutIncomeProfileInput[] | JobUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: JobCreateOrConnectWithoutIncomeProfileInput | JobCreateOrConnectWithoutIncomeProfileInput[]
    createMany?: JobCreateManyIncomeProfileInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type OtherIncomeSourceCreateNestedManyWithoutIncomeProfileInput = {
    create?: XOR<OtherIncomeSourceCreateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput> | OtherIncomeSourceCreateWithoutIncomeProfileInput[] | OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput | OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput[]
    createMany?: OtherIncomeSourceCreateManyIncomeProfileInputEnvelope
    connect?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutIncomeProfileInput = {
    create?: XOR<JobCreateWithoutIncomeProfileInput, JobUncheckedCreateWithoutIncomeProfileInput> | JobCreateWithoutIncomeProfileInput[] | JobUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: JobCreateOrConnectWithoutIncomeProfileInput | JobCreateOrConnectWithoutIncomeProfileInput[]
    createMany?: JobCreateManyIncomeProfileInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type OtherIncomeSourceUncheckedCreateNestedManyWithoutIncomeProfileInput = {
    create?: XOR<OtherIncomeSourceCreateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput> | OtherIncomeSourceCreateWithoutIncomeProfileInput[] | OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput | OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput[]
    createMany?: OtherIncomeSourceCreateManyIncomeProfileInputEnvelope
    connect?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutIncomeProfileNestedInput = {
    create?: XOR<UserCreateWithoutIncomeProfileInput, UserUncheckedCreateWithoutIncomeProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomeProfileInput
    upsert?: UserUpsertWithoutIncomeProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomeProfileInput, UserUpdateWithoutIncomeProfileInput>, UserUncheckedUpdateWithoutIncomeProfileInput>
  }

  export type JobUpdateManyWithoutIncomeProfileNestedInput = {
    create?: XOR<JobCreateWithoutIncomeProfileInput, JobUncheckedCreateWithoutIncomeProfileInput> | JobCreateWithoutIncomeProfileInput[] | JobUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: JobCreateOrConnectWithoutIncomeProfileInput | JobCreateOrConnectWithoutIncomeProfileInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutIncomeProfileInput | JobUpsertWithWhereUniqueWithoutIncomeProfileInput[]
    createMany?: JobCreateManyIncomeProfileInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutIncomeProfileInput | JobUpdateWithWhereUniqueWithoutIncomeProfileInput[]
    updateMany?: JobUpdateManyWithWhereWithoutIncomeProfileInput | JobUpdateManyWithWhereWithoutIncomeProfileInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type OtherIncomeSourceUpdateManyWithoutIncomeProfileNestedInput = {
    create?: XOR<OtherIncomeSourceCreateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput> | OtherIncomeSourceCreateWithoutIncomeProfileInput[] | OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput | OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput[]
    upsert?: OtherIncomeSourceUpsertWithWhereUniqueWithoutIncomeProfileInput | OtherIncomeSourceUpsertWithWhereUniqueWithoutIncomeProfileInput[]
    createMany?: OtherIncomeSourceCreateManyIncomeProfileInputEnvelope
    set?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    disconnect?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    delete?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    connect?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    update?: OtherIncomeSourceUpdateWithWhereUniqueWithoutIncomeProfileInput | OtherIncomeSourceUpdateWithWhereUniqueWithoutIncomeProfileInput[]
    updateMany?: OtherIncomeSourceUpdateManyWithWhereWithoutIncomeProfileInput | OtherIncomeSourceUpdateManyWithWhereWithoutIncomeProfileInput[]
    deleteMany?: OtherIncomeSourceScalarWhereInput | OtherIncomeSourceScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutIncomeProfileNestedInput = {
    create?: XOR<JobCreateWithoutIncomeProfileInput, JobUncheckedCreateWithoutIncomeProfileInput> | JobCreateWithoutIncomeProfileInput[] | JobUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: JobCreateOrConnectWithoutIncomeProfileInput | JobCreateOrConnectWithoutIncomeProfileInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutIncomeProfileInput | JobUpsertWithWhereUniqueWithoutIncomeProfileInput[]
    createMany?: JobCreateManyIncomeProfileInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutIncomeProfileInput | JobUpdateWithWhereUniqueWithoutIncomeProfileInput[]
    updateMany?: JobUpdateManyWithWhereWithoutIncomeProfileInput | JobUpdateManyWithWhereWithoutIncomeProfileInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type OtherIncomeSourceUncheckedUpdateManyWithoutIncomeProfileNestedInput = {
    create?: XOR<OtherIncomeSourceCreateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput> | OtherIncomeSourceCreateWithoutIncomeProfileInput[] | OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput[]
    connectOrCreate?: OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput | OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput[]
    upsert?: OtherIncomeSourceUpsertWithWhereUniqueWithoutIncomeProfileInput | OtherIncomeSourceUpsertWithWhereUniqueWithoutIncomeProfileInput[]
    createMany?: OtherIncomeSourceCreateManyIncomeProfileInputEnvelope
    set?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    disconnect?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    delete?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    connect?: OtherIncomeSourceWhereUniqueInput | OtherIncomeSourceWhereUniqueInput[]
    update?: OtherIncomeSourceUpdateWithWhereUniqueWithoutIncomeProfileInput | OtherIncomeSourceUpdateWithWhereUniqueWithoutIncomeProfileInput[]
    updateMany?: OtherIncomeSourceUpdateManyWithWhereWithoutIncomeProfileInput | OtherIncomeSourceUpdateManyWithWhereWithoutIncomeProfileInput[]
    deleteMany?: OtherIncomeSourceScalarWhereInput | OtherIncomeSourceScalarWhereInput[]
  }

  export type IncomeProfileCreateNestedOneWithoutJobsInput = {
    create?: XOR<IncomeProfileCreateWithoutJobsInput, IncomeProfileUncheckedCreateWithoutJobsInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutJobsInput
    connect?: IncomeProfileWhereUniqueInput
  }

  export type OtherDeductionCreateNestedManyWithoutJobInput = {
    create?: XOR<OtherDeductionCreateWithoutJobInput, OtherDeductionUncheckedCreateWithoutJobInput> | OtherDeductionCreateWithoutJobInput[] | OtherDeductionUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OtherDeductionCreateOrConnectWithoutJobInput | OtherDeductionCreateOrConnectWithoutJobInput[]
    createMany?: OtherDeductionCreateManyJobInputEnvelope
    connect?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
  }

  export type OtherDeductionUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<OtherDeductionCreateWithoutJobInput, OtherDeductionUncheckedCreateWithoutJobInput> | OtherDeductionCreateWithoutJobInput[] | OtherDeductionUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OtherDeductionCreateOrConnectWithoutJobInput | OtherDeductionCreateOrConnectWithoutJobInput[]
    createMany?: OtherDeductionCreateManyJobInputEnvelope
    connect?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
  }

  export type EnumEmploymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentStatus
  }

  export type EnumPaymentFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.PaymentFrequency
  }

  export type EnumPaystubPeriodFieldUpdateOperationsInput = {
    set?: $Enums.PaystubPeriod
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IncomeProfileUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<IncomeProfileCreateWithoutJobsInput, IncomeProfileUncheckedCreateWithoutJobsInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutJobsInput
    upsert?: IncomeProfileUpsertWithoutJobsInput
    connect?: IncomeProfileWhereUniqueInput
    update?: XOR<XOR<IncomeProfileUpdateToOneWithWhereWithoutJobsInput, IncomeProfileUpdateWithoutJobsInput>, IncomeProfileUncheckedUpdateWithoutJobsInput>
  }

  export type OtherDeductionUpdateManyWithoutJobNestedInput = {
    create?: XOR<OtherDeductionCreateWithoutJobInput, OtherDeductionUncheckedCreateWithoutJobInput> | OtherDeductionCreateWithoutJobInput[] | OtherDeductionUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OtherDeductionCreateOrConnectWithoutJobInput | OtherDeductionCreateOrConnectWithoutJobInput[]
    upsert?: OtherDeductionUpsertWithWhereUniqueWithoutJobInput | OtherDeductionUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: OtherDeductionCreateManyJobInputEnvelope
    set?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    disconnect?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    delete?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    connect?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    update?: OtherDeductionUpdateWithWhereUniqueWithoutJobInput | OtherDeductionUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: OtherDeductionUpdateManyWithWhereWithoutJobInput | OtherDeductionUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: OtherDeductionScalarWhereInput | OtherDeductionScalarWhereInput[]
  }

  export type OtherDeductionUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<OtherDeductionCreateWithoutJobInput, OtherDeductionUncheckedCreateWithoutJobInput> | OtherDeductionCreateWithoutJobInput[] | OtherDeductionUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OtherDeductionCreateOrConnectWithoutJobInput | OtherDeductionCreateOrConnectWithoutJobInput[]
    upsert?: OtherDeductionUpsertWithWhereUniqueWithoutJobInput | OtherDeductionUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: OtherDeductionCreateManyJobInputEnvelope
    set?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    disconnect?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    delete?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    connect?: OtherDeductionWhereUniqueInput | OtherDeductionWhereUniqueInput[]
    update?: OtherDeductionUpdateWithWhereUniqueWithoutJobInput | OtherDeductionUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: OtherDeductionUpdateManyWithWhereWithoutJobInput | OtherDeductionUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: OtherDeductionScalarWhereInput | OtherDeductionScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutOtherDeductionsInput = {
    create?: XOR<JobCreateWithoutOtherDeductionsInput, JobUncheckedCreateWithoutOtherDeductionsInput>
    connectOrCreate?: JobCreateOrConnectWithoutOtherDeductionsInput
    connect?: JobWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutOtherDeductionsNestedInput = {
    create?: XOR<JobCreateWithoutOtherDeductionsInput, JobUncheckedCreateWithoutOtherDeductionsInput>
    connectOrCreate?: JobCreateOrConnectWithoutOtherDeductionsInput
    upsert?: JobUpsertWithoutOtherDeductionsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutOtherDeductionsInput, JobUpdateWithoutOtherDeductionsInput>, JobUncheckedUpdateWithoutOtherDeductionsInput>
  }

  export type IncomeProfileCreateNestedOneWithoutOtherIncomesInput = {
    create?: XOR<IncomeProfileCreateWithoutOtherIncomesInput, IncomeProfileUncheckedCreateWithoutOtherIncomesInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutOtherIncomesInput
    connect?: IncomeProfileWhereUniqueInput
  }

  export type EnumOtherIncomeTypeFieldUpdateOperationsInput = {
    set?: $Enums.OtherIncomeType
  }

  export type IncomeProfileUpdateOneRequiredWithoutOtherIncomesNestedInput = {
    create?: XOR<IncomeProfileCreateWithoutOtherIncomesInput, IncomeProfileUncheckedCreateWithoutOtherIncomesInput>
    connectOrCreate?: IncomeProfileCreateOrConnectWithoutOtherIncomesInput
    upsert?: IncomeProfileUpsertWithoutOtherIncomesInput
    connect?: IncomeProfileWhereUniqueInput
    update?: XOR<XOR<IncomeProfileUpdateToOneWithWhereWithoutOtherIncomesInput, IncomeProfileUpdateWithoutOtherIncomesInput>, IncomeProfileUncheckedUpdateWithoutOtherIncomesInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumEmploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusFilter<$PrismaModel> | $Enums.EmploymentStatus
  }

  export type NestedEnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type NestedEnumPaystubPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaystubPeriod | EnumPaystubPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaystubPeriodFilter<$PrismaModel> | $Enums.PaystubPeriod
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumEmploymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumPaystubPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaystubPeriod | EnumPaystubPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaystubPeriod[] | ListEnumPaystubPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaystubPeriodWithAggregatesFilter<$PrismaModel> | $Enums.PaystubPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaystubPeriodFilter<$PrismaModel>
    _max?: NestedEnumPaystubPeriodFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOtherIncomeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherIncomeType | EnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherIncomeTypeFilter<$PrismaModel> | $Enums.OtherIncomeType
  }

  export type NestedEnumOtherIncomeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherIncomeType | EnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherIncomeType[] | ListEnumOtherIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherIncomeTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtherIncomeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtherIncomeTypeFilter<$PrismaModel>
    _max?: NestedEnumOtherIncomeTypeFilter<$PrismaModel>
  }

  export type IncomeProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutIncomeProfileInput
    otherIncomes?: OtherIncomeSourceCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutIncomeProfileInput
    otherIncomes?: OtherIncomeSourceUncheckedCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileCreateOrConnectWithoutUserInput = {
    where: IncomeProfileWhereUniqueInput
    create: XOR<IncomeProfileCreateWithoutUserInput, IncomeProfileUncheckedCreateWithoutUserInput>
  }

  export type IncomeProfileUpsertWithoutUserInput = {
    update: XOR<IncomeProfileUpdateWithoutUserInput, IncomeProfileUncheckedUpdateWithoutUserInput>
    create: XOR<IncomeProfileCreateWithoutUserInput, IncomeProfileUncheckedCreateWithoutUserInput>
    where?: IncomeProfileWhereInput
  }

  export type IncomeProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: IncomeProfileWhereInput
    data: XOR<IncomeProfileUpdateWithoutUserInput, IncomeProfileUncheckedUpdateWithoutUserInput>
  }

  export type IncomeProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutIncomeProfileNestedInput
    otherIncomes?: OtherIncomeSourceUpdateManyWithoutIncomeProfileNestedInput
  }

  export type IncomeProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutIncomeProfileNestedInput
    otherIncomes?: OtherIncomeSourceUncheckedUpdateManyWithoutIncomeProfileNestedInput
  }

  export type UserCreateWithoutIncomeProfileInput = {
    email: string
    name?: string | null
    hashedPassword: string
    type?: $Enums.UserType
    emailVerified?: Date | string | null
    verifiedAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
  }

  export type UserUncheckedCreateWithoutIncomeProfileInput = {
    id?: number
    email: string
    name?: string | null
    hashedPassword: string
    type?: $Enums.UserType
    emailVerified?: Date | string | null
    verifiedAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
  }

  export type UserCreateOrConnectWithoutIncomeProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomeProfileInput, UserUncheckedCreateWithoutIncomeProfileInput>
  }

  export type JobCreateWithoutIncomeProfileInput = {
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    otherDeductions?: OtherDeductionCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutIncomeProfileInput = {
    id?: number
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    otherDeductions?: OtherDeductionUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutIncomeProfileInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutIncomeProfileInput, JobUncheckedCreateWithoutIncomeProfileInput>
  }

  export type JobCreateManyIncomeProfileInputEnvelope = {
    data: JobCreateManyIncomeProfileInput | JobCreateManyIncomeProfileInput[]
    skipDuplicates?: boolean
  }

  export type OtherIncomeSourceCreateWithoutIncomeProfileInput = {
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal | DecimalJsLike | number | string
    additionalContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput = {
    id?: number
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal | DecimalJsLike | number | string
    additionalContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherIncomeSourceCreateOrConnectWithoutIncomeProfileInput = {
    where: OtherIncomeSourceWhereUniqueInput
    create: XOR<OtherIncomeSourceCreateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput>
  }

  export type OtherIncomeSourceCreateManyIncomeProfileInputEnvelope = {
    data: OtherIncomeSourceCreateManyIncomeProfileInput | OtherIncomeSourceCreateManyIncomeProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIncomeProfileInput = {
    update: XOR<UserUpdateWithoutIncomeProfileInput, UserUncheckedUpdateWithoutIncomeProfileInput>
    create: XOR<UserCreateWithoutIncomeProfileInput, UserUncheckedCreateWithoutIncomeProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomeProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomeProfileInput, UserUncheckedUpdateWithoutIncomeProfileInput>
  }

  export type UserUpdateWithoutIncomeProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutIncomeProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobUpsertWithWhereUniqueWithoutIncomeProfileInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutIncomeProfileInput, JobUncheckedUpdateWithoutIncomeProfileInput>
    create: XOR<JobCreateWithoutIncomeProfileInput, JobUncheckedCreateWithoutIncomeProfileInput>
  }

  export type JobUpdateWithWhereUniqueWithoutIncomeProfileInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutIncomeProfileInput, JobUncheckedUpdateWithoutIncomeProfileInput>
  }

  export type JobUpdateManyWithWhereWithoutIncomeProfileInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutIncomeProfileInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    incomeProfileId?: IntFilter<"Job"> | number
    employmentStatus?: EnumEmploymentStatusFilter<"Job"> | $Enums.EmploymentStatus
    employerName?: StringFilter<"Job"> | string
    roleTitle?: StringFilter<"Job"> | string
    paymentFrequency?: EnumPaymentFrequencyFilter<"Job"> | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFilter<"Job"> | $Enums.PaystubPeriod
    grossSalary?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type OtherIncomeSourceUpsertWithWhereUniqueWithoutIncomeProfileInput = {
    where: OtherIncomeSourceWhereUniqueInput
    update: XOR<OtherIncomeSourceUpdateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedUpdateWithoutIncomeProfileInput>
    create: XOR<OtherIncomeSourceCreateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedCreateWithoutIncomeProfileInput>
  }

  export type OtherIncomeSourceUpdateWithWhereUniqueWithoutIncomeProfileInput = {
    where: OtherIncomeSourceWhereUniqueInput
    data: XOR<OtherIncomeSourceUpdateWithoutIncomeProfileInput, OtherIncomeSourceUncheckedUpdateWithoutIncomeProfileInput>
  }

  export type OtherIncomeSourceUpdateManyWithWhereWithoutIncomeProfileInput = {
    where: OtherIncomeSourceScalarWhereInput
    data: XOR<OtherIncomeSourceUpdateManyMutationInput, OtherIncomeSourceUncheckedUpdateManyWithoutIncomeProfileInput>
  }

  export type OtherIncomeSourceScalarWhereInput = {
    AND?: OtherIncomeSourceScalarWhereInput | OtherIncomeSourceScalarWhereInput[]
    OR?: OtherIncomeSourceScalarWhereInput[]
    NOT?: OtherIncomeSourceScalarWhereInput | OtherIncomeSourceScalarWhereInput[]
    id?: IntFilter<"OtherIncomeSource"> | number
    incomeProfileId?: IntFilter<"OtherIncomeSource"> | number
    sourceType?: EnumOtherIncomeTypeFilter<"OtherIncomeSource"> | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFilter<"OtherIncomeSource"> | $Enums.PaymentFrequency
    amount?: DecimalFilter<"OtherIncomeSource"> | Decimal | DecimalJsLike | number | string
    additionalContext?: StringNullableFilter<"OtherIncomeSource"> | string | null
    createdAt?: DateTimeFilter<"OtherIncomeSource"> | Date | string
    updatedAt?: DateTimeFilter<"OtherIncomeSource"> | Date | string
  }

  export type IncomeProfileCreateWithoutJobsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIncomeProfileInput
    otherIncomes?: OtherIncomeSourceCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileUncheckedCreateWithoutJobsInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    otherIncomes?: OtherIncomeSourceUncheckedCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileCreateOrConnectWithoutJobsInput = {
    where: IncomeProfileWhereUniqueInput
    create: XOR<IncomeProfileCreateWithoutJobsInput, IncomeProfileUncheckedCreateWithoutJobsInput>
  }

  export type OtherDeductionCreateWithoutJobInput = {
    name: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherDeductionUncheckedCreateWithoutJobInput = {
    id?: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherDeductionCreateOrConnectWithoutJobInput = {
    where: OtherDeductionWhereUniqueInput
    create: XOR<OtherDeductionCreateWithoutJobInput, OtherDeductionUncheckedCreateWithoutJobInput>
  }

  export type OtherDeductionCreateManyJobInputEnvelope = {
    data: OtherDeductionCreateManyJobInput | OtherDeductionCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type IncomeProfileUpsertWithoutJobsInput = {
    update: XOR<IncomeProfileUpdateWithoutJobsInput, IncomeProfileUncheckedUpdateWithoutJobsInput>
    create: XOR<IncomeProfileCreateWithoutJobsInput, IncomeProfileUncheckedCreateWithoutJobsInput>
    where?: IncomeProfileWhereInput
  }

  export type IncomeProfileUpdateToOneWithWhereWithoutJobsInput = {
    where?: IncomeProfileWhereInput
    data: XOR<IncomeProfileUpdateWithoutJobsInput, IncomeProfileUncheckedUpdateWithoutJobsInput>
  }

  export type IncomeProfileUpdateWithoutJobsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncomeProfileNestedInput
    otherIncomes?: OtherIncomeSourceUpdateManyWithoutIncomeProfileNestedInput
  }

  export type IncomeProfileUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otherIncomes?: OtherIncomeSourceUncheckedUpdateManyWithoutIncomeProfileNestedInput
  }

  export type OtherDeductionUpsertWithWhereUniqueWithoutJobInput = {
    where: OtherDeductionWhereUniqueInput
    update: XOR<OtherDeductionUpdateWithoutJobInput, OtherDeductionUncheckedUpdateWithoutJobInput>
    create: XOR<OtherDeductionCreateWithoutJobInput, OtherDeductionUncheckedCreateWithoutJobInput>
  }

  export type OtherDeductionUpdateWithWhereUniqueWithoutJobInput = {
    where: OtherDeductionWhereUniqueInput
    data: XOR<OtherDeductionUpdateWithoutJobInput, OtherDeductionUncheckedUpdateWithoutJobInput>
  }

  export type OtherDeductionUpdateManyWithWhereWithoutJobInput = {
    where: OtherDeductionScalarWhereInput
    data: XOR<OtherDeductionUpdateManyMutationInput, OtherDeductionUncheckedUpdateManyWithoutJobInput>
  }

  export type OtherDeductionScalarWhereInput = {
    AND?: OtherDeductionScalarWhereInput | OtherDeductionScalarWhereInput[]
    OR?: OtherDeductionScalarWhereInput[]
    NOT?: OtherDeductionScalarWhereInput | OtherDeductionScalarWhereInput[]
    id?: IntFilter<"OtherDeduction"> | number
    jobId?: IntFilter<"OtherDeduction"> | number
    name?: StringFilter<"OtherDeduction"> | string
    amount?: DecimalFilter<"OtherDeduction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OtherDeduction"> | Date | string
    updatedAt?: DateTimeFilter<"OtherDeduction"> | Date | string
  }

  export type JobCreateWithoutOtherDeductionsInput = {
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    incomeProfile: IncomeProfileCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutOtherDeductionsInput = {
    id?: number
    incomeProfileId: number
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutOtherDeductionsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutOtherDeductionsInput, JobUncheckedCreateWithoutOtherDeductionsInput>
  }

  export type JobUpsertWithoutOtherDeductionsInput = {
    update: XOR<JobUpdateWithoutOtherDeductionsInput, JobUncheckedUpdateWithoutOtherDeductionsInput>
    create: XOR<JobCreateWithoutOtherDeductionsInput, JobUncheckedCreateWithoutOtherDeductionsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutOtherDeductionsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutOtherDeductionsInput, JobUncheckedUpdateWithoutOtherDeductionsInput>
  }

  export type JobUpdateWithoutOtherDeductionsInput = {
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomeProfile?: IncomeProfileUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutOtherDeductionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    incomeProfileId?: IntFieldUpdateOperationsInput | number
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeProfileCreateWithoutOtherIncomesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIncomeProfileInput
    jobs?: JobCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileUncheckedCreateWithoutOtherIncomesInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutIncomeProfileInput
  }

  export type IncomeProfileCreateOrConnectWithoutOtherIncomesInput = {
    where: IncomeProfileWhereUniqueInput
    create: XOR<IncomeProfileCreateWithoutOtherIncomesInput, IncomeProfileUncheckedCreateWithoutOtherIncomesInput>
  }

  export type IncomeProfileUpsertWithoutOtherIncomesInput = {
    update: XOR<IncomeProfileUpdateWithoutOtherIncomesInput, IncomeProfileUncheckedUpdateWithoutOtherIncomesInput>
    create: XOR<IncomeProfileCreateWithoutOtherIncomesInput, IncomeProfileUncheckedCreateWithoutOtherIncomesInput>
    where?: IncomeProfileWhereInput
  }

  export type IncomeProfileUpdateToOneWithWhereWithoutOtherIncomesInput = {
    where?: IncomeProfileWhereInput
    data: XOR<IncomeProfileUpdateWithoutOtherIncomesInput, IncomeProfileUncheckedUpdateWithoutOtherIncomesInput>
  }

  export type IncomeProfileUpdateWithoutOtherIncomesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncomeProfileNestedInput
    jobs?: JobUpdateManyWithoutIncomeProfileNestedInput
  }

  export type IncomeProfileUncheckedUpdateWithoutOtherIncomesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutIncomeProfileNestedInput
  }

  export type JobCreateManyIncomeProfileInput = {
    id?: number
    employmentStatus: $Enums.EmploymentStatus
    employerName: string
    roleTitle: string
    paymentFrequency: $Enums.PaymentFrequency
    paystubPeriod: $Enums.PaystubPeriod
    grossSalary: Decimal | DecimalJsLike | number | string
    taxDeductions: Decimal | DecimalJsLike | number | string
    healthInsurance: Decimal | DecimalJsLike | number | string
    retirementContributions: Decimal | DecimalJsLike | number | string
    netSalary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherIncomeSourceCreateManyIncomeProfileInput = {
    id?: number
    sourceType: $Enums.OtherIncomeType
    frequency: $Enums.PaymentFrequency
    amount: Decimal | DecimalJsLike | number | string
    additionalContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutIncomeProfileInput = {
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otherDeductions?: OtherDeductionUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutIncomeProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otherDeductions?: OtherDeductionUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutIncomeProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    employerName?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    paystubPeriod?: EnumPaystubPeriodFieldUpdateOperationsInput | $Enums.PaystubPeriod
    grossSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    healthInsurance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirementContributions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSalary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherIncomeSourceUpdateWithoutIncomeProfileInput = {
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherIncomeSourceUncheckedUpdateWithoutIncomeProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherIncomeSourceUncheckedUpdateManyWithoutIncomeProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumOtherIncomeTypeFieldUpdateOperationsInput | $Enums.OtherIncomeType
    frequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    additionalContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherDeductionCreateManyJobInput = {
    id?: number
    name: string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtherDeductionUpdateWithoutJobInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherDeductionUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtherDeductionUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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