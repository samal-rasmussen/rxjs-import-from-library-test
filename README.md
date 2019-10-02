# rxjs-import-from-library-test

Run these commands

    cd library
    npm install
    npm run publish
    cd ../application
    npm install
    npm run dev

Expected console output:

	interval tick 4
	compiled over from next: banana 4
	compiled over from complete
	test$ teardown
	interval tick 5
	compiled direct next: banana 5
	compiled direct complete
	test$ teardown
	interval tick 6
	compiled direct no pipe and switchMap next: banana 6
	compiled direct no pipe and switchMap complete
	test$ teardown
	interval tick 7
	uncompiled over from next: banana 7
	uncompiled over from complete
	testUncompiled$ teardown
	interval tick 8
	uncompiled direct next: banana 8
	uncompiled direct complete
	testUncompiled$ teardown

*Notice that there are 5 teardowns.*

Actual console output:

	interval tick 4
	compiled over from next: banana 4
	compiled over from complete
	test$ teardown
	interval tick 5
	compiled direct next: banana 5
	compiled direct complete
	interval tick 6
	compiled direct no pipe and switchMap next: banana 6
	compiled direct no pipe and switchMap complete
	test$ teardown
	interval tick 7
	uncompiled over from next: banana 7
	uncompiled over from complete
	testUncompiled$ teardown
	interval tick 8
	uncompiled direct next: banana 8
	uncompiled direct complete
	testUncompiled$ teardown
	interval tick 5
	interval tick 5
	interval tick 5
	...

*Notice that there are only 4 teardowns and interval tick 5 continues.*

The first subscription to the compiles test$ unsubscribes because we wrap the text$ observalbe in a from(). The third does because we don't use pipe or switchMap.

The second subscription just doesn't unsubscribe.
