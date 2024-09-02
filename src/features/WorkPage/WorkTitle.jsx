import styles from '../WorkPage/WorkTitle.module.scss'

function workTitle({title}) {
    return (
        <div>
            <h1 className={styles.workTitle}>
					<span className={styles.workTitleIcon}>
						<i className="fa-regular fa-circle"></i>
					</span>
					{title}
				</h1>
        </div>
    )
}

export default workTitle
