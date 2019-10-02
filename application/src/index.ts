import {
	from,
	Subscription,
	of,
} from 'rxjs';
import {
	switchMap,
} from 'rxjs/operators';
import {
	test$,
} from '../../library/dist';

const subscription1: Subscription = of(undefined).pipe(
	switchMap(() => {
		return from(test$());
	}),
)
.subscribe(
	(val) => {
		console.log('application subscription1 next', val);
		subscription1.unsubscribe();
	},
	(error) => {
		console.error('application subscription1 error', error);
	},
	() => {
		console.log('application subscription1 complete');
	}
);

const subscription2: Subscription = of(undefined).pipe(
	switchMap(() => {
		return test$();
	}),
)
.subscribe(
	(val) => {
		console.log('application subscription2 next', val);
		subscription2.unsubscribe();
	},
	(error) => {
		console.error('application subscription2 error', error);
	},
	() => {
		console.log('application subscription2 complete');
	}
);
