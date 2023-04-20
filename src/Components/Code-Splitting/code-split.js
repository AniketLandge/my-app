import React, {lazy, Suspense} from 'react'
// import Custom from './custom'

const Custom= lazy(()=> import('./custom'))
const CodeSplit = () => {
        return (
            <>
                <h1>Code Split</h1>
                <Suspense fallback={<div>Loading</div>}>
                <Custom/>

                </Suspense>
            </>
        )
}

export default CodeSplit