import {Observable,} from 'rxjs';

export const test$ = () => {
	return new Observable((observer) => {
		const intId = setInterval(
			() => {
				console.log('interval tick '+intId);
				observer.next('banana '+intId);
			},
			1000
		);
	
		return () => {
			console.log('test$ teardown');
			clearInterval(intId);
		};
	});
};
