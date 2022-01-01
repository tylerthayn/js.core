require('../../')

let fn = function () {
	log(arguments)
}

fn.Sync.ToPromise()('tyler').then(() => {console.log('done')})
fn.Sync.ToAsync()('tyler', () => {console.log('done2')})




