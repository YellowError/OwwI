import Link from 'next/link'
import React from 'react'

function AddButton({children, target, styles, queryParams}) {
    return (
    <Link href={target}><a className={styles}>{children}</a></Link>
    )
}

export default AddButton
