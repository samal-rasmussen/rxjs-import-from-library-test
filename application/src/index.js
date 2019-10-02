import {from, Observable, of} from 'rxjs';
import {switchMap, take,} from 'rxjs/operators';
import {test$} from '../../library/dist';

const testUncompiled$ = () => {
	return new Observable((observer) => {
		const intId = setInterval(
			() => {
				console.log('interval tick ' + intId);
				observer.next('banana ' + intId);
			},
			1000
		);
	
		return () => {
			console.log('testUncompiled$ teardown');
			clearInterval(intId);
		};
	});
};

// 1. Works
of(undefined).pipe(
	switchMap(() => from(test$())),
	take(1),
)
.subscribe(getObserver('compiled over from'));

// 2. Doesn't work
of(undefined).pipe(
	switchMap(() => test$()),
	take(1),
)
.subscribe(getObserver('compiled direct'));

// 3. Works
test$().pipe(
	take(1),
)
.subscribe(getObserver('compiled direct no pipe and switchMap'));

// 4. Works
of(undefined).pipe(
	switchMap(() => from(testUncompiled$())),
	take(1),
)
.subscribe(getObserver('uncompiled over from'));

// 5. Works
of(undefined).pipe(
	switchMap(() => testUncompiled$()),
	take(1),
)
.subscribe(getObserver('uncompiled direct'));

function getObserver(id) {
	return {
		next: (next) => {
			console.log(`${id} next: ${next}`);
		},
		error: (error) => {
			console.error(`${id} error: ${error}`);
		},
		complete: () => {
			console.log(`${id} complete`);
		}
	}
}
