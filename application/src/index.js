import {from, Observable, of} from 'rxjs';
import {switchMap, take,} from 'rxjs/operators';
import {test$} from '../../library/dist';

const testUncompiled$ = new Observable((observer) => {
    const intId = setInterval(
        () => {
            console.log('interval tick ' + intId);
            observer.next('banana ' + intId);
        },
        1000
    );

    return () => {
        console.log('uncompiled teardown');
        clearInterval(intId);
    };
});



of(undefined).pipe(
	switchMap(() => from(test$)),
	take(1)
)
	.subscribe(getObserver('compiled over from'));

of(undefined).pipe(
	switchMap(() => test$),
	take(1)
)
	.subscribe(getObserver('compiled direct'));

of(undefined).pipe(
	switchMap(() => from(testUncompiled$)),
	take(1)
)
	.subscribe(getObserver('uncompiled over from'));

of(undefined).pipe(
	switchMap(() => testUncompiled$),
	take(1)
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
