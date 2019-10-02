import {
	Observable,
	Observer,
} from 'rxjs';

export function test$(): Observable<string> {
	return Observable.create((observer: Observer<string>) => {
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