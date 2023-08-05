/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  pageHeroImagePageHero?: InputMaybe<PageHeroCreateManyInlineInput>;
  projectImageProjectLink?: InputMaybe<ProjectCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  pageHeroImagePageHero?: InputMaybe<PageHeroUpdateManyInlineInput>;
  projectImageProjectLink?: InputMaybe<ProjectUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one pageContent */
  createPageContent?: Maybe<PageContent>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many PageContent documents
   * @deprecated Please use the new paginated many mutation (deleteManyPageContentsConnection)
   */
  deleteManyPageContents: BatchPayload;
  /** Delete many PageContent documents, return deleted documents */
  deleteManyPageContentsConnection: PageContentConnection;
  /** Delete one pageContent from _all_ existing stages. Returns deleted document. */
  deletePageContent?: Maybe<PageContent>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many PageContent documents
   * @deprecated Please use the new paginated many mutation (publishManyPageContentsConnection)
   */
  publishManyPageContents: BatchPayload;
  /** Publish many PageContent documents */
  publishManyPageContentsConnection: PageContentConnection;
  /** Publish one pageContent */
  publishPageContent?: Maybe<PageContent>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one pageContent */
  schedulePublishPageContent?: Maybe<PageContent>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one pageContent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPageContent?: Maybe<PageContent>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many PageContent documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPageContentsConnection)
   */
  unpublishManyPageContents: BatchPayload;
  /** Find many PageContent documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPageContentsConnection: PageContentConnection;
  /** Unpublish one pageContent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPageContent?: Maybe<PageContent>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many pageContents
   * @deprecated Please use the new paginated many mutation (updateManyPageContentsConnection)
   */
  updateManyPageContents: BatchPayload;
  /** Update many PageContent documents */
  updateManyPageContentsConnection: PageContentConnection;
  /** Update one pageContent */
  updatePageContent?: Maybe<PageContent>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one pageContent */
  upsertPageContent?: Maybe<PageContent>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreatePageContentArgs = {
  data: PageContentCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyPageContentsArgs = {
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationDeleteManyPageContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationDeletePageContentArgs = {
  where: PageContentWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPageContentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationPublishManyPageContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationPublishPageContentArgs = {
  to?: Array<Stage>;
  where: PageContentWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPageContentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageContentWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishPageContentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageContentWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyPageContentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationUnpublishManyPageContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationUnpublishPageContentArgs = {
  from?: Array<Stage>;
  where: PageContentWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyPageContentsArgs = {
  data: PageContentUpdateManyInput;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationUpdateManyPageContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageContentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageContentManyWhereInput>;
};


export type MutationUpdatePageContentArgs = {
  data: PageContentUpdateInput;
  where: PageContentWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertPageContentArgs = {
  upsert: PageContentUpsertInput;
  where: PageContentWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type PageContact = {
  __typename?: 'PageContact';
  contactText?: Maybe<Scalars['String']['output']>;
  contactTitle?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type PageContactConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageContactWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageContactConnection = {
  __typename?: 'PageContactConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageContactEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageContactCreateInput = {
  contactText?: InputMaybe<Scalars['String']['input']>;
  contactTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageContactCreateManyInlineInput = {
  /** Create and connect multiple existing PageContact documents */
  create?: InputMaybe<Array<PageContactCreateInput>>;
};

export type PageContactCreateOneInlineInput = {
  /** Create and connect one PageContact document */
  create?: InputMaybe<PageContactCreateInput>;
};

export type PageContactCreateWithPositionInput = {
  /** Document to create */
  data: PageContactCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PageContactEdge = {
  __typename?: 'PageContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageContact;
};

/** Identifies documents */
export type PageContactManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  contactText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactText_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum PageContactOrderByInput {
  ContactTextAsc = 'contactText_ASC',
  ContactTextDesc = 'contactText_DESC',
  ContactTitleAsc = 'contactTitle_ASC',
  ContactTitleDesc = 'contactTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PageContactParent = PageContent;

export type PageContactParentConnectInput = {
  PageContent?: InputMaybe<PageContentConnectInput>;
};

export type PageContactParentCreateInput = {
  PageContent?: InputMaybe<PageContentCreateInput>;
};

export type PageContactParentCreateManyInlineInput = {
  /** Connect multiple existing PageContactParent documents */
  connect?: InputMaybe<Array<PageContactParentWhereUniqueInput>>;
  /** Create and connect multiple existing PageContactParent documents */
  create?: InputMaybe<Array<PageContactParentCreateInput>>;
};

export type PageContactParentCreateOneInlineInput = {
  /** Connect one existing PageContactParent document */
  connect?: InputMaybe<PageContactParentWhereUniqueInput>;
  /** Create and connect one PageContactParent document */
  create?: InputMaybe<PageContactParentCreateInput>;
};

export type PageContactParentUpdateInput = {
  PageContent?: InputMaybe<PageContentUpdateInput>;
};

export type PageContactParentUpdateManyInlineInput = {
  /** Connect multiple existing PageContactParent documents */
  connect?: InputMaybe<Array<PageContactParentConnectInput>>;
  /** Create and connect multiple PageContactParent documents */
  create?: InputMaybe<Array<PageContactParentCreateInput>>;
  /** Delete multiple PageContactParent documents */
  delete?: InputMaybe<Array<PageContactParentWhereUniqueInput>>;
  /** Disconnect multiple PageContactParent documents */
  disconnect?: InputMaybe<Array<PageContactParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageContactParent documents */
  set?: InputMaybe<Array<PageContactParentWhereUniqueInput>>;
  /** Update multiple PageContactParent documents */
  update?: InputMaybe<Array<PageContactParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageContactParent documents */
  upsert?: InputMaybe<Array<PageContactParentUpsertWithNestedWhereUniqueInput>>;
};

export type PageContactParentUpdateManyWithNestedWhereInput = {
  PageContent?: InputMaybe<PageContentUpdateManyWithNestedWhereInput>;
};

export type PageContactParentUpdateOneInlineInput = {
  /** Connect existing PageContactParent document */
  connect?: InputMaybe<PageContactParentWhereUniqueInput>;
  /** Create and connect one PageContactParent document */
  create?: InputMaybe<PageContactParentCreateInput>;
  /** Delete currently connected PageContactParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageContactParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageContactParent document */
  update?: InputMaybe<PageContactParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageContactParent document */
  upsert?: InputMaybe<PageContactParentUpsertWithNestedWhereUniqueInput>;
};

export type PageContactParentUpdateWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpdateWithNestedWhereUniqueInput>;
};

export type PageContactParentUpsertWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpsertWithNestedWhereUniqueInput>;
};

export type PageContactParentWhereInput = {
  PageContent?: InputMaybe<PageContentWhereInput>;
};

export type PageContactParentWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentWhereUniqueInput>;
};

export type PageContactUpdateInput = {
  contactText?: InputMaybe<Scalars['String']['input']>;
  contactTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageContactUpdateManyInlineInput = {
  /** Create and connect multiple PageContact component instances */
  create?: InputMaybe<Array<PageContactCreateWithPositionInput>>;
  /** Delete multiple PageContact documents */
  delete?: InputMaybe<Array<PageContactWhereUniqueInput>>;
  /** Update multiple PageContact component instances */
  update?: InputMaybe<Array<PageContactUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageContact component instances */
  upsert?: InputMaybe<Array<PageContactUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageContactUpdateManyInput = {
  contactText?: InputMaybe<Scalars['String']['input']>;
  contactTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageContactUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageContactUpdateManyInput;
  /** Document search */
  where: PageContactWhereInput;
};

export type PageContactUpdateOneInlineInput = {
  /** Create and connect one PageContact document */
  create?: InputMaybe<PageContactCreateInput>;
  /** Delete currently connected PageContact document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageContact document */
  update?: InputMaybe<PageContactUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageContact document */
  upsert?: InputMaybe<PageContactUpsertWithNestedWhereUniqueInput>;
};

export type PageContactUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PageContactUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageContactWhereUniqueInput;
};

export type PageContactUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageContactUpdateInput;
  /** Unique document search */
  where: PageContactWhereUniqueInput;
};

export type PageContactUpsertInput = {
  /** Create document if it didn't exist */
  create: PageContactCreateInput;
  /** Update document if it exists */
  update: PageContactUpdateInput;
};

export type PageContactUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PageContactUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageContactWhereUniqueInput;
};

export type PageContactUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageContactUpsertInput;
  /** Unique document search */
  where: PageContactWhereUniqueInput;
};

/** Identifies documents */
export type PageContactWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  contactText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactText_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References PageContact record uniquely */
export type PageContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PageContent = Node & {
  __typename?: 'PageContent';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PageContent>;
  /** List of PageContent versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pageContentHome: Array<PageContentpageContentHomeUnion>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageContentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageContentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageContentHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageContentPageContentHomeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageContentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageContentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageContentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageContentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageContentWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageContentConnection = {
  __typename?: 'PageContentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageContentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageContentCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pageContentHome?: InputMaybe<PageContentpageContentHomeUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageContentCreateManyInlineInput = {
  /** Connect multiple existing PageContent documents */
  connect?: InputMaybe<Array<PageContentWhereUniqueInput>>;
  /** Create and connect multiple existing PageContent documents */
  create?: InputMaybe<Array<PageContentCreateInput>>;
};

export type PageContentCreateOneInlineInput = {
  /** Connect one existing PageContent document */
  connect?: InputMaybe<PageContentWhereUniqueInput>;
  /** Create and connect one PageContent document */
  create?: InputMaybe<PageContentCreateInput>;
};

/** An edge in a connection. */
export type PageContentEdge = {
  __typename?: 'PageContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageContent;
};

/** Identifies documents */
export type PageContentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageContentWhereStageInput>;
  documentInStages_none?: InputMaybe<PageContentWhereStageInput>;
  documentInStages_some?: InputMaybe<PageContentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  pageContentHome_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  pageContentHome_some?: InputMaybe<PageContentpageContentHomeUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageContentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageContentUpdateInput = {
  pageContentHome?: InputMaybe<PageContentpageContentHomeUnionUpdateManyInlineInput>;
};

export type PageContentUpdateManyInlineInput = {
  /** Connect multiple existing PageContent documents */
  connect?: InputMaybe<Array<PageContentConnectInput>>;
  /** Create and connect multiple PageContent documents */
  create?: InputMaybe<Array<PageContentCreateInput>>;
  /** Delete multiple PageContent documents */
  delete?: InputMaybe<Array<PageContentWhereUniqueInput>>;
  /** Disconnect multiple PageContent documents */
  disconnect?: InputMaybe<Array<PageContentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageContent documents */
  set?: InputMaybe<Array<PageContentWhereUniqueInput>>;
  /** Update multiple PageContent documents */
  update?: InputMaybe<Array<PageContentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageContent documents */
  upsert?: InputMaybe<Array<PageContentUpsertWithNestedWhereUniqueInput>>;
};

export type PageContentUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type PageContentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageContentUpdateManyInput;
  /** Document search */
  where: PageContentWhereInput;
};

export type PageContentUpdateOneInlineInput = {
  /** Connect existing PageContent document */
  connect?: InputMaybe<PageContentWhereUniqueInput>;
  /** Create and connect one PageContent document */
  create?: InputMaybe<PageContentCreateInput>;
  /** Delete currently connected PageContent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageContent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageContent document */
  update?: InputMaybe<PageContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageContent document */
  upsert?: InputMaybe<PageContentUpsertWithNestedWhereUniqueInput>;
};

export type PageContentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageContentUpdateInput;
  /** Unique document search */
  where: PageContentWhereUniqueInput;
};

export type PageContentUpsertInput = {
  /** Create document if it didn't exist */
  create: PageContentCreateInput;
  /** Update document if it exists */
  update: PageContentUpdateInput;
};

export type PageContentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageContentUpsertInput;
  /** Unique document search */
  where: PageContentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageContentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageContentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageContentWhereStageInput>;
  documentInStages_none?: InputMaybe<PageContentWhereStageInput>;
  documentInStages_some?: InputMaybe<PageContentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  pageContentHome_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  pageContentHome_some?: InputMaybe<PageContentpageContentHomeUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageContentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageContentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageContentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageContentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageContentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PageContent record uniquely */
export type PageContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PageContentpageContentHomeUnion = PageContact | PageHero | PageProject | PageSkill;

export type PageContentpageContentHomeUnionConnectInput = {
  PageContact?: InputMaybe<PageContactConnectInput>;
  PageHero?: InputMaybe<PageHeroConnectInput>;
  PageProject?: InputMaybe<PageProjectConnectInput>;
  PageSkill?: InputMaybe<PageSkillConnectInput>;
};

export type PageContentpageContentHomeUnionCreateInput = {
  PageContact?: InputMaybe<PageContactCreateInput>;
  PageHero?: InputMaybe<PageHeroCreateInput>;
  PageProject?: InputMaybe<PageProjectCreateInput>;
  PageSkill?: InputMaybe<PageSkillCreateInput>;
};

export type PageContentpageContentHomeUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PageContentpageContentHomeUnion documents */
  create?: InputMaybe<Array<PageContentpageContentHomeUnionCreateInput>>;
};

export type PageContentpageContentHomeUnionCreateOneInlineInput = {
  /** Create and connect one PageContentpageContentHomeUnion document */
  create?: InputMaybe<PageContentpageContentHomeUnionCreateInput>;
};

export type PageContentpageContentHomeUnionCreateWithPositionInput = {
  PageContact?: InputMaybe<PageContactCreateWithPositionInput>;
  PageHero?: InputMaybe<PageHeroCreateWithPositionInput>;
  PageProject?: InputMaybe<PageProjectCreateWithPositionInput>;
  PageSkill?: InputMaybe<PageSkillCreateWithPositionInput>;
};

export type PageContentpageContentHomeUnionUpdateInput = {
  PageContact?: InputMaybe<PageContactUpdateInput>;
  PageHero?: InputMaybe<PageHeroUpdateInput>;
  PageProject?: InputMaybe<PageProjectUpdateInput>;
  PageSkill?: InputMaybe<PageSkillUpdateInput>;
};

export type PageContentpageContentHomeUnionUpdateManyInlineInput = {
  /** Create and connect multiple PageContentpageContentHomeUnion component instances */
  create?: InputMaybe<Array<PageContentpageContentHomeUnionCreateWithPositionInput>>;
  /** Delete multiple PageContentpageContentHomeUnion documents */
  delete?: InputMaybe<Array<PageContentpageContentHomeUnionWhereUniqueInput>>;
  /** Update multiple PageContentpageContentHomeUnion component instances */
  update?: InputMaybe<Array<PageContentpageContentHomeUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageContentpageContentHomeUnion component instances */
  upsert?: InputMaybe<Array<PageContentpageContentHomeUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageContentpageContentHomeUnionUpdateManyWithNestedWhereInput = {
  PageContact?: InputMaybe<PageContactUpdateManyWithNestedWhereInput>;
  PageHero?: InputMaybe<PageHeroUpdateManyWithNestedWhereInput>;
  PageProject?: InputMaybe<PageProjectUpdateManyWithNestedWhereInput>;
  PageSkill?: InputMaybe<PageSkillUpdateManyWithNestedWhereInput>;
};

export type PageContentpageContentHomeUnionUpdateOneInlineInput = {
  /** Create and connect one PageContentpageContentHomeUnion document */
  create?: InputMaybe<PageContentpageContentHomeUnionCreateInput>;
  /** Delete currently connected PageContentpageContentHomeUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageContentpageContentHomeUnion document */
  update?: InputMaybe<PageContentpageContentHomeUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageContentpageContentHomeUnion document */
  upsert?: InputMaybe<PageContentpageContentHomeUnionUpsertWithNestedWhereUniqueInput>;
};

export type PageContentpageContentHomeUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  PageContact?: InputMaybe<PageContactUpdateWithNestedWhereUniqueAndPositionInput>;
  PageHero?: InputMaybe<PageHeroUpdateWithNestedWhereUniqueAndPositionInput>;
  PageProject?: InputMaybe<PageProjectUpdateWithNestedWhereUniqueAndPositionInput>;
  PageSkill?: InputMaybe<PageSkillUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PageContentpageContentHomeUnionUpdateWithNestedWhereUniqueInput = {
  PageContact?: InputMaybe<PageContactUpdateWithNestedWhereUniqueInput>;
  PageHero?: InputMaybe<PageHeroUpdateWithNestedWhereUniqueInput>;
  PageProject?: InputMaybe<PageProjectUpdateWithNestedWhereUniqueInput>;
  PageSkill?: InputMaybe<PageSkillUpdateWithNestedWhereUniqueInput>;
};

export type PageContentpageContentHomeUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  PageContact?: InputMaybe<PageContactUpsertWithNestedWhereUniqueAndPositionInput>;
  PageHero?: InputMaybe<PageHeroUpsertWithNestedWhereUniqueAndPositionInput>;
  PageProject?: InputMaybe<PageProjectUpsertWithNestedWhereUniqueAndPositionInput>;
  PageSkill?: InputMaybe<PageSkillUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PageContentpageContentHomeUnionUpsertWithNestedWhereUniqueInput = {
  PageContact?: InputMaybe<PageContactUpsertWithNestedWhereUniqueInput>;
  PageHero?: InputMaybe<PageHeroUpsertWithNestedWhereUniqueInput>;
  PageProject?: InputMaybe<PageProjectUpsertWithNestedWhereUniqueInput>;
  PageSkill?: InputMaybe<PageSkillUpsertWithNestedWhereUniqueInput>;
};

export type PageContentpageContentHomeUnionWhereInput = {
  PageContact?: InputMaybe<PageContactWhereInput>;
  PageHero?: InputMaybe<PageHeroWhereInput>;
  PageProject?: InputMaybe<PageProjectWhereInput>;
  PageSkill?: InputMaybe<PageSkillWhereInput>;
};

export type PageContentpageContentHomeUnionWhereUniqueInput = {
  PageContact?: InputMaybe<PageContactWhereUniqueInput>;
  PageHero?: InputMaybe<PageHeroWhereUniqueInput>;
  PageProject?: InputMaybe<PageProjectWhereUniqueInput>;
  PageSkill?: InputMaybe<PageSkillWhereUniqueInput>;
};

export type PageHero = {
  __typename?: 'PageHero';
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Asset>;
  /** Based in the Netherlands, I'm a front-end developer passionate about building accessible web apps that users love. */
  heroText?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};


export type PageHeroHeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageHeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageHeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageHeroConnection = {
  __typename?: 'PageHeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageHeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageHeroCreateInput = {
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<AssetCreateOneInlineInput>;
  heroText?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeroCreateManyInlineInput = {
  /** Create and connect multiple existing PageHero documents */
  create?: InputMaybe<Array<PageHeroCreateInput>>;
};

export type PageHeroCreateOneInlineInput = {
  /** Create and connect one PageHero document */
  create?: InputMaybe<PageHeroCreateInput>;
};

export type PageHeroCreateWithPositionInput = {
  /** Document to create */
  data: PageHeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PageHeroEdge = {
  __typename?: 'PageHeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageHero;
};

/** Identifies documents */
export type PageHeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageHeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageHeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageHeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<AssetWhereInput>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroText_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum PageHeroOrderByInput {
  HeroHeadingAsc = 'heroHeading_ASC',
  HeroHeadingDesc = 'heroHeading_DESC',
  HeroTextAsc = 'heroText_ASC',
  HeroTextDesc = 'heroText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PageHeroParent = PageContent;

export type PageHeroParentConnectInput = {
  PageContent?: InputMaybe<PageContentConnectInput>;
};

export type PageHeroParentCreateInput = {
  PageContent?: InputMaybe<PageContentCreateInput>;
};

export type PageHeroParentCreateManyInlineInput = {
  /** Connect multiple existing PageHeroParent documents */
  connect?: InputMaybe<Array<PageHeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing PageHeroParent documents */
  create?: InputMaybe<Array<PageHeroParentCreateInput>>;
};

export type PageHeroParentCreateOneInlineInput = {
  /** Connect one existing PageHeroParent document */
  connect?: InputMaybe<PageHeroParentWhereUniqueInput>;
  /** Create and connect one PageHeroParent document */
  create?: InputMaybe<PageHeroParentCreateInput>;
};

export type PageHeroParentUpdateInput = {
  PageContent?: InputMaybe<PageContentUpdateInput>;
};

export type PageHeroParentUpdateManyInlineInput = {
  /** Connect multiple existing PageHeroParent documents */
  connect?: InputMaybe<Array<PageHeroParentConnectInput>>;
  /** Create and connect multiple PageHeroParent documents */
  create?: InputMaybe<Array<PageHeroParentCreateInput>>;
  /** Delete multiple PageHeroParent documents */
  delete?: InputMaybe<Array<PageHeroParentWhereUniqueInput>>;
  /** Disconnect multiple PageHeroParent documents */
  disconnect?: InputMaybe<Array<PageHeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageHeroParent documents */
  set?: InputMaybe<Array<PageHeroParentWhereUniqueInput>>;
  /** Update multiple PageHeroParent documents */
  update?: InputMaybe<Array<PageHeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageHeroParent documents */
  upsert?: InputMaybe<Array<PageHeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type PageHeroParentUpdateManyWithNestedWhereInput = {
  PageContent?: InputMaybe<PageContentUpdateManyWithNestedWhereInput>;
};

export type PageHeroParentUpdateOneInlineInput = {
  /** Connect existing PageHeroParent document */
  connect?: InputMaybe<PageHeroParentWhereUniqueInput>;
  /** Create and connect one PageHeroParent document */
  create?: InputMaybe<PageHeroParentCreateInput>;
  /** Delete currently connected PageHeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageHeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageHeroParent document */
  update?: InputMaybe<PageHeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageHeroParent document */
  upsert?: InputMaybe<PageHeroParentUpsertWithNestedWhereUniqueInput>;
};

export type PageHeroParentUpdateWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpdateWithNestedWhereUniqueInput>;
};

export type PageHeroParentUpsertWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpsertWithNestedWhereUniqueInput>;
};

export type PageHeroParentWhereInput = {
  PageContent?: InputMaybe<PageContentWhereInput>;
};

export type PageHeroParentWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentWhereUniqueInput>;
};

export type PageHeroUpdateInput = {
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<AssetUpdateOneInlineInput>;
  heroText?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeroUpdateManyInlineInput = {
  /** Create and connect multiple PageHero component instances */
  create?: InputMaybe<Array<PageHeroCreateWithPositionInput>>;
  /** Delete multiple PageHero documents */
  delete?: InputMaybe<Array<PageHeroWhereUniqueInput>>;
  /** Update multiple PageHero component instances */
  update?: InputMaybe<Array<PageHeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageHero component instances */
  upsert?: InputMaybe<Array<PageHeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageHeroUpdateManyInput = {
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageHeroUpdateManyInput;
  /** Document search */
  where: PageHeroWhereInput;
};

export type PageHeroUpdateOneInlineInput = {
  /** Create and connect one PageHero document */
  create?: InputMaybe<PageHeroCreateInput>;
  /** Delete currently connected PageHero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageHero document */
  update?: InputMaybe<PageHeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageHero document */
  upsert?: InputMaybe<PageHeroUpsertWithNestedWhereUniqueInput>;
};

export type PageHeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PageHeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageHeroWhereUniqueInput;
};

export type PageHeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageHeroUpdateInput;
  /** Unique document search */
  where: PageHeroWhereUniqueInput;
};

export type PageHeroUpsertInput = {
  /** Create document if it didn't exist */
  create: PageHeroCreateInput;
  /** Update document if it exists */
  update: PageHeroUpdateInput;
};

export type PageHeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PageHeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageHeroWhereUniqueInput;
};

export type PageHeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageHeroUpsertInput;
  /** Unique document search */
  where: PageHeroWhereUniqueInput;
};

/** Identifies documents */
export type PageHeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageHeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageHeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageHeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<AssetWhereInput>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroText_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References PageHero record uniquely */
export type PageHeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageProject = {
  __typename?: 'PageProject';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  projects: Array<PageProjectprojectsUnion>;
  /** System stage field */
  stage: Stage;
};


export type PageProjectProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageProjectConnection = {
  __typename?: 'PageProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageProjectCreateInput = {
  projects?: InputMaybe<PageProjectprojectsUnionCreateManyInlineInput>;
};

export type PageProjectCreateManyInlineInput = {
  /** Create and connect multiple existing PageProject documents */
  create?: InputMaybe<Array<PageProjectCreateInput>>;
};

export type PageProjectCreateOneInlineInput = {
  /** Create and connect one PageProject document */
  create?: InputMaybe<PageProjectCreateInput>;
};

export type PageProjectCreateWithPositionInput = {
  /** Document to create */
  data: PageProjectCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PageProjectEdge = {
  __typename?: 'PageProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageProject;
};

/** Identifies documents */
export type PageProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  projects_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  projects_some?: InputMaybe<PageProjectprojectsUnionWhereInput>;
};

export enum PageProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PageProjectParent = PageContent;

export type PageProjectParentConnectInput = {
  PageContent?: InputMaybe<PageContentConnectInput>;
};

export type PageProjectParentCreateInput = {
  PageContent?: InputMaybe<PageContentCreateInput>;
};

export type PageProjectParentCreateManyInlineInput = {
  /** Connect multiple existing PageProjectParent documents */
  connect?: InputMaybe<Array<PageProjectParentWhereUniqueInput>>;
  /** Create and connect multiple existing PageProjectParent documents */
  create?: InputMaybe<Array<PageProjectParentCreateInput>>;
};

export type PageProjectParentCreateOneInlineInput = {
  /** Connect one existing PageProjectParent document */
  connect?: InputMaybe<PageProjectParentWhereUniqueInput>;
  /** Create and connect one PageProjectParent document */
  create?: InputMaybe<PageProjectParentCreateInput>;
};

export type PageProjectParentUpdateInput = {
  PageContent?: InputMaybe<PageContentUpdateInput>;
};

export type PageProjectParentUpdateManyInlineInput = {
  /** Connect multiple existing PageProjectParent documents */
  connect?: InputMaybe<Array<PageProjectParentConnectInput>>;
  /** Create and connect multiple PageProjectParent documents */
  create?: InputMaybe<Array<PageProjectParentCreateInput>>;
  /** Delete multiple PageProjectParent documents */
  delete?: InputMaybe<Array<PageProjectParentWhereUniqueInput>>;
  /** Disconnect multiple PageProjectParent documents */
  disconnect?: InputMaybe<Array<PageProjectParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageProjectParent documents */
  set?: InputMaybe<Array<PageProjectParentWhereUniqueInput>>;
  /** Update multiple PageProjectParent documents */
  update?: InputMaybe<Array<PageProjectParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageProjectParent documents */
  upsert?: InputMaybe<Array<PageProjectParentUpsertWithNestedWhereUniqueInput>>;
};

export type PageProjectParentUpdateManyWithNestedWhereInput = {
  PageContent?: InputMaybe<PageContentUpdateManyWithNestedWhereInput>;
};

export type PageProjectParentUpdateOneInlineInput = {
  /** Connect existing PageProjectParent document */
  connect?: InputMaybe<PageProjectParentWhereUniqueInput>;
  /** Create and connect one PageProjectParent document */
  create?: InputMaybe<PageProjectParentCreateInput>;
  /** Delete currently connected PageProjectParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageProjectParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageProjectParent document */
  update?: InputMaybe<PageProjectParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageProjectParent document */
  upsert?: InputMaybe<PageProjectParentUpsertWithNestedWhereUniqueInput>;
};

export type PageProjectParentUpdateWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpdateWithNestedWhereUniqueInput>;
};

export type PageProjectParentUpsertWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpsertWithNestedWhereUniqueInput>;
};

export type PageProjectParentWhereInput = {
  PageContent?: InputMaybe<PageContentWhereInput>;
};

export type PageProjectParentWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentWhereUniqueInput>;
};

export type PageProjectUpdateInput = {
  projects?: InputMaybe<PageProjectprojectsUnionUpdateManyInlineInput>;
};

export type PageProjectUpdateManyInlineInput = {
  /** Create and connect multiple PageProject component instances */
  create?: InputMaybe<Array<PageProjectCreateWithPositionInput>>;
  /** Delete multiple PageProject documents */
  delete?: InputMaybe<Array<PageProjectWhereUniqueInput>>;
  /** Update multiple PageProject component instances */
  update?: InputMaybe<Array<PageProjectUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageProject component instances */
  upsert?: InputMaybe<Array<PageProjectUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageProjectUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type PageProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageProjectUpdateManyInput;
  /** Document search */
  where: PageProjectWhereInput;
};

export type PageProjectUpdateOneInlineInput = {
  /** Create and connect one PageProject document */
  create?: InputMaybe<PageProjectCreateInput>;
  /** Delete currently connected PageProject document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageProject document */
  update?: InputMaybe<PageProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageProject document */
  upsert?: InputMaybe<PageProjectUpsertWithNestedWhereUniqueInput>;
};

export type PageProjectUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PageProjectUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageProjectWhereUniqueInput;
};

export type PageProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageProjectUpdateInput;
  /** Unique document search */
  where: PageProjectWhereUniqueInput;
};

export type PageProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: PageProjectCreateInput;
  /** Update document if it exists */
  update: PageProjectUpdateInput;
};

export type PageProjectUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PageProjectUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageProjectWhereUniqueInput;
};

export type PageProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageProjectUpsertInput;
  /** Unique document search */
  where: PageProjectWhereUniqueInput;
};

/** Identifies documents */
export type PageProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  projects_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  projects_some?: InputMaybe<PageProjectprojectsUnionWhereInput>;
};

/** References PageProject record uniquely */
export type PageProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PageProjectprojectsUnion = Project;

export type PageProjectprojectsUnionConnectInput = {
  Project?: InputMaybe<ProjectConnectInput>;
};

export type PageProjectprojectsUnionCreateInput = {
  Project?: InputMaybe<ProjectCreateInput>;
};

export type PageProjectprojectsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PageProjectprojectsUnion documents */
  create?: InputMaybe<Array<PageProjectprojectsUnionCreateInput>>;
};

export type PageProjectprojectsUnionCreateOneInlineInput = {
  /** Create and connect one PageProjectprojectsUnion document */
  create?: InputMaybe<PageProjectprojectsUnionCreateInput>;
};

export type PageProjectprojectsUnionCreateWithPositionInput = {
  Project?: InputMaybe<ProjectCreateWithPositionInput>;
};

export type PageProjectprojectsUnionUpdateInput = {
  Project?: InputMaybe<ProjectUpdateInput>;
};

export type PageProjectprojectsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PageProjectprojectsUnion component instances */
  create?: InputMaybe<Array<PageProjectprojectsUnionCreateWithPositionInput>>;
  /** Delete multiple PageProjectprojectsUnion documents */
  delete?: InputMaybe<Array<PageProjectprojectsUnionWhereUniqueInput>>;
  /** Update multiple PageProjectprojectsUnion component instances */
  update?: InputMaybe<Array<PageProjectprojectsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageProjectprojectsUnion component instances */
  upsert?: InputMaybe<Array<PageProjectprojectsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageProjectprojectsUnionUpdateManyWithNestedWhereInput = {
  Project?: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type PageProjectprojectsUnionUpdateOneInlineInput = {
  /** Create and connect one PageProjectprojectsUnion document */
  create?: InputMaybe<PageProjectprojectsUnionCreateInput>;
  /** Delete currently connected PageProjectprojectsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageProjectprojectsUnion document */
  update?: InputMaybe<PageProjectprojectsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageProjectprojectsUnion document */
  upsert?: InputMaybe<PageProjectprojectsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PageProjectprojectsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PageProjectprojectsUnionUpdateWithNestedWhereUniqueInput = {
  Project?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type PageProjectprojectsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PageProjectprojectsUnionUpsertWithNestedWhereUniqueInput = {
  Project?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type PageProjectprojectsUnionWhereInput = {
  Project?: InputMaybe<ProjectWhereInput>;
};

export type PageProjectprojectsUnionWhereUniqueInput = {
  Project?: InputMaybe<ProjectWhereUniqueInput>;
};

export type PageSkill = {
  __typename?: 'PageSkill';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  skills: Array<PageSkillskillsUnion>;
  /** System stage field */
  stage: Stage;
};


export type PageSkillSkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageSkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageSkillWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageSkillConnection = {
  __typename?: 'PageSkillConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageSkillEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageSkillCreateInput = {
  skills?: InputMaybe<PageSkillskillsUnionCreateManyInlineInput>;
};

export type PageSkillCreateManyInlineInput = {
  /** Create and connect multiple existing PageSkill documents */
  create?: InputMaybe<Array<PageSkillCreateInput>>;
};

export type PageSkillCreateOneInlineInput = {
  /** Create and connect one PageSkill document */
  create?: InputMaybe<PageSkillCreateInput>;
};

export type PageSkillCreateWithPositionInput = {
  /** Document to create */
  data: PageSkillCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PageSkillEdge = {
  __typename?: 'PageSkillEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageSkill;
};

/** Identifies documents */
export type PageSkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageSkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageSkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageSkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  skills_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  skills_some?: InputMaybe<PageSkillskillsUnionWhereInput>;
};

export enum PageSkillOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PageSkillParent = PageContent;

export type PageSkillParentConnectInput = {
  PageContent?: InputMaybe<PageContentConnectInput>;
};

export type PageSkillParentCreateInput = {
  PageContent?: InputMaybe<PageContentCreateInput>;
};

export type PageSkillParentCreateManyInlineInput = {
  /** Connect multiple existing PageSkillParent documents */
  connect?: InputMaybe<Array<PageSkillParentWhereUniqueInput>>;
  /** Create and connect multiple existing PageSkillParent documents */
  create?: InputMaybe<Array<PageSkillParentCreateInput>>;
};

export type PageSkillParentCreateOneInlineInput = {
  /** Connect one existing PageSkillParent document */
  connect?: InputMaybe<PageSkillParentWhereUniqueInput>;
  /** Create and connect one PageSkillParent document */
  create?: InputMaybe<PageSkillParentCreateInput>;
};

export type PageSkillParentUpdateInput = {
  PageContent?: InputMaybe<PageContentUpdateInput>;
};

export type PageSkillParentUpdateManyInlineInput = {
  /** Connect multiple existing PageSkillParent documents */
  connect?: InputMaybe<Array<PageSkillParentConnectInput>>;
  /** Create and connect multiple PageSkillParent documents */
  create?: InputMaybe<Array<PageSkillParentCreateInput>>;
  /** Delete multiple PageSkillParent documents */
  delete?: InputMaybe<Array<PageSkillParentWhereUniqueInput>>;
  /** Disconnect multiple PageSkillParent documents */
  disconnect?: InputMaybe<Array<PageSkillParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageSkillParent documents */
  set?: InputMaybe<Array<PageSkillParentWhereUniqueInput>>;
  /** Update multiple PageSkillParent documents */
  update?: InputMaybe<Array<PageSkillParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageSkillParent documents */
  upsert?: InputMaybe<Array<PageSkillParentUpsertWithNestedWhereUniqueInput>>;
};

export type PageSkillParentUpdateManyWithNestedWhereInput = {
  PageContent?: InputMaybe<PageContentUpdateManyWithNestedWhereInput>;
};

export type PageSkillParentUpdateOneInlineInput = {
  /** Connect existing PageSkillParent document */
  connect?: InputMaybe<PageSkillParentWhereUniqueInput>;
  /** Create and connect one PageSkillParent document */
  create?: InputMaybe<PageSkillParentCreateInput>;
  /** Delete currently connected PageSkillParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageSkillParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageSkillParent document */
  update?: InputMaybe<PageSkillParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSkillParent document */
  upsert?: InputMaybe<PageSkillParentUpsertWithNestedWhereUniqueInput>;
};

export type PageSkillParentUpdateWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpdateWithNestedWhereUniqueInput>;
};

export type PageSkillParentUpsertWithNestedWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentUpsertWithNestedWhereUniqueInput>;
};

export type PageSkillParentWhereInput = {
  PageContent?: InputMaybe<PageContentWhereInput>;
};

export type PageSkillParentWhereUniqueInput = {
  PageContent?: InputMaybe<PageContentWhereUniqueInput>;
};

export type PageSkillUpdateInput = {
  skills?: InputMaybe<PageSkillskillsUnionUpdateManyInlineInput>;
};

export type PageSkillUpdateManyInlineInput = {
  /** Create and connect multiple PageSkill component instances */
  create?: InputMaybe<Array<PageSkillCreateWithPositionInput>>;
  /** Delete multiple PageSkill documents */
  delete?: InputMaybe<Array<PageSkillWhereUniqueInput>>;
  /** Update multiple PageSkill component instances */
  update?: InputMaybe<Array<PageSkillUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageSkill component instances */
  upsert?: InputMaybe<Array<PageSkillUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageSkillUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type PageSkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageSkillUpdateManyInput;
  /** Document search */
  where: PageSkillWhereInput;
};

export type PageSkillUpdateOneInlineInput = {
  /** Create and connect one PageSkill document */
  create?: InputMaybe<PageSkillCreateInput>;
  /** Delete currently connected PageSkill document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageSkill document */
  update?: InputMaybe<PageSkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSkill document */
  upsert?: InputMaybe<PageSkillUpsertWithNestedWhereUniqueInput>;
};

export type PageSkillUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PageSkillUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageSkillWhereUniqueInput;
};

export type PageSkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageSkillUpdateInput;
  /** Unique document search */
  where: PageSkillWhereUniqueInput;
};

export type PageSkillUpsertInput = {
  /** Create document if it didn't exist */
  create: PageSkillCreateInput;
  /** Update document if it exists */
  update: PageSkillUpdateInput;
};

export type PageSkillUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PageSkillUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageSkillWhereUniqueInput;
};

export type PageSkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageSkillUpsertInput;
  /** Unique document search */
  where: PageSkillWhereUniqueInput;
};

/** Identifies documents */
export type PageSkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageSkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageSkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageSkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  skills_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  skills_some?: InputMaybe<PageSkillskillsUnionWhereInput>;
};

/** References PageSkill record uniquely */
export type PageSkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PageSkillskillsUnion = Skill;

export type PageSkillskillsUnionConnectInput = {
  Skill?: InputMaybe<SkillConnectInput>;
};

export type PageSkillskillsUnionCreateInput = {
  Skill?: InputMaybe<SkillCreateInput>;
};

export type PageSkillskillsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PageSkillskillsUnion documents */
  create?: InputMaybe<Array<PageSkillskillsUnionCreateInput>>;
};

export type PageSkillskillsUnionCreateOneInlineInput = {
  /** Create and connect one PageSkillskillsUnion document */
  create?: InputMaybe<PageSkillskillsUnionCreateInput>;
};

export type PageSkillskillsUnionCreateWithPositionInput = {
  Skill?: InputMaybe<SkillCreateWithPositionInput>;
};

export type PageSkillskillsUnionUpdateInput = {
  Skill?: InputMaybe<SkillUpdateInput>;
};

export type PageSkillskillsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PageSkillskillsUnion component instances */
  create?: InputMaybe<Array<PageSkillskillsUnionCreateWithPositionInput>>;
  /** Delete multiple PageSkillskillsUnion documents */
  delete?: InputMaybe<Array<PageSkillskillsUnionWhereUniqueInput>>;
  /** Update multiple PageSkillskillsUnion component instances */
  update?: InputMaybe<Array<PageSkillskillsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageSkillskillsUnion component instances */
  upsert?: InputMaybe<Array<PageSkillskillsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageSkillskillsUnionUpdateManyWithNestedWhereInput = {
  Skill?: InputMaybe<SkillUpdateManyWithNestedWhereInput>;
};

export type PageSkillskillsUnionUpdateOneInlineInput = {
  /** Create and connect one PageSkillskillsUnion document */
  create?: InputMaybe<PageSkillskillsUnionCreateInput>;
  /** Delete currently connected PageSkillskillsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageSkillskillsUnion document */
  update?: InputMaybe<PageSkillskillsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSkillskillsUnion document */
  upsert?: InputMaybe<PageSkillskillsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PageSkillskillsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Skill?: InputMaybe<SkillUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PageSkillskillsUnionUpdateWithNestedWhereUniqueInput = {
  Skill?: InputMaybe<SkillUpdateWithNestedWhereUniqueInput>;
};

export type PageSkillskillsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Skill?: InputMaybe<SkillUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PageSkillskillsUnionUpsertWithNestedWhereUniqueInput = {
  Skill?: InputMaybe<SkillUpsertWithNestedWhereUniqueInput>;
};

export type PageSkillskillsUnionWhereInput = {
  Skill?: InputMaybe<SkillWhereInput>;
};

export type PageSkillskillsUnionWhereUniqueInput = {
  Skill?: InputMaybe<SkillWhereUniqueInput>;
};

export type Project = {
  __typename?: 'Project';
  github?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  projectImage?: Maybe<Asset>;
  projectShowButtons?: Maybe<Scalars['Boolean']['output']>;
  projectTags?: Maybe<Scalars['String']['output']>;
  projectTitle?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  website?: Maybe<Scalars['String']['output']>;
};


export type ProjectProjectImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  github?: InputMaybe<Scalars['String']['input']>;
  projectImage?: InputMaybe<AssetCreateOneInlineInput>;
  projectShowButtons?: InputMaybe<Scalars['Boolean']['input']>;
  projectTags?: InputMaybe<Scalars['String']['input']>;
  projectTitle?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

export type ProjectCreateWithPositionInput = {
  /** Document to create */
  data: ProjectCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  projectImage?: InputMaybe<AssetWhereInput>;
  projectShowButtons?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  projectShowButtons_not?: InputMaybe<Scalars['Boolean']['input']>;
  projectTags?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectTags_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectTags_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectTags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectTags_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectTags_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectTags_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectTags_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectTags_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectTags_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  website_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  website_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  website_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  website_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  website_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectOrderByInput {
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProjectShowButtonsAsc = 'projectShowButtons_ASC',
  ProjectShowButtonsDesc = 'projectShowButtons_DESC',
  ProjectTagsAsc = 'projectTags_ASC',
  ProjectTagsDesc = 'projectTags_DESC',
  ProjectTitleAsc = 'projectTitle_ASC',
  ProjectTitleDesc = 'projectTitle_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type ProjectParent = PageProject;

export type ProjectParentConnectInput = {
  PageProject?: InputMaybe<PageProjectConnectInput>;
};

export type ProjectParentCreateInput = {
  PageProject?: InputMaybe<PageProjectCreateInput>;
};

export type ProjectParentCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectParent documents */
  create?: InputMaybe<Array<ProjectParentCreateInput>>;
};

export type ProjectParentCreateOneInlineInput = {
  /** Create and connect one ProjectParent document */
  create?: InputMaybe<ProjectParentCreateInput>;
};

export type ProjectParentCreateWithPositionInput = {
  PageProject?: InputMaybe<PageProjectCreateWithPositionInput>;
};

export type ProjectParentUpdateInput = {
  PageProject?: InputMaybe<PageProjectUpdateInput>;
};

export type ProjectParentUpdateManyInlineInput = {
  /** Create and connect multiple ProjectParent component instances */
  create?: InputMaybe<Array<ProjectParentCreateWithPositionInput>>;
  /** Delete multiple ProjectParent documents */
  delete?: InputMaybe<Array<ProjectParentWhereUniqueInput>>;
  /** Update multiple ProjectParent component instances */
  update?: InputMaybe<Array<ProjectParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProjectParent component instances */
  upsert?: InputMaybe<Array<ProjectParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProjectParentUpdateManyWithNestedWhereInput = {
  PageProject?: InputMaybe<PageProjectUpdateManyWithNestedWhereInput>;
};

export type ProjectParentUpdateOneInlineInput = {
  /** Create and connect one ProjectParent document */
  create?: InputMaybe<ProjectParentCreateInput>;
  /** Delete currently connected ProjectParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProjectParent document */
  update?: InputMaybe<ProjectParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectParent document */
  upsert?: InputMaybe<ProjectParentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectParentUpdateWithNestedWhereUniqueAndPositionInput = {
  PageProject?: InputMaybe<PageProjectUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectParentUpdateWithNestedWhereUniqueInput = {
  PageProject?: InputMaybe<PageProjectUpdateWithNestedWhereUniqueInput>;
};

export type ProjectParentUpsertWithNestedWhereUniqueAndPositionInput = {
  PageProject?: InputMaybe<PageProjectUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ProjectParentUpsertWithNestedWhereUniqueInput = {
  PageProject?: InputMaybe<PageProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectParentWhereInput = {
  PageProject?: InputMaybe<PageProjectWhereInput>;
};

export type ProjectParentWhereUniqueInput = {
  PageProject?: InputMaybe<PageProjectWhereUniqueInput>;
};

export type ProjectUpdateInput = {
  github?: InputMaybe<Scalars['String']['input']>;
  projectImage?: InputMaybe<AssetUpdateOneInlineInput>;
  projectShowButtons?: InputMaybe<Scalars['Boolean']['input']>;
  projectTags?: InputMaybe<Scalars['String']['input']>;
  projectTitle?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project component instances */
  create?: InputMaybe<Array<ProjectCreateWithPositionInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project component instances */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Project component instances */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProjectUpdateManyInput = {
  github?: InputMaybe<Scalars['String']['input']>;
  projectShowButtons?: InputMaybe<Scalars['Boolean']['input']>;
  projectTags?: InputMaybe<Scalars['String']['input']>;
  projectTitle?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProjectUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProjectUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  projectImage?: InputMaybe<AssetWhereInput>;
  projectShowButtons?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  projectShowButtons_not?: InputMaybe<Scalars['Boolean']['input']>;
  projectTags?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectTags_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectTags_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectTags_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectTags_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectTags_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectTags_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectTags_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectTags_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectTags_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  projectTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  projectTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  projectTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  projectTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  projectTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  projectTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  projectTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  projectTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  website_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  website_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  website_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  website_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  website_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single pageContent */
  pageContent?: Maybe<PageContent>;
  /** Retrieve document version */
  pageContentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pageContents */
  pageContents: Array<PageContent>;
  /** Retrieve multiple pageContents using the Relay connection interface */
  pageContentsConnection: PageContentConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageContentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageContentWhereUniqueInput;
};


export type QueryPageContentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPageContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageContentWhereInput>;
};


export type QueryPageContentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageContentWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | PageContent;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Skill = {
  __typename?: 'Skill';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pageSkillSubTitle?: Maybe<Scalars['String']['output']>;
  skillTitle?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
};

export type SkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SkillWhereUniqueInput;
};

/** A connection to a list of items. */
export type SkillConnection = {
  __typename?: 'SkillConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SkillEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SkillCreateInput = {
  pageSkillSubTitle?: InputMaybe<Scalars['String']['input']>;
  skillTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SkillCreateManyInlineInput = {
  /** Create and connect multiple existing Skill documents */
  create?: InputMaybe<Array<SkillCreateInput>>;
};

export type SkillCreateOneInlineInput = {
  /** Create and connect one Skill document */
  create?: InputMaybe<SkillCreateInput>;
};

export type SkillCreateWithPositionInput = {
  /** Document to create */
  data: SkillCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SkillEdge = {
  __typename?: 'SkillEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Skill;
};

/** Identifies documents */
export type SkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageSkillSubTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageSkillSubTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageSkillSubTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageSkillSubTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageSkillSubTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageSkillSubTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageSkillSubTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageSkillSubTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageSkillSubTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageSkillSubTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  skillTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  skillTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  skillTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  skillTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  skillTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  skillTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  skillTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  skillTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  skillTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  skillTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SkillOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageSkillSubTitleAsc = 'pageSkillSubTitle_ASC',
  PageSkillSubTitleDesc = 'pageSkillSubTitle_DESC',
  SkillTitleAsc = 'skillTitle_ASC',
  SkillTitleDesc = 'skillTitle_DESC'
}

export type SkillParent = PageSkill;

export type SkillParentConnectInput = {
  PageSkill?: InputMaybe<PageSkillConnectInput>;
};

export type SkillParentCreateInput = {
  PageSkill?: InputMaybe<PageSkillCreateInput>;
};

export type SkillParentCreateManyInlineInput = {
  /** Create and connect multiple existing SkillParent documents */
  create?: InputMaybe<Array<SkillParentCreateInput>>;
};

export type SkillParentCreateOneInlineInput = {
  /** Create and connect one SkillParent document */
  create?: InputMaybe<SkillParentCreateInput>;
};

export type SkillParentCreateWithPositionInput = {
  PageSkill?: InputMaybe<PageSkillCreateWithPositionInput>;
};

export type SkillParentUpdateInput = {
  PageSkill?: InputMaybe<PageSkillUpdateInput>;
};

export type SkillParentUpdateManyInlineInput = {
  /** Create and connect multiple SkillParent component instances */
  create?: InputMaybe<Array<SkillParentCreateWithPositionInput>>;
  /** Delete multiple SkillParent documents */
  delete?: InputMaybe<Array<SkillParentWhereUniqueInput>>;
  /** Update multiple SkillParent component instances */
  update?: InputMaybe<Array<SkillParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SkillParent component instances */
  upsert?: InputMaybe<Array<SkillParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SkillParentUpdateManyWithNestedWhereInput = {
  PageSkill?: InputMaybe<PageSkillUpdateManyWithNestedWhereInput>;
};

export type SkillParentUpdateOneInlineInput = {
  /** Create and connect one SkillParent document */
  create?: InputMaybe<SkillParentCreateInput>;
  /** Delete currently connected SkillParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SkillParent document */
  update?: InputMaybe<SkillParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SkillParent document */
  upsert?: InputMaybe<SkillParentUpsertWithNestedWhereUniqueInput>;
};

export type SkillParentUpdateWithNestedWhereUniqueAndPositionInput = {
  PageSkill?: InputMaybe<PageSkillUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type SkillParentUpdateWithNestedWhereUniqueInput = {
  PageSkill?: InputMaybe<PageSkillUpdateWithNestedWhereUniqueInput>;
};

export type SkillParentUpsertWithNestedWhereUniqueAndPositionInput = {
  PageSkill?: InputMaybe<PageSkillUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type SkillParentUpsertWithNestedWhereUniqueInput = {
  PageSkill?: InputMaybe<PageSkillUpsertWithNestedWhereUniqueInput>;
};

export type SkillParentWhereInput = {
  PageSkill?: InputMaybe<PageSkillWhereInput>;
};

export type SkillParentWhereUniqueInput = {
  PageSkill?: InputMaybe<PageSkillWhereUniqueInput>;
};

export type SkillUpdateInput = {
  pageSkillSubTitle?: InputMaybe<Scalars['String']['input']>;
  skillTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SkillUpdateManyInlineInput = {
  /** Create and connect multiple Skill component instances */
  create?: InputMaybe<Array<SkillCreateWithPositionInput>>;
  /** Delete multiple Skill documents */
  delete?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Update multiple Skill component instances */
  update?: InputMaybe<Array<SkillUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Skill component instances */
  upsert?: InputMaybe<Array<SkillUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SkillUpdateManyInput = {
  pageSkillSubTitle?: InputMaybe<Scalars['String']['input']>;
  skillTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SkillUpdateManyInput;
  /** Document search */
  where: SkillWhereInput;
};

export type SkillUpdateOneInlineInput = {
  /** Create and connect one Skill document */
  create?: InputMaybe<SkillCreateInput>;
  /** Delete currently connected Skill document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Skill document */
  update?: InputMaybe<SkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Skill document */
  upsert?: InputMaybe<SkillUpsertWithNestedWhereUniqueInput>;
};

export type SkillUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SkillUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SkillWhereUniqueInput;
};

export type SkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SkillUpdateInput;
  /** Unique document search */
  where: SkillWhereUniqueInput;
};

export type SkillUpsertInput = {
  /** Create document if it didn't exist */
  create: SkillCreateInput;
  /** Update document if it exists */
  update: SkillUpdateInput;
};

export type SkillUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SkillUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SkillWhereUniqueInput;
};

export type SkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SkillUpsertInput;
  /** Unique document search */
  where: SkillWhereUniqueInput;
};

/** Identifies documents */
export type SkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageSkillSubTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageSkillSubTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageSkillSubTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageSkillSubTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageSkillSubTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageSkillSubTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageSkillSubTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageSkillSubTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageSkillSubTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageSkillSubTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  skillTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  skillTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  skillTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  skillTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  skillTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  skillTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  skillTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  skillTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  skillTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  skillTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Skill record uniquely */
export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', pageContent?: { __typename?: 'PageContent', pageContentHome: Array<{ __typename?: 'PageContact', contactText?: string | null, contactTitle?: string | null } | { __typename?: 'PageHero', heroHeading?: string | null, heroText?: string | null, heroImage?: { __typename?: 'Asset', fileName: string, url: string } | null } | { __typename?: 'PageProject' } | { __typename?: 'PageSkill', skills: Array<{ __typename?: 'Skill', pageSkillSubTitle?: string | null, skillTitle?: string | null }> }> } | null };


export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"clkwsyp6d93ip0auv8sc9obo8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageContentHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageHero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageSkill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Skill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSkillSubTitle"}},{"kind":"Field","name":{"kind":"Name","value":"skillTitle"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageContact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactText"}},{"kind":"Field","name":{"kind":"Name","value":"contactTitle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;