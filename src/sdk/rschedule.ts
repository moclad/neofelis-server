// As suggested in the docs, this is the rSchedule
// setup file. Rather than importing from the
// rSchedule module directly, you import from this
// file. For more information see:
// https://gitlab.com/john.carroll.p/rschedule/-/tree/v1/docs#setup

import '@rschedule/standard-date-adapter/setup';

// Other date adapters also exist, though
// you can only import one date adapter in a project.
// For example:
//   import '@rschedule/moment-date-adapter/setup';
//   import '@rschedule/moment-tz-date-adapter/setup';
//   import '@rschedule/luxon-date-adapter/v1/setup';
//   import '@rschedule/joda-date-adapter/setup';

export * from '@rschedule/standard-date-adapter';
export * from '@rschedule/core';
export * from '@rschedule/core/generators';
