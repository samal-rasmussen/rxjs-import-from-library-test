import {
	Observable,
	Observer,
} from 'rxjs';

export function test$() {
	return Observable.create((observer) => {
		setTimeout(
			() => {
				observer.next('banana');
			},
			0,
		);

		return () => {
			console.log('test$ unsubscribe');
		};
	});
}