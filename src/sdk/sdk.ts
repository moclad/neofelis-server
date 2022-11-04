import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bpchar: any;
  date: string;
  float8: any;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account_info" */
export type Account_Info = {
  __typename?: 'account_info';
  /** An object relationship */
  asset: Maybe<Assets>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  expense: Maybe<Expenses>;
  id: Scalars['bigint'];
  /** An object relationship */
  liability: Maybe<Liabilities>;
  name: Maybe<Scalars['String']>;
  /** An array relationship */
  recurrings: Array<Recurring>;
  /** An array relationship */
  recurringsByAccountTo: Array<Recurring>;
  /** An aggregate relationship */
  recurringsByAccountTo_aggregate: Recurring_Aggregate;
  /** An aggregate relationship */
  recurrings_aggregate: Recurring_Aggregate;
  /** An object relationship */
  revenue: Maybe<Revenues>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  type: Scalars['bpchar'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "account_info" */
export type Account_InfoRecurringsArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


/** columns and relationships of "account_info" */
export type Account_InfoRecurringsByAccountToArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


/** columns and relationships of "account_info" */
export type Account_InfoRecurringsByAccountTo_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


/** columns and relationships of "account_info" */
export type Account_InfoRecurrings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


/** columns and relationships of "account_info" */
export type Account_InfoTransaction_AccountsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


/** columns and relationships of "account_info" */
export type Account_InfoTransaction_Accounts_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** aggregated selection of "account_info" */
export type Account_Info_Aggregate = {
  __typename?: 'account_info_aggregate';
  aggregate: Maybe<Account_Info_Aggregate_Fields>;
  nodes: Array<Account_Info>;
};

/** aggregate fields of "account_info" */
export type Account_Info_Aggregate_Fields = {
  __typename?: 'account_info_aggregate_fields';
  avg: Maybe<Account_Info_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Account_Info_Max_Fields>;
  min: Maybe<Account_Info_Min_Fields>;
  stddev: Maybe<Account_Info_Stddev_Fields>;
  stddev_pop: Maybe<Account_Info_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Account_Info_Stddev_Samp_Fields>;
  sum: Maybe<Account_Info_Sum_Fields>;
  var_pop: Maybe<Account_Info_Var_Pop_Fields>;
  var_samp: Maybe<Account_Info_Var_Samp_Fields>;
  variance: Maybe<Account_Info_Variance_Fields>;
};


/** aggregate fields of "account_info" */
export type Account_Info_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Account_Info_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_Info_Avg_Fields = {
  __typename?: 'account_info_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_info". All fields are combined with a logical 'AND'. */
export type Account_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Info_Bool_Exp>>;
  _not?: InputMaybe<Account_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Info_Bool_Exp>>;
  asset?: InputMaybe<Assets_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expense?: InputMaybe<Expenses_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  liability?: InputMaybe<Liabilities_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recurrings?: InputMaybe<Recurring_Bool_Exp>;
  recurringsByAccountTo?: InputMaybe<Recurring_Bool_Exp>;
  revenue?: InputMaybe<Revenues_Bool_Exp>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  type?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "account_info" */
export enum Account_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountInfoPkey = 'account_info_pkey'
}

/** input type for incrementing numeric columns in table "account_info" */
export type Account_Info_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "account_info" */
export type Account_Info_Insert_Input = {
  asset?: InputMaybe<Assets_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expense?: InputMaybe<Expenses_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  liability?: InputMaybe<Liabilities_Obj_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  recurrings?: InputMaybe<Recurring_Arr_Rel_Insert_Input>;
  recurringsByAccountTo?: InputMaybe<Recurring_Arr_Rel_Insert_Input>;
  revenue?: InputMaybe<Revenues_Obj_Rel_Insert_Input>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Account_Info_Max_Fields = {
  __typename?: 'account_info_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['bpchar']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Account_Info_Min_Fields = {
  __typename?: 'account_info_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['bpchar']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "account_info" */
export type Account_Info_Mutation_Response = {
  __typename?: 'account_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Info>;
};

/** input type for inserting object relation for remote table "account_info" */
export type Account_Info_Obj_Rel_Insert_Input = {
  data: Account_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_Info_On_Conflict>;
};

/** on_conflict condition type for table "account_info" */
export type Account_Info_On_Conflict = {
  constraint: Account_Info_Constraint;
  update_columns?: Array<Account_Info_Update_Column>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "account_info". */
export type Account_Info_Order_By = {
  asset?: InputMaybe<Assets_Order_By>;
  created_at?: InputMaybe<Order_By>;
  expense?: InputMaybe<Expenses_Order_By>;
  id?: InputMaybe<Order_By>;
  liability?: InputMaybe<Liabilities_Order_By>;
  name?: InputMaybe<Order_By>;
  recurringsByAccountTo_aggregate?: InputMaybe<Recurring_Aggregate_Order_By>;
  recurrings_aggregate?: InputMaybe<Recurring_Aggregate_Order_By>;
  revenue?: InputMaybe<Revenues_Order_By>;
  transaction_accounts_aggregate?: InputMaybe<Transaction_Accounts_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_info */
export type Account_Info_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "account_info" */
export enum Account_Info_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "account_info" */
export type Account_Info_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Account_Info_Stddev_Fields = {
  __typename?: 'account_info_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Info_Stddev_Pop_Fields = {
  __typename?: 'account_info_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Info_Stddev_Samp_Fields = {
  __typename?: 'account_info_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "account_info" */
export type Account_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Info_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Account_Info_Sum_Fields = {
  __typename?: 'account_info_sum_fields';
  id: Maybe<Scalars['bigint']>;
};

/** update columns of table "account_info" */
export enum Account_Info_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Account_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Account_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Info_Set_Input>;
  where: Account_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Account_Info_Var_Pop_Fields = {
  __typename?: 'account_info_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Info_Var_Samp_Fields = {
  __typename?: 'account_info_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Info_Variance_Fields = {
  __typename?: 'account_info_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "assets" */
export type Assets = {
  __typename?: 'assets';
  /** An object relationship */
  account_info: Account_Info;
  account_no: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  balance: Maybe<Scalars['float8']>;
  balance_date: Maybe<Scalars['date']>;
  created_at: Scalars['timestamptz'];
  default: Scalars['Boolean'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "assets" */
export type Assets_Aggregate = {
  __typename?: 'assets_aggregate';
  aggregate: Maybe<Assets_Aggregate_Fields>;
  nodes: Array<Assets>;
};

/** aggregate fields of "assets" */
export type Assets_Aggregate_Fields = {
  __typename?: 'assets_aggregate_fields';
  avg: Maybe<Assets_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Assets_Max_Fields>;
  min: Maybe<Assets_Min_Fields>;
  stddev: Maybe<Assets_Stddev_Fields>;
  stddev_pop: Maybe<Assets_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Assets_Stddev_Samp_Fields>;
  sum: Maybe<Assets_Sum_Fields>;
  var_pop: Maybe<Assets_Var_Pop_Fields>;
  var_samp: Maybe<Assets_Var_Samp_Fields>;
  variance: Maybe<Assets_Variance_Fields>;
};


/** aggregate fields of "assets" */
export type Assets_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Assets_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Assets_Avg_Fields = {
  __typename?: 'assets_avg_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Bool_Exp>>;
  _not?: InputMaybe<Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Assets_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  balance?: InputMaybe<Float8_Comparison_Exp>;
  balance_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "assets" */
export enum Assets_Constraint {
  /** unique or primary key constraint on columns "id" */
  AssetsPkey = 'assets_pkey'
}

/** input type for incrementing numeric columns in table "assets" */
export type Assets_Inc_Input = {
  balance?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "assets" */
export type Assets_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['float8']>;
  balance_date?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Assets_Max_Fields = {
  __typename?: 'assets_max_fields';
  account_no: Maybe<Scalars['String']>;
  balance: Maybe<Scalars['float8']>;
  balance_date: Maybe<Scalars['date']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Assets_Min_Fields = {
  __typename?: 'assets_min_fields';
  account_no: Maybe<Scalars['String']>;
  balance: Maybe<Scalars['float8']>;
  balance_date: Maybe<Scalars['date']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "assets" */
export type Assets_Mutation_Response = {
  __typename?: 'assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assets>;
};

/** input type for inserting object relation for remote table "assets" */
export type Assets_Obj_Rel_Insert_Input = {
  data: Assets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Assets_On_Conflict>;
};

/** on_conflict condition type for table "assets" */
export type Assets_On_Conflict = {
  constraint: Assets_Constraint;
  update_columns?: Array<Assets_Update_Column>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

/** Ordering options when selecting data from "assets". */
export type Assets_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_no?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assets */
export type Assets_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "assets" */
export enum Assets_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceDate = 'balance_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "assets" */
export type Assets_Set_Input = {
  account_no?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['float8']>;
  balance_date?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Assets_Stddev_Fields = {
  __typename?: 'assets_stddev_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Assets_Stddev_Pop_Fields = {
  __typename?: 'assets_stddev_pop_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Assets_Stddev_Samp_Fields = {
  __typename?: 'assets_stddev_samp_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "assets" */
export type Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assets_Stream_Cursor_Value_Input = {
  account_no?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['float8']>;
  balance_date?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Assets_Sum_Fields = {
  __typename?: 'assets_sum_fields';
  balance: Maybe<Scalars['float8']>;
  id: Maybe<Scalars['bigint']>;
};

/** update columns of table "assets" */
export enum Assets_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceDate = 'balance_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Assets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Assets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Assets_Set_Input>;
  where: Assets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Assets_Var_Pop_Fields = {
  __typename?: 'assets_var_pop_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Assets_Var_Samp_Fields = {
  __typename?: 'assets_var_samp_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Assets_Variance_Fields = {
  __typename?: 'assets_variance_fields';
  balance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  recurrings: Array<Recurring>;
  /** An aggregate relationship */
  recurrings_aggregate: Recurring_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "categories" */
export type CategoriesRecurringsArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesRecurrings_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Categories_Max_Fields>;
  min: Maybe<Categories_Min_Fields>;
  stddev: Maybe<Categories_Stddev_Fields>;
  stddev_pop: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Categories_Stddev_Samp_Fields>;
  sum: Maybe<Categories_Sum_Fields>;
  var_pop: Maybe<Categories_Var_Pop_Fields>;
  var_samp: Maybe<Categories_Var_Samp_Fields>;
  variance: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Categories_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recurrings?: InputMaybe<Recurring_Bool_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  recurrings?: InputMaybe<Recurring_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  recurrings_aggregate?: InputMaybe<Recurring_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id: Maybe<Scalars['bigint']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "expenses" */
export type Expenses = {
  __typename?: 'expenses';
  /** An object relationship */
  account_info: Account_Info;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "expenses" */
export type Expenses_Aggregate = {
  __typename?: 'expenses_aggregate';
  aggregate: Maybe<Expenses_Aggregate_Fields>;
  nodes: Array<Expenses>;
};

/** aggregate fields of "expenses" */
export type Expenses_Aggregate_Fields = {
  __typename?: 'expenses_aggregate_fields';
  avg: Maybe<Expenses_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Expenses_Max_Fields>;
  min: Maybe<Expenses_Min_Fields>;
  stddev: Maybe<Expenses_Stddev_Fields>;
  stddev_pop: Maybe<Expenses_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Expenses_Stddev_Samp_Fields>;
  sum: Maybe<Expenses_Sum_Fields>;
  var_pop: Maybe<Expenses_Var_Pop_Fields>;
  var_samp: Maybe<Expenses_Var_Samp_Fields>;
  variance: Maybe<Expenses_Variance_Fields>;
};


/** aggregate fields of "expenses" */
export type Expenses_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Expenses_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Expenses_Avg_Fields = {
  __typename?: 'expenses_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "expenses". All fields are combined with a logical 'AND'. */
export type Expenses_Bool_Exp = {
  _and?: InputMaybe<Array<Expenses_Bool_Exp>>;
  _not?: InputMaybe<Expenses_Bool_Exp>;
  _or?: InputMaybe<Array<Expenses_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "expenses" */
export enum Expenses_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExpensesPkey = 'expenses_pkey'
}

/** input type for incrementing numeric columns in table "expenses" */
export type Expenses_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "expenses" */
export type Expenses_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Expenses_Max_Fields = {
  __typename?: 'expenses_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Expenses_Min_Fields = {
  __typename?: 'expenses_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "expenses" */
export type Expenses_Mutation_Response = {
  __typename?: 'expenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Expenses>;
};

/** input type for inserting object relation for remote table "expenses" */
export type Expenses_Obj_Rel_Insert_Input = {
  data: Expenses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};

/** on_conflict condition type for table "expenses" */
export type Expenses_On_Conflict = {
  constraint: Expenses_Constraint;
  update_columns?: Array<Expenses_Update_Column>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "expenses". */
export type Expenses_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: expenses */
export type Expenses_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "expenses" */
export enum Expenses_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "expenses" */
export type Expenses_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Expenses_Stddev_Fields = {
  __typename?: 'expenses_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Expenses_Stddev_Pop_Fields = {
  __typename?: 'expenses_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Expenses_Stddev_Samp_Fields = {
  __typename?: 'expenses_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "expenses" */
export type Expenses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Expenses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Expenses_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Expenses_Sum_Fields = {
  __typename?: 'expenses_sum_fields';
  id: Maybe<Scalars['bigint']>;
};

/** update columns of table "expenses" */
export enum Expenses_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Expenses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Expenses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Expenses_Set_Input>;
  where: Expenses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Expenses_Var_Pop_Fields = {
  __typename?: 'expenses_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Expenses_Var_Samp_Fields = {
  __typename?: 'expenses_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Expenses_Variance_Fields = {
  __typename?: 'expenses_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "labels" */
export type Labels = {
  __typename?: 'labels';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "labels" */
export type LabelsRecurring_LabelsArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


/** columns and relationships of "labels" */
export type LabelsRecurring_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


/** columns and relationships of "labels" */
export type LabelsTransaction_LabelsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


/** columns and relationships of "labels" */
export type LabelsTransaction_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** aggregated selection of "labels" */
export type Labels_Aggregate = {
  __typename?: 'labels_aggregate';
  aggregate: Maybe<Labels_Aggregate_Fields>;
  nodes: Array<Labels>;
};

/** aggregate fields of "labels" */
export type Labels_Aggregate_Fields = {
  __typename?: 'labels_aggregate_fields';
  avg: Maybe<Labels_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Labels_Max_Fields>;
  min: Maybe<Labels_Min_Fields>;
  stddev: Maybe<Labels_Stddev_Fields>;
  stddev_pop: Maybe<Labels_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Labels_Stddev_Samp_Fields>;
  sum: Maybe<Labels_Sum_Fields>;
  var_pop: Maybe<Labels_Var_Pop_Fields>;
  var_samp: Maybe<Labels_Var_Samp_Fields>;
  variance: Maybe<Labels_Variance_Fields>;
};


/** aggregate fields of "labels" */
export type Labels_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Labels_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Labels_Avg_Fields = {
  __typename?: 'labels_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Labels_Bool_Exp>>;
  _not?: InputMaybe<Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Labels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recurring_labels?: InputMaybe<Recurring_Labels_Bool_Exp>;
  transaction_labels?: InputMaybe<Transaction_Labels_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "labels" */
export enum Labels_Constraint {
  /** unique or primary key constraint on columns "id" */
  LabelsPkey = 'labels_pkey'
}

/** input type for incrementing numeric columns in table "labels" */
export type Labels_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "labels" */
export type Labels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  recurring_labels?: InputMaybe<Recurring_Labels_Arr_Rel_Insert_Input>;
  transaction_labels?: InputMaybe<Transaction_Labels_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Labels_Max_Fields = {
  __typename?: 'labels_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Labels_Min_Fields = {
  __typename?: 'labels_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "labels" */
export type Labels_Mutation_Response = {
  __typename?: 'labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Labels>;
};

/** input type for inserting object relation for remote table "labels" */
export type Labels_Obj_Rel_Insert_Input = {
  data: Labels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** on_conflict condition type for table "labels" */
export type Labels_On_Conflict = {
  constraint: Labels_Constraint;
  update_columns?: Array<Labels_Update_Column>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "labels". */
export type Labels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  recurring_labels_aggregate?: InputMaybe<Recurring_Labels_Aggregate_Order_By>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labels */
export type Labels_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "labels" */
export enum Labels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "labels" */
export type Labels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Labels_Stddev_Fields = {
  __typename?: 'labels_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Labels_Stddev_Pop_Fields = {
  __typename?: 'labels_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Labels_Stddev_Samp_Fields = {
  __typename?: 'labels_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "labels" */
export type Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Labels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Labels_Sum_Fields = {
  __typename?: 'labels_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "labels" */
export enum Labels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Labels_Var_Pop_Fields = {
  __typename?: 'labels_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Labels_Var_Samp_Fields = {
  __typename?: 'labels_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Labels_Variance_Fields = {
  __typename?: 'labels_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "liabilities" */
export type Liabilities = {
  __typename?: 'liabilities';
  /** An object relationship */
  account_info: Account_Info;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "liabilities" */
export type Liabilities_Aggregate = {
  __typename?: 'liabilities_aggregate';
  aggregate: Maybe<Liabilities_Aggregate_Fields>;
  nodes: Array<Liabilities>;
};

/** aggregate fields of "liabilities" */
export type Liabilities_Aggregate_Fields = {
  __typename?: 'liabilities_aggregate_fields';
  avg: Maybe<Liabilities_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Liabilities_Max_Fields>;
  min: Maybe<Liabilities_Min_Fields>;
  stddev: Maybe<Liabilities_Stddev_Fields>;
  stddev_pop: Maybe<Liabilities_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Liabilities_Stddev_Samp_Fields>;
  sum: Maybe<Liabilities_Sum_Fields>;
  var_pop: Maybe<Liabilities_Var_Pop_Fields>;
  var_samp: Maybe<Liabilities_Var_Samp_Fields>;
  variance: Maybe<Liabilities_Variance_Fields>;
};


/** aggregate fields of "liabilities" */
export type Liabilities_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Liabilities_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Liabilities_Avg_Fields = {
  __typename?: 'liabilities_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "liabilities". All fields are combined with a logical 'AND'. */
export type Liabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Liabilities_Bool_Exp>>;
  _not?: InputMaybe<Liabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Liabilities_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "liabilities" */
export enum Liabilities_Constraint {
  /** unique or primary key constraint on columns "id" */
  LiabiulitiesPkey = 'liabiulities_pkey'
}

/** input type for incrementing numeric columns in table "liabilities" */
export type Liabilities_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "liabilities" */
export type Liabilities_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Liabilities_Max_Fields = {
  __typename?: 'liabilities_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Liabilities_Min_Fields = {
  __typename?: 'liabilities_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "liabilities" */
export type Liabilities_Mutation_Response = {
  __typename?: 'liabilities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Liabilities>;
};

/** input type for inserting object relation for remote table "liabilities" */
export type Liabilities_Obj_Rel_Insert_Input = {
  data: Liabilities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Liabilities_On_Conflict>;
};

/** on_conflict condition type for table "liabilities" */
export type Liabilities_On_Conflict = {
  constraint: Liabilities_Constraint;
  update_columns?: Array<Liabilities_Update_Column>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

/** Ordering options when selecting data from "liabilities". */
export type Liabilities_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: liabilities */
export type Liabilities_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "liabilities" */
export enum Liabilities_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "liabilities" */
export type Liabilities_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Liabilities_Stddev_Fields = {
  __typename?: 'liabilities_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Liabilities_Stddev_Pop_Fields = {
  __typename?: 'liabilities_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Liabilities_Stddev_Samp_Fields = {
  __typename?: 'liabilities_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "liabilities" */
export type Liabilities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Liabilities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Liabilities_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Liabilities_Sum_Fields = {
  __typename?: 'liabilities_sum_fields';
  id: Maybe<Scalars['bigint']>;
};

/** update columns of table "liabilities" */
export enum Liabilities_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Liabilities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Liabilities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Liabilities_Set_Input>;
  where: Liabilities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Liabilities_Var_Pop_Fields = {
  __typename?: 'liabilities_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Liabilities_Var_Samp_Fields = {
  __typename?: 'liabilities_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Liabilities_Variance_Fields = {
  __typename?: 'liabilities_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account_info" */
  delete_account_info: Maybe<Account_Info_Mutation_Response>;
  /** delete single row from the table: "account_info" */
  delete_account_info_by_pk: Maybe<Account_Info>;
  /** delete data from the table: "assets" */
  delete_assets: Maybe<Assets_Mutation_Response>;
  /** delete single row from the table: "assets" */
  delete_assets_by_pk: Maybe<Assets>;
  /** delete data from the table: "categories" */
  delete_categories: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk: Maybe<Categories>;
  /** delete data from the table: "expenses" */
  delete_expenses: Maybe<Expenses_Mutation_Response>;
  /** delete single row from the table: "expenses" */
  delete_expenses_by_pk: Maybe<Expenses>;
  /** delete data from the table: "labels" */
  delete_labels: Maybe<Labels_Mutation_Response>;
  /** delete single row from the table: "labels" */
  delete_labels_by_pk: Maybe<Labels>;
  /** delete data from the table: "liabilities" */
  delete_liabilities: Maybe<Liabilities_Mutation_Response>;
  /** delete single row from the table: "liabilities" */
  delete_liabilities_by_pk: Maybe<Liabilities>;
  /** delete data from the table: "notifications" */
  delete_notifications: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk: Maybe<Notifications>;
  /** delete data from the table: "recurring" */
  delete_recurring: Maybe<Recurring_Mutation_Response>;
  /** delete single row from the table: "recurring" */
  delete_recurring_by_pk: Maybe<Recurring>;
  /** delete data from the table: "recurring_labels" */
  delete_recurring_labels: Maybe<Recurring_Labels_Mutation_Response>;
  /** delete single row from the table: "recurring_labels" */
  delete_recurring_labels_by_pk: Maybe<Recurring_Labels>;
  /** delete data from the table: "revenues" */
  delete_revenues: Maybe<Revenues_Mutation_Response>;
  /** delete single row from the table: "revenues" */
  delete_revenues_by_pk: Maybe<Revenues>;
  /** delete data from the table: "transaction_accounts" */
  delete_transaction_accounts: Maybe<Transaction_Accounts_Mutation_Response>;
  /** delete single row from the table: "transaction_accounts" */
  delete_transaction_accounts_by_pk: Maybe<Transaction_Accounts>;
  /** delete data from the table: "transaction_attachments" */
  delete_transaction_attachments: Maybe<Transaction_Attachments_Mutation_Response>;
  /** delete single row from the table: "transaction_attachments" */
  delete_transaction_attachments_by_pk: Maybe<Transaction_Attachments>;
  /** delete data from the table: "transaction_labels" */
  delete_transaction_labels: Maybe<Transaction_Labels_Mutation_Response>;
  /** delete single row from the table: "transaction_labels" */
  delete_transaction_labels_by_pk: Maybe<Transaction_Labels>;
  /** delete data from the table: "transactions" */
  delete_transactions: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk: Maybe<Transactions>;
  /** delete data from the table: "user_settings" */
  delete_user_settings: Maybe<User_Settings_Mutation_Response>;
  /** delete single row from the table: "user_settings" */
  delete_user_settings_by_pk: Maybe<User_Settings>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "account_info" */
  insert_account_info: Maybe<Account_Info_Mutation_Response>;
  /** insert a single row into the table: "account_info" */
  insert_account_info_one: Maybe<Account_Info>;
  /** insert data into the table: "assets" */
  insert_assets: Maybe<Assets_Mutation_Response>;
  /** insert a single row into the table: "assets" */
  insert_assets_one: Maybe<Assets>;
  /** insert data into the table: "categories" */
  insert_categories: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one: Maybe<Categories>;
  /** insert data into the table: "expenses" */
  insert_expenses: Maybe<Expenses_Mutation_Response>;
  /** insert a single row into the table: "expenses" */
  insert_expenses_one: Maybe<Expenses>;
  /** insert data into the table: "labels" */
  insert_labels: Maybe<Labels_Mutation_Response>;
  /** insert a single row into the table: "labels" */
  insert_labels_one: Maybe<Labels>;
  /** insert data into the table: "liabilities" */
  insert_liabilities: Maybe<Liabilities_Mutation_Response>;
  /** insert a single row into the table: "liabilities" */
  insert_liabilities_one: Maybe<Liabilities>;
  /** insert data into the table: "notifications" */
  insert_notifications: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one: Maybe<Notifications>;
  /** insert data into the table: "recurring" */
  insert_recurring: Maybe<Recurring_Mutation_Response>;
  /** insert data into the table: "recurring_labels" */
  insert_recurring_labels: Maybe<Recurring_Labels_Mutation_Response>;
  /** insert a single row into the table: "recurring_labels" */
  insert_recurring_labels_one: Maybe<Recurring_Labels>;
  /** insert a single row into the table: "recurring" */
  insert_recurring_one: Maybe<Recurring>;
  /** insert data into the table: "revenues" */
  insert_revenues: Maybe<Revenues_Mutation_Response>;
  /** insert a single row into the table: "revenues" */
  insert_revenues_one: Maybe<Revenues>;
  /** insert data into the table: "transaction_accounts" */
  insert_transaction_accounts: Maybe<Transaction_Accounts_Mutation_Response>;
  /** insert a single row into the table: "transaction_accounts" */
  insert_transaction_accounts_one: Maybe<Transaction_Accounts>;
  /** insert data into the table: "transaction_attachments" */
  insert_transaction_attachments: Maybe<Transaction_Attachments_Mutation_Response>;
  /** insert a single row into the table: "transaction_attachments" */
  insert_transaction_attachments_one: Maybe<Transaction_Attachments>;
  /** insert data into the table: "transaction_labels" */
  insert_transaction_labels: Maybe<Transaction_Labels_Mutation_Response>;
  /** insert a single row into the table: "transaction_labels" */
  insert_transaction_labels_one: Maybe<Transaction_Labels>;
  /** insert data into the table: "transactions" */
  insert_transactions: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one: Maybe<Transactions>;
  /** insert data into the table: "user_settings" */
  insert_user_settings: Maybe<User_Settings_Mutation_Response>;
  /** insert a single row into the table: "user_settings" */
  insert_user_settings_one: Maybe<User_Settings>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "account_info" */
  update_account_info: Maybe<Account_Info_Mutation_Response>;
  /** update single row of the table: "account_info" */
  update_account_info_by_pk: Maybe<Account_Info>;
  /** update multiples rows of table: "account_info" */
  update_account_info_many: Maybe<Array<Maybe<Account_Info_Mutation_Response>>>;
  /** update data of the table: "assets" */
  update_assets: Maybe<Assets_Mutation_Response>;
  /** update single row of the table: "assets" */
  update_assets_by_pk: Maybe<Assets>;
  /** update multiples rows of table: "assets" */
  update_assets_many: Maybe<Array<Maybe<Assets_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "expenses" */
  update_expenses: Maybe<Expenses_Mutation_Response>;
  /** update single row of the table: "expenses" */
  update_expenses_by_pk: Maybe<Expenses>;
  /** update multiples rows of table: "expenses" */
  update_expenses_many: Maybe<Array<Maybe<Expenses_Mutation_Response>>>;
  /** update data of the table: "labels" */
  update_labels: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk: Maybe<Labels>;
  /** update multiples rows of table: "labels" */
  update_labels_many: Maybe<Array<Maybe<Labels_Mutation_Response>>>;
  /** update data of the table: "liabilities" */
  update_liabilities: Maybe<Liabilities_Mutation_Response>;
  /** update single row of the table: "liabilities" */
  update_liabilities_by_pk: Maybe<Liabilities>;
  /** update multiples rows of table: "liabilities" */
  update_liabilities_many: Maybe<Array<Maybe<Liabilities_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "recurring" */
  update_recurring: Maybe<Recurring_Mutation_Response>;
  /** update single row of the table: "recurring" */
  update_recurring_by_pk: Maybe<Recurring>;
  /** update data of the table: "recurring_labels" */
  update_recurring_labels: Maybe<Recurring_Labels_Mutation_Response>;
  /** update single row of the table: "recurring_labels" */
  update_recurring_labels_by_pk: Maybe<Recurring_Labels>;
  /** update multiples rows of table: "recurring_labels" */
  update_recurring_labels_many: Maybe<Array<Maybe<Recurring_Labels_Mutation_Response>>>;
  /** update multiples rows of table: "recurring" */
  update_recurring_many: Maybe<Array<Maybe<Recurring_Mutation_Response>>>;
  /** update data of the table: "revenues" */
  update_revenues: Maybe<Revenues_Mutation_Response>;
  /** update single row of the table: "revenues" */
  update_revenues_by_pk: Maybe<Revenues>;
  /** update multiples rows of table: "revenues" */
  update_revenues_many: Maybe<Array<Maybe<Revenues_Mutation_Response>>>;
  /** update data of the table: "transaction_accounts" */
  update_transaction_accounts: Maybe<Transaction_Accounts_Mutation_Response>;
  /** update single row of the table: "transaction_accounts" */
  update_transaction_accounts_by_pk: Maybe<Transaction_Accounts>;
  /** update multiples rows of table: "transaction_accounts" */
  update_transaction_accounts_many: Maybe<Array<Maybe<Transaction_Accounts_Mutation_Response>>>;
  /** update data of the table: "transaction_attachments" */
  update_transaction_attachments: Maybe<Transaction_Attachments_Mutation_Response>;
  /** update single row of the table: "transaction_attachments" */
  update_transaction_attachments_by_pk: Maybe<Transaction_Attachments>;
  /** update multiples rows of table: "transaction_attachments" */
  update_transaction_attachments_many: Maybe<Array<Maybe<Transaction_Attachments_Mutation_Response>>>;
  /** update data of the table: "transaction_labels" */
  update_transaction_labels: Maybe<Transaction_Labels_Mutation_Response>;
  /** update single row of the table: "transaction_labels" */
  update_transaction_labels_by_pk: Maybe<Transaction_Labels>;
  /** update multiples rows of table: "transaction_labels" */
  update_transaction_labels_many: Maybe<Array<Maybe<Transaction_Labels_Mutation_Response>>>;
  /** update data of the table: "transactions" */
  update_transactions: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many: Maybe<Array<Maybe<Transactions_Mutation_Response>>>;
  /** update data of the table: "user_settings" */
  update_user_settings: Maybe<User_Settings_Mutation_Response>;
  /** update single row of the table: "user_settings" */
  update_user_settings_by_pk: Maybe<User_Settings>;
  /** update multiples rows of table: "user_settings" */
  update_user_settings_many: Maybe<Array<Maybe<User_Settings_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Account_InfoArgs = {
  where: Account_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_Info_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_AssetsArgs = {
  where: Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assets_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ExpensesArgs = {
  where: Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Expenses_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_LabelsArgs = {
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Labels_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LiabilitiesArgs = {
  where: Liabilities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Liabilities_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RecurringArgs = {
  where: Recurring_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recurring_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Recurring_LabelsArgs = {
  where: Recurring_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recurring_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  recurring_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_RevenuesArgs = {
  where: Revenues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Revenues_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_AccountsArgs = {
  where: Transaction_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Accounts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_AttachmentsArgs = {
  where: Transaction_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_LabelsArgs = {
  where: Transaction_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_User_SettingsArgs = {
  where: User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Account_InfoArgs = {
  objects: Array<Account_Info_Insert_Input>;
  on_conflict: InputMaybe<Account_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_Info_OneArgs = {
  object: Account_Info_Insert_Input;
  on_conflict: InputMaybe<Account_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AssetsArgs = {
  objects: Array<Assets_Insert_Input>;
  on_conflict: InputMaybe<Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assets_OneArgs = {
  object: Assets_Insert_Input;
  on_conflict: InputMaybe<Assets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExpensesArgs = {
  objects: Array<Expenses_Insert_Input>;
  on_conflict: InputMaybe<Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Expenses_OneArgs = {
  object: Expenses_Insert_Input;
  on_conflict: InputMaybe<Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LabelsArgs = {
  objects: Array<Labels_Insert_Input>;
  on_conflict: InputMaybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Labels_OneArgs = {
  object: Labels_Insert_Input;
  on_conflict: InputMaybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LiabilitiesArgs = {
  objects: Array<Liabilities_Insert_Input>;
  on_conflict: InputMaybe<Liabilities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Liabilities_OneArgs = {
  object: Liabilities_Insert_Input;
  on_conflict: InputMaybe<Liabilities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecurringArgs = {
  objects: Array<Recurring_Insert_Input>;
  on_conflict: InputMaybe<Recurring_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recurring_LabelsArgs = {
  objects: Array<Recurring_Labels_Insert_Input>;
  on_conflict: InputMaybe<Recurring_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recurring_Labels_OneArgs = {
  object: Recurring_Labels_Insert_Input;
  on_conflict: InputMaybe<Recurring_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recurring_OneArgs = {
  object: Recurring_Insert_Input;
  on_conflict: InputMaybe<Recurring_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RevenuesArgs = {
  objects: Array<Revenues_Insert_Input>;
  on_conflict: InputMaybe<Revenues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Revenues_OneArgs = {
  object: Revenues_Insert_Input;
  on_conflict: InputMaybe<Revenues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_AccountsArgs = {
  objects: Array<Transaction_Accounts_Insert_Input>;
  on_conflict: InputMaybe<Transaction_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Accounts_OneArgs = {
  object: Transaction_Accounts_Insert_Input;
  on_conflict: InputMaybe<Transaction_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_AttachmentsArgs = {
  objects: Array<Transaction_Attachments_Insert_Input>;
  on_conflict: InputMaybe<Transaction_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Attachments_OneArgs = {
  object: Transaction_Attachments_Insert_Input;
  on_conflict: InputMaybe<Transaction_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_LabelsArgs = {
  objects: Array<Transaction_Labels_Insert_Input>;
  on_conflict: InputMaybe<Transaction_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Labels_OneArgs = {
  object: Transaction_Labels_Insert_Input;
  on_conflict: InputMaybe<Transaction_Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SettingsArgs = {
  objects: Array<User_Settings_Insert_Input>;
  on_conflict: InputMaybe<User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Settings_OneArgs = {
  object: User_Settings_Insert_Input;
  on_conflict: InputMaybe<User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Account_InfoArgs = {
  _inc: InputMaybe<Account_Info_Inc_Input>;
  _set: InputMaybe<Account_Info_Set_Input>;
  where: Account_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_Info_By_PkArgs = {
  _inc: InputMaybe<Account_Info_Inc_Input>;
  _set: InputMaybe<Account_Info_Set_Input>;
  pk_columns: Account_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_Info_ManyArgs = {
  updates: Array<Account_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AssetsArgs = {
  _inc: InputMaybe<Assets_Inc_Input>;
  _set: InputMaybe<Assets_Set_Input>;
  where: Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assets_By_PkArgs = {
  _inc: InputMaybe<Assets_Inc_Input>;
  _set: InputMaybe<Assets_Set_Input>;
  pk_columns: Assets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assets_ManyArgs = {
  updates: Array<Assets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc: InputMaybe<Categories_Inc_Input>;
  _set: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc: InputMaybe<Categories_Inc_Input>;
  _set: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExpensesArgs = {
  _inc: InputMaybe<Expenses_Inc_Input>;
  _set: InputMaybe<Expenses_Set_Input>;
  where: Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Expenses_By_PkArgs = {
  _inc: InputMaybe<Expenses_Inc_Input>;
  _set: InputMaybe<Expenses_Set_Input>;
  pk_columns: Expenses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Expenses_ManyArgs = {
  updates: Array<Expenses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LabelsArgs = {
  _inc: InputMaybe<Labels_Inc_Input>;
  _set: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_By_PkArgs = {
  _inc: InputMaybe<Labels_Inc_Input>;
  _set: InputMaybe<Labels_Set_Input>;
  pk_columns: Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_ManyArgs = {
  updates: Array<Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LiabilitiesArgs = {
  _inc: InputMaybe<Liabilities_Inc_Input>;
  _set: InputMaybe<Liabilities_Set_Input>;
  where: Liabilities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Liabilities_By_PkArgs = {
  _inc: InputMaybe<Liabilities_Inc_Input>;
  _set: InputMaybe<Liabilities_Set_Input>;
  pk_columns: Liabilities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Liabilities_ManyArgs = {
  updates: Array<Liabilities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _inc: InputMaybe<Notifications_Inc_Input>;
  _set: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _inc: InputMaybe<Notifications_Inc_Input>;
  _set: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RecurringArgs = {
  _inc: InputMaybe<Recurring_Inc_Input>;
  _set: InputMaybe<Recurring_Set_Input>;
  where: Recurring_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recurring_By_PkArgs = {
  _inc: InputMaybe<Recurring_Inc_Input>;
  _set: InputMaybe<Recurring_Set_Input>;
  pk_columns: Recurring_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recurring_LabelsArgs = {
  _inc: InputMaybe<Recurring_Labels_Inc_Input>;
  _set: InputMaybe<Recurring_Labels_Set_Input>;
  where: Recurring_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recurring_Labels_By_PkArgs = {
  _inc: InputMaybe<Recurring_Labels_Inc_Input>;
  _set: InputMaybe<Recurring_Labels_Set_Input>;
  pk_columns: Recurring_Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recurring_Labels_ManyArgs = {
  updates: Array<Recurring_Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Recurring_ManyArgs = {
  updates: Array<Recurring_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RevenuesArgs = {
  _inc: InputMaybe<Revenues_Inc_Input>;
  _set: InputMaybe<Revenues_Set_Input>;
  where: Revenues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Revenues_By_PkArgs = {
  _inc: InputMaybe<Revenues_Inc_Input>;
  _set: InputMaybe<Revenues_Set_Input>;
  pk_columns: Revenues_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Revenues_ManyArgs = {
  updates: Array<Revenues_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_AccountsArgs = {
  _inc: InputMaybe<Transaction_Accounts_Inc_Input>;
  _set: InputMaybe<Transaction_Accounts_Set_Input>;
  where: Transaction_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Accounts_By_PkArgs = {
  _inc: InputMaybe<Transaction_Accounts_Inc_Input>;
  _set: InputMaybe<Transaction_Accounts_Set_Input>;
  pk_columns: Transaction_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Accounts_ManyArgs = {
  updates: Array<Transaction_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_AttachmentsArgs = {
  _inc: InputMaybe<Transaction_Attachments_Inc_Input>;
  _set: InputMaybe<Transaction_Attachments_Set_Input>;
  where: Transaction_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Attachments_By_PkArgs = {
  _inc: InputMaybe<Transaction_Attachments_Inc_Input>;
  _set: InputMaybe<Transaction_Attachments_Set_Input>;
  pk_columns: Transaction_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Attachments_ManyArgs = {
  updates: Array<Transaction_Attachments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_LabelsArgs = {
  _inc: InputMaybe<Transaction_Labels_Inc_Input>;
  _set: InputMaybe<Transaction_Labels_Set_Input>;
  where: Transaction_Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Labels_By_PkArgs = {
  _inc: InputMaybe<Transaction_Labels_Inc_Input>;
  _set: InputMaybe<Transaction_Labels_Set_Input>;
  pk_columns: Transaction_Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Labels_ManyArgs = {
  updates: Array<Transaction_Labels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc: InputMaybe<Transactions_Inc_Input>;
  _set: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc: InputMaybe<Transactions_Inc_Input>;
  _set: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SettingsArgs = {
  _set: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Settings_By_PkArgs = {
  _set: InputMaybe<User_Settings_Set_Input>;
  pk_columns: User_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Settings_ManyArgs = {
  updates: Array<User_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  created_at: Scalars['timestamptz'];
  description: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  read_status: Scalars['Boolean'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  avg: Maybe<Notifications_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Notifications_Max_Fields>;
  min: Maybe<Notifications_Min_Fields>;
  stddev: Maybe<Notifications_Stddev_Fields>;
  stddev_pop: Maybe<Notifications_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Notifications_Stddev_Samp_Fields>;
  sum: Maybe<Notifications_Sum_Fields>;
  var_pop: Maybe<Notifications_Var_Pop_Fields>;
  var_samp: Maybe<Notifications_Var_Samp_Fields>;
  variance: Maybe<Notifications_Variance_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Notifications_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Notifications_Avg_Fields = {
  __typename?: 'notifications_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  read_status?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for incrementing numeric columns in table "notifications" */
export type Notifications_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  read_status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReadStatus = 'read_status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  read_status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Notifications_Stddev_Fields = {
  __typename?: 'notifications_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Notifications_Stddev_Pop_Fields = {
  __typename?: 'notifications_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Notifications_Stddev_Samp_Fields = {
  __typename?: 'notifications_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "notifications" */
export type Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notifications_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  read_status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Notifications_Sum_Fields = {
  __typename?: 'notifications_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReadStatus = 'read_status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Notifications_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Notifications_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Notifications_Var_Pop_Fields = {
  __typename?: 'notifications_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Notifications_Var_Samp_Fields = {
  __typename?: 'notifications_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Notifications_Variance_Fields = {
  __typename?: 'notifications_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account_info" */
  account_info: Array<Account_Info>;
  /** fetch aggregated fields from the table: "account_info" */
  account_info_aggregate: Account_Info_Aggregate;
  /** fetch data from the table: "account_info" using primary key columns */
  account_info_by_pk: Maybe<Account_Info>;
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch aggregated fields from the table: "assets" */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk: Maybe<Assets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk: Maybe<Categories>;
  /** fetch data from the table: "expenses" */
  expenses: Array<Expenses>;
  /** fetch aggregated fields from the table: "expenses" */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk: Maybe<Expenses>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk: Maybe<Labels>;
  /** fetch data from the table: "liabilities" */
  liabilities: Array<Liabilities>;
  /** fetch aggregated fields from the table: "liabilities" */
  liabilities_aggregate: Liabilities_Aggregate;
  /** fetch data from the table: "liabilities" using primary key columns */
  liabilities_by_pk: Maybe<Liabilities>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk: Maybe<Notifications>;
  /** fetch data from the table: "recurring" */
  recurring: Array<Recurring>;
  /** fetch aggregated fields from the table: "recurring" */
  recurring_aggregate: Recurring_Aggregate;
  /** fetch data from the table: "recurring" using primary key columns */
  recurring_by_pk: Maybe<Recurring>;
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  /** fetch data from the table: "recurring_labels" using primary key columns */
  recurring_labels_by_pk: Maybe<Recurring_Labels>;
  /** fetch data from the table: "revenues" */
  revenues: Array<Revenues>;
  /** fetch aggregated fields from the table: "revenues" */
  revenues_aggregate: Revenues_Aggregate;
  /** fetch data from the table: "revenues" using primary key columns */
  revenues_by_pk: Maybe<Revenues>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** fetch data from the table: "transaction_accounts" using primary key columns */
  transaction_accounts_by_pk: Maybe<Transaction_Accounts>;
  /** fetch data from the table: "transaction_attachments" */
  transaction_attachments: Array<Transaction_Attachments>;
  /** fetch aggregated fields from the table: "transaction_attachments" */
  transaction_attachments_aggregate: Transaction_Attachments_Aggregate;
  /** fetch data from the table: "transaction_attachments" using primary key columns */
  transaction_attachments_by_pk: Maybe<Transaction_Attachments>;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  /** fetch data from the table: "transaction_labels" using primary key columns */
  transaction_labels_by_pk: Maybe<Transaction_Labels>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: Maybe<Transactions>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk: Maybe<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Query_RootAccount_InfoArgs = {
  distinct_on: InputMaybe<Array<Account_Info_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Account_Info_Order_By>>;
  where: InputMaybe<Account_Info_Bool_Exp>;
};


export type Query_RootAccount_Info_AggregateArgs = {
  distinct_on: InputMaybe<Array<Account_Info_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Account_Info_Order_By>>;
  where: InputMaybe<Account_Info_Bool_Exp>;
};


export type Query_RootAccount_Info_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootAssetsArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Query_RootAssets_AggregateArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Query_RootAssets_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCategoriesArgs = {
  distinct_on: InputMaybe<Array<Categories_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Categories_Order_By>>;
  where: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Categories_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Categories_Order_By>>;
  where: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootExpensesArgs = {
  distinct_on: InputMaybe<Array<Expenses_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Expenses_Order_By>>;
  where: InputMaybe<Expenses_Bool_Exp>;
};


export type Query_RootExpenses_AggregateArgs = {
  distinct_on: InputMaybe<Array<Expenses_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Expenses_Order_By>>;
  where: InputMaybe<Expenses_Bool_Exp>;
};


export type Query_RootExpenses_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootLabelsArgs = {
  distinct_on: InputMaybe<Array<Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Labels_Order_By>>;
  where: InputMaybe<Labels_Bool_Exp>;
};


export type Query_RootLabels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Labels_Order_By>>;
  where: InputMaybe<Labels_Bool_Exp>;
};


export type Query_RootLabels_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLiabilitiesArgs = {
  distinct_on: InputMaybe<Array<Liabilities_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Liabilities_Order_By>>;
  where: InputMaybe<Liabilities_Bool_Exp>;
};


export type Query_RootLiabilities_AggregateArgs = {
  distinct_on: InputMaybe<Array<Liabilities_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Liabilities_Order_By>>;
  where: InputMaybe<Liabilities_Bool_Exp>;
};


export type Query_RootLiabilities_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootNotificationsArgs = {
  distinct_on: InputMaybe<Array<Notifications_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Notifications_Order_By>>;
  where: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on: InputMaybe<Array<Notifications_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Notifications_Order_By>>;
  where: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRecurringArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


export type Query_RootRecurring_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


export type Query_RootRecurring_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootRecurring_LabelsArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


export type Query_RootRecurring_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


export type Query_RootRecurring_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  recurring_id: Scalars['bigint'];
};


export type Query_RootRevenuesArgs = {
  distinct_on: InputMaybe<Array<Revenues_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Revenues_Order_By>>;
  where: InputMaybe<Revenues_Bool_Exp>;
};


export type Query_RootRevenues_AggregateArgs = {
  distinct_on: InputMaybe<Array<Revenues_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Revenues_Order_By>>;
  where: InputMaybe<Revenues_Bool_Exp>;
};


export type Query_RootRevenues_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootTransaction_AccountsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


export type Query_RootTransaction_Accounts_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


export type Query_RootTransaction_Accounts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootTransaction_AttachmentsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where: InputMaybe<Transaction_Attachments_Bool_Exp>;
};


export type Query_RootTransaction_Attachments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where: InputMaybe<Transaction_Attachments_Bool_Exp>;
};


export type Query_RootTransaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};


export type Query_RootTransaction_LabelsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


export type Query_RootTransaction_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


export type Query_RootTransaction_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};


export type Query_RootTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootUser_SettingsArgs = {
  distinct_on: InputMaybe<Array<User_Settings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Settings_Order_By>>;
  where: InputMaybe<User_Settings_Bool_Exp>;
};


export type Query_RootUser_Settings_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Settings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Settings_Order_By>>;
  where: InputMaybe<User_Settings_Bool_Exp>;
};


export type Query_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "recurring" */
export type Recurring = {
  __typename?: 'recurring';
  /** An object relationship */
  accountInfoByAccountTo: Account_Info;
  account_from: Scalars['bigint'];
  /** An object relationship */
  account_info: Account_Info;
  account_to: Scalars['bigint'];
  active: Scalars['Boolean'];
  amount: Scalars['float8'];
  /** An object relationship */
  category: Maybe<Categories>;
  category_id: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamptz'];
  cycle_type: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  duration_type: Scalars['Int'];
  id: Scalars['bigint'];
  no_of_times: Maybe<Scalars['Int']>;
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  start_on: Scalars['date'];
  title: Scalars['String'];
  transaction_type: Scalars['Int'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  until_date: Maybe<Scalars['date']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "recurring" */
export type RecurringRecurring_LabelsArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


/** columns and relationships of "recurring" */
export type RecurringRecurring_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


/** columns and relationships of "recurring" */
export type RecurringTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "recurring" */
export type RecurringTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "recurring" */
export type Recurring_Aggregate = {
  __typename?: 'recurring_aggregate';
  aggregate: Maybe<Recurring_Aggregate_Fields>;
  nodes: Array<Recurring>;
};

/** aggregate fields of "recurring" */
export type Recurring_Aggregate_Fields = {
  __typename?: 'recurring_aggregate_fields';
  avg: Maybe<Recurring_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Recurring_Max_Fields>;
  min: Maybe<Recurring_Min_Fields>;
  stddev: Maybe<Recurring_Stddev_Fields>;
  stddev_pop: Maybe<Recurring_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Recurring_Stddev_Samp_Fields>;
  sum: Maybe<Recurring_Sum_Fields>;
  var_pop: Maybe<Recurring_Var_Pop_Fields>;
  var_samp: Maybe<Recurring_Var_Samp_Fields>;
  variance: Maybe<Recurring_Variance_Fields>;
};


/** aggregate fields of "recurring" */
export type Recurring_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Recurring_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recurring" */
export type Recurring_Aggregate_Order_By = {
  avg?: InputMaybe<Recurring_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recurring_Max_Order_By>;
  min?: InputMaybe<Recurring_Min_Order_By>;
  stddev?: InputMaybe<Recurring_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recurring_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recurring_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recurring_Sum_Order_By>;
  var_pop?: InputMaybe<Recurring_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recurring_Var_Samp_Order_By>;
  variance?: InputMaybe<Recurring_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recurring" */
export type Recurring_Arr_Rel_Insert_Input = {
  data: Array<Recurring_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recurring_On_Conflict>;
};

/** aggregate avg on columns */
export type Recurring_Avg_Fields = {
  __typename?: 'recurring_avg_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "recurring" */
export type Recurring_Avg_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recurring". All fields are combined with a logical 'AND'. */
export type Recurring_Bool_Exp = {
  _and?: InputMaybe<Array<Recurring_Bool_Exp>>;
  _not?: InputMaybe<Recurring_Bool_Exp>;
  _or?: InputMaybe<Array<Recurring_Bool_Exp>>;
  accountInfoByAccountTo?: InputMaybe<Account_Info_Bool_Exp>;
  account_from?: InputMaybe<Bigint_Comparison_Exp>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_to?: InputMaybe<Bigint_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cycle_type?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration_type?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  no_of_times?: InputMaybe<Int_Comparison_Exp>;
  recurring_labels?: InputMaybe<Recurring_Labels_Bool_Exp>;
  start_on?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<Int_Comparison_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  until_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "recurring" */
export enum Recurring_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecurringPkey = 'recurring_pkey'
}

/** input type for incrementing numeric columns in table "recurring" */
export type Recurring_Inc_Input = {
  account_from?: InputMaybe<Scalars['bigint']>;
  account_to?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  cycle_type?: InputMaybe<Scalars['Int']>;
  duration_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  no_of_times?: InputMaybe<Scalars['Int']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "recurring" */
export type Recurring_Insert_Input = {
  accountInfoByAccountTo?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_from?: InputMaybe<Scalars['bigint']>;
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_to?: InputMaybe<Scalars['bigint']>;
  active?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['float8']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cycle_type?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  duration_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  no_of_times?: InputMaybe<Scalars['Int']>;
  recurring_labels?: InputMaybe<Recurring_Labels_Arr_Rel_Insert_Input>;
  start_on?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  until_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "recurring_labels" */
export type Recurring_Labels = {
  __typename?: 'recurring_labels';
  /** An object relationship */
  label: Labels;
  label_id: Scalars['Int'];
  /** An object relationship */
  recurring: Recurring;
  recurring_id: Scalars['bigint'];
};

/** aggregated selection of "recurring_labels" */
export type Recurring_Labels_Aggregate = {
  __typename?: 'recurring_labels_aggregate';
  aggregate: Maybe<Recurring_Labels_Aggregate_Fields>;
  nodes: Array<Recurring_Labels>;
};

/** aggregate fields of "recurring_labels" */
export type Recurring_Labels_Aggregate_Fields = {
  __typename?: 'recurring_labels_aggregate_fields';
  avg: Maybe<Recurring_Labels_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Recurring_Labels_Max_Fields>;
  min: Maybe<Recurring_Labels_Min_Fields>;
  stddev: Maybe<Recurring_Labels_Stddev_Fields>;
  stddev_pop: Maybe<Recurring_Labels_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Recurring_Labels_Stddev_Samp_Fields>;
  sum: Maybe<Recurring_Labels_Sum_Fields>;
  var_pop: Maybe<Recurring_Labels_Var_Pop_Fields>;
  var_samp: Maybe<Recurring_Labels_Var_Samp_Fields>;
  variance: Maybe<Recurring_Labels_Variance_Fields>;
};


/** aggregate fields of "recurring_labels" */
export type Recurring_Labels_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recurring_labels" */
export type Recurring_Labels_Aggregate_Order_By = {
  avg?: InputMaybe<Recurring_Labels_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recurring_Labels_Max_Order_By>;
  min?: InputMaybe<Recurring_Labels_Min_Order_By>;
  stddev?: InputMaybe<Recurring_Labels_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recurring_Labels_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recurring_Labels_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recurring_Labels_Sum_Order_By>;
  var_pop?: InputMaybe<Recurring_Labels_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recurring_Labels_Var_Samp_Order_By>;
  variance?: InputMaybe<Recurring_Labels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recurring_labels" */
export type Recurring_Labels_Arr_Rel_Insert_Input = {
  data: Array<Recurring_Labels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recurring_Labels_On_Conflict>;
};

/** aggregate avg on columns */
export type Recurring_Labels_Avg_Fields = {
  __typename?: 'recurring_labels_avg_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "recurring_labels" */
export type Recurring_Labels_Avg_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recurring_labels". All fields are combined with a logical 'AND'. */
export type Recurring_Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Recurring_Labels_Bool_Exp>>;
  _not?: InputMaybe<Recurring_Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Recurring_Labels_Bool_Exp>>;
  label?: InputMaybe<Labels_Bool_Exp>;
  label_id?: InputMaybe<Int_Comparison_Exp>;
  recurring?: InputMaybe<Recurring_Bool_Exp>;
  recurring_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "recurring_labels" */
export enum Recurring_Labels_Constraint {
  /** unique or primary key constraint on columns "label_id", "recurring_id" */
  RecurringLabelsPkey = 'recurring_labels_pkey'
}

/** input type for incrementing numeric columns in table "recurring_labels" */
export type Recurring_Labels_Inc_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "recurring_labels" */
export type Recurring_Labels_Insert_Input = {
  label?: InputMaybe<Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['Int']>;
  recurring?: InputMaybe<Recurring_Obj_Rel_Insert_Input>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Recurring_Labels_Max_Fields = {
  __typename?: 'recurring_labels_max_fields';
  label_id: Maybe<Scalars['Int']>;
  recurring_id: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "recurring_labels" */
export type Recurring_Labels_Max_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recurring_Labels_Min_Fields = {
  __typename?: 'recurring_labels_min_fields';
  label_id: Maybe<Scalars['Int']>;
  recurring_id: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "recurring_labels" */
export type Recurring_Labels_Min_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recurring_labels" */
export type Recurring_Labels_Mutation_Response = {
  __typename?: 'recurring_labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Recurring_Labels>;
};

/** on_conflict condition type for table "recurring_labels" */
export type Recurring_Labels_On_Conflict = {
  constraint: Recurring_Labels_Constraint;
  update_columns?: Array<Recurring_Labels_Update_Column>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "recurring_labels". */
export type Recurring_Labels_Order_By = {
  label?: InputMaybe<Labels_Order_By>;
  label_id?: InputMaybe<Order_By>;
  recurring?: InputMaybe<Recurring_Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recurring_labels */
export type Recurring_Labels_Pk_Columns_Input = {
  label_id: Scalars['Int'];
  recurring_id: Scalars['bigint'];
};

/** select columns of table "recurring_labels" */
export enum Recurring_Labels_Select_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  RecurringId = 'recurring_id'
}

/** input type for updating data in table "recurring_labels" */
export type Recurring_Labels_Set_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Recurring_Labels_Stddev_Fields = {
  __typename?: 'recurring_labels_stddev_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "recurring_labels" */
export type Recurring_Labels_Stddev_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recurring_Labels_Stddev_Pop_Fields = {
  __typename?: 'recurring_labels_stddev_pop_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "recurring_labels" */
export type Recurring_Labels_Stddev_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recurring_Labels_Stddev_Samp_Fields = {
  __typename?: 'recurring_labels_stddev_samp_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "recurring_labels" */
export type Recurring_Labels_Stddev_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recurring_labels" */
export type Recurring_Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recurring_Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recurring_Labels_Stream_Cursor_Value_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Recurring_Labels_Sum_Fields = {
  __typename?: 'recurring_labels_sum_fields';
  label_id: Maybe<Scalars['Int']>;
  recurring_id: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "recurring_labels" */
export type Recurring_Labels_Sum_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** update columns of table "recurring_labels" */
export enum Recurring_Labels_Update_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  RecurringId = 'recurring_id'
}

export type Recurring_Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recurring_Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recurring_Labels_Set_Input>;
  where: Recurring_Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recurring_Labels_Var_Pop_Fields = {
  __typename?: 'recurring_labels_var_pop_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "recurring_labels" */
export type Recurring_Labels_Var_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recurring_Labels_Var_Samp_Fields = {
  __typename?: 'recurring_labels_var_samp_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "recurring_labels" */
export type Recurring_Labels_Var_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recurring_Labels_Variance_Fields = {
  __typename?: 'recurring_labels_variance_fields';
  label_id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "recurring_labels" */
export type Recurring_Labels_Variance_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Recurring_Max_Fields = {
  __typename?: 'recurring_max_fields';
  account_from: Maybe<Scalars['bigint']>;
  account_to: Maybe<Scalars['bigint']>;
  amount: Maybe<Scalars['float8']>;
  category_id: Maybe<Scalars['bigint']>;
  created_at: Maybe<Scalars['timestamptz']>;
  cycle_type: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['String']>;
  duration_type: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  no_of_times: Maybe<Scalars['Int']>;
  start_on: Maybe<Scalars['date']>;
  title: Maybe<Scalars['String']>;
  transaction_type: Maybe<Scalars['Int']>;
  until_date: Maybe<Scalars['date']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "recurring" */
export type Recurring_Max_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  start_on?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  until_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recurring_Min_Fields = {
  __typename?: 'recurring_min_fields';
  account_from: Maybe<Scalars['bigint']>;
  account_to: Maybe<Scalars['bigint']>;
  amount: Maybe<Scalars['float8']>;
  category_id: Maybe<Scalars['bigint']>;
  created_at: Maybe<Scalars['timestamptz']>;
  cycle_type: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['String']>;
  duration_type: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  no_of_times: Maybe<Scalars['Int']>;
  start_on: Maybe<Scalars['date']>;
  title: Maybe<Scalars['String']>;
  transaction_type: Maybe<Scalars['Int']>;
  until_date: Maybe<Scalars['date']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "recurring" */
export type Recurring_Min_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  start_on?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  until_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recurring" */
export type Recurring_Mutation_Response = {
  __typename?: 'recurring_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Recurring>;
};

/** input type for inserting object relation for remote table "recurring" */
export type Recurring_Obj_Rel_Insert_Input = {
  data: Recurring_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Recurring_On_Conflict>;
};

/** on_conflict condition type for table "recurring" */
export type Recurring_On_Conflict = {
  constraint: Recurring_Constraint;
  update_columns?: Array<Recurring_Update_Column>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** Ordering options when selecting data from "recurring". */
export type Recurring_Order_By = {
  accountInfoByAccountTo?: InputMaybe<Account_Info_Order_By>;
  account_from?: InputMaybe<Order_By>;
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_to?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  recurring_labels_aggregate?: InputMaybe<Recurring_Labels_Aggregate_Order_By>;
  start_on?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  until_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recurring */
export type Recurring_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "recurring" */
export enum Recurring_Select_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleType = 'cycle_type',
  /** column name */
  Description = 'description',
  /** column name */
  DurationType = 'duration_type',
  /** column name */
  Id = 'id',
  /** column name */
  NoOfTimes = 'no_of_times',
  /** column name */
  StartOn = 'start_on',
  /** column name */
  Title = 'title',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UntilDate = 'until_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "recurring" */
export type Recurring_Set_Input = {
  account_from?: InputMaybe<Scalars['bigint']>;
  account_to?: InputMaybe<Scalars['bigint']>;
  active?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cycle_type?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  duration_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  no_of_times?: InputMaybe<Scalars['Int']>;
  start_on?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
  until_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Recurring_Stddev_Fields = {
  __typename?: 'recurring_stddev_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "recurring" */
export type Recurring_Stddev_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recurring_Stddev_Pop_Fields = {
  __typename?: 'recurring_stddev_pop_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "recurring" */
export type Recurring_Stddev_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recurring_Stddev_Samp_Fields = {
  __typename?: 'recurring_stddev_samp_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "recurring" */
export type Recurring_Stddev_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recurring" */
export type Recurring_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recurring_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recurring_Stream_Cursor_Value_Input = {
  account_from?: InputMaybe<Scalars['bigint']>;
  account_to?: InputMaybe<Scalars['bigint']>;
  active?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cycle_type?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  duration_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  no_of_times?: InputMaybe<Scalars['Int']>;
  start_on?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
  until_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Recurring_Sum_Fields = {
  __typename?: 'recurring_sum_fields';
  account_from: Maybe<Scalars['bigint']>;
  account_to: Maybe<Scalars['bigint']>;
  amount: Maybe<Scalars['float8']>;
  category_id: Maybe<Scalars['bigint']>;
  cycle_type: Maybe<Scalars['Int']>;
  duration_type: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['bigint']>;
  no_of_times: Maybe<Scalars['Int']>;
  transaction_type: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "recurring" */
export type Recurring_Sum_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** update columns of table "recurring" */
export enum Recurring_Update_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleType = 'cycle_type',
  /** column name */
  Description = 'description',
  /** column name */
  DurationType = 'duration_type',
  /** column name */
  Id = 'id',
  /** column name */
  NoOfTimes = 'no_of_times',
  /** column name */
  StartOn = 'start_on',
  /** column name */
  Title = 'title',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UntilDate = 'until_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Recurring_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recurring_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recurring_Set_Input>;
  where: Recurring_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recurring_Var_Pop_Fields = {
  __typename?: 'recurring_var_pop_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "recurring" */
export type Recurring_Var_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recurring_Var_Samp_Fields = {
  __typename?: 'recurring_var_samp_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "recurring" */
export type Recurring_Var_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recurring_Variance_Fields = {
  __typename?: 'recurring_variance_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  cycle_type: Maybe<Scalars['Float']>;
  duration_type: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  no_of_times: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "recurring" */
export type Recurring_Variance_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** columns and relationships of "revenues" */
export type Revenues = {
  __typename?: 'revenues';
  /** An object relationship */
  account_info: Account_Info;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  default: Scalars['Boolean'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "revenues" */
export type Revenues_Aggregate = {
  __typename?: 'revenues_aggregate';
  aggregate: Maybe<Revenues_Aggregate_Fields>;
  nodes: Array<Revenues>;
};

/** aggregate fields of "revenues" */
export type Revenues_Aggregate_Fields = {
  __typename?: 'revenues_aggregate_fields';
  avg: Maybe<Revenues_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Revenues_Max_Fields>;
  min: Maybe<Revenues_Min_Fields>;
  stddev: Maybe<Revenues_Stddev_Fields>;
  stddev_pop: Maybe<Revenues_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Revenues_Stddev_Samp_Fields>;
  sum: Maybe<Revenues_Sum_Fields>;
  var_pop: Maybe<Revenues_Var_Pop_Fields>;
  var_samp: Maybe<Revenues_Var_Samp_Fields>;
  variance: Maybe<Revenues_Variance_Fields>;
};


/** aggregate fields of "revenues" */
export type Revenues_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Revenues_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Revenues_Avg_Fields = {
  __typename?: 'revenues_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "revenues". All fields are combined with a logical 'AND'. */
export type Revenues_Bool_Exp = {
  _and?: InputMaybe<Array<Revenues_Bool_Exp>>;
  _not?: InputMaybe<Revenues_Bool_Exp>;
  _or?: InputMaybe<Array<Revenues_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "revenues" */
export enum Revenues_Constraint {
  /** unique or primary key constraint on columns "id" */
  RevenuesPkey = 'revenues_pkey'
}

/** input type for incrementing numeric columns in table "revenues" */
export type Revenues_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "revenues" */
export type Revenues_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Revenues_Max_Fields = {
  __typename?: 'revenues_max_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Revenues_Min_Fields = {
  __typename?: 'revenues_min_fields';
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "revenues" */
export type Revenues_Mutation_Response = {
  __typename?: 'revenues_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Revenues>;
};

/** input type for inserting object relation for remote table "revenues" */
export type Revenues_Obj_Rel_Insert_Input = {
  data: Revenues_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Revenues_On_Conflict>;
};

/** on_conflict condition type for table "revenues" */
export type Revenues_On_Conflict = {
  constraint: Revenues_Constraint;
  update_columns?: Array<Revenues_Update_Column>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

/** Ordering options when selecting data from "revenues". */
export type Revenues_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: revenues */
export type Revenues_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "revenues" */
export enum Revenues_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "revenues" */
export type Revenues_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Revenues_Stddev_Fields = {
  __typename?: 'revenues_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Revenues_Stddev_Pop_Fields = {
  __typename?: 'revenues_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Revenues_Stddev_Samp_Fields = {
  __typename?: 'revenues_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "revenues" */
export type Revenues_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Revenues_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Revenues_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Revenues_Sum_Fields = {
  __typename?: 'revenues_sum_fields';
  id: Maybe<Scalars['bigint']>;
};

/** update columns of table "revenues" */
export enum Revenues_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Revenues_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Revenues_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Revenues_Set_Input>;
  where: Revenues_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Revenues_Var_Pop_Fields = {
  __typename?: 'revenues_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Revenues_Var_Samp_Fields = {
  __typename?: 'revenues_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Revenues_Variance_Fields = {
  __typename?: 'revenues_variance_fields';
  id: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account_info" */
  account_info: Array<Account_Info>;
  /** fetch aggregated fields from the table: "account_info" */
  account_info_aggregate: Account_Info_Aggregate;
  /** fetch data from the table: "account_info" using primary key columns */
  account_info_by_pk: Maybe<Account_Info>;
  /** fetch data from the table in a streaming manner : "account_info" */
  account_info_stream: Array<Account_Info>;
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch aggregated fields from the table: "assets" */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk: Maybe<Assets>;
  /** fetch data from the table in a streaming manner : "assets" */
  assets_stream: Array<Assets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk: Maybe<Categories>;
  /** fetch data from the table in a streaming manner : "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "expenses" */
  expenses: Array<Expenses>;
  /** fetch aggregated fields from the table: "expenses" */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk: Maybe<Expenses>;
  /** fetch data from the table in a streaming manner : "expenses" */
  expenses_stream: Array<Expenses>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk: Maybe<Labels>;
  /** fetch data from the table in a streaming manner : "labels" */
  labels_stream: Array<Labels>;
  /** fetch data from the table: "liabilities" */
  liabilities: Array<Liabilities>;
  /** fetch aggregated fields from the table: "liabilities" */
  liabilities_aggregate: Liabilities_Aggregate;
  /** fetch data from the table: "liabilities" using primary key columns */
  liabilities_by_pk: Maybe<Liabilities>;
  /** fetch data from the table in a streaming manner : "liabilities" */
  liabilities_stream: Array<Liabilities>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner : "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "recurring" */
  recurring: Array<Recurring>;
  /** fetch aggregated fields from the table: "recurring" */
  recurring_aggregate: Recurring_Aggregate;
  /** fetch data from the table: "recurring" using primary key columns */
  recurring_by_pk: Maybe<Recurring>;
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  /** fetch data from the table: "recurring_labels" using primary key columns */
  recurring_labels_by_pk: Maybe<Recurring_Labels>;
  /** fetch data from the table in a streaming manner : "recurring_labels" */
  recurring_labels_stream: Array<Recurring_Labels>;
  /** fetch data from the table in a streaming manner : "recurring" */
  recurring_stream: Array<Recurring>;
  /** fetch data from the table: "revenues" */
  revenues: Array<Revenues>;
  /** fetch aggregated fields from the table: "revenues" */
  revenues_aggregate: Revenues_Aggregate;
  /** fetch data from the table: "revenues" using primary key columns */
  revenues_by_pk: Maybe<Revenues>;
  /** fetch data from the table in a streaming manner : "revenues" */
  revenues_stream: Array<Revenues>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** fetch data from the table: "transaction_accounts" using primary key columns */
  transaction_accounts_by_pk: Maybe<Transaction_Accounts>;
  /** fetch data from the table in a streaming manner : "transaction_accounts" */
  transaction_accounts_stream: Array<Transaction_Accounts>;
  /** fetch data from the table: "transaction_attachments" */
  transaction_attachments: Array<Transaction_Attachments>;
  /** fetch aggregated fields from the table: "transaction_attachments" */
  transaction_attachments_aggregate: Transaction_Attachments_Aggregate;
  /** fetch data from the table: "transaction_attachments" using primary key columns */
  transaction_attachments_by_pk: Maybe<Transaction_Attachments>;
  /** fetch data from the table in a streaming manner : "transaction_attachments" */
  transaction_attachments_stream: Array<Transaction_Attachments>;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  /** fetch data from the table: "transaction_labels" using primary key columns */
  transaction_labels_by_pk: Maybe<Transaction_Labels>;
  /** fetch data from the table in a streaming manner : "transaction_labels" */
  transaction_labels_stream: Array<Transaction_Labels>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner : "transactions" */
  transactions_stream: Array<Transactions>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk: Maybe<User_Settings>;
  /** fetch data from the table in a streaming manner : "user_settings" */
  user_settings_stream: Array<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAccount_InfoArgs = {
  distinct_on: InputMaybe<Array<Account_Info_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Account_Info_Order_By>>;
  where: InputMaybe<Account_Info_Bool_Exp>;
};


export type Subscription_RootAccount_Info_AggregateArgs = {
  distinct_on: InputMaybe<Array<Account_Info_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Account_Info_Order_By>>;
  where: InputMaybe<Account_Info_Bool_Exp>;
};


export type Subscription_RootAccount_Info_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootAccount_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Account_Info_Stream_Cursor_Input>>;
  where: InputMaybe<Account_Info_Bool_Exp>;
};


export type Subscription_RootAssetsArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootAssets_AggregateArgs = {
  distinct_on: InputMaybe<Array<Assets_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Assets_Order_By>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootAssets_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootAssets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Assets_Stream_Cursor_Input>>;
  where: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on: InputMaybe<Array<Categories_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Categories_Order_By>>;
  where: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on: InputMaybe<Array<Categories_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Categories_Order_By>>;
  where: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootExpensesArgs = {
  distinct_on: InputMaybe<Array<Expenses_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Expenses_Order_By>>;
  where: InputMaybe<Expenses_Bool_Exp>;
};


export type Subscription_RootExpenses_AggregateArgs = {
  distinct_on: InputMaybe<Array<Expenses_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Expenses_Order_By>>;
  where: InputMaybe<Expenses_Bool_Exp>;
};


export type Subscription_RootExpenses_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootExpenses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Expenses_Stream_Cursor_Input>>;
  where: InputMaybe<Expenses_Bool_Exp>;
};


export type Subscription_RootLabelsArgs = {
  distinct_on: InputMaybe<Array<Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Labels_Order_By>>;
  where: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootLabels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Labels_Order_By>>;
  where: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootLabels_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLabels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Labels_Stream_Cursor_Input>>;
  where: InputMaybe<Labels_Bool_Exp>;
};


export type Subscription_RootLiabilitiesArgs = {
  distinct_on: InputMaybe<Array<Liabilities_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Liabilities_Order_By>>;
  where: InputMaybe<Liabilities_Bool_Exp>;
};


export type Subscription_RootLiabilities_AggregateArgs = {
  distinct_on: InputMaybe<Array<Liabilities_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Liabilities_Order_By>>;
  where: InputMaybe<Liabilities_Bool_Exp>;
};


export type Subscription_RootLiabilities_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootLiabilities_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Liabilities_Stream_Cursor_Input>>;
  where: InputMaybe<Liabilities_Bool_Exp>;
};


export type Subscription_RootNotificationsArgs = {
  distinct_on: InputMaybe<Array<Notifications_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Notifications_Order_By>>;
  where: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on: InputMaybe<Array<Notifications_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Notifications_Order_By>>;
  where: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNotifications_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootRecurringArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


export type Subscription_RootRecurring_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Order_By>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


export type Subscription_RootRecurring_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootRecurring_LabelsArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


export type Subscription_RootRecurring_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


export type Subscription_RootRecurring_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  recurring_id: Scalars['bigint'];
};


export type Subscription_RootRecurring_Labels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Recurring_Labels_Stream_Cursor_Input>>;
  where: InputMaybe<Recurring_Labels_Bool_Exp>;
};


export type Subscription_RootRecurring_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Recurring_Stream_Cursor_Input>>;
  where: InputMaybe<Recurring_Bool_Exp>;
};


export type Subscription_RootRevenuesArgs = {
  distinct_on: InputMaybe<Array<Revenues_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Revenues_Order_By>>;
  where: InputMaybe<Revenues_Bool_Exp>;
};


export type Subscription_RootRevenues_AggregateArgs = {
  distinct_on: InputMaybe<Array<Revenues_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Revenues_Order_By>>;
  where: InputMaybe<Revenues_Bool_Exp>;
};


export type Subscription_RootRevenues_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootRevenues_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Revenues_Stream_Cursor_Input>>;
  where: InputMaybe<Revenues_Bool_Exp>;
};


export type Subscription_RootTransaction_AccountsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


export type Subscription_RootTransaction_Accounts_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


export type Subscription_RootTransaction_Accounts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootTransaction_Accounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Accounts_Stream_Cursor_Input>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


export type Subscription_RootTransaction_AttachmentsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where: InputMaybe<Transaction_Attachments_Bool_Exp>;
};


export type Subscription_RootTransaction_Attachments_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where: InputMaybe<Transaction_Attachments_Bool_Exp>;
};


export type Subscription_RootTransaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};


export type Subscription_RootTransaction_Attachments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Attachments_Stream_Cursor_Input>>;
  where: InputMaybe<Transaction_Attachments_Bool_Exp>;
};


export type Subscription_RootTransaction_LabelsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


export type Subscription_RootTransaction_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


export type Subscription_RootTransaction_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};


export type Subscription_RootTransaction_Labels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Labels_Stream_Cursor_Input>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


export type Subscription_RootTransactionsArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transactions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transactions_Order_By>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootUser_SettingsArgs = {
  distinct_on: InputMaybe<Array<User_Settings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Settings_Order_By>>;
  where: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUser_Settings_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Settings_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Settings_Order_By>>;
  where: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_Settings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Settings_Stream_Cursor_Input>>;
  where: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transaction_accounts" */
export type Transaction_Accounts = {
  __typename?: 'transaction_accounts';
  account_id: Scalars['Int'];
  /** An object relationship */
  account_info: Account_Info;
  amount: Scalars['float8'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transaction_accounts" */
export type Transaction_Accounts_Aggregate = {
  __typename?: 'transaction_accounts_aggregate';
  aggregate: Maybe<Transaction_Accounts_Aggregate_Fields>;
  nodes: Array<Transaction_Accounts>;
};

/** aggregate fields of "transaction_accounts" */
export type Transaction_Accounts_Aggregate_Fields = {
  __typename?: 'transaction_accounts_aggregate_fields';
  avg: Maybe<Transaction_Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Transaction_Accounts_Max_Fields>;
  min: Maybe<Transaction_Accounts_Min_Fields>;
  stddev: Maybe<Transaction_Accounts_Stddev_Fields>;
  stddev_pop: Maybe<Transaction_Accounts_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Transaction_Accounts_Stddev_Samp_Fields>;
  sum: Maybe<Transaction_Accounts_Sum_Fields>;
  var_pop: Maybe<Transaction_Accounts_Var_Pop_Fields>;
  var_samp: Maybe<Transaction_Accounts_Var_Samp_Fields>;
  variance: Maybe<Transaction_Accounts_Variance_Fields>;
};


/** aggregate fields of "transaction_accounts" */
export type Transaction_Accounts_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_accounts" */
export type Transaction_Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Accounts_Max_Order_By>;
  min?: InputMaybe<Transaction_Accounts_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_accounts" */
export type Transaction_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Accounts_Avg_Fields = {
  __typename?: 'transaction_accounts_avg_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_accounts". All fields are combined with a logical 'AND'. */
export type Transaction_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Accounts_Bool_Exp>>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_accounts" */
export enum Transaction_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  TranscationAccountPkey = 'transcation_account_pkey'
}

/** input type for incrementing numeric columns in table "transaction_accounts" */
export type Transaction_Accounts_Inc_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['bigint']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction_accounts" */
export type Transaction_Accounts_Insert_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transaction_Accounts_Max_Fields = {
  __typename?: 'transaction_accounts_max_fields';
  account_id: Maybe<Scalars['Int']>;
  amount: Maybe<Scalars['float8']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  transaction_id: Maybe<Scalars['bigint']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Accounts_Min_Fields = {
  __typename?: 'transaction_accounts_min_fields';
  account_id: Maybe<Scalars['Int']>;
  amount: Maybe<Scalars['float8']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['bigint']>;
  transaction_id: Maybe<Scalars['bigint']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_accounts" */
export type Transaction_Accounts_Mutation_Response = {
  __typename?: 'transaction_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Accounts>;
};

/** on_conflict condition type for table "transaction_accounts" */
export type Transaction_Accounts_On_Conflict = {
  constraint: Transaction_Accounts_Constraint;
  update_columns?: Array<Transaction_Accounts_Update_Column>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_accounts". */
export type Transaction_Accounts_Order_By = {
  account_id?: InputMaybe<Order_By>;
  account_info?: InputMaybe<Account_Info_Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_accounts */
export type Transaction_Accounts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transaction_accounts" */
export type Transaction_Accounts_Set_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transaction_Accounts_Stddev_Fields = {
  __typename?: 'transaction_accounts_stddev_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Accounts_Stddev_Pop_Fields = {
  __typename?: 'transaction_accounts_stddev_pop_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Accounts_Stddev_Samp_Fields = {
  __typename?: 'transaction_accounts_stddev_samp_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction_accounts" */
export type Transaction_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Accounts_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Transaction_Accounts_Sum_Fields = {
  __typename?: 'transaction_accounts_sum_fields';
  account_id: Maybe<Scalars['Int']>;
  amount: Maybe<Scalars['float8']>;
  id: Maybe<Scalars['bigint']>;
  transaction_id: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_accounts" */
export enum Transaction_Accounts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Transaction_Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Accounts_Set_Input>;
  where: Transaction_Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Accounts_Var_Pop_Fields = {
  __typename?: 'transaction_accounts_var_pop_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Accounts_Var_Samp_Fields = {
  __typename?: 'transaction_accounts_var_samp_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Accounts_Variance_Fields = {
  __typename?: 'transaction_accounts_variance_fields';
  account_id: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction_attachments" */
export type Transaction_Attachments = {
  __typename?: 'transaction_attachments';
  attachment_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transaction_attachments" */
export type Transaction_Attachments_Aggregate = {
  __typename?: 'transaction_attachments_aggregate';
  aggregate: Maybe<Transaction_Attachments_Aggregate_Fields>;
  nodes: Array<Transaction_Attachments>;
};

/** aggregate fields of "transaction_attachments" */
export type Transaction_Attachments_Aggregate_Fields = {
  __typename?: 'transaction_attachments_aggregate_fields';
  avg: Maybe<Transaction_Attachments_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Transaction_Attachments_Max_Fields>;
  min: Maybe<Transaction_Attachments_Min_Fields>;
  stddev: Maybe<Transaction_Attachments_Stddev_Fields>;
  stddev_pop: Maybe<Transaction_Attachments_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Transaction_Attachments_Stddev_Samp_Fields>;
  sum: Maybe<Transaction_Attachments_Sum_Fields>;
  var_pop: Maybe<Transaction_Attachments_Var_Pop_Fields>;
  var_samp: Maybe<Transaction_Attachments_Var_Samp_Fields>;
  variance: Maybe<Transaction_Attachments_Variance_Fields>;
};


/** aggregate fields of "transaction_attachments" */
export type Transaction_Attachments_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Attachments_Avg_Fields = {
  __typename?: 'transaction_attachments_avg_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transaction_attachments". All fields are combined with a logical 'AND'. */
export type Transaction_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Attachments_Bool_Exp>>;
  attachment_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_attachments" */
export enum Transaction_Attachments_Constraint {
  /** unique or primary key constraint on columns "attachment_id" */
  TransactionAttachmentsAttachmentIdKey = 'transaction_attachments_attachment_id_key',
  /** unique or primary key constraint on columns "transaction_id", "attachment_id" */
  TransactionAttachmentsPkey = 'transaction_attachments_pkey',
  /** unique or primary key constraint on columns "transaction_id" */
  TransactionAttachmentsTransactionIdKey = 'transaction_attachments_transaction_id_key'
}

/** input type for incrementing numeric columns in table "transaction_attachments" */
export type Transaction_Attachments_Inc_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction_attachments" */
export type Transaction_Attachments_Insert_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transaction_Attachments_Max_Fields = {
  __typename?: 'transaction_attachments_max_fields';
  attachment_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['bigint']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Transaction_Attachments_Min_Fields = {
  __typename?: 'transaction_attachments_min_fields';
  attachment_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['bigint']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "transaction_attachments" */
export type Transaction_Attachments_Mutation_Response = {
  __typename?: 'transaction_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Attachments>;
};

/** input type for inserting object relation for remote table "transaction_attachments" */
export type Transaction_Attachments_Obj_Rel_Insert_Input = {
  data: Transaction_Attachments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Attachments_On_Conflict>;
};

/** on_conflict condition type for table "transaction_attachments" */
export type Transaction_Attachments_On_Conflict = {
  constraint: Transaction_Attachments_Constraint;
  update_columns?: Array<Transaction_Attachments_Update_Column>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_attachments". */
export type Transaction_Attachments_Order_By = {
  attachment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_attachments */
export type Transaction_Attachments_Pk_Columns_Input = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

/** select columns of table "transaction_attachments" */
export enum Transaction_Attachments_Select_Column {
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transaction_attachments" */
export type Transaction_Attachments_Set_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transaction_Attachments_Stddev_Fields = {
  __typename?: 'transaction_attachments_stddev_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Attachments_Stddev_Pop_Fields = {
  __typename?: 'transaction_attachments_stddev_pop_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Attachments_Stddev_Samp_Fields = {
  __typename?: 'transaction_attachments_stddev_samp_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "transaction_attachments" */
export type Transaction_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Attachments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Attachments_Stream_Cursor_Value_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Transaction_Attachments_Sum_Fields = {
  __typename?: 'transaction_attachments_sum_fields';
  attachment_id: Maybe<Scalars['Int']>;
  transaction_id: Maybe<Scalars['bigint']>;
};

/** update columns of table "transaction_attachments" */
export enum Transaction_Attachments_Update_Column {
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Transaction_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Attachments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Attachments_Set_Input>;
  where: Transaction_Attachments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Attachments_Var_Pop_Fields = {
  __typename?: 'transaction_attachments_var_pop_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Attachments_Var_Samp_Fields = {
  __typename?: 'transaction_attachments_var_samp_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Attachments_Variance_Fields = {
  __typename?: 'transaction_attachments_variance_fields';
  attachment_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction_labels" */
export type Transaction_Labels = {
  __typename?: 'transaction_labels';
  /** An object relationship */
  label: Labels;
  label_id: Scalars['Int'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint'];
};

/** aggregated selection of "transaction_labels" */
export type Transaction_Labels_Aggregate = {
  __typename?: 'transaction_labels_aggregate';
  aggregate: Maybe<Transaction_Labels_Aggregate_Fields>;
  nodes: Array<Transaction_Labels>;
};

/** aggregate fields of "transaction_labels" */
export type Transaction_Labels_Aggregate_Fields = {
  __typename?: 'transaction_labels_aggregate_fields';
  avg: Maybe<Transaction_Labels_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Transaction_Labels_Max_Fields>;
  min: Maybe<Transaction_Labels_Min_Fields>;
  stddev: Maybe<Transaction_Labels_Stddev_Fields>;
  stddev_pop: Maybe<Transaction_Labels_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Transaction_Labels_Stddev_Samp_Fields>;
  sum: Maybe<Transaction_Labels_Sum_Fields>;
  var_pop: Maybe<Transaction_Labels_Var_Pop_Fields>;
  var_samp: Maybe<Transaction_Labels_Var_Samp_Fields>;
  variance: Maybe<Transaction_Labels_Variance_Fields>;
};


/** aggregate fields of "transaction_labels" */
export type Transaction_Labels_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_labels" */
export type Transaction_Labels_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Labels_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Labels_Max_Order_By>;
  min?: InputMaybe<Transaction_Labels_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Labels_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Labels_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Labels_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Labels_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Labels_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Labels_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Labels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_labels" */
export type Transaction_Labels_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Labels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Labels_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Labels_Avg_Fields = {
  __typename?: 'transaction_labels_avg_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction_labels" */
export type Transaction_Labels_Avg_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_labels". All fields are combined with a logical 'AND'. */
export type Transaction_Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Labels_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Labels_Bool_Exp>>;
  label?: InputMaybe<Labels_Bool_Exp>;
  label_id?: InputMaybe<Int_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_labels" */
export enum Transaction_Labels_Constraint {
  /** unique or primary key constraint on columns "label_id", "transaction_id" */
  TransactionLabelsPkey = 'transaction_labels_pkey'
}

/** input type for incrementing numeric columns in table "transaction_labels" */
export type Transaction_Labels_Inc_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction_labels" */
export type Transaction_Labels_Insert_Input = {
  label?: InputMaybe<Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['Int']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Transaction_Labels_Max_Fields = {
  __typename?: 'transaction_labels_max_fields';
  label_id: Maybe<Scalars['Int']>;
  transaction_id: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "transaction_labels" */
export type Transaction_Labels_Max_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Labels_Min_Fields = {
  __typename?: 'transaction_labels_min_fields';
  label_id: Maybe<Scalars['Int']>;
  transaction_id: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "transaction_labels" */
export type Transaction_Labels_Min_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_labels" */
export type Transaction_Labels_Mutation_Response = {
  __typename?: 'transaction_labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Labels>;
};

/** on_conflict condition type for table "transaction_labels" */
export type Transaction_Labels_On_Conflict = {
  constraint: Transaction_Labels_Constraint;
  update_columns?: Array<Transaction_Labels_Update_Column>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_labels". */
export type Transaction_Labels_Order_By = {
  label?: InputMaybe<Labels_Order_By>;
  label_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_labels */
export type Transaction_Labels_Pk_Columns_Input = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

/** select columns of table "transaction_labels" */
export enum Transaction_Labels_Select_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "transaction_labels" */
export type Transaction_Labels_Set_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Transaction_Labels_Stddev_Fields = {
  __typename?: 'transaction_labels_stddev_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Labels_Stddev_Pop_Fields = {
  __typename?: 'transaction_labels_stddev_pop_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Labels_Stddev_Samp_Fields = {
  __typename?: 'transaction_labels_stddev_samp_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction_labels" */
export type Transaction_Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Labels_Stream_Cursor_Value_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Transaction_Labels_Sum_Fields = {
  __typename?: 'transaction_labels_sum_fields';
  label_id: Maybe<Scalars['Int']>;
  transaction_id: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction_labels" */
export type Transaction_Labels_Sum_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_labels" */
export enum Transaction_Labels_Update_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  TransactionId = 'transaction_id'
}

export type Transaction_Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Labels_Set_Input>;
  where: Transaction_Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Labels_Var_Pop_Fields = {
  __typename?: 'transaction_labels_var_pop_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction_labels" */
export type Transaction_Labels_Var_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Labels_Var_Samp_Fields = {
  __typename?: 'transaction_labels_var_samp_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction_labels" */
export type Transaction_Labels_Var_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Labels_Variance_Fields = {
  __typename?: 'transaction_labels_variance_fields';
  label_id: Maybe<Scalars['Float']>;
  transaction_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction_labels" */
export type Transaction_Labels_Variance_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  account_from: Scalars['Int'];
  account_to: Scalars['Int'];
  amount: Scalars['float8'];
  /** An object relationship */
  category: Maybe<Categories>;
  category_id: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamptz'];
  description: Maybe<Scalars['String']>;
  id: Scalars['bigint'];
  /** An object relationship */
  recurring: Maybe<Recurring>;
  recurring_id: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** An object relationship */
  transaction_attachment: Maybe<Transaction_Attachments>;
  transaction_date: Scalars['date'];
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  transaction_type: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "transactions" */
export type TransactionsTransaction_AccountsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


/** columns and relationships of "transactions" */
export type TransactionsTransaction_Accounts_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where: InputMaybe<Transaction_Accounts_Bool_Exp>;
};


/** columns and relationships of "transactions" */
export type TransactionsTransaction_LabelsArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};


/** columns and relationships of "transactions" */
export type TransactionsTransaction_Labels_AggregateArgs = {
  distinct_on: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Transactions_Max_Fields>;
  min: Maybe<Transactions_Min_Fields>;
  stddev: Maybe<Transactions_Stddev_Fields>;
  stddev_pop: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Transactions_Stddev_Samp_Fields>;
  sum: Maybe<Transactions_Sum_Fields>;
  var_pop: Maybe<Transactions_Var_Pop_Fields>;
  var_samp: Maybe<Transactions_Var_Samp_Fields>;
  variance: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Transactions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  account_from?: InputMaybe<Int_Comparison_Exp>;
  account_to?: InputMaybe<Int_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  recurring?: InputMaybe<Recurring_Bool_Exp>;
  recurring_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Bool_Exp>;
  transaction_date?: InputMaybe<Date_Comparison_Exp>;
  transaction_labels?: InputMaybe<Transaction_Labels_Bool_Exp>;
  transaction_type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  account_from?: InputMaybe<Scalars['Int']>;
  account_to?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  account_from?: InputMaybe<Scalars['Int']>;
  account_to?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  recurring?: InputMaybe<Recurring_Obj_Rel_Insert_Input>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Arr_Rel_Insert_Input>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Obj_Rel_Insert_Input>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_labels?: InputMaybe<Transaction_Labels_Arr_Rel_Insert_Input>;
  transaction_type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  account_from: Maybe<Scalars['Int']>;
  account_to: Maybe<Scalars['Int']>;
  amount: Maybe<Scalars['float8']>;
  category_id: Maybe<Scalars['bigint']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['bigint']>;
  recurring_id: Maybe<Scalars['bigint']>;
  transaction_date: Maybe<Scalars['date']>;
  transaction_type: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  account_from: Maybe<Scalars['Int']>;
  account_to: Maybe<Scalars['Int']>;
  amount: Maybe<Scalars['float8']>;
  category_id: Maybe<Scalars['bigint']>;
  created_at: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['bigint']>;
  recurring_id: Maybe<Scalars['bigint']>;
  transaction_date: Maybe<Scalars['date']>;
  transaction_type: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring?: InputMaybe<Recurring_Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_accounts_aggregate?: InputMaybe<Transaction_Accounts_Aggregate_Order_By>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RecurringId = 'recurring_id',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  account_from?: InputMaybe<Scalars['Int']>;
  account_to?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  account_from?: InputMaybe<Scalars['Int']>;
  account_to?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  recurring_id?: InputMaybe<Scalars['bigint']>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  account_from: Maybe<Scalars['Int']>;
  account_to: Maybe<Scalars['Int']>;
  amount: Maybe<Scalars['float8']>;
  category_id: Maybe<Scalars['bigint']>;
  id: Maybe<Scalars['bigint']>;
  recurring_id: Maybe<Scalars['bigint']>;
  transaction_type: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RecurringId = 'recurring_id',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  account_from: Maybe<Scalars['Float']>;
  account_to: Maybe<Scalars['Float']>;
  amount: Maybe<Scalars['Float']>;
  category_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  recurring_id: Maybe<Scalars['Float']>;
  transaction_type: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_settings" */
export type User_Settings = {
  __typename?: 'user_settings';
  darkMode: Scalars['Boolean'];
  langKey: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_settings" */
export type User_Settings_Aggregate = {
  __typename?: 'user_settings_aggregate';
  aggregate: Maybe<User_Settings_Aggregate_Fields>;
  nodes: Array<User_Settings>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_Fields = {
  __typename?: 'user_settings_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<User_Settings_Max_Fields>;
  min: Maybe<User_Settings_Min_Fields>;
};


/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<User_Settings_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_settings". All fields are combined with a logical 'AND'. */
export type User_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  _not?: InputMaybe<User_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  darkMode?: InputMaybe<Boolean_Comparison_Exp>;
  langKey?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings" */
export enum User_Settings_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UserSettingsPkey = 'user_settings_pkey'
}

/** input type for inserting data into table "user_settings" */
export type User_Settings_Insert_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']>;
  langKey?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Settings_Max_Fields = {
  __typename?: 'user_settings_max_fields';
  langKey: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Settings_Min_Fields = {
  __typename?: 'user_settings_min_fields';
  langKey: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_settings" */
export type User_Settings_Mutation_Response = {
  __typename?: 'user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings>;
};

/** input type for inserting object relation for remote table "user_settings" */
export type User_Settings_Obj_Rel_Insert_Input = {
  data: User_Settings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};

/** on_conflict condition type for table "user_settings" */
export type User_Settings_On_Conflict = {
  constraint: User_Settings_Constraint;
  update_columns?: Array<User_Settings_Update_Column>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings". */
export type User_Settings_Order_By = {
  darkMode?: InputMaybe<Order_By>;
  langKey?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_settings */
export type User_Settings_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
};

/** select columns of table "user_settings" */
export enum User_Settings_Select_Column {
  /** column name */
  DarkMode = 'darkMode',
  /** column name */
  LangKey = 'langKey',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_settings" */
export type User_Settings_Set_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']>;
  langKey?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_settings" */
export type User_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Settings_Stream_Cursor_Value_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']>;
  langKey?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_settings" */
export enum User_Settings_Update_Column {
  /** column name */
  DarkMode = 'darkMode',
  /** column name */
  LangKey = 'langKey',
  /** column name */
  UserId = 'user_id'
}

export type User_Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /** An object relationship */
  user_setting: Maybe<User_Settings>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_setting?: InputMaybe<User_Settings_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  PkA3ffb1c0c8416b9fc6f907b7433 = 'PK_a3ffb1c0c8416b9fc6f907b7433',
  /** unique or primary key constraint on columns "email" */
  Uq_97672ac88f789774dd47f7c8be3 = 'UQ_97672ac88f789774dd47f7c8be3'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user_setting?: InputMaybe<User_Settings_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_setting?: InputMaybe<User_Settings_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetRecurringItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecurringItemsQuery = { __typename?: 'query_root', recurring: Array<{ __typename?: 'recurring', id: any, account_from: any, account_to: any, amount: any, category_id: any | null, created_at: string, cycle_type: number, description: string | null, duration_type: number, no_of_times: number | null, start_on: string, title: string, transaction_type: number, until_date: string | null, updated_at: string, recurring_labels: Array<{ __typename?: 'recurring_labels', label_id: number }>, transactions_aggregate: { __typename?: 'transactions_aggregate', aggregate: { __typename?: 'transactions_aggregate_fields', count: number, max: { __typename?: 'transactions_max_fields', transaction_date: string | null } | null } | null } }> };

export type InsertTransactionMutationVariables = Exact<{
  object: Transactions_Insert_Input;
}>;


export type InsertTransactionMutation = { __typename?: 'mutation_root', insert_transactions_one: { __typename?: 'transactions', id: any, amount: any } | null };

export type InsertNotificationMutationVariables = Exact<{
  object: Notifications_Insert_Input;
}>;


export type InsertNotificationMutation = { __typename?: 'mutation_root', insert_notifications_one: { __typename?: 'notifications', id: number } | null };


export const GetRecurringItemsDocument = gql`
    query getRecurringItems {
  recurring(where: {active: {_eq: true}}) {
    id
    account_from
    account_to
    amount
    category_id
    created_at
    cycle_type
    description
    duration_type
    no_of_times
    start_on
    title
    transaction_type
    until_date
    updated_at
    recurring_labels {
      label_id
    }
    transactions_aggregate {
      aggregate {
        count
        max {
          transaction_date
        }
      }
    }
  }
}
    `;
export const InsertTransactionDocument = gql`
    mutation insertTransaction($object: transactions_insert_input!) {
  insert_transactions_one(object: $object) {
    id
    amount
  }
}
    `;
export const InsertNotificationDocument = gql`
    mutation insertNotification($object: notifications_insert_input!) {
  insert_notifications_one(object: $object) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getRecurringItems(variables?: GetRecurringItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRecurringItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRecurringItemsQuery>(GetRecurringItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRecurringItems', 'query');
    },
    insertTransaction(variables: InsertTransactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertTransactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertTransactionMutation>(InsertTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertTransaction', 'mutation');
    },
    insertNotification(variables: InsertNotificationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertNotificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertNotificationMutation>(InsertNotificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertNotification', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;