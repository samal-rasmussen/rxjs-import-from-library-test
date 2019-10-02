# rxjs-import-from-library-test

Run these commands

    cd library
    npm install
    npm run publish
    cd ../application
    npm install
    npm run dev

Expected console output:

    application subscription1 next banana
    test$ unsubscribe
    application subscription2 next banana
    test$ unsubscribe

Actual console output:

    application subscription1 next banana
    test$ unsubscribe
    application subscription2 next banana

The first subscription unsubscribes because we wrap the text$ observalbe in a from().

The second subscription just doesn't unsubscribe.
