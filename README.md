# Firefox WorkerBlobBug Repro

Reproduces a bug that crashes the tab in Firefox.
When an object url is sent to a worker, then fetched as a blob, it crashes the tab.
Note that using `XMLHttpRequest` with `responseType = 'blob'` works fine.

Discovered working on https://github.com/NotWoods/color-breakdown \
Was also discovered here: https://github.com/pqina/jquery-filepond/issues/6
