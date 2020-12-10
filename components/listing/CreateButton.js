import React from 'react'
import Link from 'next/link'
import styles from './CreateButton.module.css'

function CreateButton({ children, cible }) {
    return (
        <Link href={cible} ><a className={styles.addBtn}>{children}</a></Link>
    )
}

export default CreateButton
